<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\myuser;
use Carbon\Carbon;
use App\product;
use App\buyAd;
use App\profile;
use App\profile_media;
use App\message;


class reputation_controller extends Controller
{
    protected $reputation_method_names = [
        'get_register_time_score',
        'get_product_or_buyAd_registration_score',
        'get_level_of_profile_completeness_score',
        'get_messaging_score',
//        'get_profile_visit_score',
        'get_pakage_score'
    ];
    
    protected $product_registeration_coef = 10;
    protected $buyAd_registration_coef = 5;
    protected $profile_photo_coef = 5;
    protected $is_company_coef = 50;
    protected $profile_visit_coef = 2;
    
    
    public function calculate_user_reputation_score($user_id)
    {
        $total_score = 0;
        
        foreach($this->reputation_method_names as $method_name){
            $total_score += $this->$method_name($user_id);
        }
        
        return $total_score;
    }
    
    protected function get_register_time_score($user_id)
    {
        $user_record = myuser::where('id',$user_id)
                                        ->get()
                                        ->first();
        if($user_record){
            $user_register_date_time = $user_record->created_at;
        
            $today = Carbon::now();

            $interval = $user_register_date_time->diff($today);
            $days = $interval->format('%a'); //number of days between two dates

            return $days/5;
        }
        else return -1;
    }
    
    protected function get_product_or_buyAd_registration_score($user_id)
    {
        $registered_products_count = product::where('myuser_id',$user_id)
                                        ->where('confirmed',true)
                                        ->get()
                                        ->count();
        
        $registered_buyAds_count = buyAd::where('myuser_id',$user_id)
                                        ->where('confirmed',true)
                                        ->get()
                                        ->count();
        
        return ($registered_products_count * $this->product_registeration_coef + $registered_buyAds_count * $this->buyAd_registration_coef) ;
    }
    
    protected function get_level_of_profile_completeness_score($user_id)
    {
        $score = 0 ;
        
        $last_confirmed_profile_record = profile::where('myuser_id',$user_id)
                                                    ->where('confirmed',true)
                                                    ->get()
                                                    ->last();
        
        if($last_confirmed_profile_record){
            if($last_confirmed_profile_record->profile_photo){
                $score += $this->profile_photo_coef;
            }
            if($last_confirmed_profile_record->is_company){
                $score += $this->is_company_coef;
            }
            
            $score += profile_media::where('profile_id',$last_confirmed_profile_record->id)
                                        ->get()
                                        ->count();
        }
        
        return $score;
    }
    
    protected function get_messaging_score($user_id)
    {
        $messaging_contacts_count = $this->get_messaging_contacts_count($user_id);
        return $messaging_contacts_count * 10;
    }
    
    protected function get_profile_visit_score($user_id)
    {
        $profile_visit_count = myuser::find($user_id)->profile_visit;
        
        return $profile_visit_count * $this->profile_visit_coef;
    }
    
    protected function get_messaging_contacts_count($user_id)
    {
        $related_records = message::where('sender_id',$user_id)
                                ->orWhere('receiver_id',$user_id)
                                ->select('sender_id','receiver_id')
                                ->distinct()
                                ->orderBy('created_at')
                                ->get();
        $contact_id_array = [];
        
        $related_records->each(function($record) use(&$contact_id_array,$user_id){
            if($record->sender_id != $user_id){
                $contact_id_array[] = $record->sender_id;
            }
            else{
                $contact_id_array[] = $record->receiver_id;
            }
        });
        
        return sizeof(array_unique($contact_id_array));
    }
    
    protected function get_pakage_score($user_id)
    {
        $user_pakage_type = myuser::find($user_id)->active_pakage_type;
        
        return config("subscriptionPakage.type-$user_pakage_type.reputation-score");
    }
}