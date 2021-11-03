<?php

namespace App\Jobs\LeadHandler;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Cache;
use App\Models\category;

class DistributeCategoryLeads implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $upper_lead_limit;
    protected $lower_lead_limit;
    protected $upper_time_limit;
    protected $lower_time_limit;
    protected $category_id;
    protected $time_frame;

    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر','درجه','یک'
    ];

    protected $selected_products = [];

    protected $lead_seller_class_matches_with_priority = [
        ['first_class_leads' => 'package_owner_sellers_products'],
        ['second_class_leads' => 'package_owner_sellers_products'],
        ['third_class_leads' => 'package_owner_sellers_products'],
        ['first_class_leads' => 'new_sellers_products'],
        ['second_class_leads' => 'new_sellers_products'],
        ['third_class_leads' => 'new_sellers_products'],
        ['first_class_leads' => 'verified_sellers_products'],
        ['second_class_leads' => 'verified_sellers_products'],
        ['third_class_leads' => 'verified_sellers_products'],
        ['first_class_leads' => 'other_sellers_products'],
        ['second_class_leads' => 'other_sellers_products'],
        ['third_class_leads' => 'other_sellers_products'], 
    ];

    protected $sellers_class_name_and_id_map = [
        'package_owner_sellers_products' => 1,
        'new_sellers_products' => 2,
        'verified_sellers_products' => 3,
        'other_sellers_products' => 4,
    ];


    protected $greeting_lines = [
        'سلام، وقت بخیر',
        'سلام',
        'درود بر شما',
        'سلام، وقت بخیر',
        'درود، وقت شما بخیر باشه',
        '',
        'درود',
        'با عرض سلام و خسته نباشید،',
        'ارادت',
        '',
        '',
    ];

    protected $description_lines = [
        '{NAME} هستم فروشنده عمده {CATEGORY} از نوع {PRODUCT}',
        'چه نوع {CATEGORY} نیاز دارید؟ بنده {NAME} هستم فروشنده ی عمده {CATEGORY}',
        '{CATEGORY} از نوع {PRODUCT} موجود داریم. {NAME} هستم فروشنده ی عمده',
        '{NAME} هستم. شما دنبال خرید عمده ی {CATEGORY} از نوع {PRODUCT} هستید؟',
    ];

    protected $call_to_action_lines = [
        'تصاویر محصول رو میتونید با زدن روی دکمه ی انتهای پیام ببینید.',
        'اگر قصد خرید دارید هم اینجا برای من پیام بذارید.',
        'برای انجام هماهنگی ها، هم اینجا پیام بذارید لطفا',
        'توضیح کامل و تصاویر محصول رو میتونید با زدن روی دکمه ی انتهای این پیام مشاهده کنید.',
        'لطفا بفرمایید چه مقداری نیاز دارید تا بتونم بهتر  شما رو راهنمایی کنم.',
        'چه تناژی قصد خرید دارید؟',
        'محصول با چه کیفیتی مورد نظرتون هست و در چه تناژی قصد خرید دارید؟',
        'تصاویر محصول و سایر توضیحات رو با زدن روی دکمه ی انتهای پیام می تونید مشاهده کنید.',
    ];
    public function __construct($category_id,$upper_lead_limit,$lower_lead_limit,$upper_time_limit,$lower_time_limit,$time_frame)
    {
        $this->category_id = $category_id;
        $this->upper_lead_limit = $upper_lead_limit;
        $this->lower_lead_limit = $lower_lead_limit;
        $this->upper_time_limit = $upper_time_limit;
        $this->lower_time_limit = $lower_time_limit;
        $this->time_frame = $time_frame;

        $this->selected_products = [];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        echo $this->category_id . "\n";
        $this->distribute_all_valid_leads($this->category_id);
    }

    protected function distribute_all_valid_leads($category_id)
    {
        $products = $this->get_first_nth_products_in_each_seller_class_according_to_given_category($category_id);

        if(is_null($products)){
            return null;
        }

        $leads = $this->collect_all_generated_leads_in_given_category($category_id);
        
        foreach($this->lead_seller_class_matches_with_priority as $item)
        {
            $this->assign_the_leads_to_the_products($leads[$this->my_array_key_first($item)],$products[$item[$this->my_array_key_first($item)]],$category_id,$this->sellers_class_name_and_id_map[$item[$this->my_array_key_first($item)]]);
        }

        $forbidden_lead_ids = [];
        if(count($this->selected_products) > 0){
            $forbidden_lead_ids = $this->send_products_advertise_to_related_buyers($this->selected_products);
        }

        foreach($leads as $lead_class)
        {
            $lead_class = array_filter($lead_class,function($lead) use($forbidden_lead_ids){
                return in_array($lead->id,$forbidden_lead_ids) == false;
            });

            if(! is_null($lead_class) && count($lead_class) > 0)
            {
                $this->update_assigned_leads($lead_class);
            }
        }
    }

    protected function get_category_lead_share_limits($category_id)
    {
        $share_data = DB::table('lead_balancer_meta_datas')
                    ->where('category_id',$category_id)
                    ->where('is_base',false)
                    ->orderBy('updated_at')
                    ->get()
                    ->last();

        if(is_null($share_data))
        {
            return [-1,-1,-1,-1];
        }

        $first_category_time_limit = (integer)(($share_data->time_period * 24) / ($share_data->upper_limit));
        $second_category_time_limit = (integer)(($share_data->time_period * 24) / ($share_data->lower_limit));

        $this->time_frame = $share_data->time_period;

        $result = array(
            $share_data->upper_limit,
            $share_data->lower_limit,
            $first_category_time_limit,
            $second_category_time_limit
        );

        return $result;
    }

    protected function collect_all_generated_leads_in_given_category($category_id)
    {
        $leads = DB::table('leads')->where('is_used',false)
                                    ->where('expiry_date','>',Carbon::now())
                                    ->where('category_id',$category_id)
                                    ->selectRaw('leads.* , (FLOOR((select count(distinct(m1.sender_id)) from messages as m1 where m1.is_read = true and m1.receiver_id = leads.buyer_id and not exists(select * from messages where messages.receiver_id = leads.buyer_id and m1.is_read = false ))/(select count(distinct(messages.sender_id)) from messages where messages.receiver_id = leads.buyer_id) * 100 )) as response_rate')
                                    ->get()
                                    ->toArray();

        $first_class_leads = [];
        $second_class_leads = [];
        $third_class_leads = [];

        foreach($leads as $lead)
        {
            if( ! (is_null($lead->response_rate) || $lead->response_rate >= 75)){
                continue;
            }

            if($lead->lead_class_id == 1){
                $first_class_leads[] = $lead;
            }
            else if($lead->lead_class_id == 2){
                $second_class_leads[] = $lead;
            }
            else if($lead->lead_class_id == 3){
                $third_class_leads[] = $lead;
            }
        }

        return compact('first_class_leads',
                       'second_class_leads',
                       'third_class_leads'
            );
    }

    protected function get_first_nth_products_in_each_seller_class_according_to_given_category($category_id)
    {
        $cache_key = md5('AllProducts');

        $products = null;
        if(Cache::has($cache_key)){
            $products = Cache::get($cache_key);
        }

        if(is_null($products)){
            return null;
        }

        $time_locked_sellers_ids = $this->get_time_locked_sellers($category_id);

        //OVERALL conditions
        $seller_ids = [];
        $products = array_filter($products,function($product) use($category_id,$time_locked_sellers_ids,&$seller_ids){
            $result = in_array($product['user_info']->id,$time_locked_sellers_ids) == false && ($product['main']->sub_category_id == $category_id) && (is_null($product['user_info']->response_rate) || $product['user_info']->response_rate >= 80);

            if($result){
                $seller_ids[] = $product['user_info']->id;
            }

            return $result;
        });
        //END

        $sellers_used_share_array = $this->get_sellers_used_share_info(array_unique($seller_ids),$category_id);

        $last_acceptable_date = Carbon::now()->subDays(7);

        $package_owner_sellers_products = [];
        $verified_sellers_products = [];
        $new_sellers_products = [];
        $other_sellers_products = [];

        foreach($products as $product)
        {
            if(array_key_exists($product['user_info']->id,$sellers_used_share_array)){
                $used_share = $sellers_used_share_array[$product['user_info']->id];
            }
            else {
                $used_share = 0;
            }

            if($product['user_info']->active_pakage_type > 0){
                if($this->get_seller_remained_lead_share_in_the_category($used_share,1,$category_id) > 0){
                    $package_owner_sellers_products[] = $product;
                }
            }
            else if($product['user_info']->is_verified == true){
                if($this->get_seller_remained_lead_share_in_the_category($used_share,2,$category_id) > 0){
                    $verified_sellers_products[] = $product;
                }
            }
            else if($product['user_info']->created_at > $last_acceptable_date){
                if($this->get_seller_remained_lead_share_in_the_category($used_share,3,$category_id) > 0){
                    $new_sellers_products[] = $product;
                }
            }
            else{
                if($this->get_seller_remained_lead_share_in_the_category($used_share,4,$category_id) > 0){
                    $other_sellers_products[] = $product;
                }
            }
        }

        $this->prioritize_products_according_to_seller_class($package_owner_sellers_products,1);
        $this->prioritize_products_according_to_seller_class($verified_sellers_products,2);
        $this->prioritize_products_according_to_seller_class($new_sellers_products,3);
        $this->prioritize_products_according_to_seller_class($other_sellers_products,4);


        return compact('package_owner_sellers_products',
                       'verified_sellers_products',
                       'new_sellers_products',
                       'other_sellers_products'
            );
    }

    protected function get_time_locked_sellers($category_id)
    {
        $time_locked_seller_ids = DB::table('leads')
                                        ->where(function($q) use($category_id){
                                            return $q->whereNotNull('assign_date')
                                                        ->where('category_id',$category_id)
                                                        ->whereIn('seller_class_id',[1,2,3])
                                                        ->whereBetween('assign_date',[Carbon::now()->subHours($this->upper_time_limit),Carbon::now()]);
                                        })
                                        ->orWhere(function($q) use($category_id){
                                            return $q->whereNotNull('assign_date')
                                                        ->where('category_id',$category_id)
                                                        ->whereIn('seller_class_id',[4])
                                                        ->whereBetween('assign_date',[Carbon::now()->subHours($this->lower_time_limit),Carbon::now()]);
                                        })
                                        ->pluck('seller_id')
                                        ->toArray();


        return array_unique($time_locked_seller_ids);
        
    }

    protected function get_sellers_used_share_info($seller_ids,$category_id)
    {
        $sellers_used_share_records = DB::table('leads')
                                            ->whereIn('seller_id',$seller_ids)
                                            ->where('category_id',$category_id)
                                            ->where('is_used',true)
                                            ->whereBetween('assign_date',[Carbon::now()->subDays($this->time_frame),Carbon::now()])
                                            ->selectRaw("count(leads.id) as used_share,seller_id")
                                            ->groupBy('seller_id')
                                            ->get();


        $sellers_used_share_array = [];
        foreach($sellers_used_share_records as $item)
        {
            $sellers_used_share_array[$item->seller_id] = $item->used_share;
        }

        return $sellers_used_share_array;
    }

    protected function prioritize_products_according_to_seller_class(&$products,$sellers_class_id)
    {
        if(count($products) == 0){
            return null;
        }

        $sort_callback_function = $this->get_sort_call_back_function($sellers_class_id);

        usort($products,$sort_callback_function);
    }

    protected function get_sort_call_back_function($sellers_class_id)
    {
        if($sellers_class_id == 1 || $sellers_class_id == 2 || $sellers_class_id == 3){
            return function($item1,$item2){
                $a = is_null($item1['user_info']->response_time) ? 0 : $item1['user_info']->response_time;
                $b = is_null($item2['user_info']->response_time) ? 0 : $item2['user_info']->response_time;
    
                if($a == $b){
                    return $item1['main']->updated_at < $item2['main']->updated_at;
                }
                return ($a > $b) ? 1 : -1;
            };
        }
        else if($sellers_class_id == 4){
            return function($item1,$item2){
                $a = is_null($item1['user_info']->response_time) ? 0 : $item1['user_info']->response_time;
                $b = is_null($item2['user_info']->response_time) ? 0 : $item2['user_info']->response_time;
    
                if($a == $b){
                    return $item1['main']->updated_at < $item2['main']->updated_at;
                }
                return ($a > $b) ? 1 : -1;
            };
        }
    }

    protected function get_seller_remained_lead_share_in_the_category($shared_leads_count_so_far,$seller_class_id,$category_id)
    {
        switch($seller_class_id){
            case 1:
            case 2:
            case 3:
                $lead_share = $this->upper_lead_limit + config("subscriptionPakage.sellers-share-plus-count.{$seller_class_id}");
                break;
            case 4:
                $lead_share = $this->lower_lead_limit;
                break;
        }
        
        if($shared_leads_count_so_far >= $lead_share){
            return 0;
        }

        $result = $lead_share - $shared_leads_count_so_far;
        
        return $result;

    }

    protected function assign_the_leads_to_the_products(&$leads,&$products,$category_id,$seller_class_id)
    {
        
        if(is_null($leads) || is_null($products) || count($leads) == 0 || count($products) == 0)
        {
            return null;
        }
    
        $category_info = $this->get_category_and_subcategory_name($category_id);

        $now = Carbon::now();


        foreach($leads as $lead_key => $lead)
        {
            if(is_null($lead->keywords)){
                unset($leads[$lead_key]); //remove this lead from array

                continue;
            }

            if(! is_null($lead->related_product_id)){
                continue;
            }


            $lead_keywords_array = array_slice($this->get_lead_keywords_array($lead->keywords,$category_info),0,4);

            foreach($products as $product_key => $product)
            {
                foreach($lead_keywords_array as $word)
                {
                    if($this->does_search_text_matche_the_product($word,$product) == true)
                    {
                        if($this->does_product_already_has_been_matched_with_this_buyer($product['user_info']->id,$lead->buyer_id,$this->selected_products) == false)
                        {
                            $lead->related_product_id = $product['main']->id;
                            $lead->seller_id = $product['user_info']->id;
                            $lead->seller_class_id = $seller_class_id;
                            $lead->assign_date = $now->format('Y-m-d H:i:s');
                            $lead->is_used = true;

                            $this->selected_products[$lead->id] = [ 'product' => $product,
                                                                    'buyer_id' => $lead->buyer_id,
                                                                ];
                            unset($products[$product_key]); // remove the product from list

                            continue 3;
                        }
                        else{
                            continue 2;
                        }
                    } 
                }

            }
            
        }
    }

    protected function get_lead_keywords_array($lead_keywords,$category_info)
    {
        $lead_keywords_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $lead_keywords)))); //PHP is for professionals,not for kids
        
        //reindex the array
        $lead_keywords_array = array_values($lead_keywords_array);
        //end of reindexing
        
        if (count($lead_keywords_array) > 0 && is_array($lead_keywords_array)) {
            if ($lead_keywords_array[0] == $category_info['subcategory_name']) {
                array_splice($lead_keywords_array, 0, 1);
            }
        }

        $lead_keywords_array = $this->remove_black_list_words($lead_keywords_array);

        return $lead_keywords_array;
    }

    protected function remove_black_list_words(&$words)
    {
        $result = [];

        foreach ($words as $word) {
            $index = array_search($word, $this->words_blacklist);
            if ($index === false && strlen($word) >= 3) {
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

    protected function does_search_text_matche_the_product($search_expresion, &$product)
    {
        // $product_info[] = $product['main']->sub_category_name;
        $product_info[] = $product['main']->product_name;
        $product_info[] = $product['main']->description;

        $result = array_filter($product_info, function ($item) use ($search_expresion) {
            try{
                $search_expresion = str_replace("\\","",$search_expresion);
                $search_expresion = str_replace("/","",$search_expresion);

                return preg_match("/$search_expresion/", $item);
            }
            catch(\Exception $e){
                return false;
            }
            
        });

        if (sizeof($result) > 0) {
            return true;
        } 

        return false;
    }

    protected function update_assigned_leads($leads)
    {
        $leads = array_filter($leads,function($lead){
            unset($lead->response_rate);

            return is_null($lead->related_product_id) == false;
        });

        if(count($leads) == 0){
            return 0;
        }

        $selected_leads = [];
        foreach($leads as $lead)
        {
            $lead = array_values((array) $lead);
            for($i = 0 ; $i < count($lead) ; $i++)
            {
                $item = "'" . $lead[$i] . "'";
                $lead[$i] = $item;
            }

            $tmp = '(' . implode(',' ,array_values($lead)) . ')';
            $selected_leads[] = $tmp;
        }
       
        $values = implode(',', $selected_leads);

        $query = "insert into leads (id, created_at, updated_at, buyer_id, is_used, expiry_date, seller_id, assign_date, lead_class_id, seller_class_id, related_product_id, keywords, category_id) VALUES {$values}  on duplicate key update id = VALUES(id), created_at = VALUES(created_at), updated_at = VALUES(updated_at), buyer_id = VALUES(buyer_id), is_used = VALUES(is_used) , expiry_date = VALUES(expiry_date) , seller_id = VALUES(seller_id), assign_date = VALUES(assign_date), lead_class_id = values(lead_class_id), seller_class_id = values(seller_class_id) , related_product_id = values(related_product_id), keywords = values(keywords), category_id = values(category_id)";
        
        DB::insert($query);
    }

    protected function send_products_advertise_to_related_buyers($selected_products)
    {
        $messages = [];
        $now = Carbon::now();

        $forbidden_leads_to_send_advertisement = $this->get_already_advertised_product_ids_for_the_same_buyer($selected_products);

        $result = [];
        foreach($selected_products as $key => $item){
            if(in_array($key,$forbidden_leads_to_send_advertisement) == false){
                $result[] = $item;
            }
        }

        foreach($result as $item)
        {
            $msg = [ 
                'sender_id' => $item['product']['user_info']->id,
                'receiver_id' => $item['buyer_id'],
                'text' => $this->create_product_advertisement_message($item['product']),
                'is_read' => false,
                'created_at' => $now,
                'updated_at' => $now
            ];

            $messages[] = $msg;
        }
        echo 'Ali' . "\n";
        DB::table('messages')->insert($messages);

        return $forbidden_leads_to_send_advertisement; //these are real advertised lead ids
    }

    protected function get_already_advertised_product_ids_for_the_same_buyer($selected_products)
    {
        if(count($selected_products) > 0){
                $lead_ids = DB::table('leads')->where(function($q) use($selected_products){
                    foreach($selected_products as $item)
                    {
                        $q = $q->orWhere(function($q1) use($item){
                                return $q1->where('leads.related_product_id',$item['product']['main']->id)
                                    ->where('leads.buyer_id',$item['buyer_id']);
                        });
                    }

                    return $q;
                })->pluck('id')
                ->toArray();

                return $lead_ids;
        }

        return [];  
    }

    protected function create_product_advertisement_message(&$product)
    {
        $seller_full_name = $product['user_info']->first_name . ' ' . $product['user_info']->last_name;

        $random_key = array_rand($this->description_lines);
        $description = $this->description_lines[$random_key];

        $description = str_replace(['{NAME}','{CATEGORY}','{PRODUCT}'],
                                   [$seller_full_name,$product['main']->sub_category_name,$product['main']->product_name],
                                   $description
                                );

        $price = number_format($product['main']->min_sale_price);
        $price_msg = "حدود کف قیمت برای هر کیلو {$price} تومان است." . "\n\n";
        
        $msg = $this->greeting_lines[array_rand($this->greeting_lines)] . "\n";
        $msg = $msg . $description . "\n\n";
        $msg = $msg . $this->call_to_action_lines[array_rand($this->call_to_action_lines)] . "\n\n";
        if($price_msg){
            $msg = $msg . $price_msg;
        }
        $msg = $msg . "ارسال شده توسط دلسا (منشی خودکار باسکول ❤️)" . "\n";
        $msg = $msg . ":p={$product['main']->id}";

        return $msg;
    }

    protected function does_product_already_has_been_matched_with_this_buyer($seller_id,$buyer_id,$already_selected_products)
    {
        foreach($already_selected_products as $item)
        {
            if($item['product']['user_info']->id == $seller_id && $item['buyer_id'] == $buyer_id){
                return true;
            }
        }

        $old_msgs_count = DB::table('messages')
                                ->where(function($q) use($seller_id,$buyer_id){
                                    return $q->where('sender_id',$seller_id)
                                                ->where('receiver_id',$buyer_id);
                                })->orWhere(function($q) use($seller_id,$buyer_id){
                                    return $q->where('sender_id',$buyer_id)
                                                ->where('receiver_id',$seller_id);
                                })->get()
                                ->count();

        if($old_msgs_count > 0){
            return true;
        }

        return false;
    }

    protected function my_array_key_first(array $arr)
    {
        foreach($arr as $key => $unused) {
            return $key;
        }
        return NULL; 
    }
}
