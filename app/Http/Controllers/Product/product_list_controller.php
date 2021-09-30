<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\category;
use App\Models\myuser;
use DB;
use App\Models\product_media;
use App\Models\product;
use App\Models\buyAd;
use App\Models\tag;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;
use App\Http\Middleware\login;
use App\Models\phone_number_view_log;
use App\Http\Controllers\General\category_controller;


class product_list_controller extends Controller
{
    protected $user_info_sent_by_product_array = [
        'myusers.id as user_id',
        'myusers.user_name',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.active_pakage_type',
        'myusers.created_at',
        'myusers.is_verified'
    ];
    protected $profile_info_sent_by_product_array = [
        // 'profiles.profile_photo',
    ];

    protected $product_info_sent_by_product_array = [
        'products.id as product_id',
        'products.updated_at',  
        'products.product_name', 
        'products.stock', 
        'products.min_sale_price', 
        'products.max_sale_price', 
        'products.min_sale_amount', 
        'products.description',
        'products.address', 
        'products.myuser_id', 
        'products.category_id as sub_category_id', 
        'products.confirmed',
        'provinces.province_name',
        'provinces.id as province_id', 
        'cities.city_name', 
        'cities.id as city_id', 
        'c.category_name as sub_category_name', 
        'products.is_elevated',
    ];

    protected $sorting_options_array = [
        'RR' => 'sort_products_by_response_rate', // response rate
        'RT' => 'sort_products_by_response_time', // response time
        // 'RS' => 'sort_products_by_review_score', //review score
        'RD' => 'sort_products_by_registeration_date',// product owner registration date
        'BM' => 'sort_products_by_best_match'
    ];

    protected $product_list_validation_rules = [
        'from_record_number' => 'integer|min:0',
        'to_record_number' => 'integer|min:1',
        'category_id' => 'integer|exists:categories,id',
        // 'sub_category_id' => 'integer|exists:categories,id',
        'province_id' => 'integer|exists:provinces,id',
        'city_id' => 'integer|exists:cities,id',
        'search_text' => 'string',
        'special_products' => 'boolean',
        'sort_by' => 'string'
    ];

    protected $output_attributes = [
        'main' => [
            'product_id',
            'product_name',
            'stock',
            'min_sale_amount',
            'min_sale_price',
            'description',
            'myuser_id',
            'sub_category_id',
            'province_name',
            'province_id',
            'city_name',
            'city_id',
            'sub_category_name',
            'category_name',
            'category_id',
            'is_elevated',
            'updated_at',
            'photos_count',
            'photo'
        ],
        'user_info' => [
            'user_id',
            'user_name',
            'first_name',
            'last_name',
            'is_verified',
            'active_pakage_type',
            'response_rate',
            'response_time',
            'ums', // unique message senders to the user
            'upr', // unique phone number receivers
            'created_at',
        ],
        'profile_info' => [
            'profile_photo',
        ],
        'photos' => [
            'file_path',
        ],
    ];

    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر','-','(',')','،',','
    ];

    protected $activate_cache = true;
    protected $is_search_text_category_name = true;

    public function get_product_list(Request $request)
    {
        $this->validate($request,$this->product_list_validation_rules);

        $products = $this->get_products_from_cache();

        $products = array_filter($products,function($product){
            return $product['user_info']->response_rate >= 50;
        });

        $is_filter_applied = $this->apply_product_filters($request,$products);

        if(is_null($products)){
            return response()->json([
                'status' => false,
                'msg' => 'Try again later!'
            ],500);
        }

        if($request->has('sort_by')){
            
            if($this->is_sorting_option_valid($request->sort_by)){
                
                if($request->sort_by == 'BM'){
                    $cache_key = md5('products-' . session('user_id'));

                    if($is_filter_applied == false && Cache::has($cache_key)){
                        $products = Cache::get($cache_key);
                    }
                    else{
                        $products = $this->{$this->sorting_options_array[$request->sort_by]}($products);

                        if($is_filter_applied == false){
                            Cache::put($cache_key,$products,15);  
                        }
                    }
                }
                else{
                    $products = $this->{$this->sorting_options_array[$request->sort_by]}($products);
                }
            }
            else{
                    usort($products, function ($item1, $item2) {
                        $a = $item1['main']->is_elevated;
                        $b = $item2['main']->is_elevated;

                        if ($a == $b) {
                            return $item1['main']->updated_at < $item2['main']->updated_at;
                        }

                        return ($a < $b) ? 1 : -1;
                    });
                }
        }
        else{

            usort($products, function ($item1, $item2) {
                $a = $item1['main']->is_elevated;
                $b = $item2['main']->is_elevated;

                if ($a == $b) {
                    return $item1['main']->updated_at < $item2['main']->updated_at;
                }

                return ($a < $b) ? 1 : -1;
            });
        }

        if ($request->filled('from_record_number') && $request->filled('to_record_number')) {
            $offset = abs($request->from_record_number - $request->to_record_number);

            $products = array_slice($products, $request->from_record_number, $offset, true);
        }

        return response()->json([
            'status' => true,
            'products' => array_values($products),
        ], 200);
    }

    protected function get_products_from_cache()
    {
        $cache_key = md5('AllProducts');

        if(Cache::has($cache_key)){
            $products = Cache::get($cache_key);
        }
        else{
            $products = $this->get_all_products_with_related_media();

            if(! Cache::has($cache_key)){
                Cache::put($cache_key,$products,30);
            }    
        }

        return $products;
    }

    protected function is_sorting_option_valid($option)
    {
        if($option == 'BM'){
            if(!session()->has('user_id')){
                return false;
            }
        }

        return in_array($option,array_keys($this->sorting_options_array));
    } 
    
    protected function apply_product_filters($request,&$products)
    {
        $is_filter_applied = false;

        if($request->has('category_id')){
            $this->apply_category_filter($products,$request->category_id);
            $is_filter_applied = true;
        }

        if($request->has('province_id')){
            $this->apply_province_filter($products,$request->province_id);
            $is_filter_applied = true;
        }

        if($request->has('city_id')){
            $this->apply_city_filter($products,$request->city_id);
            $is_filter_applied = true;
        }

        if($request->has('search_text')){
            $this->apply_search_text_filter($products,$request->search_text);
            $is_filter_applied = true;
        }

        if($request->has('special_products')){
            $this->apply_special_products_filter($products,$request->special_products);
            $is_filter_applied = true;
        }

        return $is_filter_applied;
    }

    public function get_all_products_with_related_media()
    {
        $products = $this->get_all_products();

        // $products = $this->append_related_data_to_given_products($products);

        foreach($products as $product)
        {
            // $response_info = $this->get_user_response_info($product['user_info']->id);
            if(Carbon::now()->diffInMonths($product['main']->updated_at) >= 3){
                $product['user_info']->response_time =  -1;
            }
            else{
                $product['user_info']->response_time =  $product['user_info']->response_time ?? -1;
            }
            $product['user_info']->response_rate = $product['user_info']->response_rate ?? 100;

            if($product['user_info']->active_pakage_type > 0 && $product['user_info']->response_rate > 70){
                $product['user_info']->ums = (integer) (($product['user_info']->ums)/(Carbon::now()->diffInWeeks($product['main']->updated_at) + 1));
            }
        }

        return $products;
    }

    protected function get_all_products()
    {
        $selected_items = array_merge($this->product_info_sent_by_product_array,
                                        $this->user_info_sent_by_product_array);

        $products = DB::table('products')
                        ->join('categories as c', 'products.category_id', '=', 'c.id')
                        ->join('myusers','products.myuser_id','=','myusers.id')
                        ->leftJoin('cities', 'cities.id', '=', 'products.city_id')
                        ->leftJoin('provinces', 'provinces.id', '=', 'cities.province_id')
                        ->selectRaw(implode(', ' , $selected_items) . ',( 
                            FLOOR((select count(distinct(m1.sender_id)) from messages as m1 where m1.is_read = true and m1.receiver_id = products.myuser_id and not exists(select * from messages where messages.receiver_id = products.myuser_id and m1.is_read = false ))/(select count(distinct(messages.sender_id)) from messages where messages.receiver_id = products.myuser_id) * 100 )) as response_rate,
                            (
                                (select sum(TIMESTAMPDIFF(HOUR,messages.created_at,messages.updated_at)) from messages where messages.receiver_id = products.myuser_id and messages.is_read = true and messages.created_at between SUBDATE(NOW(), INTERVAL 3 MONTH) and NOW() ) / (select count(messages.id) from messages where messages.is_read = true and messages.receiver_id = products.myuser_id and messages.created_at between SUBDATE(NOW(), INTERVAL 3 MONTH) and NOW() )
                            ) as response_time,(select categories.category_name from categories where c.parent_id = categories.id) as category_name,(select categories.id from categories where c.parent_id = categories.id) as category_id,(select count(id) from product_media where product_media.product_id = products.id) as photos_count,(select file_path from product_media where product_media.product_id = products.id order by product_media.id asc limit 1) as file_path,(select count(distinct(messages.sender_id)) from messages where messages.receiver_id = products.myuser_id) as ums,(select count(distinct(phone_number_view_logs.viewer_id)) from phone_number_view_logs where phone_number_view_logs.myuser_id = products.myuser_id) as upr')
                        ->distinct('products.id')
                        ->whereNull('products.deleted_at')
                        ->where('myusers.is_blocked',false)
                        ->where('products.confirmed', true)
                        ->get();

        $products = $this->prepare_data_for_client($products);

        return $products;
    }

    protected function prepare_data_for_client(&$products)
    {
        $profiles = DB::table('profiles')
                        ->where('confirmed',true)
                        ->whereIn('myuser_id',array_column($products->all(),'myuser_id'))
                        ->selectRaw('profiles.myuser_id,profiles.profile_photo,MAX(profiles.created_at)')
                        ->groupBy(DB::raw('profiles.myuser_id desc'))
                        ->get();

        $result_products = [];
        foreach($products as $product){
            foreach($profiles as $profile){
                if($profile->myuser_id == $product->myuser_id){
                    $product->profile_photo = $profile->profile_photo;
                    continue;
                }
            }
            $result_products[] = $this->categorize_product_data($product);
        }

        return $result_products;
    }

    protected function categorize_product_data($product)
    {
        $categorized_product['main'] = new \stdClass;
        $categorized_product['user_info'] = new \stdClass;
        $categorized_product['profile_info'] = new \stdClass;
        $categorized_product['photos'] = [];

        $product_attributes = get_object_vars($product);
        foreach($product_attributes as $key => $value)
        {
            if(in_array($key,$this->output_attributes['main']) === true ){
                if($key == 'product_id'){
                    $key = 'id';
                }
                $categorized_product['main']->$key = $value;
            }
            else if(in_array($key,$this->output_attributes['user_info']) === true){
                if($key == 'user_id'){
                    $key = 'id';
                }
                $categorized_product['user_info']->$key = $value;
            }
            else if(in_array($key,$this->output_attributes['profile_info']) === true){
                $categorized_product['profile_info']->$key = $value;
            }
            else if(in_array($key,$this->output_attributes['photos']) === true){
                $tmp = new \stdClass;
                $tmp->$key = $value;
                $categorized_product['photos'][] = $tmp;
            }
        }

        return $categorized_product;
    }

    protected function get_package_buyers_user_id_array()
    {
        $user_id = session('user_is');

        $user_id_array = myuser::where('active_pakage_type', 3)
                                    ->where('id','<>',$user_id)
                                    ->select('id')
                                    ->get()
                                    ->toArray();

        return $user_id_array;
    }

    protected function append_related_data_to_given_products($products)
    {
        $main_records = $this->product_info_sent_by_product_array;
        array_walk($main_records,function(&$property_name){
            $new_value = explode('.',$property_name)[1];
            $new_value_array = explode(' as ',$new_value);
            $property_name = sizeof($new_value_array) > 1 ? $new_value_array[1] : $new_value_array[0]; 
        });
        
        $user_records = $this->user_info_sent_by_product_array;
        array_walk($user_records,function(&$property_name){
            $new_value = explode('.',$property_name)[1];
            $new_value_array = explode(' as ',$new_value);
            $property_name = sizeof($new_value_array) > 1 ? $new_value_array[1] : $new_value_array[0]; 
        });

        $profile_records = $this->profile_info_sent_by_product_array;
        array_walk($profile_records,function(&$property_name){
            $new_value = explode('.',$property_name)[1];
            $new_value_array = explode(' as ',$new_value);
            $property_name = sizeof($new_value_array) > 1 ? $new_value_array[1] : $new_value_array[0]; 
        });

        $result_products = [];

        foreach ($products as $product) {
            $temp = array();
            $product_related_photos = product_media::where('product_id',$product->id)
                ->select('file_path')
                ->get();

            $product_related_data_tmp = $this->get_product_related_data($product->id);
    
            $product_related_data['main'] = new \StdClass;
            foreach($main_records as $property_name)
            {
                if($property_name == 'product_id'){
                    $product_related_data['main']->id = $product_related_data_tmp->$property_name;
                }
                else{
                    $product_related_data['main']->$property_name = $product_related_data_tmp->$property_name;
                }
            }

            $product_related_data['user_info'] = new \StdClass;
            foreach($user_records as $property_name)
            {
                if($property_name == 'user_id'){
                    $product_related_data['user_info']->id = $product_related_data_tmp->$property_name;
                }   
                else{
                    $product_related_data['user_info']->$property_name = $product_related_data_tmp->$property_name;
                }
            }

            $product_related_data['profile_info'] = new \StdClass;
            foreach($profile_records as $property_name)
            {
                $product_related_data['profile_info']->$property_name = $product_related_data_tmp->$property_name;
            }

            $product_related_data['photos'] = $product_related_photos;

            $product_parent_category_data = $product->category;
            $product_related_data['main']->category_id = $product_parent_category_data['parent_id'];
            $product_related_data['main']->category_name = (category::find($product_parent_category_data['parent_id']))['category_name'];

            $result_products[] = $product_related_data;
        }

        return $result_products;
    }

    protected function get_product_related_data($product_id)
    {
        $selected_items = array_merge($this->product_info_sent_by_product_array,
                                        $this->user_info_sent_by_product_array,
                                        $this->profile_info_sent_by_product_array);

        $product_with_related_data = DB::table('products')
                    ->join('categories', 'products.category_id', '=', 'categories.id')
                    ->join('myusers','products.myuser_id','=','myusers.id')
                    ->join('profiles','myusers.id','=','profiles.myuser_id')
                    ->leftJoin('cities', 'cities.id', '=', 'products.city_id')
                    ->leftJoin('provinces', 'provinces.id', '=', 'cities.province_id')
                    ->select($selected_items)
                    ->where('profiles.confirmed',true)
                    ->where('products.id', $product_id)
                    ->where('products.confirmed', true)
                    ->get()
                    ->last();

        return $product_with_related_data;
    }

    protected function sort_products_by_best_match(&$products)
    {
        $user_id = session('user_id');

        $user_info = myuser::find($user_id);

        $tmp_products = [];
        //this condition checks if buyer has buyAd request to show five related products at top list
        if($user_info->is_buyer == true){
            
            $tmp_products = $this->apply_customized_related_products_filter_for_buyers($products,$user_info);
            $products =  $this->sort_products_by_response_time($products);

            if(count($tmp_products) > 0){
                $tmp_product_ids = [];
                foreach($tmp_products as $product)
                {
                    $tmp_product_ids[] = $product['main']->id;
                }
                
                $products = array_filter($products,function($product) use($tmp_product_ids){
                    return in_array($product['main']->id,$tmp_product_ids) == false;
                });
            }

            $products = array_unique(array_merge($tmp_products,$products),SORT_REGULAR);
        }
        else if($user_info->is_seller == true){
            $products = $this->sort_products_by_response_rate($products);
        }

        $products = $this->remove_duplicated_sellers($products);

        return $products;
    }

    protected function get_best_match_call_back_function(&$user_response_info)
    {
        if($user_response_info['response_time'] == 0 && $user_response_info['response_rate'] == 100){

            return function($item1,$item2) use($user_response_info){
                $a = $item1['main']->is_elevated == true ? $item1['main']->updated_at :  $item1['main']->is_elevated;
                $b = $item2['main']->is_elevated == true ? $item2['main']->updated_at :  $item2['main']->is_elevated;
    
                if($a == $b){
                    $c = $item1['user_info']->response_time != -1 ? Carbon::now()->diffInDays($item1['main']->updated_at) : 100;
                    $d = $item2['user_info']->response_time != -1 ? Carbon::now()->diffInDays($item2['main']->updated_at) : 100;
                
                    if($c == $d){
                        $e = $item1['user_info']->active_pakage_type;
                        $f = $item2['user_info']->active_pakage_type;

                        if($e == $f){
                            return $item1['main']->updated_at < $item2['main']->updated_at;
                        }
        
                        return ($e > $f) ? 1 : -1;
                    }
                    return ($c > $d) ? 1 : -1;
                }
                return ($a < $b) ? 1 : -1;
            };
        }
        else{
            return function($item1,$item2) use($user_response_info){
                $a = $item1['main']->is_elevated == true ? $item1['main']->updated_at :  $item1['main']->is_elevated;
                $b = $item2['main']->is_elevated == true ? $item2['main']->updated_at :  $item2['main']->is_elevated;
    
                if($a == $b){
                    $item1_degree = $item1['user_info']->ums + $item1['user_info']->upr;
                    $item2_degree = $item2['user_info']->ums + $item2['user_info']->upr;

                    $c = (Carbon::now()->diffInDays($item1['main']->updated_at) < 3) ? 0 : abs($user_response_info['ums'] + $user_response_info['upr'] - $item1_degree);
                    $d = (Carbon::now()->diffInDays($item2['main']->updated_at) < 3) ? 0 : abs($user_response_info['ums'] + $user_response_info['upr'] - $item2_degree);
    
                    if($c == $d){
                        $e = (((Carbon::now()->diffInDays($item1['main']->updated_at) < 2)) || ($item1['user_info']->response_time > 0 )) ? $item1['user_info']->ums : 10000;
                        $f = (((Carbon::now()->diffInDays($item2['main']->updated_at) < 2)) || ($item2['user_info']->response_time > 0 )) ? $item2['user_info']->ums : 10000;
    
                        if($e == $f){
                            $g = $item1['user_info']->active_pakage_type;
                            $h = $item2['user_info']->active_pakage_type;
    
                            if($g == $h){
                                return $item1['main']->updated_at < $item2['main']->updated_at;
                            }
                            return ($g > $h) ? 1 : -1;
                        }
                        return ($e > $f) ? 1 : -1;
                    }
    
                    return ($c > $d) ? 1 : -1;
                }
    
                return ($a < $b) ? 1 : -1;
            };
        }
}

    protected function get_users_similarity($user1,$user2)
    {
        $v1 = [
            $user1->response_rate,
            $user1->response_time,
        ];

        $v2 = [
            $user2['response_rate'],
            $user2['response_time'],
        ];

        $inner_product_value = $this->get_inner_product_value($v1,$v2);
        $v1_size = $this->get_vector_size($v1);
        $v2_size = $this->get_vector_size($v2);

        $similarity = $inner_product_value / ($v1_size * $v2_size);

        return round($similarity,2);
    }

    protected function get_inner_product_value($v1,$v2)
    {
        $res = 0;
        for($i = 0 ; $i < 2 ;  $i++){
            $res += $v1[$i] * $v2[$i];
        }

        return $res;
    }

    protected function get_vector_size($v)
    {
        $sum = 0;
        foreach($v as $item)
        {
            $sum += pow($item,2);
        }

        return sqrt($sum);
    }

    protected function get_user_response_info($user_id,$product_last_uptade_date = null,$viewer_response_time = 0)
    {
        $contacts = DB::table('messages')
                                    ->where('receiver_id',$user_id)
                                    ->select(DB::raw("DISTINCT(sender_id) as sender_id,sum(TIMESTAMPDIFF(SECOND,created_at,updated_at)) as delay"))
                                    ->whereBetween('created_at',[Carbon::now()->subMonths(9),Carbon::now()])
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

        $ums = $total_contacts_count; // UMS stands for unique message senders to this user

        $user_phone_view_log = phone_number_view_log::where('myuser_id',$user_id)
                        ->select(DB::raw("DISTINCT(viewer_id) as cnt"))
                        ->get()
                        ->first();

        if($user_phone_view_log){
            $upr = $user_phone_view_log->cnt;
        }
        else{
            $upr = 0;
        }

        return compact('response_rate','response_time','ums','upr'); // UMS stands for unique message senders to this user
    }

    protected function apply_province_filter_in_query($query,$province_id)
    {
        $province_cities = cities::where('province_id',$province_id)->select('id')->get();
            
        $query = $query->where(function($q) use($province_cities){
            foreach($province_cities as $city){
                $q = $q->orWhere('city_id',$city->id);
            }

            return $q;
        });

        return $query;
    }

    protected function apply_province_filter(&$products,$province_id)
    {
        $products = array_filter($products,function($product) use($province_id){
            return $product['main']->province_id == $province_id;
        });
    }

    protected function apply_category_filter_in_query($query,$category_id)
    {
        $subcategories = category::where('parent_id',$category_id)->select('id')->get();

        $query = $query->where(function($q) use($subcategories){
            foreach($subcategories as $subcategory_id){
                $q = $q->orWhere('category_id',$subcategory_id);
            }

            return $q;
        });

        return $query;
    }

    protected function apply_category_filter(&$products,$category_id)
    {
        $products = array_filter($products,function($product) use($category_id){
            return $product['main']->sub_category_id == $category_id;
        });
    }

    protected function apply_city_filter(&$products,$city_id)
    {
        $products = array_filter($products,function($product) use($city_id){
            return $product['main']->city_id == $city_id;
        });
    }

    protected function apply_search_text_filter_in_query($query,$search_text)
    {
        $search_text = str_replace('\\', '', $search_text);
        $search_text = str_replace('/', '', $search_text);
        $search_text_array = explode(' ', $search_text);

        $category_record = category::where('category_name',$search_text)->first();

        if($category_record){
            $query = $query->where('category_id',$category_record->id);
        }
        else{
            $this->is_search_text_category_name = false;

            $search_expresion = '';

            foreach ($search_text_array as $text) {
                $search_expresion .= "%$text%";
            }

            $query = $query->where(function($q) use($search_expresion){
                    return $q = $q->where('product_name','like',$search_expresion)
                            ->orWhere('description','like',$search_expresion);
            });
        }

        return $query;
    }

    protected function apply_search_text_filter(&$products,$search_text)
    {
        $search_text = str_ireplace( array( '\'', '"',
                    ',' , ';', '<', '>' , 'or', 'and','--'), ' ', $search_text);


        $category_record = DB::table('categories')
                                        ->where('category_name',$search_text)
                                        ->first();

        if($category_record){
            if(is_null($category_record->parent_id)){
                $child_categories = DB::table('categories')
                                    ->where('parent_id',$category_record->id)
                                    ->pluck('id')
                                    ->toArray();
                
                if($child_categories){
                    $products = array_filter($products,function($product) use($child_categories){
                        return in_array($product['main']->category_id,$child_categories) == true;
                    });
                }

            }
            else{
                $child_categories = DB::table('categories')
                                    ->where('parent_id',$category_record->id)
                                    ->pluck('id')
                                    ->toArray();

                if($child_categories){
                    $products = array_filter($products,function($product) use($child_categories){
                        return in_array($product['main']->sub_category_id,$child_categories) == true;
                    });
                }
                else{
                    $this->apply_category_filter($products,$category_record->id);
                }
            }
            


            
        }
        else{
            $search_text = str_replace('\\', '', $search_text);
            $search_text = str_replace('/', '', $search_text);
            $search_text_array = explode(' ', $search_text);

            $search_expresion = '(.*)';

            foreach ($search_text_array as $text) {
                $search_expresion .= "($text)(.*)";
            }

            $result_products = array_filter($products,function($product) use($search_expresion){
                return $this->does_search_text_matche_the_product($search_expresion,$product);
            });

            if(count($result_products) == 0){
                
                $result_products = array_filter($products,function($product) use($search_text_array){
                    $product_info[] = $product['main']->sub_category_name;
                    $product_info[] = $product['main']->product_name;
                    $product_info[] = $product['main']->description;
                    $product_info[] = $product['user_info']->first_name . $product['user_info']->last_name;

                    if(array_intersect($search_text_array,$product_info)){
                        return true;
                    }

                    return false;
                });
            }

            $products = $result_products;
        }
    }

    protected function does_search_text_matche_the_product($search_expresion, &$product)
    {
        $product_info[] = $product['main']->sub_category_name;
        $product_info[] = $product['main']->product_name;
        $product_info[] = $product['main']->description;
        $product_info[] = $product['user_info']->first_name . $product['user_info']->last_name;

        $result = array_filter($product_info, function ($item) use ($search_expresion) {
            return preg_match("/$search_expresion/", $item);
        });

        if (sizeof($result) > 0) {
            return true;
        } else {
            $whole_searchable_string = '';
            $product_info[] = $product['main']->city_name;
            $product_info[] = $product['main']->province_name;
            
            foreach($product_info as $text){
                $whole_searchable_string .= " $text";
            }

            $is_there_any_match = preg_match("/$search_expresion/", $whole_searchable_string);

            if($is_there_any_match !== 0 && $is_there_any_match !== false){
                return true;
            }

            return false;
        }
    }

    protected function apply_special_products_filter(&$products,$special_products)
    {
        if($special_products == true){
            $products = array_filter($products,function($product){
                return $product['user_info']->active_pakage_type != 0 || ($product['user_info']->response_rate >= 90 && $product['user_info']->ums <= 10) ;
            });

            $user_id = session('user_id');
            $buyAds = DB::table('buy_ads')
                            ->whereNull('deleted_at')
                            ->where('buy_ads.myuser_id',$user_id)
                            ->where(function($q){
                                return $q = $q->where('confirmed',true)
                                                ->orWhereBetween('created_at',[Carbon::now()->subHours(24),Carbon::now()]);
                            })
                            ->whereNull('deleted_at')
                            ->orderBy('created_at','desc')
                            ->get();
            $result = [];
            
            foreach($buyAds as $buyAd){
                $filtered_products = [];

                if(! is_null($buyAd->name)){
                    $buyAd_name_array = array_slice($this->get_buyAd_name_array($buyAd),0,2);
                    
            
                    foreach($buyAd_name_array as $search_text){
    
                        $tmp = array_filter($products,function($product) use($search_text,$buyAd){
                            return $this->does_search_text_matche_the_product($search_text,$product) == true && $product['main']->sub_category_id === $buyAd->category_id;
                        });

                        $filtered_products = array_merge($filtered_products,$tmp);
                    }
                    
                }
                else{
                    $filtered_products = array_filter($products,function($product) use($buyAd){
                        return $product['main']->sub_category_id === $buyAd->category_id;
                    });
                }

                $result = array_merge($result,$filtered_products);
            }
            if(count($result) > 0){
                $products = $this->remove_duplicated_sellers($result);
            }
        }
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

    protected function sort_products_by_response_rate(&$products)
    {
        usort($products,function($item1,$item2){
            $a = $item1['main']->is_elevated == true ? $item1['main']->updated_at :  $item1['main']->is_elevated;
            $b = $item2['main']->is_elevated == true ? $item2['main']->updated_at :  $item2['main']->is_elevated;

            if($a == $b){
                $c = $item1['user_info']->response_rate;
                $d = $item2['user_info']->response_rate;

                if($c == $d){
                    $e = $item1['user_info']->active_pakage_type;
                    $f = $item2['user_info']->active_pakage_type;

                    if($e == $f){
                        return $item1['main']->updated_at < $item2['main']->updated_at;
                    }
                    return ($e < $f) ? 1 : -1;
                }

                return ($c < $d) ? 1 : -1;
            }

            return ($a < $b) ? 1 : -1;
            
        });

        return $products;
    }

    protected function sort_products_by_response_time(&$products)
    {
        usort($products,function($item1,$item2){
            $a = $item1['main']->is_elevated == true ? $item1['main']->updated_at :  $item1['main']->is_elevated;
            $b = $item2['main']->is_elevated == true ? $item2['main']->updated_at :  $item2['main']->is_elevated;

            if($a == $b){
                $c = ($item1['user_info']->response_time > 0 && $item1['user_info']->response_rate > 75) ? ($item1['user_info']->response_time + ((100 - $item1['user_info']->response_rate) * $item1['user_info']->ums)) : 10000;
                $d = ($item2['user_info']->response_time > 0 && $item2['user_info']->response_rate > 75) ? ($item2['user_info']->response_time + ((100 - $item2['user_info']->response_rate) * $item2['user_info']->ums)) : 10000;

                if($c == $d){
                    $e = $item1['user_info']->response_rate > 75 ? $item1['user_info']->response_rate : 0;
                    $f = $item2['user_info']->response_rate > 75 ? $item2['user_info']->response_rate : 0;

                    if($e == $f){
                        return $item1['main']->updated_at < $item2['main']->updated_at;
                    }
                    return ($e < $f) ? 1 : -1;
                }

                return ($c > $d) ? 1 : -1;
            }
            return ($a < $b) ? 1 : -1;
            
        });

        return $products;
    }

    protected function sort_products_by_registeration_date(&$products)
    {
        usort($products,function($item1,$item2){
            return $item1['main']->updated_at < $item2['main']->updated_at;
        });

        return $products;
    }

    protected function get_the_most_related_products_to_buyer(&$buyAd_record,&$products)
    {
        $this->apply_category_filter($products,$buyAd_record->category_id);

        // if($buyAd_record->name){
        //     $this->apply_search_text_filter($products,$buyAd_record->name);
        // }
        
        return $products;
    }

    protected function remove_duplicated_sellers(&$products)
    {
        $first_products = array_slice($products,0,250);

        $tmp_user_ids = [];
        $duplicated_keys = [];
        foreach($first_products as $key => $value)
        {
            if(! in_array($value['user_info']->id,$tmp_user_ids)){
                $tmp_user_ids[] = $value['user_info']->id;
            }
            else{
                $duplicated_keys[] = $key;
            }
        }

        foreach($duplicated_keys as $key)
        {
            unset($products[$key]);
        }

        return $products;
    }


    // ---------------------------------------------------------------------------------------------------


    public function get_product_list_blade(Request $request,$category_name = null)
    {
        if($this->_bot_detected() == false){
            if (!$request->session()->has('user_id')) {
                $user_phone = $request->cookie('user_phone');
                $user_hashed_password = $request->cookie('user_password');
        
                if ($user_phone && $user_hashed_password) {
                    $login_middleware_object = new login();
                    $status = $login_middleware_object->set_user_session($user_phone, $user_hashed_password);
                }
            }
        
            return  view('layout.master');
        }

        //crwler bot has been deteced and will be served by plain html

        $products = $this->get_products_from_cache();

        $categories =  $this->get_all_categories();

        $meta_info = null;
        $related_categories = [];

        if(! is_null($category_name)){
            $category_name = strip_tags($category_name);
            $category_name = str_replace('-',' ',$category_name);

            $this->apply_search_text_filter($products,$category_name);

            $meta_info = $this->get_category_tags_data_if_any($category_name);

            if($meta_info['category_id'])
            {
                $category_controller_object = new category_controller();
                $related_categories = $category_controller_object->get_related_category_names_array($meta_info['category_id'],$category_name);
            }
        }

        usort($products, function ($item1, $item2) {
            $a = $item1['main']->is_elevated;
            $b = $item2['main']->is_elevated;

            if ($a == $b) {
                return $item1['main']->updated_at < $item2['main']->updated_at;
            }

            return ($a < $b) ? 1 : -1;
        });

        $products = array_slice($products,0,72);

        
        return view('layout.product-list',[
            'products' => $products,
            'categories' => $categories,
            'categoryMetaData' => $meta_info,
            'category_name' => $category_name,
            'related_categories' => $related_categories,
        ]);
    }

    protected function get_all_categories()
    {
        $all_categories = Cache::remember(md5('categories'),1,function(){
            return DB::table('categories')
                        ->leftJoin('products','products.category_id','=','categories.id')
                        ->select('categories.*',DB::raw('count(products.id) as score'))
                        ->groupBy('categories.id','categories.created_at','categories.updated_at','categories.category_name','categories.parent_id')
                        ->orderByRaw('score desc, categories.id')
                        ->get();
        });

        $categories = $all_categories->filter(function($category){
            return $category->parent_id == null;
        });

        $categories->each(function ($item) use($all_categories){
            // $item['subcategories'] = category::where('parent_id', $item->id)
            //     ->get();
            $other = null;
            $item->subcategories = $all_categories->filter(function($category) use($item,&$other){
                if($category->parent_id == $item->id && $category->category_name == 'سایر'){
                    $other = $category;
                    return false;
                }

                return $category->parent_id == $item->id;
            });

            $item->subcategories->each(function($item) use($all_categories){
                $other = null;
                $item->subcategories = $all_categories->filter(function($category) use($item,&$other){
                    if($category->parent_id == $item->id && $category->category_name == 'سایر'){
                        $other = $category;
                        return false;
                    }

                    return $category->parent_id == $item->id;
                });
            });
            

            if(! is_null($other)){
                ($item->subcategories)[] = $other;
            }
        });

        return $categories;
    }

    protected function get_category_tags_data_if_any($category_name)
    {

        $category_record = category::where('category_name',$category_name)
                                        ->first();
        $schema_object = '';

        if($category_record){
            $category_id = $category_record->id;

            $tags_info = $this->get_category_meta_data($category_id);


            if(! is_null($tags_info)){
                $temp = $tags_info->first();
                $schema_object = $temp->schema_object;
                unset($tags_info->schema_object);
            }
            

            $data = [
                'category_info' => $tags_info->toArray(),
                'schema_object' => $schema_object,
                'category_id' => $category_id,
            ];

            return $data;
        }
        else{
            $tags_info = tag::where('header',$category_name)
                                ->where('is_visible',true)
                                ->select([
                                    'id',
                                    'header',
                                    'content',
                                    'schema_object',
                                    'category_id'
                                ])->get();

            $category_id = null;

            if(sizeof($tags_info) > 0){
                $temp = $tags_info->first();
                $schema_object = $temp->schema_object;
                $category_id = $temp->category_id;

                unset($temp->schema_object);
            }
                                
            
            // $tags_info = array($tags_info);

            if($tags_info){
                $data = [
                    'category_info' => $tags_info->toArray(),
                    'schema_object' => $schema_object,
                    'category_id' => $category_id,
                ];

                return $data;
            }
            else{
                return null;
            }

        }  
    }

    protected function get_category_meta_data($category_id)
    {
        $tags_info = tag::where('category_id',$category_id)
                            ->where('is_visible',true)
                            ->select([
                                'id',
                                'header',
                                'content',
                                'schema_object',
                                'category_id'
                            ])->get();

        return $tags_info;
    }

    protected function _bot_detected() {

        return (
          isset($_SERVER['HTTP_USER_AGENT'])
          && preg_match('/bot|crawl|slurp|spider|mediapartners/i', $_SERVER['HTTP_USER_AGENT'])
        );
    }

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

    protected function apply_customized_related_products_filter_for_buyers(&$products,$viewer_info)
    {
        $user_id = $viewer_info->id;
        $buyAds = DB::table('buy_ads')
                        ->where('buy_ads.myuser_id',$user_id)
                        ->where(function($q){
                            return $q->whereBetween('updated_at',[Carbon::now()->subHours(24),Carbon::now()])
                                        ->orWhere('confirmed',true);
                        })
                        ->whereNull('deleted_at')
                        ->orderBy('updated_at','desc')
                        ->get();

        if(count($buyAds) > 0){
            $related_buyAds_subcategory_id_array = [];
            foreach($buyAds as $buyAd){
                $related_buyAds_subcategory_id_array[] = $buyAd->category_id;
            }

            $p = array_filter($products,function($product) use($related_buyAds_subcategory_id_array){
                return in_array($product['main']->sub_category_id,$related_buyAds_subcategory_id_array) == true && $product['user_info']->response_rate >= 70;
            });
        }
        else{
            $leads = DB::table('leads')
                            ->where('buyer_id',$user_id)
                            ->orderBy('updated_at','desc')
                            ->get();

                        
            if(count($leads) > 0)
            {
                $related_buyAds_subcategory_id_array = [];
                foreach($leads as $lead){
                    $related_buyAds_subcategory_id_array[] = $lead->category_id;
                }

                $result = array_filter($products,function($product) use($related_buyAds_subcategory_id_array){
                    return in_array($product['main']->category_id,$related_buyAds_subcategory_id_array) == true && $product['user_info']->response_rate >= 70;
                });
            }
            else{
                $result = array_filter($products,function($product) use($viewer_info){
                    return $product['user_info']->response_rate >= 70;
                });
            }
            

            usort($result, function ($item1, $item2){
                $a = $item1['main']->is_elevated;
                $b = $item2['main']->is_elevated;

                if($a == $b){
                    $c = $item1['user_info']->is_verified;
                    $d = $item2['user_info']->is_verified;
                    
                    if ($c == $d) {
                        $e = $item1['user_info']->active_pakage_type;
                        $f = $item2['user_info']->active_pakage_type;

                        if($e == $f){
                            return ($item1['main']->updated_at < $item2['main']->updated_at) ? 1 : -1;
                        }

                        return ($e < $f) ? 1 : -1;
                    }
        
                    return ($c < $d) ? 1 : -1;
                } 

                return ($a < $b) ? 1 : -1;
            });

            return $result;
        }
        

        
        $result = [];
        
        foreach($buyAds as $buyAd){
            $filtered_products = [];

            if(! is_null($buyAd->name)){
                $buyAd_name_array = array_slice($this->get_buyAd_name_array($buyAd),0,2);
        
                foreach($buyAd_name_array as $search_text){

                    $tmp = array_filter($p,function($product) use($search_text,$buyAd){
                        return $this->does_search_text_matche_the_product($search_text,$product) == true;
                    });

                    $filtered_products = array_merge($filtered_products,$tmp);
                }
                
            }

            $result = array_merge($result,$filtered_products);
        }

        $advertised_products_for_the_buyer = DB::table('product_suggestions')
                                                    ->join('products','products.id','=','product_suggestions.product_id')
                                                    ->where('products.confirmed',true)
                                                    ->whereNull('products.deleted_at')
                                                    ->where('product_suggestions.buyer_id',$user_id)
                                                    ->whereBetween('product_suggestions.created_at',[Carbon::now()->subDays(2),Carbon::now()])
                                                    ->select('products.id as id')
                                                    ->distinct('products.id')
                                                    ->get()
                                                    ->toArray();

        $advertised_products_for_the_buyer = array_column($advertised_products_for_the_buyer,'id');

        if(count($result) > 0){
            usort($result, function ($item1, $item2){

                $a = $item1['main']->is_elevated;
                $b = $item2['main']->is_elevated;
    
                if($a == $b){
                    $c = $item1['user_info']->is_verified;
                    $d = $item2['user_info']->is_verified;

                    if ($c == $d) {
                        $e = $item1['user_info']->response_rate;
                        $f = $item2['user_info']->response_rate;

                        if($e == $f){
                            return ($item1['main']->updated_at < $item2['main']->updated_at) ? 1 : -1;
                        }
                        
                        return ($e < $f) ? 1 : -1;
                    }
                    
                    return ($c < $d) ? 1 : -1;

                }
    
                return ($a < $b) ? 1 : -1;
            });
        }
        

        if(count($advertised_products_for_the_buyer) > 0){
            $tmp = array_filter($products,function($product) use($advertised_products_for_the_buyer){
                return in_array($product['main']->id,$advertised_products_for_the_buyer) == true; 
            });

            $result = array_merge($tmp,$result);
        }

        $result = $this->remove_duplicated_sellers($result);

        return $result;
    }



}