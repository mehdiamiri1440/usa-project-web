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

    ///////////////////////////////////////////////////

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

            if($this->does_viewer_daily_access_count_is_more_than_max_viewer_daily_access_count($viewer_user_id)){
                return response()->json([
                    'status' => false,
                    'msg' => 'سقف تعداد روزانه دسترسی شما به شماره تماس کاربران پر شده است. لطفا پیام ارسال کنید.'
                ],404);
            }

            if($related_record->active_pakage_type == 0){
                $this->insert_phone_number_view_log_record($viewer_user_id,$request->s_id,'SELLER',$request->item,false);
                
                // can be use as trait
                $wallet_controller_object = new wallet_controller();
                $wallet_controller_object->insert_expendig_log_record(1,$request->s_id);
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

    ////////////////////////////////////////////

    public function get_buyer_phone_number(Request $request)
    {
        $this->validate($request,[
            'ba_id' => 'required|integer|exists:buy_ads,id',
            'b_id' => 'required|integer|exists:myusers,id',
            'item' => 'required|in:BUYAD,PROFILE',
        ]);

        $user_id = session('user_id');
        $viewr_user_record = myuser::find($user_id);
        $buyAd_id = $request->ba_id;
        $buyer_id = $request->b_id;
        

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
                                ->where('buy_ads.phone_view_capacity','>',0)
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
    
            if($this->does_viewer_daily_access_count_is_more_than_max_viewer_daily_access_count(session('user_id'))){
                return response()->json([
                    'status' => false,
                    'msg' => 'سقف تعداد روزانه دسترسی شما به شماره تماس کاربران پر شده است. لطفا پیام ارسال کنید.'
                ],404);
            }  
        }

        $already_replied_to_the_buyAd = $this->get_user_replay_count_to_buy_ad($user_id,$buyAd_id);

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

    protected function get_user_replay_count_to_buy_ad($replier_id,$buy_ad_id){

        $count = DB::table('buy_ad_reply_meta_datas')
                    ->where([
                        ['buy_ad_id','=',$buy_ad_id],
                        ['replier_id','=',$replier_id],
                    ])->get()
                    ->count();
        
        return $count;
    }

    /////////////////////////////////////////////////////////////////

    public function set_my_phone_number_view_permissions(Request $request)
    {
        $this->validate($request,[
            'permission' => 'required|boolean'
        ]);

        $user_id = session('user_id');

        $user_record = myuser::find($user_id);

        if($user_record){
            $temp = str_split($user_record->phone_view_permission);

            if($user_record->is_seller){
                
                $temp[0] = (integer) $request->permission;
            }
            else if($user_record->is_buyer){
                
                $temp[1] = (integer) $request->permission;
            }
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

    ///////////////////////////////////////////////////////////

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

    ////////////////////////////////////// incommon methods

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

    protected function does_viewer_daily_access_count_is_more_than_max_viewer_daily_access_count($viewer_user_id)
    {

        $viewer_daily_access_count = $this->get_viewer_daily_access_count($viewer_user_id);

        $max_daily_access_count = config('subscriptionPakage.phone-number.max-daily-access-count');

        return $viewer_daily_access_count > $max_daily_access_count;

    }

    protected function get_viewer_daily_access_count($viewer_user_id)
    {

        $viewer_daily_access_count = DB::table('phone_number_view_logs')
                                                ->where('viewer_id',$viewer_user_id)
                                                ->whereBetween('created_at',[Carbon::today(),Carbon::tomorrow()])
                                                ->groupBy('myuser_id')
                                                ->get()
                                                ->count();

        return $viewer_daily_access_count;
    }

    protected function is_proper_time_for_phone_call()
    {
        $now = Carbon::now();
        
        if(Carbon::parse($now)->format('H') < 5){
            return false;
        }

        return true;
    }

}
