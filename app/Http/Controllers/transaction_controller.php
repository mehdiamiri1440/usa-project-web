<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\sell_offer;
use App\factor;
use App\buyAd;
use App\Http\Library\date_convertor;
use DB;
use App\Http\Controllers\sms_controller;

class transaction_controller extends Controller
{
    protected $necessary_fields_for_transaction = [
        'sell_offers.id',
        'sell_offers.buy_ad_id',
        'sell_offers.myuser_id',
        'sell_offers.deal_date',
        'sell_offers.transaction_status',
        'buy_ads.name as product_name',
    ];
    protected  $transaction_id_increase_amount_proportional_to_real_id = 100000;
    
    protected $user_role_array = [
        '1' => 'buyer',
        '2' => 'seller',
        '3' => 'admin',
    ];
    
    protected $terminated_transaction_status = '0000000011111111';    
  
    //public method
    public function get_user_in_progress_transaction_list()
    {
        $user_id = session('user_id');
        
        $user_role = $this->get_user_role();
        
        $transaction_condition = [
            [
                'operator' => '<>',
                'value' => '0000000000000000',
            ],
            [
                'operator' => '<>',
                'value' => $this->terminated_transaction_status,
            ],
        ];
        
        $transactions = $this->get_user_transactions($user_id,$user_role,$transaction_condition);
        
        $date_convertor_object = new date_convertor();  
        
        $transactions->each(function($transaction) use($date_convertor_object,$user_role){
            $transaction->deal_formation_date = $date_convertor_object->get_persian_date($transaction->deal_date);
            $transaction->transaction_id = $transaction->id + $this->transaction_id_increase_amount_proportional_to_real_id;
            $transaction->short_status = config("transaction.data-according-to-status.$transaction->transaction_status.short_status.$user_role"); 
            
            unset($transaction->transaction_status);
            unset($transaction->deal_date);
        });
        
        return response()->json([
           'transactions' => $transactions, 
        ],200);        
    }
    
    protected function get_user_transactions($user_id,$role,$transaction_condition)
    {
        if($role == 'buyer'){
            $user_related_table_name = 'buy_ads';
        }
        else if($role == 'seller'){
            $user_related_table_name = 'sell_offers';
        }
        else{
            return null;
        }
        
        $basic_query = DB::table('sell_offers')
                            ->join('buy_ads','sell_offers.buy_ad_id' ,'=', 'buy_ads.id')
                            ->where('sell_offers.is_accepted',true)
                            ->where('sell_offers.is_pending',false);
        
        foreach($transaction_condition as $condition){
            $basic_query = $basic_query->where('sell_offers.transaction_status',$condition['operator'],$condition['value']);
        }
        
        $transactions = $basic_query->where("$user_related_table_name.myuser_id",$user_id)
                            ->select($this->necessary_fields_for_transaction)
                            ->latest('sell_offers.updated_at')
                            ->get();
     
        return $transactions;
    }
    //public method
    public function get_transaction_info(Request $request)
    {
        $this->validate($request,[
            'transaction_id' => "required|integer|min:$this->transaction_id_increase_amount_proportional_to_real_id",
        ]);
        
        $user_role = $this->get_user_role();
        
        if($this->is_user_authorized_to_have_an_action_on_the_transaction($request->transaction_id,$user_role) == false){
            return response()->json([
                //
            ],404);
        }
        
        $sell_offer_id = $request->transaction_id  -  $this->transaction_id_increase_amount_proportional_to_real_id;
        
        
        $transaction_status = $this->get_transaction_status($sell_offer_id);        
        
        $given_status_instructions = config("transaction.data-according-to-status")["$transaction_status"];
        
        $transaction_data = $this->get_transaction_data_according_to_the_given_data_instructions($given_status_instructions['data'],$sell_offer_id,$user_role);
        
        $date_convertor_object = new date_convertor();
        
        if(isset($transaction_data->created_at)){
            $transaction_data->issue_date = $date_convertor_object->get_persian_date($transaction_data->created_at);   
        }
        
        if(isset($transaction_data->loading_dead_line)){
            $transaction_data->loading_dead_line = $date_convertor_object->get_persian_date($transaction_data->loading_dead_line);
        }
        
        if($transaction_status == '0000000000111111'){ //final payment for buyer
            $prepayment_factor_record = $this->get_factor_info_by_transaction_id($request->transaction_id); //default payment type is prepayment record
            
            $transaction_data->prepayment_amount = $prepayment_factor_record->amount_to_pay;
        }
        
        $conversion_result_array = $this->convert_transaction_status_to_step_number($transaction_status,$user_role);       
        
        extract($conversion_result_array);//$step_number and $state_msg variables will be extracted from array
        
        return response()->json([
            'transaction_info' => $transaction_data,
            'step' => $step_number,
            'msg' => $state_msg,
        ]);
    }
    
    protected function get_transaction_status($sell_offer_id)
    {
        $transaction_status_object = sell_offer::where('id',$sell_offer_id)
                                ->select('transaction_status')
                                ->get()
                                ->first();
        
        return $transaction_status_object->transaction_status;
    }
    
    protected function get_user_role()
    {
        if(session('is_buyer')){
            $user_role_id = 1;
        }
        else if(session('is_seller')){
            $user_role_id = 2;
        }
        else if(session('admin_user_id')){
            $user_role_id = 3;
        }
        else{
            //write in log file 
            //code here
            
            return response()->json([
                'status' => false,
                'msg' => 'user role is undefined, malicious activity detected. tracing the request ...'
            ],404);
        }
        
        return $this->user_role_array[$user_role_id];
    }
    
    protected function get_transaction_data_according_to_the_given_data_instructions($data_instruction_array,$sell_offer_id,$user_role)
    {
        if( ! empty($data_instruction_array[$user_role]) ){
            $initial_db_query = $this->generate_DB_query_by_given_data($data_instruction_array[$user_role]);
            
            $complete_db_query = $initial_db_query->where('sell_offers.id',$sell_offer_id);
            $required_data = $complete_db_query->get()->first();
        }
        else {
            $required_data = 'test';
        }
        
        return $required_data;
    }
    
    protected function convert_transaction_status_to_step_number($transaction_status,$user_role)
    {
        $transaction_status_meta_data = config("transaction.data-according-to-status.$transaction_status");
        $transaction_state = $transaction_status_meta_data['state'][$user_role];
        
        $step_number = config("transaction.user-state.$user_role.states.$transaction_state.step");
        
        $state_msg = config("transaction.user-state.$user_role.states.$transaction_state.msg");
        
        return compact('step_number','state_msg');
    }
    
    protected function generate_DB_query_by_given_data($given_data_array)
    {
        $tables = $given_data_array['tables'];
        $fields = $given_data_array['fields'];
        $additional_conditions = $given_data_array['conditions']; //AND where conditions for now
        
        if(sizeof($tables) > 0){
            $query = DB::table('sell_offers');
            
            foreach($tables as $table_name => $conditions){
                $query = $query->join($table_name,function($join) use($conditions){
                    
                            foreach($conditions as $condition){
                                
                                list($first_side,$operator,$second_side) = $condition;
                                
                                $join->on($first_side,$operator,$second_side);
                            }
                        });
            }
            
            $query = $query->select($fields);
            
            foreach($additional_conditions as $condition){
                list($first_side,$operator,$second_side) = $condition;
                $query = $query->where($first_side,$operator,$second_side);
            }
        }
        else if(sizeof($fields) > 0){
            $query = DB::table('sell_offers')
                        ->select($fields)
                        ;
        }
        else{
            $query = DB::table('sell_offers')
                        ->select('id')
                        ;
        }
        
        return $query;
    }
    
    //public method
    public function action_controller(Request $request)
    {
        if($this->validate_action_data($request) == false){
            return response()->json([
                'msg' => 'unAuthorized Access!',
            ],422);
        }
        
        $action_meta_data =  config('transaction.actions')[$request->action_id];
        
        $sell_offer_id = $request->transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id ;
        $transaction_record = sell_offer::find($sell_offer_id); //sell_offer_record in fact
        
        if(isset($action_meta_data['data']['factor'])){
            $factor_record = new factor();
            
            $admin_id = session('admin_user_id'); //factors can be issued just by admins
            
            $factor_fields = $action_meta_data['data']['factor'];
                
            foreach($factor_fields as $field_name){
                $factor_record->$field_name = $request->$field_name;
//                $request->request->remove($field_name);
            }
            
            $factor_record->admin_id = $admin_id;
            $factor_record->sell_offer_id = $sell_offer_id;
            
            $factor_record->save(); //generating record for the first time
        }
        
        $fields_name = array_values($action_meta_data['data']);
        
        $date_convertor_object = new date_convertor();
        
        foreach($fields_name as $field_name){
            if($field_name == 'loading_dead_line'){
                $transaction_record->$field_name = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->$field_name);
            }
            else if(! is_array($field_name)){
                $transaction_record->$field_name = $request->$field_name;   
            }
        }
        
        //update transaction status
        $new_status = $this->update_transaction_status($transaction_record->transaction_status,$action_meta_data['bit_index']);//call by REFRENCE
        $transaction_record->transaction_status = $new_status;
        
        $transaction_record->save(); //updating transaction record
        
        $this->notify_related_involved_users_in_the_tranaction(
            $action_meta_data['to_notify'],
            $seller_user_id = $transaction_record->myuser_id,
            $buyAd_id = $transaction_record->buy_ad_id,
            $request->transaction_id
        );
        
        return response()->json([
            'status' => true,
            'msg' => 'Done',
        ]);
        
       
    }
    
    protected function update_transaction_status($old_status,$bit_index)
    {
        $old_status[15 - $bit_index] = '1';
        
        return $old_status;
    }
    
    protected function validate_action_data(&$request)
    {
        $this->validate($request,[
            'action_id' => "required|integer|min:1",
            'transaction_id' => "required|integer|min:$this->transaction_id_increase_amount_proportional_to_real_id"
        ]);
        
        $action_meta_data =  config('transaction.actions')[$request->action_id];
        
        $user_role = $this->get_user_role();
        
        
        if($user_role != $action_meta_data['actor']){
            return false;
            //write user info because of melecious activity on log file
        }
        
        if($this->is_user_authorized_to_have_an_action_on_the_transaction($request->transaction_id,$user_role,$action_meta_data) == false){
           return false;
            //write user info because of melecious activity on log file
        }
       
        $this->validate($request,$action_meta_data['validation_rules']);
        
        return true;
    }
    
    protected function is_user_authorized_to_have_an_action_on_the_transaction($transaction_id,$user_role,$action_meta_data = null)
    {
        $sell_offer_id = $transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id;
        
        $sell_offer_record = sell_offer::find($sell_offer_id);
        
        if(is_null($sell_offer_record)) return false;
        
        if($action_meta_data != null){
            if(sizeof($action_meta_data['required_bit_index_set']) > 0){
                foreach($action_meta_data['required_bit_index_set'] as $index){
                    if($sell_offer_record->transaction_status[15 - $index] != 1){
                        return false;
                    }
                }
            }
        }
        
        
        if($user_role == 'admin'){
            return true;
        }
        else if($user_role == 'seller'){
            if($sell_offer_record->myuser_id == session('user_id')){
                return true;
            }
            else {
                return false;
            }             
        }
        else if($user_role == 'buyer'){
            $buy_ad_record = buyAd::find($sell_offer_record->buy_ad_id);
            if($buy_ad_record){
                if($buy_ad_record->myuser_id == session('user_id')){
                    return true;
                }
                else{
                    return false;
                } 
            }
             else{
                return false;
            } 
        }
        else {
            return false;
        }
        
    }
    //public method
    public function get_user_terminated_transactions()
    {
        $user_id = session('user_id');
        
        $user_role = $this->get_user_role();

        $transaction_condition = [
            [
                'operator' => '=',
                'value' => '0000000011111111',
            ],
        ];
        
        $transactions = $this->get_user_transactions($user_id,$user_role,$transaction_condition);
        
        $date_convertor_object = new date_convertor();
        
        $transactions->each(function($transaction) use($date_convertor_object,$user_role){
            $transaction->deal_formation_date = $date_convertor_object->get_persian_date($transaction->deal_date);
            $transaction->transaction_id = $transaction->id + $this->transaction_id_increase_amount_proportional_to_real_id;
            
            unset($transaction->deal_date);
            unset($transaction->deal_date);
        });
        
        return response()->json([
           'transactions' => $transactions, 
        ],200);
    }
    
    public function get_terminated_transaction_info(Request $request)
    {
        $this->validate($request,[
            'transaction_id' => "required|integer|min:$this->transaction_id_increase_amount_proportional_to_real_id",
        ]);
        
        $sell_offer_id = $request->transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id ;
        
        $transaction_record = sell_offer::where('id',$sell_offer_id)
                                ->select([
                                    'id',
                                    'loading_dead_line',
                                    'admin_notes',
                                    'deal_date',
                                    'commission_persentage',
                                    'buy_ad_id',
                                    'myuser_id as seller_user_id'
                                ])
                                ->get()
                                ->first();
        
        $payment_factor_record  = factor::where('sell_offer_id',$sell_offer_id)
                                                ->where('type','payment')
                                                ->select([
                                                    'quantity',
                                                    'inspection_price',
                                                    'unit_price',
                                                    'amount_to_pay as payment_amount',
                                                ])
                                                ->get()
                                                ->first();
        
        $prepayment_factor_record = factor::where('sell_offer_id',$sell_offer_id)
                                                ->where('type','prepayment')
                                                ->select([
                                                    'amount_to_pay as prepayment_amount'
                                                ])
                                                ->get()
                                                ->first();
        
        $user_role = $this->get_user_role();
        
        if($user_role == 'buyer'){
            unset($transaction_record->commission_persentage);
        }
        
        $date_convertor_object = new date_convertor();
        
        $transaction_record->deal_formation_date = $date_convertor_object->get_persian_date($transaction_record->deal_date);
        $transaction_record->loading_end_date = $date_convertor_object->get_persian_date($transaction_record->loading_dead_line);
        unset($transaction_record->deal_date);
        unset($transaction_record->loading_deal_line);
        
        $result = collect($transaction_record)->merge(collect($payment_factor_record))
                                     ->merge(collect($prepayment_factor_record));
        
        return response()->json([
           'transaction_info' => $result, 
        ]);
    }
    protected function get_factor_info_by_transaction_id($transaction_id,$payment_type = 'prepayment') //payment type can be prepayment or payment for now
    {   
        $sell_offer_id = $transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id;
        $factor_record = factor::where('sell_offer_id',$sell_offer_id)
                                ->where('type',$payment_type)
                                ->where('is_payed',true)
                                ->get()
                                ->first();
        
        return $factor_record;
    }
    
    protected function notify_related_involved_users_in_the_tranaction($notify_actions,$seller_user_id,$buyAd_id,$transaction_id)
    {
        $sms_controller_object = new sms_controller();
        
        foreach($notify_actions as $user_role => $msg){

            $msg_array = [];
            
            switch($user_role){
                case 'seller' :
                    //send sms to the seller
                    $msg_array [] = 'فروشنده محترم باسکول';
                    $msg_array [] =  $msg;
                    $msg_array [] = 'شماره تراکنش' . ' : ' . $transaction_id ;
                    
                    $sms_controller_object->send_notify_sms_to_user($msg_array,$seller_user_id);
                    
                    break;
                case 'buyer'  :
                    //send sms to the buyer
                    $buyer_user_id = $this->get_buyAd_owner_user_id($buyAd_id);
                    
                    $msg_array [] = 'خریدار محترم باسکول';
                    $msg_array [] =  $msg;
                    $msg_array [] = 'شماره تراکنش' . ' : ' . $transaction_id ;
                    
                    $sms_controller_object->send_notify_sms_to_user($msg_array,$buyer_user_id);
                    break;
                case 'admin'  :
                    //send sms to the admin
                    $msg_array[] = $msg ;
                    
                    $sms_controller_object->send_notify_sms_to_user($msg_array,'09118413054');
                    
                    break;
                default:
                    break;
            }
        }
    }
    
    protected function get_buyAd_owner_user_id($buyAd_id)
    {
        $buyAd_record = buyAd::find($buyAd_id);
        
        if($buyAd_record){
            return $buyAd_record->myuser_id;
        }
        else{
            return false;
        }
    }
    
    //public method
    public function get_payed_factor_list()
    {
        $user_role = $this->get_user_role();
        
        if($user_role != 'buyer'){
            return response()->json([
               'status' => false,
                'msg' => 'unAuthorized Access!'
            ],404);
        }
        
        $user_id = session('user_id');
        
        $factors = DB::table('buy_ads')
                        ->join('sell_offers','buy_ads.id','=','sell_offers.buy_ad_id')
                        ->join('factors','sell_offers.id','=','factors.sell_offer_id')
                        ->where('buy_ads.myuser_id',$user_id)
                        ->where('factors.is_payed',true)
                        ->select('factors.*')
                        ->get();
        
        $date_convertor_object = new date_convertor();
        
        $factors->each(function($factor) use($date_convertor_object){
                $factor->persian_date = $date_convertor_object->get_persian_date($factor->updated_at); 
        });
        
        return response()->json([
            'status' => true,
            'factors' => $factors
        ],200);
    }
    
    //public method
    public function get_factor_info_by_factor_id(Request $request)
    {
        $this->validate($request,[
           'factor_id' => 'required|integer|min:1' 
        ]);
        
        $user_role = $this->get_user_role();
        
        if($user_role != 'buyer'){
            return response()->json([
               'status' => false,
                'msg' => 'unAuthorized Access!'
            ],404);
        }
        
        $user_id = session('user_id');
        $factor_id = $request->factor_id;
        
        $factor = DB::table('buy_ads')
                        ->join('sell_offers','buy_ads.id','=','sell_offers.buy_ad_id')
                        ->join('factors','sell_offers.id','=','factors.sell_offer_id')
                        ->where('buy_ads.myuser_id',$user_id)
                        ->where('factors.id',$factor_id)
                        ->select('factors.*')
                        ->get()
                        ->first();
        
        $date_convertor_object = new date_convertor();
        
        $factor->persian_date = $date_convertor_object->get_persian_date($factor->updated_at);
        
        if($factor){
            return response()->json([
                'status' => true,
                'factor' => $factor,
            ],200);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'Not Found!',
            ],404);
        }
    }
    
    
}