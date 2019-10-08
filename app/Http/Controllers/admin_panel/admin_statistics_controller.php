<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\buyAd;
use App\sell_offer;
use Carbon\Carbon;
use App\product;
use App\myuser;
use App\profile;
use App\Http\Library\date_convertor;
use App\message;
use DB;


class admin_statistics_controller extends Controller
{
    
    
    
    public function load_statistics(Request $request)
    {   
        if($request->has('start_date') && $request->has('end_date')){
            $date_convertor_object = new date_convertor();
        
            $from_date = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->start_date);
            $until_date = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->end_date);
        }
        else{
            $until_date = new Carbon('today');
            $from_date = new Carbon('last month');
            
            $from_date = '2019-01-01';
            $until_date = '2019-08-08';
        }
        

        
        
//        $transactions_count = $this->get_transactions_count($from_date, $until_date);
        $buyAds_count = $this->get_buyAds_count($from_date, $until_date);
        $confirmed_buyAds_count = $this->get_buyAds_count($from_date, $until_date,true);
        $products_count = $this->get_products_count($from_date, $until_date);
        $confirmed_products_count = $this->get_products_count($from_date, $until_date,true);
//        $sell_offers_count = $this->get_sell_offers_count($from_date, $until_date);
        $new_users_count = $this->get_new_users_count($from_date, $until_date);
        $new_seller_users_count = $this->get_new_users_count($from_date, $until_date,'seller');
        $new_buyer_users_count = $this->get_new_users_count($from_date, $until_date,'buyer');
//        $new_profiles_count = $this->get_profile_updates_count($from_date, $until_date);
        //$active_users_count = $this->get_active_users_count($from_date, $until_date);
        $total_unique_message_senders_count = $this->get_unique_message_sender_users_count($from_date,$until_date);
        $sellers_unique_message_senders_count = $this->get_unique_message_sender_users_count($from_date,$until_date,'seller');
        $buyers_unique_message_senders_count = $this->get_unique_message_sender_users_count($from_date,$until_date,'buyer');
        
        $avg_response_rate = $this->get_average_users_response_rate($from_date, $until_date);
        
        
        
        
        return view('admin_panel.siteStatistics',compact(
                'buyAds_count',
                'confirmed_buyAds_count',
                'products_count',
                'confirmed_products_count',
                'new_users_count',
                'new_seller_users_count',
                'new_buyer_users_count',
                'total_unique_message_senders_count',
                'sellers_unique_message_senders_count',
                'buyers_unique_message_senders_count',
                'avg_response_rate'
            )
        );
    }
    
    
    protected function get_transactions_count($from_date, $until_date)
    {
        $finished_transaction_count = sell_offer::where('transaction_status',$this->terminated_transaction_status)
                                            ->whereBetween('updated_at',[$from_date, $until_date])
                                            ->select('id') 
                                            ->get()
                                            ->count();
        
        return $finished_transaction_count;
    }
    
    protected function get_buyAds_count($from_date, $until_date , $confirmed_status = null)
    {
        if($confirmed_status == null){
            $buyAds_count = buyAd::whereBetween('created_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        }
        else{
            $buyAds_count = buyAd::where('confirmed',$confirmed_status)
                                ->whereBetween('created_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        }
        
        
        return $buyAds_count;
    }
    
    protected function get_products_count($from_date, $until_date, $confirmed_status = null)
    {
        if($confirmed_status == null){
            $products_count = product::whereBetween('created_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        }
        else{
            $products_count = product::where('confirmed', $confirmed_status)
                                ->whereBetween('created_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        }
        
        
        return $products_count;
    }
    
    protected function get_sell_offers_count($from_date, $until_date)
    {
        $sell_offers_count = sell_offer::where('confirmed',true)
                                ->whereBetween('updated_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        
        return $sell_offers_count;
    }
    
    protected function get_active_users_count($from_date, $until_date)
    {
       
    }
    
    protected function get_new_users_count($from_date, $until_date,$user_type = null)
    {
        if($user_type == null){
            $new_users_count = myuser::whereBetween('created_at',[$from_date, $until_date])
                                        ->select('id') 
                                        ->get()
                                        ->count();
        }
        else if($user_type == 'seller'){
            $new_users_count = myuser::where('is_seller',true)
                                        ->whereBetween('created_at',[$from_date, $until_date])
                                        ->select('id') 
                                        ->get()
                                        ->count();
        }
        else if($user_type == 'buyer'){
            $new_users_count = myuser::where('is_buyer',true)
                                        ->whereBetween('created_at',[$from_date, $until_date])
                                        ->select('id') 
                                        ->get()
                                        ->count();
        }
        
        
        return $new_users_count;
    }
    
    protected function get_profile_updates_count($from_date, $until_date)
    {
        $profile_updates = profile::where('confirmed',true)
                                        ->whereBetween('updated_at',[$from_date, $until_date])
                                        ->distinct('myuser_id') 
                                        ->get()
                                        ->count();
        
        return $profile_updates;
    }
    
    protected function get_unique_message_sender_users_count($from_date, $until_date , $user_type = null){
        if($user_type == null){
            $count = message::whereBetween('created_at',[$from_date, $until_date])
                                ->select('sender_id')
                                ->distinct('sender_id')
                                ->get()
                                ->count();
        }
        else if($user_type == 'seller'){
            $count = DB::table('messages')
                            ->join('myusers','myusers.id','=','messages.sender_id')
                            ->where('myusers.is_seller',true)
                            ->whereBetween('messages.created_at',[$from_date, $until_date])
                            ->select('messages.sender_id')
                            ->distinct('messages.sender_id')
                            ->get()
                            ->count();
        }
        else if($user_type == 'buyer'){
            $count = DB::table('messages')
                            ->join('myusers','myusers.id','=','messages.sender_id')
                            ->where('myusers.is_buyer',true)
                            ->whereBetween('messages.created_at',[$from_date, $until_date])
                            ->select('messages.sender_id')
                            ->distinct('messages.sender_id')
                            ->get()
                            ->count();
        }
        
        return $count;
    }
    
    protected function get_average_users_response_rate($from_date, $until_date , $user_type = null){
            $result = 0.0;
        
            if($user_type == null){
                $tmp1 = DB::select("select count(DISTINCT(sender_id)) as cnt , receiver_id as rcv_id FROM `messages` where sender_id in (SELECT DISTINCT(msg1.receiver_id) from messages as msg1,messages as msg2 where msg1.receiver_id = msg2.sender_id ) GROUP by receiver_id");
        
                
                foreach($tmp1 as $item){
                    $tmp2 = DB::select("SELECT count(DISTINCT(sender_id)) as cnt FROM `messages` WHERE receiver_id = {$item->rcv_id}");

                    $result += (($item->cnt)/($tmp2[0]->cnt)) * 100;
                }
        
                $result =  $result / (count($tmp1) );
        
            }
            else if($user_type == 'seller'){
                //
            }
            else if($user_type == 'buyer'){
                //
            }
        
        return $result;
    }
    
    protected function get_average_user_profiles_with_profile_photo_count($from_date, $until_date , $user_type = null){
        
    }
    
    protected function get_average_user_profiles_with_related_photos($from_date, $until_date){
        
    }
    
    protected function get_users_sent_messages_count($from_date, $until_date , $user_type = null){
        
    }
    
    protected function get_users_received_messages_count($from_date, $until_date , $user_type = null){
        
    }
    
    protected function get_user_response_rate($user_id){
        
        
        
    }
}
