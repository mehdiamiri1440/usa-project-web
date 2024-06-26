<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\services\v1\userService;
use App\Models\profile;
use App\Models\myuser;
use JWTAuth;
use App\Models\product;
use App\Http\Controllers\Notification\sms_controller;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use App\Traits\Token;

class user_controller extends Controller
{
    use Token;

    public $users;

    public function __construct(userService $service)
    {
        $this->users = $service;
    }

    public function login(Request $request)
    {
        $rules = array(
            'phone' => 'required',
            'password' => 'required',
            'client' => 'string',
            'plain' => 'boolean'
        );

        $this->validate($request, $rules);
        
        $is_redirected = false;

        if($request->has('plain') && $request->plain == false){
            $user = $this->users->get_user(null, $request->phone, $request->password);
            $is_redirected = true;
        }
        else{
            $user = $this->users->get_user(null, $request->phone, sha1($request->password));
        }


        if ($user) {
            if($user->is_blocked == true){
                $this->set_last_login_info($user,$request);

                return response()->json([
                    'status' => false,
                    'msg' => 'حساب کاربری شما مسدود شده است. برای پیگیری با پشتیبانی باسکول تماس بگیرید.'
                ],200);
            }

            $user_confirmed_profile_record_status = $this->does_user_have_confirmed_profile_record($user->id);

            $this->set_user_session($user);
            $this->set_last_login_info($user,$request);
            // $token_controller_object = new token_controller();

            $jwt_token = $this->generate_token(collect($user->only(['id','phone','password','user_name'])),Carbon::now()->addHours(2));
            // $jwt_token = JWTAuth::fromUser($user,['exp' => Carbon::now()->addDays(7)->timestamp]);

            return response()->json([
                'status' => true,
                'id' => $user->id,
                'is_buyer' => $user->is_buyer,
                'is_seller' => $user->is_seller,
                'redirected' => $is_redirected,
                'confirmed_profile_record' => $user_confirmed_profile_record_status,
                'msg' => 'Login successfull',
                'token' => $jwt_token,
             ], 200)
                 ->withCookie(cookie(
                        'user_phone', $user->phone, 46400 // 60 days in minutes
                    ))
                 ->withCookie(cookie(
                        'user_password', $user->password, 46400 // 60 days in minutes
                    ));
        } else {
            return response()->json([
            'status' => false,
             'msg' => 'شماره تلفن یا گذر واژه اشتباه است.',
         ], 200);
        }
    }

    protected function set_user_session($user_info)
    {
        $user_profile_record = profile::where('myuser_id', $user_info->id)
                ->select('profile_photo')
                ->get()
                ->last();

        session([
            'user_id' => $user_info->id,
            'is_buyer' => $user_info->is_buyer,
            'is_seller' => $user_info->is_seller,
            'user_name' => $user_info->user_name,
            'full_name' => $user_info->first_name.' '.$user_info->last_name,
            'city' => $user_info->city,
            'province' => $user_info->province,
            'profile_photo' => $user_profile_record ? $user_profile_record->profile_photo : null,
        ]);
    }

    protected function set_last_login_info($user,&$request)
    {
        $user_id = $user->id;

        if($request->has('client') && $request->client == 'mobile')
        {
            $last_login_client = 'mobile';
        }
        else {
            $last_login_client = 'web';
        }

        $now = Carbon::now();

        DB::table('myusers')
            ->where('id',$user_id)
            ->update([
                'last_login_client' => $last_login_client,
                'last_login_date'   => $now
            ]);
        
        if($request->has('device_id') && $request->has('client') && $request->client == 'mobile'){
            $device_id = $request->device_id;
        }
        else{
            $device_id = NULL;
        }

        if($user->is_seller == true){
            $role = 'SELLER';
        }
        else{
            $role = 'BUYER';
        }
        
        if($request->filled('user_agent') && $request->has('plain') && $request->plain == false){
            $user_agent = $request->user_agent;
        }
        else{
            $user_agent = $request->server('HTTP_USER_AGENT');
        }

        $meta_data = [
            'user_agent' => $user_agent,
            'ip' => $request->server('REMOTE_ADDR'),
            'device_id' => $device_id,
            'created_at' => $now,
            'updated_at' => $now,
            'myuser_id' => $user_id,
            'user_role' => $role
        ];

        DB::table('client_meta_datas')->insert($meta_data);

        if( ! is_null($device_id)){
            if($user->is_blocked == false){
                $this->block_user_if_already_has_been_blocked_on_this_device($device_id,$user_id);
            }
            else{
                $this->block_previous_accounts_on_this_device($device_id,$user_id);
            }
        }
    }

    protected function block_user_if_already_has_been_blocked_on_this_device($device_id,$user_id)
    {
        $already_blocked_users_count_on_this_device = DB::table('myusers')
                                                        ->join('client_meta_datas','client_meta_datas.myuser_id','myusers.id')
                                                        ->where('client_meta_datas.device_id',$device_id)
                                                        ->where('myusers.is_blocked',true)
                                                        ->get()
                                                        ->count();

        if($already_blocked_users_count_on_this_device > 0)
        {
            DB::table('myusers')->where('id',$user_id)
                                    ->update(['is_blocked' => true]);

            $now = Carbon::now();
            DB::table('admin_notes')->insert([
                'created_at' => $now,
                'updated_at' => $now,
                'note' => 'مسدود شده به دلیل مسدود بودن حساب های دیگر رو این دستگاه',
                'myuser_id' => $user_id
            ]);

            \Session::flush();
            \Session::save();
        }
                                                        
    }

    protected function block_previous_accounts_on_this_device($device_id,$user_id)
    {
        $blocking_user_ids = DB::table('client_meta_datas')
                                ->where('device_id',$device_id)
                                ->whereNotNull('device_id')
                                ->distinct('myuser_id')
                                ->pluck('myuser_id');

        DB::table('myusers')->whereIn('id',$blocking_user_ids)
                                ->update(['is_blocked' => true]);

        $now = Carbon::now();
        DB::table('admin_notes')->insert([
            'created_at' => $now,
            'updated_at' => $now,
            'note' => 'مسدود شده چون حساب کاربری جدیدتری که رو همین دستگاه ساخته شده مسدود شده است.',
            'myuser_id' => $user_id
        ]);
    }

    public function does_user_name_already_exists(Request $request)
    {
        $request->user_name = strtolower($request->user_name);

        $this->validate($request, [
           'user_name' => 'required|unique:myusers',
        ]);

        return response()->json([
           'status' => true,
        ], 200);
    }

    public function does_national_code_already_exists(Request $request)
    {
        $this->validate($request, [
           'national_code' => 'required|unique:myusers',
        ]);

        return response()->json([
            'status' => true,
        ], 200);
    }

    protected function does_user_have_confirmed_profile_record($user_id)
    {
        $profile_record = profile::where('myuser_id', $user_id)
                                        ->where('confirmed', true)
                                        ->select('id')
                                        ->get()
                                        ->last();

        if ($profile_record) {
            return true;
        } else {
            return false;
        }
    }

    public function initial_contract_confirmation_by_user()
    {
        $user_id = session('user_id');

        try {
            $user_record = myuser::find($user_id);

            $user_record->contract_confirmed = true;

            $user_record->save();

            return response()->json([
                'status' => true,
                'msg' => 'DONE',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'msg' => 'failed',
            ], 500);
        }
    }

    public function api_login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|string',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $credentials = $request->only('phone', 'password');
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }

    public function change_password(Request $request)
    {
        $this->validate($request, [
            'current_password' => 'required',
            'new_password' => 'required',
        ]);

        $user_name = session('user_name');

        $user_record = myuser::where('user_name', $user_name)
                                ->where('password', sha1($request->current_password))
                                ->get()
                                ->first();

        if ($user_record) {
//            DB::transaction(function() use($request){
            try {
                $user_record->password = sha1($request->new_password);
                $user_record->save();
            } catch (\Exception $e) {
                return response()->json([
                        'status' => false,
                        'msg' => 'Change password failed!',
                    ], 500);
            }

            return response()->json([
                        'status' => true,
                        'msg' => 'Password changed successfully!',
                    ], 200);
//            });
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'current password is not correct!',
            ], 200);
        }
    }

    public function reset_password(Request $request)
    {
        $rules = [
            'phone' => ['required', 'regex:/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u'],
            'verification_code' => 'required',
        ];

        $this->validate($request, $rules);

        if ((session('OTP_start') + 20 * 60) >= time() && session('sms_OTP') == $request->verification_code) {
            $new_generated_password = $this->generate_plain_text_password(8);

            $user_record = myuser::where('phone', $request->phone)
                                    ->get()
                                    ->first();
            try {
                $user_record->password = sha1($new_generated_password);
                $user_record->save();
                //send new password to user's phone
                //send SMS
                $sms_controller_object = new sms_controller();

                $sms_controller_object->send_new_generated_password($new_generated_password, $request->phone);

                return response()->json([
                    'status' => true,
                    'msg' => 'password has been sent',
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'status' => false,
                    'msg' => '',
                ], 500);
            }
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'verification time expired or code is incoorect.',
            ]);
        }
    }

    protected function generate_plain_text_password($password_len)
    {
        $result = '';
        $chars = 'abcdefghijkmnpqrstuvwxyz123456789';
        $charArray = str_split($chars);
        for ($i = 0; $i < $password_len; ++$i) {
            $randItem = array_rand($charArray);
            $result .= ''.$charArray[$randItem];
        }

        return $result;
    }

    //public method
    public function get_contract_sides_user_info(Request $request)
    {
        $this->validate($request, [
           'seller_user_id' => 'required|integer|min:1',
           'buyer_user_id' => 'required|integer|min:1',
        ]);

        $seller_user_id = $request->seller_user_id;
        $buyer_user_id = $request->buyer_user_id;

        $seller_user_record = myuser::find($seller_user_id);
        $buyer_user_record = myuser::find($buyer_user_id);

        if ($seller_user_record && $buyer_user_record) {
            $fields = ['first_name', 'last_name', 'national_code'];

            return response()->json([
                'status' => true,
                'seller_user_info' => $seller_user_record->only($fields),
                'buyer_user_info' => $buyer_user_record->only($fields),
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'user not found!',
            ], 404);
        }
    }

    //public method
    public function is_user_from_webview(Request $request)
    {
        $is_webview = $request->header('User-Agent') == 'webView';

        return response()->json([
            'status' => true,
            'is_webview' => $is_webview,
        ], 200);
    }

    protected function generate_jwt_token($request)
    {
        $credentials = $request->only('phone', 'password');
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return $token;
    }

    //public method
    public function get_seller_dashboard_required_data(Request $request)
    {
        $user_record = myuser::find(session('user_id'));
        $user_pakage_type = $user_record->active_pakage_type;

        $pakage_info = config("subscriptionPakage.type-$user_pakage_type");
        $confirmed_products_count = $this->get_user_confirmed_products_count();

        $active_pakage_type = $user_pakage_type;
        $reputation_score = $this->get_user_reputation_score();
        $max_buyAds_reply = $pakage_info['buyAd-reply-count'] + $user_record->extra_buyAd_reply_capacity;
        $is_valid = $pakage_info['validated-seller'];
        $max_allowed_product_register_count = $pakage_info['max-products'] + $user_record->extra_product_capacity - $confirmed_products_count;
        $is_verified = $user_record->is_verified;
        $access_to_golden_buyAds = $user_pakage_type > 0 ? true : false;

        return response()->json(compact([
            'active_pakage_type',
            'reputation_score',
            'max_buyAds_reply',
            'is_valid',
            'max_allowed_product_register_count',
            'confirmed_products_count',
            'is_verified',
            'access_to_golden_buyAds'
        ]), 200);
    }

    protected function get_user_reputation_score()
    {
        $user_id = session('user_id');

        $reputaion_controller_object = new reputation_controller();

        $score = $reputaion_controller_object->calculate_user_reputation_score($user_id);

        return $score;
    }

    protected function get_user_confirmed_products_count()
    {
        $user_id = session('user_id');

        $confirmed_products_count = product::where('myuser_id', $user_id)
                                            ->where('confirmed', true)
                                            ->get()
                                            ->count();

        return $confirmed_products_count;
    }

    public function switch_user_role(Request $request)
    {
        $user_id = session('user_id');

        $user = myuser::find($user_id);
        
        if(session('is_seller') == true){
            session([
                'is_seller' => false,
                'is_buyer' => true
            ]);

            $user->is_seller = false;
            $user->is_buyer = true;

            Cache::forget(md5('products-' . session('user_id')));
        }
        else if(session('is_buyer') == true){
            session([
                'is_buyer' => false,
                'is_seller' => true
            ]);

            $user->is_buyer  = false;
            $user->is_seller = true;

            Cache::forget(md5('products-' . session('user_id')));
        }

        $user->save();

        if($request->isMethod('get')){
            return redirect('/login');
        }
        else{
            return response()->json([
                'status' => true,
                'is_seller' => $user->is_seller
            ]);
        }
        
    }

    public function get_pricing_page_visit_status(Request $request)
    {
        $user_id = session('user_id');

        $user_record = DB::table('myusers')
                            ->where('id',$user_id)
                            ->get()
                            ->first();

        $received_contacts_count = DB::table('messages')
                                    ->where('receiver_id',$user_id)
                                    ->select('sender_id')
                                    ->distinct()
                                    ->get()
                                    ->count();

        if($request->cookie('pricingViewCount')){
            $pricing_view_count = $request->cookie('pricingViewCount');
        }
        else{
            $pricing_view_count = 0;
        }

        $show_off = $pricing_view_count + 1 == 2 ;

        if(  $user_record->active_pakage_type == 0 &&
             Carbon::now()->diffInDays($user_record->created_at) < 30 && 
             $received_contacts_count > 1)
        {
            return response()->json([
                'status' => true,
                'show' => true,
                'show_off' => $show_off
            ],200)->withCookie(cookie(
                'pricingViewCount', $pricing_view_count + 1, 46400 // 60 days in minutes
            ));
        }
        
        return response()->json([
            'status' => false,
            'show' => false,
            'show_off' => false
        ],200);
    }

    protected function refresh_token(Request $request)
    {
        try{
            $token = JWTAuth::getToken();
            $refreshed_token = JWTAuth::refresh($token);

            return response()->json([
                'status' => true,
                'token' => $refreshed_token
            ],200);
        }
        catch(\Exception $e){
            if($e instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException){
                return response()->json([
                    'status' => false,
                    'redirect_to_login' => true,
                    'msg' => $e->getMessage()
                ],401);
            }

            return response()->json([
                'status' => false,
                'redirect_to_login' => true,
                'msg' => 'unable to refresh the token'
            ],401);
            
        }
    }

    public function get_my_account_balance()
    {
        $user_id = session('user_id');

        $user_record = myuser::find($user_id);

        if($user_record){
            if($user_record->is_seller ==  true){
                return response()->json([
                    'status' => true,
                    'balance' => $user_record->wallet_balance
                ],200);
            }
            else{
                return response()->json([
                    'status' => false,
                    'msg' => 'Access Denied!'
                ],404);
            }
        }

        return response()->json([
            'status' => false,
            'msg' => 'unAuthorized Access!'
        ],404);
    }

    public function get_referral_credit_amount()
    {
        $user_id = session('user_id');
        $invited_users = [];

        $wallet_balance = DB::table('myusers')->where('id',$user_id)->first()->wallet_balance;

        $referred_users_ids = DB::table('referred_users')
                                    ->where('myuser_id',$user_id)
                                    ->pluck('referred_user_id');

        if(count($referred_users_ids) == 0 ){
            return response()->json([
                'status' => true,
                'credit' => 0,
                'invited_users' => $invited_users,
                'wallet_balance' => $wallet_balance
            ]);
        }

        $refered_users_payment_records = DB::table('payment_logs')
                            ->join('gateway_transactions','gateway_transactions.id','=','payment_logs.transaction_id')
                            ->where('gateway_transactions.status','SUCCEED')
                            ->whereNotNull('gateway_transactions.payment_date')
                            ->whereIn('payment_logs.myuser_id',$referred_users_ids)
                            ->pluck('gateway_transactions.price');

        $invited_users = $this->get_the_user_referred_users($user_id);

        if(count($refered_users_payment_records) > 0)
        {
            $credit = $refered_users_payment_records->sum() / config('subscriptionPakage.referred-credit-divider');

            return response()->json([
                'status' => true,
                'credit' => $credit,
                'invited_users' => $invited_users,
                'wallet_balance' => $wallet_balance
            ]);
        }


        return response()->json([
            'status' => true,
            'credit' => 0,
            'invited_users' => $invited_users,
            'wallet_balance' => $wallet_balance
        ]);
    }

    protected function get_the_user_referred_users($user_id)
    {
        $users = DB::table('myusers')
                        ->join('referred_users','referred_users.referred_user_id','=','myusers.id')
                        ->join('profiles',function($q){
                            $q->on('myusers.id','=','profiles.myuser_id')
                                ->whereRaw('profiles.id in (select MAX(p.id) from profiles as p join myusers as u on p.myuser_id = u.id and p.confirmed = true group by u.id)');
                        })
                        ->where('referred_users.myuser_id',$user_id)
                        ->where('profiles.confirmed',true)
                        ->select([
                            'myusers.id',
                            'myusers.first_name',
                            'myusers.last_name',
                            'myusers.user_name',
                            'profiles.profile_photo'
                        ])
                        ->orderBy('referred_users.created_at','desc')
                        ->get();
        

        foreach($users as $user)
        {
            $user->credit = $this->get_user_purchase_volume($user->id) / config('subscriptionPakage.referred-credit-divider');
        }

        return $users;
    }

    protected function get_user_purchase_volume($user_id)
    {
        $purchase_volume = DB::table('payment_logs')
                            ->join('gateway_transactions','gateway_transactions.id','=','payment_logs.transaction_id')
                            ->where('gateway_transactions.status','SUCCEED')
                            ->whereNotNull('gateway_transactions.payment_date')
                            ->where('payment_logs.myuser_id',$user_id)
                            ->pluck('gateway_transactions.price')
                            ->sum();

        return $purchase_volume;
    }

    public function store_photo(Request $request)
    {
        $this->validate($request,[
            'profile_image' => 'required|image',
            'text' => 'required'
        ]);

        if($request->hasFile('profile_image')) {
            
            //get filename with extension
            $filenamewithextension = $request->file('profile_image')->getClientOriginalName();

            //get filename without extension
            $filename = pathinfo($filenamewithextension, PATHINFO_FILENAME);

            //get file extension
            $extension = $request->file('profile_image')->getClientOriginalExtension();

            //filename to store
            $filenametostore = $filename.'_'.uniqid().'.'.$extension;

            //Upload File to external server
            $request->file('profile_image')->store('tests','sftp');
            // Storage::disk('sftp')->put($filenametostore, fopen($request->file('profile_image'), 'r+'));

            //Store $filenametostore in the database

            return response()->json([
                'status' => true,
                'msg' => 'file uploaded'
            ]);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'no file!'
            ]);
        }

    }

        
}
