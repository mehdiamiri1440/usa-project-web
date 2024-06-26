<?php

namespace App\Http\Controllers\Accounting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Carbon\Carbon;
use App\Models\myuser;
use App\Http\Controllers\Payment\wallet_controller;

class phone_number_controller extends Controller
{
    protected $phone_number_viewers_list = [
        'myusers.id',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.user_name',
        'phone_number_view_logs.is_free',
        'phone_number_view_logs.created_at'
    ];

    public function get_seller_phone_number(Request $request)
    {
        $this->validate($request,[
            'p_id' => 'required|integer|exists:products,id',
            's_id' => 'required|integer|exists:myusers,id',
            'item' => 'required|in:PRODUCT,PROFILE',
        ]);

        if($this->is_proper_time_for_phone_call() == false){
            return response()->json([
                'status' => false,
                'msg' => 'متاسفانه الان زمان مناسبی برای برقراری تماس تلفنی نیست. لطفا پیام ارسال کنید یا در ساعات روز تماس بگیرید.'
            ],404);
        }

        $viewer_user_id = session('user_id');

        $related_record = DB::table('myusers')
                                ->join('products','products.myuser_id','=','myusers.id')
                                ->whereNull('products.deleted_at')
                                ->where('myusers.id',$request->s_id)
                                ->where('myusers.id','<>',$viewer_user_id)
                                ->where('products.id',$request->p_id)
                                ->where('products.confirmed',true)
                                ->where(function($q) use($viewer_user_id,$request){
                                    return $q = $q->where('myusers.wallet_balance','>=',config('subscriptionPakage.phone-number.view-price'))
                                                    ->orWhere('myusers.active_pakage_type','>',0)
                                                    ->orWhereExists(function($q) use($viewer_user_id,$request){
                                                        $q->select(DB::raw(1))
                                                            ->from('leads')
                                                            ->whereRaw("leads.buyer_id = $viewer_user_id and leads.seller_id = {$request->s_id} and leads.related_product_id = {$request->p_id}");
                                                    });
                                })
                                ->whereIn('myusers.phone_view_permission',['1010','1110','1011','1111'])
                                ->select('myusers.*')
                                ->get()
                                ->first();

        if(is_null($related_record)){
            return response()->json([
                'status' => false,
                'msg' => 'متاسفانه شما به اطلاعات تماس این کاربر دسترسی ندارید.'
            ],404);
        }

        if($this->does_viewer_already_seen_the_user_phone_number($viewer_user_id,$related_record->id) === false){

            $viewer_daily_access_count = DB::table('phone_number_view_logs')
                                                ->where('viewer_id',$viewer_user_id)
                                                ->whereBetween('created_at',[Carbon::today(),Carbon::tomorrow()])
                                                ->groupBy('myuser_id')
                                                ->get()
                                                ->count();
    
            if($viewer_daily_access_count > config('subscriptionPakage.phone-number.max-daily-access-count')){
                return response()->json([
                    'status' => false,
                    'msg' => 'سقف تعداد روزانه دسترسی شما به شماره تماس کاربران پر شده است. لطفا پیام ارسال کنید.'
                ],404);
            }

            if($related_record->active_pakage_type == 0){
                $this->insert_phone_number_view_log_record($viewer_user_id,$request->s_id,'SELLER',$request->item,false);
                
                $wallet_controller_object = new wallet_controller();
                $unit_cost = config("subscriptionPakage.phone-number.view-price");
                $wallet_controller_object->insert_expendig_log_record('phone-number-view',$unit_cost,$request->s_id);
            }
            else{
                $this->insert_phone_number_view_log_record($viewer_user_id,$request->s_id,'SELLER',$request->item,true);
            }
        }
        else{
            $this->insert_phone_number_view_log_record($viewer_user_id,$request->s_id,'SELLER',$request->item,true);
        }

        return response()->json([
            'status' => true,
            'phone' => $related_record->phone,
        ],200);
    }

    protected function does_viewer_already_seen_the_user_phone_number($viewer_id,$user_id)
    {
        $log_record = DB::table('phone_number_view_logs')
                                ->where('viewer_id',$viewer_id)
                                ->where('myuser_id',$user_id)
                                ->get();

        if(count($log_record) > 0){
            return true;
        }

        return false;
    }

    protected function update_user_account_balance($user_id)
    {
        DB::table('myusers')
                    ->where('id', $user_id)
                    ->decrement('wallet_balance',config('subscriptionPakage.phone-number.view-price'));
    }

    protected function insert_phone_number_view_log_record($viewer_id,$user_id,$user_role,$item,$is_free = false)
    {
        $now = Carbon::now();

        $viewer_user_record = myuser::find($viewer_id);

        if($viewer_user_record->is_buyer == true){
            $viewer_role = 'BUYER';
        }
        else{
            $viewer_role = 'SELLER';
        }

        DB::table('phone_number_view_logs')
                    ->insert([
                        'created_at' => $now,
                        'updated_at' => $now,
                        'viewer_role' => $viewer_role,
                        'user_role' => $user_role,
                        'viewer_id' => $viewer_id,
                        'myuser_id' => $user_id,
                        'related_item' => $item,
                        'is_free' => $is_free
                    ]);
    }

    public function get_seller_phone_number_or_proper_message_for_interactive_chat($product_id,$seller_id,$viewer_user_id)
    {
        $item = 'PRODUCT';

        $access_deny_message = "فروشنده در سریعترین زمان ممکن به شما پاسخ خواهد داد. \n\n";
        $access_deny_message .= ":wlt=$product_id";

        if($this->is_proper_time_for_phone_call() == false){
            return $access_deny_message;
        }

        $related_record = DB::table('myusers')
                                ->join('products','products.myuser_id','=','myusers.id')
                                ->whereNull('products.deleted_at')
                                ->where('myusers.id',$seller_id)
                                ->where('myusers.id','<>',$viewer_user_id)
                                ->where('products.id',$product_id)
                                ->where('products.confirmed',true)
                                ->where(function($q) use($viewer_user_id,$seller_id,$product_id){
                                    return $q = $q->where('myusers.wallet_balance','>=',config('subscriptionPakage.phone-number.view-price'))
                                                    ->orWhere('myusers.active_pakage_type','>',0)
                                                    ->orWhereBetween('myusers.created_at',[Carbon::now()->subWeeks(1),Carbon::now()])
                                                    ->orWhereExists(function($q) use($viewer_user_id,$seller_id,$product_id){
                                                        $q->select(DB::raw(1))
                                                            ->from('leads')
                                                            ->whereRaw("leads.buyer_id = {$viewer_user_id} and leads.seller_id = {$seller_id} and leads.related_product_id = {$product_id}");
                                                    });
                                })
                                ->whereExists(function($q) use($viewer_user_id,$seller_id){
                                    $q->select(DB::raw(1))
                                        ->from('messages')
                                        ->whereRaw("messages.sender_id = {$seller_id} and messages.receiver_id = {$viewer_user_id} and messages.text like '%:p=%' ");
                                })
                                ->whereIn('myusers.phone_view_permission',['1010','1110','1011','1111'])
                                ->select('myusers.*')
                                ->get()
                                ->first();

        if(is_null($related_record)){
            return $access_deny_message;
        }

        if($this->does_viewer_already_seen_the_user_phone_number($viewer_user_id,$related_record->id) === false){

            $viewer_daily_access_count = DB::table('phone_number_view_logs')
                                                ->where('viewer_id',$viewer_user_id)
                                                ->whereBetween('created_at',[Carbon::today(),Carbon::tomorrow()])
                                                ->groupBy('myuser_id')
                                                ->get()
                                                ->count();
    
            if($viewer_daily_access_count > config('subscriptionPakage.phone-number.max-daily-access-count')){
                return $access_deny_message;
            }

            if($related_record->active_pakage_type == 0){
                $this->insert_phone_number_view_log_record($viewer_user_id,$seller_id,'SELLER',$item,false);
                
                $wallet_controller_object = new wallet_controller();
                $unit_cost = config("subscriptionPakage.phone-number.view-price");
                $wallet_controller_object->insert_expendig_log_record('phone-number-view',$unit_cost,$seller_id);
            }
            else{
                $this->insert_phone_number_view_log_record($viewer_user_id,$seller_id,'SELLER',$item,true);
            }
        }
        else{
            $this->insert_phone_number_view_log_record($viewer_user_id,$seller_id,'SELLER',$item,true);
        }
        
        return  $related_record->phone;
    }

    public function get_buyer_phone_number(Request $request)
    {
        $this->validate($request,[
            'ba_id' => 'required|integer|exists:buy_ads,id',
            'b_id' => 'required|integer|exists:myusers,id',
            'item' => 'required|in:BUYAD,PROFILE',
        ]);

        $viewr_user_record = myuser::find(session('user_id'));
        $buyAd_id = $request->ba_id;
        $buyer_id = $request->b_id;
        $user_id = session('user_id');

        if($viewr_user_record && $viewr_user_record->active_pakage_type == 0){
            return response()->json([
                'status' => false,
                'msg' => 'برای دسترسی به شماره تماس خریداران لطفا نوع عضویت خود را ارتقا دهید.'
            ],423);
        }

        if($this->is_proper_time_for_phone_call() == false){
            return response()->json([
                'status' => false,
                'msg' => 'متاسفانه الان زمان مناسبی برای برقراری تماس تلفنی نیست. لطفا پیام ارسال کنید یا در ساعات روز تماس بگیرید.'
            ],404);
        }

        $related_record = DB::table('myusers')
                                ->join('buy_ads','buy_ads.myuser_id','=','myusers.id')
                                ->whereNull('buy_ads.deleted_at')
                                ->where('myusers.id',$buyer_id)
                                ->where('myusers.id','<>',$user_id)
                                ->where('buy_ads.id',$buyAd_id)
                                // ->where('buy_ads.phone_view_capacity','>',0)
                                ->where('buy_ads.confirmed',true)
                                ->whereIn('myusers.phone_view_permission',['0101','1101','0111','1111'])
                                ->select('myusers.*')
                                ->get()
                                ->first();

        if(is_null($related_record)){
            return response()->json([
                'status' => false,
                'msg' => 'متاسفانه خریدار اجازه دسترسی به شماره تماس را نداده است.'
            ],404);
        }


        if($this->does_viewer_already_seen_the_user_phone_number(session('user_id'),$related_record->id) === false){

            $viewer_daily_access_count = DB::table('phone_number_view_logs')
                                                ->where('viewer_id',session('user_id'))
                                                ->whereBetween('created_at',[Carbon::today(),Carbon::tomorrow()])
                                                ->groupBy('myuser_id')
                                                ->get()
                                                ->count();
    
            if($viewer_daily_access_count > config('subscriptionPakage.phone-number.max-daily-access-count')){
                return response()->json([
                    'status' => false,
                    'msg' => 'سقف تعداد روزانه دسترسی شما به شماره تماس کاربران پر شده است. لطفا پیام ارسال کنید.'
                ],404);
            }  
        }

        $already_replied_to_the_buyAd = DB::table('buy_ad_reply_meta_datas')
                                                ->where([
                                                    ['buy_ad_id','=',$buyAd_id],
                                                    ['replier_id','=',$user_id],
                                                ])->get()->count();

        if($already_replied_to_the_buyAd == 0){
            $now = Carbon::now();

            DB::table('buy_ad_reply_meta_datas')->insert([
                'created_at' => $now,
                'updated_at' => $now,
                'replier_id' => $user_id,
                'buy_ad_id'  => $buyAd_id
            ]);

            DB::table('buy_ads')->where('id',$buyAd_id)->decrement('phone_view_capacity', 1);
        }

        $this->insert_phone_number_view_log_record(session('user_id'),$request->b_id,'BUYER',$request->item,true);
        

        return response()->json([
            'status' => true,
            'phone' => $related_record->phone
        ]);

    }

    public function set_my_phone_number_view_permissions(Request $request)
    {
        $this->validate($request,[
            'permission' => 'required|boolean'
        ]);

        $user_id = session('user_id');

        $user_record = myuser::find($user_id);

        if($user_record){
            if($user_record->is_seller){
                $temp = str_split($user_record->phone_view_permission);
                $temp[0] = (integer) $request->permission;
                $updated_permission = implode('',$temp);

                DB::table('myusers')
                        ->where('id',$user_record->id)
                        ->update([
                            'phone_view_permission' => $updated_permission
                        ]);

                return response()->json([
                    'status' => true,
                    'msg' => 'permission updated!'
                ],200);
            }
            else if($user_record->is_buyer){
                $temp = str_split($user_record->phone_view_permission);
                $temp[1] = (integer) $request->permission;
                $updated_permission = implode('',$temp);

                DB::table('myusers')
                        ->where('id',$user_record->id)
                        ->update([
                            'phone_view_permission' => $updated_permission
                        ]);

                return response()->json([
                    'status' => true,
                    'msg' => 'permission updated!'
                ],200);
            }

            return response()->json([
                'status' => false,
                'msg' => 'unable to change permission'
             ]);
        }

        return response()->json([
            'status' => false,
            'msg' => 'unable to change permission'
         ]);

    }

    public function get_my_phone_number_viewers_list()
    {
        $user_id = session('user_id');

        $result = DB::table('myusers')
                    ->join('phone_number_view_logs','myusers.id','=','phone_number_view_logs.viewer_id')
                    ->where('phone_number_view_logs.myuser_id',$user_id)
                    ->select($this->phone_number_viewers_list)
                    // ->groupBy('phone_number_view_logs.viewer_id')
                    ->orderBy('phone_number_view_logs.created_at','desc')
                    ->take(50)
                    ->get();

        return response()->json([
            'status' => true,
            'users' => $result
        ],200);
    }

    protected function is_user_allowed_to_reply_the_buyAd($sender_id,$buyAd_id)
    {
        $today = Carbon::today();
        $tomorrow = Carbon::tomorrow();

        $already_replied_to_the_buyAd = DB::table('buy_ad_reply_meta_datas')
                                                ->where([
                                                    ['buy_ad_id','=',$buyAd_id],
                                                    ['replier_id','=',$sender_id],
                                                ])->get()->count();

        if($already_replied_to_the_buyAd > 0){
            $buyAd_record = buyAd::find($buyAd_id);

            return $buyAd_record->myuser_id;
        }

        $user_reply_records = DB::table('buy_ad_reply_meta_datas')
                                    ->join('myusers','myusers.id','=','buy_ad_reply_meta_datas.replier_id')
                                    ->where('replier_id',$sender_id)
                                    ->whereBetween('buy_ad_reply_meta_datas.created_at',[$today, $tomorrow])
                                    ->get();
        
        $today_replies_count = $user_reply_records->count();
        if($today_replies_count > 0){
            $user_daily_reply_capacity = config("subscriptionPakage.type-{$user_reply_records->first()->active_pakage_type}.buyAd-reply-count");
            
            if($today_replies_count > $user_daily_reply_capacity + $user_reply_records->first()->extra_buyAd_reply_capacity){
                return false;
            }
        }

        $buyAd_record = buyAd::find($buyAd_id);

        if($already_replied_to_the_buyAd == true)
        {
            return $buyAd_record->myuser_id;
        }
        
        $now = Carbon::now();

        DB::table('buy_ad_reply_meta_datas')->insert([
            'created_at' => $now,
            'updated_at' => $now,
            'replier_id' => $sender_id,
            'buy_ad_id'  => $buyAd_record->id
        ]);

        DB::table('buy_ads')->where('id',$buyAd_record->id)->decrement('reply_capacity', 1);

        return $buyAd_record->myuser_id;
    }

    protected function is_proper_time_for_phone_call()
    {
        $now = Carbon::now();

        if(Carbon::parse($now)->format('H') < 5){
            return false;
        }

        return true;
    }

    public function get_user_contacts(Request $request)
    {
        $this->validate($request,[
            'contacts' => 'required|array',
        ]);

        $user_id = session('user_id');

        $contacts = $request->contacts;

        $contacts = $this->get_standard_format_contacts($contacts);

        $this->save_new_contacts_phone_numbers($contacts);

        $phone_numbers = [];
        foreach($contacts as $contact)
        {
            $phone_numbers[] = $contact['phone'];
        }

        $phone_number_saved_records = DB::table('contact_phones')
                                        ->whereIn('phone',$phone_numbers)
                                        ->get();

        $phone_number_records_ids = [];
        foreach($phone_number_saved_records as $phone_record)
        {
            $phone_number_records_ids[$phone_record->phone] = $phone_record->id;
        }

        $contact_records = [];

        $now = Carbon::now()->format('Y-m-d H:i:s');
        foreach($contacts as $contact)
        {
            $contact_id = $phone_number_records_ids[$contact['phone']];
        
            $tmp = [
                'created_at' => $now,
                'updated_at' => $now,
                'contact_name' => strip_tags($contact['full_name']),
                'has_thumbnail' => $contact['has_thumbnail'] == true ? 1 : 0,
                'contact_id' => $contact_id,
                'myuser_id' => $user_id,
            ];

            $contact_records[] = $tmp;
        }

        //insert on duplicate keys
        $this->save_the_user_contact_list_info($contact_records);

        return response()->json([
            'status' => true,
            'msg' => 'done!'
        ],201);
    }

    protected function convert_phone_number_to_standard_format($contact)
    {
        $phone_number = $contact['phone'];

        $phone_number = str_replace([' ',')','('],'',$phone_number);
        $phone_number = str_replace('+98','0',$phone_number);
        
        
        if(preg_match('/((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))/u',$phone_number) === 1) //if does not match phone number format
        {
            $contact['phone'] = $phone_number;

            return $contact;
        }

        return false;
    }

    protected function get_standard_format_contacts($contacts)
    {
        $contacts = array_map([$this,"convert_phone_number_to_standard_format"],$contacts);

        return array_values(array_filter($contacts)); //removes false values
    }

    protected function save_new_contacts_phone_numbers($contacts)
    {
        $values = [];

        $now = Carbon::now();

        foreach($contacts as $contact)
        {
            $values[] = "('" . $now . "','" . $now . "','"  . $contact['phone'] . "')";
        }
        $values = implode(',',$values);

        $query = "insert into contact_phones (created_at,updated_at,phone) VALUES {$values} on duplicate key update  phone = VALUES(phone)";

        DB::insert($query);
    }

    protected function save_the_user_contact_list_info($contact_records)
    {
        $values = [];
        foreach($contact_records as $contact)
        {
            $contact = (array) $contact;
            foreach($contact as $key => $value)
            {
                $tmp = "'" . $value . "'";
                $contact[$key] = $tmp;
            }
            
            $tmp = '(' . implode(',' ,array_values($contact)) . ')';
            $values[] = $tmp;
        }

        $values = implode(',',$values);

        $query = "insert into user_contacts (created_at,updated_at,contact_name,has_thumbnail,contact_id,myuser_id) VALUES {$values} on duplicate key update  contact_name = VALUES(contact_name), has_thumbnail = VALUES(has_thumbnail), contact_id = VALUES(contact_id), myuser_id = VALUES(myuser_id)";

        DB::insert($query);
    }
}
