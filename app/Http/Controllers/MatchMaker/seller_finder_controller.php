<?php

namespace App\Http\Controllers\MatchMaker;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use App\Models\myuser;
use App\Models\product;
use App\Models\buyAd;
use App\Models\category;
use App\Models\buy_ad_suggestion;
use DB;


class seller_finder_controller extends Controller
{
    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر',
    ];

    public function get_the_most_related_product_owners_id_to_the_given_buyAd_if_any(&$buyAd)
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(120); // last 4 months

        $buyAd_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $buyAd->name)))); //PHP is for professionals,not for kids
        
        $category_info = $this->get_category_and_subcategory_name($buyAd->category_id);

        if (count($buyAd_name_array)) {
            if ($buyAd_name_array[0] == $category_info['subcategory_name']) {
                array_splice($buyAd_name_array, 0, 1);
            }
        }

        $buyAd_name_array = $this->remove_black_list_words($buyAd_name_array);
        
        $related_subcategory_products = product::where('category_id', $buyAd->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('updated_at', [$from_date, $until_date])
                                            ->where('myuser_id','<>',$buyAd->myuser_id)
                                            ->where(function($q) use($buyAd_name_array){
                                                foreach($buyAd_name_array as $name){
                                                    $q = $q->orWhere('product_name','like',"%$name%");
                                                }

                                                return $q;
                                            })
                                            ->select('myuser_id as user_id')
                                            ->distinct('myuser_id')
                                            ->orderBy('created_at')
                                            ->get()
                                            ->values()
                                            ->toArray();

        $related_subcategory_products = array_values($related_subcategory_products);

        $premium_users_id = myuser::where('active_pakage_type','>',0)
                                ->select('id as user_id')
                                ->get();

        $premium_products = product::where('category_id',$buyAd->category_id)
                                            ->where('confirmed',true)
                                            ->whereIN('myuser_id',$premium_users_id)
                                            ->where('myuser_id','<>',$buyAd->myuser_id)
                                            ->where(function($q) use($buyAd_name_array){
                                                foreach($buyAd_name_array as $name){
                                                    $q = $q->orWhere('product_name','like',"%$name%");
                                                }

                                                return $q;
                                            })
                                            ->select('myuser_id as user_id')
                                            ->distinct('myuser_id')
                                            ->orderBy('created_at')
                                            ->get()
                                            ->values()
                                            ->toArray();

        if($premium_products){
            $related_subcategory_products = array_merge($related_subcategory_products,$premium_products);
        }
        
        if ($related_subcategory_products) {
            $the_most_related_product_owners = $this->apply_selection_algorithm($buyAd->id,$related_subcategory_products,$premium_products);
        } 
        else {
            $the_most_related_product_owners = [];
        }

        return $the_most_related_product_owners;
    }

    protected function get_the_most_related_product_owners_id_to_given_buyAd(&$buyAd, &$products)
    {
        $most_related_product_owners = [];
        // $max_mached_score = 0;

        $buyAd_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $buyAd->name)))); //PHP is for professionals,not for kids

        $category_info = $this->get_category_and_subcategory_name($buyAd->category_id);

        if (count($buyAd_name_array)) {
            if ($buyAd_name_array[0] == $category_info['subcategory_name']) {
                array_splice($buyAd_name_array, 0, 1);
            }
        }

        $buyAd_name_array_count = count($buyAd_name_array);

        foreach ($products as $product) {
            // $score = 0;

            $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name))));

            $product_name_array = $this->remove_black_list_words($product_name_array);

            foreach ($product_name_array as $word) {
                $index = array_search($word, $buyAd_name_array); //$index will be false if the array doesn't contain the word
                if ($index !== false) {//warning:don't change it to !=
                    $most_related_product_owners[] = $product->myuser_id;
                    // $score += $this->factorial($buyAd_name_array_count - $index);
                }
            }
        }

        return array_unique($most_related_product_owners);
    }

    protected function remove_black_list_words(&$words)
    {
        $result = [];

        foreach ($words as $word) {
            $index = array_search($word, $this->words_blacklist);
            if ($index === false) {
                $result[] = $word;
            }
        }

        return $result;
    }

    protected function get_category_and_subcategory_name($subcategory_id)
    {
        $subcategory_record = category::where('id', $subcategory_id)
            ->select('category_name', 'parent_id')
            ->get()
            ->first();

        $category_record = category::where('id', $subcategory_record->parent_id)
            ->select('category_name')
            ->get()
            ->first();

        return [
            'category_name' => $category_record->category_name,
            'subcategory_name' => $subcategory_record->category_name,
        ];
    }

    protected function apply_selection_algorithm($buyAd_id,$seller_ids,$premium_seller_ids)
    {
        $filtered_sellers = $this->apply_sellers_filters($seller_ids,$premium_seller_ids);

        //check buyAd capacity
        //code here

        return $filtered_sellers;
    }

    protected function apply_sellers_filters($seller_ids,$premium_seller_ids)
    {
        $filtered_sellers = [];
        $filtered_sellers_helper = [];

        //Check for basic conditions
        foreach($seller_ids as $seller)
        {
            $response_info = $this->get_user_response_info($seller['user_id']);

            $filtered_sellers_helper['responsers'] = [];
            $filtered_sellers_helper['others'] = [];

            if($response_info['response_rate'] >= 75 && $response_info['response_time'] <= 144)
            {
                $suggested_buyAd_counts_sent_to_seller = $this->get_suggested_buyAd_counts_sent_to_seller($seller['user_id']);
    
                if($suggested_buyAd_counts_sent_to_seller < 4){
                    $filtered_sellers[] = $seller['user_id'];
                }
                else{
                    $response_rate_to_previous_buyAd_suggestions = $this->get_seller_response_rate_to_previous_buyAd_suggestions($seller['user_id'],$suggested_buyAd_counts_sent_to_seller);
                    
                    if($response_rate_to_previous_buyAd_suggestions >= 50){
                        $filtered_sellers[] = $seller['user_id'];
                        $filtered_sellers_helper['responsers'][] = $seller['user_id'];
                    }
                }
            }
        }

        //exclude based on algorithm conditions
        if(count($filtered_sellers) > 10){
            $tmp = buy_ad_suggestion::whereIn('seller_id',$filtered_sellers)
                                        ->select(DB::raw('MAX(created_at) as date,seller_id as user_id'))
                                        // ->distinct('seller_id')
                                        ->groupBy('user_id')
                                        ->orderBy('date')
                                        ->get()
                                        ->values()
                                        ->toArray();

            $related_previous_buyAd_suggestion_records= [];
            foreach($tmp as $seller){
                $related_previous_buyAd_suggestion_records[] = $seller['user_id'];
            }
            
            if(count($related_previous_buyAd_suggestion_records) > 0){
                $filtered_sellers = array_filter($filtered_sellers,function($seller_id) use($related_previous_buyAd_suggestion_records){
                    return  in_array($seller_id,$related_previous_buyAd_suggestion_records) === false;
                });
                
                if(count($filtered_sellers) < 10){
                    $shortage_count = 10 - count($filtered_sellers);
                    $filtered_sellers = array_merge($filtered_sellers,array_slice($related_previous_buyAd_suggestion_records,0,$shortage_count));
                }
                else{
                    $filtered_sellers = array_slice($filtered_sellers,0,10);
                    $filtered_sellers_helper['others'] = $filtered_sellers;
                }
            }
            else{
                $filtered_sellers = array_slice($filtered_sellers,0,10);
            }

            $filtered_sellers = $this->distribute_buyAd_suggestions_in_sellers($filtered_sellers,$filtered_sellers_helper,$premium_seller_ids);
            
        }

        return $filtered_sellers;

    }

    protected function get_user_response_info($user_id,$product_last_uptade_date = null,$viewer_response_time = 0)
    {
        $contacts = DB::table('messages')
                                    ->where('receiver_id',$user_id)
                                    ->select(DB::raw("DISTINCT(sender_id) as sender_id,sum(TIMESTAMPDIFF(SECOND,created_at,updated_at)) as delay"))
                                    ->whereBetween('created_at',[Carbon::now()->subMonths(3),Carbon::now()])
                                    ->groupBy('sender_id')
                                    ->get();
        
        $total_contacts_count = $contacts->count();
        if ($total_contacts_count == 0) {
            if(is_null($product_last_uptade_date)){
                return [
                    'response_rate' => 100,
                    'response_time' => 0,
                    'ums' => 0
                ];
            }
            else{
                return [
                    'response_rate' => 100,
                    'response_time' => pow(Carbon::now()->diffInDays($product_last_uptade_date),2),
                    'ums' => 0
                ];
            }
            
        }

        $seen_by_user_contacts_count = $contacts->filter(function($msg){
            return $msg->delay != 0;
        })->count();

        $response_rate = round(($seen_by_user_contacts_count / $total_contacts_count) * 100, 2);

        $total_delay = (integer) ($contacts->sum('delay')/3600); //converting to hours

        if($total_delay == 0){ // it means user have messages but did not read any of them
            $response_time = -1;
        }
        else{
            $response_time =  round($total_delay/$total_contacts_count);
        }

        $ums = $total_contacts_count;

        return compact('response_rate','response_time','ums'); // UMS stands for unique message senders to this user
    }

    protected function get_suggested_buyAd_counts_sent_to_seller($seller_id)
    {
        $suggested_buyAd_counts = DB::table('buy_ad_suggestions')
                                        ->where('seller_id',$seller_id)
                                        ->get()->count();
        
        return $suggested_buyAd_counts;
    }

    protected function get_seller_response_rate_to_previous_buyAd_suggestions($seller_id,$suggested_buyAd_counts_sent_to_seller)
    {
        $contacts_count_from_suggested_buyAd_reply = DB::table('buy_ad_suggestions')
                                                            ->join('messages','messages.sender_id','=','buy_ad_suggestions.seller_id')
                                                            ->where('messages.sender_id',$seller_id)
                                                            ->get()
                                                            ->count();

        if($contacts_count_from_suggested_buyAd_reply == 0){
            return 100;
        }

        return round($contacts_count_from_suggested_buyAd_reply / $suggested_buyAd_counts_sent_to_seller);
    }

    protected function distribute_buyAd_suggestions_in_sellers($filtered_sellers,$filtered_sellers_helper,$premium_seller_ids)
    {
        $final_filtered_sellers = [];

        $tmp = [];
        foreach($premium_seller_ids as $seller){
            $tmp[] = $seller['user_id'];
        }

        $premium_seller_ids = $tmp;

        var_dump($filtered_sellers_helper);
        $filtered_sellers_helper['responsers'] = array_filter($filtered_sellers_helper['responsers'],function($seller_id) use($premium_seller_ids){
            return in_array($seller_id,$premium_seller_ids) === false;
        });

        var_dump($filtered_sellers_helper);

        $filtered_sellers_helper['others'] = array_filter($filtered_sellers_helper['others'],function($seller_id) use($premium_seller_ids){
            return in_array($seller_id,$premium_seller_ids) === false;
        });

        if(count($premium_seller_ids) > 3){
            $tmp = buy_ad_suggestion::whereIn('seller_id',$premium_seller_ids)
                                        ->select(DB::raw('MAX(created_at) as date,seller_id as user_id'))
                                        // ->distinct('seller_id')
                                        ->groupBy('user_id')
                                        ->orderBy('date')
                                        ->get()
                                        ->values()
                                        ->toArray();

            $alternative_premium_seller_ids = [];
            foreach($tmp as $seller){
                $alternative_premium_seller_ids[] = $seller['user_id'];
            }
            
            $premium_seller_ids = array_filter($premium_seller_ids,function($seller_id) use($alternative_premium_seller_ids){
                return in_array($seller_id,$alternative_premium_seller_ids) === false;
            });

            if(count($premium_seller_ids) < 3){
                $shortage = 3 - count($premium_seller_ids);
                $premium_seller_ids = array_merge($premium_seller_ids,array_slice($alternative_premium_seller_ids,0,$shortage));
            }
        }
        

        $final_filtered_sellers = array_slice($filtered_sellers_helper['responsers'],0,4); //40%
        $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($premium_seller_ids,0,3)); //30%
        $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($filtered_sellers_helper['others'],0,3)); //30%

        if(count($final_filtered_sellers) < 10){
            $shortage_count = 10 - count($final_filtered_sellers);
            $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($filtered_sellers,0,$shortage_count));
        }

        return $final_filtered_sellers;
    }


}
