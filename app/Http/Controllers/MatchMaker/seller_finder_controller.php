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

    protected $max_notified_sellers;

    public function __construct($max_notified_sellers = 12){
        $this->max_notified_sellers = $max_notified_sellers;
    }

    public function get_the_most_related_product_owners_id_to_the_given_buyAd_if_any(&$buyAd)
    {
        $buyAd_name_array = $this->get_buyAd_name_array($buyAd);
        
        $related_subcategory_products = $this->get_related_products_to_the_given_buyAd($buyAd,$buyAd_name_array);

        $premium_products = $this->get_premium_related_products($buyAd,$buyAd_name_array);

        $related_buyAd_repliers_only = $this->get_related_buyAd_repliers($buyAd,$buyAd_name_array);

        if($related_buyAd_repliers_only){
            $related_subcategory_products = array_merge($related_subcategory_products,$related_buyAd_repliers_only);
        }

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

    protected function get_buyAd_name_array($buyAd)
    {
        $buyAd_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $buyAd->name)))); //PHP is for professionals,not for kids
        
        $category_info = $this->get_category_and_subcategory_name($buyAd->category_id);

        if (count($buyAd_name_array)) {
            if ($buyAd_name_array[0] == $category_info['subcategory_name']) {
                array_splice($buyAd_name_array, 0, 1);
            }
        }

        $buyAd_name_array = $this->remove_black_list_words($buyAd_name_array);

        return $buyAd_name_array;
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

    protected function get_related_products_to_the_given_buyAd($buyAd,$buyAd_name_array)
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(120); // last 4 months

        $related_subcategory_products = DB::table('products')
                                            ->where('category_id', $buyAd->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('updated_at', [$from_date, $until_date])
                                            ->where('myuser_id','<>',$buyAd->myuser_id)
                                            ->where(function($q) use($buyAd_name_array){
                                                foreach($buyAd_name_array as $name){
                                                    $q = $q->orWhere('product_name','like',"%$name%");
                                                }

                                                return $q;
                                            })
                                            ->where('stock','>=',$buyAd->requirement_amount)
                                            ->whereNotExists(function($q) use($buyAd){
                                                $q->select(DB::raw(1))
                                                    ->from('buy_ad_suggestions')
                                                    ->whereRaw("buy_ad_suggestions.seller_id = products.myuser_id")
                                                    ->where(function($q) use($buyAd){
                                                        return $q = $q->whereBetween('created_at',[Carbon::now()->subHours(4),Carbon::now()])
                                                                        ->orWhere('buy_ad_suggestions.buy_ad_id',$buyAd->id);
                                                    });
                                                    // ->orWhereRaw("buy_ad_suggestions.buy_ad_id = {$buyAd->id} and buy_ad_suggestions.seller_id = products.myuser_id") //preventing from buyAd duplication notifications for sellers
                                                    // ->whereBetween('created_at',[Carbon::now()->subHours(4),Carbon::now()]);
                                            })
                                            ->select('myuser_id as user_id')
                                            ->distinct('user_id')
                                            ->orderBy('created_at')
                                            ->get()
                                            ->values()
                                            ->toArray();

        $result = [];
        foreach($related_subcategory_products as $item)
        {
            $result[] = $item->user_id;
        }

        return $result;
    }

    protected function get_premium_related_products($buyAd,$buyAd_name_array)
    {
        $premium_users_id = myuser::where('active_pakage_type','>',0)
                                ->select('id as user_id')
                                ->get();

        $premium_products = DB::table('products')
                                ->where('category_id',$buyAd->category_id)
                                ->where('confirmed',true)
                                ->whereIN('myuser_id',$premium_users_id)
                                ->where('myuser_id','<>',$buyAd->myuser_id)
                                ->where(function($q) use($buyAd_name_array){
                                    foreach($buyAd_name_array as $name){
                                        $q = $q->orWhere('product_name','like',"%$name%");
                                    }

                                    return $q;
                                })
                                ->where('stock','>=',$buyAd->requirement_amount)
                                ->whereNotExists(function($q) use($buyAd){
                                    $q->select(DB::raw(1))
                                        ->from('buy_ad_suggestions')
                                        ->whereRaw("buy_ad_suggestions.seller_id = products.myuser_id")
                                        ->where(function($q) use($buyAd){
                                            return $q = $q->whereBetween('created_at',[Carbon::now()->subHours(2),Carbon::now()])
                                                            ->orWhere('buy_ad_suggestions.buy_ad_id',$buyAd->id);
                                        });
                                        // ->orWhereRaw("buy_ad_suggestions.buy_ad_id = {$buyAd->id} and buy_ad_suggestions.seller_id = products.myuser_id") //preventing from buyAd duplication notifications for sellers
                                        // ->whereBetween('created_at',[Carbon::now()->subHours(2),Carbon::now()]);
                                })
                                ->select('myuser_id as user_id')
                                ->distinct('user_id')
                                ->orderBy('created_at')
                                ->get()
                                ->values()
                                ->toArray();

        $result = [];
        foreach($premium_products as $item)
        {
            $result[] = $item->user_id;
        }

        return $result;
    }

    protected function get_related_buyAd_repliers($buyAd,$buyAd_name_array)
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(60); // last 4 months

        $related_buyAd_repliers = DB::table('buy_ads')
                                        ->join('buy_ad_reply_meta_datas as meta','meta.buy_ad_id','=','buy_ads.id')
                                        ->where('buy_ads.confirmed',true)
                                        ->whereNotNull('buy_ads.name')
                                        ->whereBetween('meta.created_at',[$from_date,$until_date])
                                        ->where('buy_ads.category_id',$buyAd->category_id)
                                        ->where(function($q) use($buyAd_name_array){
                                            foreach($buyAd_name_array as $name){
                                                $q = $q->orWhere('buy_ads.name','like',"%$name%");
                                            }

                                            return $q;
                                        })->whereNotExists(function($q){
                                            $q->select(DB::raw(1))
                                                ->from('products')
                                                ->whereRaw("products.confirmed = true")
                                                ->whereRaw('products.myuser_id = meta.replier_id');
                                        })
                                        ->whereNotExists(function($q) use($buyAd){
                                            $q->select(DB::raw(1))
                                                ->from('buy_ad_suggestions')
                                                ->whereRaw("buy_ad_suggestions.seller_id = meta.replier_id")
                                                ->where(function($q) use($buyAd){
                                                    return $q = $q->whereBetween('created_at',[Carbon::now()->subHours(2),Carbon::now()])
                                                                    ->orWhere('buy_ad_suggestions.buy_ad_id',$buyAd->id);
                                                });
                                                // ->orWhereRaw("buy_ad_suggestions.buy_ad_id = {$buyAd->id} and buy_ad_suggestions.seller_id = meta.replier_id") //preventing from buyAd duplication notifications for sellers
                                                // ->whereBetween('created_at',[Carbon::now()->subHours(2),Carbon::now()]);
                                        })
                                        ->select('replier_id as user_id')
                                        ->distinct('user_id')
                                        ->orderBy('meta.created_at')
                                        ->get()
                                        ->values()
                                        ->toArray();

        $result = [];
        foreach($related_buyAd_repliers as $item)
        {
            $result[] = $item->user_id;
        }

        return $result;
    }


    protected function apply_selection_algorithm($buyAd_id,$seller_ids,$premium_seller_ids)
    {
        $tmp = [];
        foreach($seller_ids as $seller_id){ //seller ids are unique in array so we can use them as array key
            $tmp[$seller_id]= $this->get_user_last_activity_date($seller_id);
        }

        uasort($tmp,function($item1,$item2){
            $a = $item1;
            $b = $item2;

            return ($a < $b) ? 1 : -1;
        });

        $final_sellers = array_keys($tmp);

        // caclulating premium users activity ranking
        $tmp = [];
        foreach($premium_seller_ids as $seller){ //buyer ids are unique in array so we can use them as array key
            $tmp[$seller_id] = $this->get_user_last_activity_date($seller_id);
        }

        uasort($tmp,function($item1,$item2){
            $a = $item1;
            $b = $item2;

            return ($a < $b) ? 1 : -1;
        });

        $final_premium_sellers = array_keys($tmp);


        $final_filtered_sellers = array_unique(array_merge(array_slice($final_sellers,0,(integer) ($this->max_notified_sellers / 2)),array_slice($final_premium_sellers,0,(integer) ($this->max_notified_sellers / 2)) ) );

        if(count($final_filtered_sellers) < $this->max_notified_sellers){
            
            $shortage = abs($this->max_notified_sellers - count($final_filtered_sellers));
            $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($final_premium_sellers,(integer) ($this->max_notified_sellers / 2), $shortage));

            if(count($final_filtered_sellers) < $this->max_notified_sellers){
                $shortage = abs($this->max_notified_sellers - count($final_filtered_sellers));
                $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($final_sellers,(integer) ($this->max_notified_sellers / 2), $shortage));
            }
        }

        return $final_filtered_sellers;
    }

    ///////////////////////////////// incommon functions

    protected function get_user_last_activity_date($user_id)
    {
        $sending_message_records = DB::table('messages')
                                ->where('sender_id',$user_id)
                                ->whereNotExists(function($q) use($user_id){ //prevent duplication
                                    $q->select(DB::raw(1))
                                            ->from('auto_sent_phone_numbers_meta_datas as tmp')
                                            ->whereRaw("tmp.sender_id = $user_id")
                                            ->whereRaw('messages.receiver_id <> tmp.receiver_id');
                                })
                                ->select(DB::raw("distinct(created_at) as date"));

        $seen_message_records = DB::table('messages')->where('receiver_id',$user_id)
                                        ->where('is_read',true)
                                        ->select(DB::raw("distinct(updated_at) as date"));

        $profile_records = DB::table('profiles')->where('myuser_id',$user_id)
                                            ->select(DB::raw("distinct(updated_at) as date"));

        $product_records = DB::table('products')->where('products.myuser_id',$user_id)
                                            ->select(DB::raw("distinct(updated_at) as date"));

        $user_record = DB::table('myusers')->where('id',$user_id)
                                            ->select(DB::raw("updated_at as date"));

        $phone_view_record = DB::table('phone_number_view_logs')->where('myuser_id',$user_id)
                                                            ->select(DB::raw('created_at as date'));

        $last_activity_date = DB::table('buy_ads')->where('buy_ads.myuser_id',$user_id)
                                            ->select(DB::raw("distinct(updated_at) as date"))
                                            ->union($sending_message_records)
                                            ->union($profile_records)
                                            ->union($product_records)
                                            ->union($sending_message_records)
                                            ->union($user_record)
                                            ->union($phone_view_record)
                                            ->orderBy('date','desc')
                                            ->get()
                                            ->first()
                                            ->date;


        return $last_activity_date;
    }

    /////////////////////////////////////// zombie functions
    // zombie function
    protected function apply_sellers_filters($seller_ids,$premium_seller_ids)
    {
        $filtered_sellers = [];
        $filtered_sellers_helper = [];
        $filtered_sellers_helper['responsers'] = [];
        $filtered_sellers_helper['others'] = [];

        //Check for basic algorithm conditions
        foreach($seller_ids as $seller)
        {
            $response_info = $this->get_user_response_info($seller['user_id']);

            if($response_info['response_rate'] >= 75) //&& $response_info['response_time'] <= 144)
            {
                $suggested_buyAds = $this->get_suggested_buyAds_sent_to_seller($seller['user_id']);
    
                if(count($suggested_buyAds) < 4){
                    $filtered_sellers[] = $seller['user_id'];
                }
                else{
                    $response_rate_to_previous_buyAd_suggestions = $this->get_seller_response_rate_to_previous_buyAd_suggestions($seller['user_id'],$suggested_buyAds);
                    
                    if($response_rate_to_previous_buyAd_suggestions >= 25){
                        $filtered_sellers[] = $seller['user_id'];
                        $filtered_sellers_helper['responsers'][] = $seller['user_id'];
                    }
                }
            }
        }

        //check for detailed algorithm conditions
        if(count($filtered_sellers) > 12){
            $filtered_sellers = $this->apply_detailed_conditions_for_selecting_sellers($filtered_sellers,$filtered_sellers_helper,$premium_seller_ids);
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

    protected function apply_detailed_conditions_for_selecting_sellers($filtered_sellers,$filtered_sellers_helper,$premium_seller_ids)
    {
        
        $tmp = buy_ad_suggestion::whereIn('seller_id',$filtered_sellers)
                                    ->select(DB::raw('MAX(created_at) as date,seller_id as user_id'))
                                    // ->distinct('seller_id')
                                    ->groupBy('user_id')
                                    ->orderBy('date')
                                    ->get()
                                    ->values()
                                    ->toArray();

        $related_previous_buyAd_suggestion_records = [];
        foreach($tmp as $seller){
            $related_previous_buyAd_suggestion_records[] = $seller['user_id'];
        }
        
        if(count($related_previous_buyAd_suggestion_records) > 0){
            $filtered_sellers = array_filter($filtered_sellers,function($seller_id) use($related_previous_buyAd_suggestion_records){
                return  in_array($seller_id,$related_previous_buyAd_suggestion_records) === false;
            });
            
            if(count($filtered_sellers) < 12){
                $shortage_count = 12 - count($filtered_sellers);
                $filtered_sellers = array_merge($filtered_sellers,array_slice($related_previous_buyAd_suggestion_records,0,$shortage_count));
                $filtered_sellers_helper['others'] = $filtered_sellers;
            }
            else{
                $filtered_sellers_helper['others'] = $filtered_sellers;
                $filtered_sellers = array_slice($filtered_sellers,0,12);
            }
        }
        else{
            $filtered_sellers_helper['others'] = $filtered_sellers;
            $filtered_sellers = array_slice($filtered_sellers,0,12);
        }
        
        $filtered_sellers = $this->distribute_buyAd_suggestions_in_sellers($filtered_sellers,$filtered_sellers_helper,$premium_seller_ids);

        return $filtered_sellers;
    }

    protected function distribute_buyAd_suggestions_in_sellers($filtered_sellers,$filtered_sellers_helper,$premium_seller_ids)
    {
        $final_filtered_sellers = [];

        $tmp = [];
        foreach($premium_seller_ids as $seller){
            $tmp[] = $seller['user_id'];
        }

        $premium_seller_ids = $tmp;

        $filtered_sellers_helper['others'] = array_filter($filtered_sellers_helper['others'],function($seller_id) use($premium_seller_ids,$filtered_sellers_helper){
            return in_array($seller_id,$premium_seller_ids) === false && in_array($seller_id,$filtered_sellers_helper['responsers']) === false;
        });
        
        $filtered_sellers_helper['responsers'] = array_filter($filtered_sellers_helper['responsers'],function($seller_id) use($premium_seller_ids,$filtered_sellers_helper){
            return in_array($seller_id,$premium_seller_ids) === false;
        });

        $new_sellers = product::where('confirmed',true)
                                    ->whereIn('myuser_id',$filtered_sellers_helper['others'])
                                    ->whereBetween('updated_at',[Carbon::now()->subDays(90),Carbon::now()])
                                    ->select('myuser_id as user_id')
                                    ->distinct()
                                    ->get();

        $filtered_sellers_helper['new_sellers'] = [];
        foreach($new_sellers as $seller)
        {
            $filtered_sellers_helper['new_sellers'][] = $seller->user_id;
        }

        $filtered_sellers_helper['others'] = array_diff($filtered_sellers_helper['others'],$filtered_sellers_helper['new_sellers']);

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

        $final_filtered_sellers = array_slice($filtered_sellers_helper['responsers'],0,4); //34%
        $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($premium_seller_ids,0,3)); //25%
        $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($filtered_sellers_helper['others'],0,3)); //25%
        $final_filtered_sellers = array_merge($final_filtered_sellers,array_slice($filtered_sellers_helper['new_sellers'],0,2)); //16%

        $final_filtered_sellers = $this->fill_the_array_required_size($final_filtered_sellers,$filtered_sellers,12);

        return $final_filtered_sellers;
    }

    protected function fill_the_array_required_size($shrinked_array,$main_array_source,$final_size)
    {
        if(count($shrinked_array) >= $final_size)
        {
            $result_array =  array_slice($shrinked_array,0,$final_size);
        }
        else{
            $result_array = array_merge($shrinked_array,$main_array_source);
        }

        $result_array = array_unique($result_array);

        if(count($result_array) >= $final_size)
        {
            $result_array =  array_slice($result_array,0,$final_size);
        }

        return $result_array;
    }

    protected function get_suggested_buyAds_sent_to_seller($seller_id)
    {
        $suggested_buyAds = DB::table('buy_ad_suggestions')
                                        ->where('seller_id',$seller_id)
                                        ->get();
        
        return $suggested_buyAds;
    }

    protected function get_seller_response_rate_to_previous_buyAd_suggestions($seller_id,$suggested_buyAds)
    {
        $contacts_count_from_suggested_buyAd_reply = DB::table('buy_ad_reply_meta_datas')
                                                            ->whereIn('buy_ad_reply_meta_datas.buy_ad_id',$suggested_buyAds->pluck('buy_ad_id')->all())
                                                            ->where('buy_ad_reply_meta_datas.replier_id',$seller_id)
                                                            ->get()
                                                            ->count();

        $phone_number_view_count_from_suggested_buyAds = DB::tabl('phone_number_view_logs')
                                                            ->whereIn('phone_number_view_logs.myuser_id',$suggested_buyAds->pluck('buy_ad_id')->all())
                                                            ->where('phone_number_view_logs.viewer_id',$seller_id)
                                                            ->get()
                                                            ->count();


        return round(( ($contacts_count_from_suggested_buyAd_reply + $phone_number_view_count_from_suggested_buyAds) * 100) / count($suggested_buyAds));
    }

    ///////////////////////////////// zombie functions end


}
