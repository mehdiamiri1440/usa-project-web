<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\myuser;
use Carbon\Carbon;
use App\Models\product;
use App\Models\buyAd;
use App\Models\profile;
use App\Models\profile_media;
use App\Models\message;
use DB;


class reputation_controller extends Controller
{
    protected $reputation_method_names = [
        'get_register_time_score',
        'get_product_or_buyAd_registration_score',
        'get_level_of_profile_completeness_score',
        // 'get_messaging_score',
//        'get_profile_visit_score',
        'get_pakage_score',
        'get_verification_score',
        'get_user_rating_score',
    ];
    
    protected $product_registeration_coef = 10;
    protected $buyAd_registration_coef = 5;
    protected $profile_photo_coef = 5;
    protected $is_company_coef = 100;
    protected $profile_visit_coef = 2;
    protected $verification_coef = 4000;
    protected $rating_score_coef = 200;
    
    
    public function calculate_user_reputation_score($user_id)
    {
        $total_score = 0;

        $user_record = myuser::where('id',$user_id)
                                        ->get()
                                        ->first();
        
        foreach($this->reputation_method_names as $method_name){
            $total_score += $this->$method_name($user_record);
        }
        
        return (integer) $total_score;
    }
    
    protected function get_register_time_score($user_record)
    {
        if($user_record){
            $user_register_date_time = $user_record->created_at;
        
            $today = Carbon::now();

            $interval = $user_register_date_time->diff($today);
            $days = $interval->format('%a'); //number of days between two dates

            return $days/5;
        }
        else return -1;
    }
    
    protected function get_product_or_buyAd_registration_score($user_record)
    {
        $user_id = $user_record->id;

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
    
    protected function get_level_of_profile_completeness_score($user_record)
    {
        $score = 0 ;
        $user_id = $user_record->id;
        
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
    
    protected function get_messaging_score($user_record)
    {
        $user_id = $user_record->id;

        $messaging_contacts_count = $this->get_messaging_contacts_count($user_id);
        return $messaging_contacts_count * 10;
    }
    
    protected function get_profile_visit_score($user_record)
    {
        $user_id = $user_record->id;

        $profile_visit_count = myuser::find($user_id)->profile_visit;
        
        return $profile_visit_count * $this->profile_visit_coef;
    }
    
    protected function get_messaging_contacts_count($user_record)
    {
        $user_id = $user_record->id;

        // $related_records = message::where('sender_id',$user_id)
        //                         ->orWhere('receiver_id',$user_id)
        //                         ->select('sender_id','receiver_id')
        //                         ->distinct()
        //                         ->orderBy('created_at')
        //                         ->get();
        // $contact_id_array = [];
        
        // $related_records->each(function($record) use(&$contact_id_array,$user_id){
        //     if($record->sender_id != $user_id){
        //         $contact_id_array[] = $record->sender_id;
        //     }
        //     else{
        //         $contact_id_array[] = $record->receiver_id;
        //     }
        // });

    }
    
    protected function get_pakage_score($user_record)
    {
        $user_pakage_type = $user_record->active_pakage_type;
        
        return config("subscriptionPakage.type-$user_pakage_type.reputation-score");
    }

    protected function get_verification_score($user_record)
    {
        if($user_record->is_verified == true){
            return $this->verification_coef;
        }
        else return 0;
    }

    protected function get_user_rating_score($user_record)
    {
        $user_id = $user_record->id;

        $avg_rating_score_record = DB::table('user_comments')->where('myuser_id',$user_id)
                                    ->selectRaw("avg(rating_score) as score")
                                    ->whereNotExists(function($q){
                                        $q->select(DB::raw(1))
                                                ->from('reports')
                                                ->whereRaw('user_comments.commenter_id = reports.reported_id');
                                    })
                                    ->groupBy('user_comments.commenter_id')
                                    ->get()
                                    ->first();
        
        if(! $avg_rating_score_record){
            return 0;
        }

        
        $avg_rating_score = $avg_rating_score_record->score;

        if($avg_rating_score >= 3.5){
            return $avg_rating_score * $this->rating_score_coef;
        }
        else{
            return 0;
        }
    }
}