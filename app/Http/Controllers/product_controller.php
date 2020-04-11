<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\product;
use App\myuser;
use App\product_media;
use App\category;
use Carbon\Carbon;
use App\product_statistics;
use App\profile;
use App\user_product;
use DB;
use App\Jobs\NotifyBuyersBySMS;
use App\buyAd;
use App\Http\Library\date_convertor;
use App\message;
use App\tag;
use App\province;
use App\cities;
use App\Http\Controllers\media_controller;
use Illuminate\Support\Facades\Cache;

class product_controller extends Controller
{
    protected $current_user;
    protected $user_info_sent_by_product_array = [
        'myusers.id as user_id',
        'myusers.user_name',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.active_pakage_type',
        'myusers.created_at',
    ];
    protected $profile_info_sent_by_product_array = [
        'profiles.profile_photo',
    ];

    protected $product_register_fields_array = [
        'product_name',
        'stock',
        'min_sale_price',
        'max_sale_price',
        'min_sale_amount',
        'description',
        'category_id', //->sub_catrgory in fact
        'city_id',
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
        'categories.category_name as sub_category_name', 
        'products.is_elevated',
    ];

    protected $product_register_nullable_fields_array_with_validation_rules = array(
        'description' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}\x{060C}\x{061B}\x{061F}\x{0640}\x{066A}\x{066B}\x{066C}\x{0E}\x{0A}\<\>\/_\.\-\،\:\(\)\A-Za-z0-9 ]+$/u',
    );

    protected $sorting_options_array = [
        'RR' => 'sort_products_by_response_rate', // response rate
        'RT' => 'sort_products_by_respone_time', // response time
        'RS' => 'sort_products_by_review_score', //review score
        'RD' => 'sort_products_by_registeration_date',// product owner registration date
        'BM' => 'sort_products_by_best_match'
    ];

    protected $max_factorial_input_number = 10;
    protected $activate_cache = true;
    protected $is_search_text_category_name = true;

    // public method
    public function add_product(Request $request)
    {
        if ($this->is_user_allowed_to_register_another_product() == false) {
            return response()->json([
                'status' => true,
                'msg' => ' سقف تعداد محصولات ثبت شده شما پر شده است.برای اضافه کردن محصولات بیشتر بخش ارتقا عضویت را بررسی کنید.',
            ], 200);
        }
        $rules = $this->set_product_validation_rules($request);

        $this->validate($request, $rules);

        $product_object_or_failuire_message = $this->add_product_to_DB($request);

        if (is_object($product_object_or_failuire_message)) {
            $most_related_buyAd = $this->get_the_most_related_buyAd_to_the_given_product_if_there_is_any($product_object_or_failuire_message);

            if ($most_related_buyAd) {
                return response()->json([
                    'status' => true,
                    'buyAd' => $most_related_buyAd,
                ], 201);
            } else {
                return response()->json([
                    'status' => true,
                    'product' => $product_object_or_failuire_message,
                ], 201);
            }
        } else {
            return response()->json([
                'status' => false,
                'msg' => $product_object_or_failuire_message,
            ], 500);
        }
    }

    protected function add_product_to_DB($request)
    {
        try {
            $product = new product();
            $user = myuser::find(session('user_id'));

            foreach ($this->product_register_fields_array as $field_name) {
                if (!is_null($request->$field_name)) {
                    $product->$field_name = strip_tags($request->$field_name,'<hr>');
                }
            }

            $user->product()->save($product);

            $files_path_array = $this->save_product_photos($request, $request->images_count);
            $this->register_photos_path_in_DB($files_path_array, $product);

            return $product;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    protected function set_product_validation_rules($request)
    {
        $rules = [
            'stock' => 'required|numeric|min:0',
            'min_sale_price' => 'required|integer|min:0',
            'max_sale_price' => 'required|integer|min:0',
            'min_sale_amount' => 'required|integer|min:0',
            'product_name' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
            'category_id' => 'required',
            'city_id' => 'required',
            'images_count' => 'required|integer|min:1',
        ];

        foreach ($this->product_register_nullable_fields_array_with_validation_rules as $field_name => $validation_rules) {
            if (!is_null($request->$field_name)) {
                $rules[$field_name] = $validation_rules;
            }
        }

        $photos_count = $request->images_count;
        foreach (range(0, $photos_count - 1) as $index) {
            $rules['image_'.$index] = 'image|mimes:png,jpg,jpeg|min:2|max:5000';
        }

        return $rules;
    }

    protected function save_product_photos($request, $image_count)
    {
        $files_path = [];
        $media_controller_object = new media_controller();

        for ($i = 0; $i < $image_count; ++$i) {
            $image_name = 'image_'.$i;
            $img = $request->$image_name;

            $path = $img->store('products');

            $file_name = explode('/',$path)[1];
            $tmp_path = $img->storeAs('thumbnails/products',$file_name);

            $thumbnail_path = storage_path('app/public/'.$tmp_path);
            $media_controller_object->create_thumbnail($thumbnail_path,230,335);

            $media_controller_object->create_thumbnail(storage_path('app/public/'.$path),700,700);
            // $media_controller_object->put_water_mark_on_photo(storage_path('app/public/'.$path),'bottom');

            $files_path[] = $path;
        }

        return $files_path;
    }

    protected function register_photos_path_in_DB($photos_path_array, $product)
    {
        foreach ($photos_path_array as $file_path) {
            $media = new product_media();

            $media->file_path = $file_path;

            $product->product_media()->save($media);
        }
    }

    // public method
    public function get_product_list(Request $request)
    {
        $this->validate($request, [
            'from_record_number' => 'integer|min:0',
            'to_record_number' => 'integer|min:1',
            'category_id' => 'integer|exists:categories,id',
            'sub_category_id' => 'integer|exists:categories,id',
            'province_id' => 'integer|exists:provinces,id',
            'city_id' => 'integer|exists:cities,id',
            'search_text' => 'string',
            'special_products' => 'boolean',
            'sort_by' => 'string'
        ]);

        $response_rate_filter = $request->response_rate;

        if($request->has('sort_by')){
            
            if($this->is_sorting_option_valid($request->sort_by)){
                $cache_key = $this->generate_products_cache_key($request);
                
                if(Cache::has($cache_key)){
                    // echo 'cache';
                    $products = Cache::get($cache_key);
                }
                else{
                    $products = $this->get_all_products_with_related_media($request);

                    if($this->activate_cache  && $this->is_search_text_category_name){
                         Cache::put($cache_key,$products,30);
                    }
            }
            if($request->sort_by = 'BM'){
                $products = $this->{$this->sorting_options_array[$request->sort_by]}($products,$request->cookie('interestedCategories'));
            }
            else{
                $products = $this->{$this->sorting_options_array[$request->sort_by]}($products);
            }
            
        }
            else{
                    $products = $this->get_all_products_with_related_media($request,true);

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
            $products = $this->get_all_products_with_related_media($request,true);

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

    protected function is_sorting_option_valid($option)
    {
        if($option == 'BM'){
            if(!session()->has('user_id')){
                return false;
            }
        }

        return in_array($option,array_keys($this->sorting_options_array));
    }

    protected function get_current_user_products_with_related_media($user_id = null, $from_record_number = null, $to_record_number = null)
    {
        $current_user_id = $user_id ? $user_id : session('user_id');

        $products = null;

        if ($from_record_number !== null) {
            $take_count = abs($to_record_number - $from_record_number);

            $products = product::where('myuser_id', $current_user_id)
                ->where('confirmed', true)
                ->skip($from_record_number)
                ->take($take_count)
                ->get();
        } else {
            $products = product::where('myuser_id', $current_user_id)
                        ->where('confirmed', true)
                        ->orderBy('updated_at', 'desc')
                        ->get();
        }

        $result_products = array();

        foreach ($products as $product) {
            $temp = array();
            $product_related_photos = $product->product_media()
                ->select('file_path')
                ->get();

            $product_related_data['main'] = $this->get_product_related_data($product->id);

            $product_related_user_info = myuser::where('id', $product->myuser_id)
                ->get($this->user_info_sent_by_product_array)
                ->first();

            $product_related_profile_info = profile::where('myuser_id', $product->myuser_id)
                ->where('confirmed', true)
                ->get($this->profile_info_sent_by_product_array)
                ->last();

            $product_related_data['user_info'] = $product_related_user_info;
            $product_related_data['profile_info'] = $product_related_profile_info;

            $product_related_data['photos'] = $product_related_photos;

            $category_id = category::find($product->category_id)->parent_id;
            $product_related_data['main']->category_id = $category_id;
            $product_related_data['main']->category_name = category::find($category_id)->category_name;

            $result_products[] = $product_related_data;
        }

        return $result_products;
    }

    protected function get_all_products_with_related_media($request = null,$lazy_loading = false)
    {
        if(is_null($request)){
            $products = product::where('confirmed',true)
                                    ->orderBy('updated_at','desc')
                                    ->get();
            $result_products = $this->append_related_data_to_given_products($products);

            return $result_products;
        }

        $products = $this->apply_product_filters($request,$lazy_loading);

        $result_products = $this->append_related_data_to_given_products($products);

        return $result_products;
    }

    protected function apply_product_filters(&$request,$lazy_loading = false)
    {
        $query = product::where('confirmed', true);

        if ($request->special_products == true) {
            $package_buyers_user_id = $this->get_package_buyers_user_id_array();

            $query = $query->whereIn('myuser_id', $package_buyers_user_id);
        }
        if($request->has('sub_category_id')){
            $query->where('category_id',$request->sub_category_id);

            $this->activate_cache = false;
        }
        if($request->has('city_id')){
            $query->where('city_id',$request->city_id);

            $this->activate_cache = false;
        }
        if($request->has('province_id')){
            $province_id = $request->province_id;

            $query = $this->apply_province_filter($query,$province_id);

            $this->activate_cache = false;
        }
        if($request->has('category_id')){
            $category_id = $request->category_id;

            $query = $this->apply_category_filter($query,$category_id);

            $this->activate_cache = false;
        }
        if($request->has('search_text')){
            $search_text = $request->search_text;
            
            $query = $this->apply_search_text_filter($query,$search_text);
        }

        $query = $query->orderBy('updated_at', 'desc');

        if($lazy_loading == true && $request->has('to_record_number')){
            $to_record_number = $request->to_record_number;

            if($request->response_rate == false){
                $helper_query = clone $query;

                $products = $query->whereBetween('updated_at',[Carbon::now()->subDays(((integer) $to_record_number/10) * 7),Carbon::now()])->get();
                if($products->count() < $to_record_number){
                    $products = $helper_query->get();
                }
            }
            else{
                $products = $query->get();
            }
        }
        else {
            $products = $query->get();
        }

        return $products;
    }

    protected function sort_products_by_response_rate(&$products)
    {
        foreach ($products as $product) {
            $product['user_info']->response_rate = $this->get_user_response_rate($product['user_info']->id);
        }

        usort($products, function ($item1, $item2) {
            $a = $item1['user_info']->response_rate;
            $b = $item2['user_info']->response_rate;

            if ($a == $b) {
                return $item1['main']->updated_at < $item2['main']->updated_at;
            }

            return ($a < $b) ? 1 : -1;
        });

        return $products;
    }

    protected function sort_products_by_best_match(&$products,$user_interested_categories)
    {
        if(session()->has('user_id')){
            $user_id = session('user_id');

            extract($product_viewer_info = $this->setup_product_viewer_info($user_id,$user_interested_categories));

            foreach($products as $product)
            {
                $response_info = $this->get_user_response_info($product['user_info']->id,$product['main']->updated_at,$user_response_time);
                $product['user_info']->response_time = (integer) (($response_info['response_time']) / $user_response_time_tolerance);
                $product['user_info']->response_rate = $response_info['response_rate'];
                if($product['user_info']->active_pakage_type > 0){
                    $ums = (integer) ($response_info['ums']/(Carbon::now()->diffInDays($product['user_info']->created_at)));
                    $product['user_info']->ums = $ums;
                }
                else{
                    $product['user_info']->ums = $response_info['ums'];
                }
            }

            $sorting_priority = $this->get_product_sorting_metrics_priority($product_viewer_info);

            usort($products,$sorting_priority);

            return $products;

        }
        else{
            return $products;
        }
    }

    protected function setup_product_viewer_info($user_id,$user_interested_categories)
    {
        $response_info = $this->get_user_response_info($user_id);
        $user_response_time = $response_info['response_time'];
        $user_response_time_tolerance = $user_response_time > 1 ? (integer) $user_response_time : 1;
        $user_response_time = (integer) ($user_response_time/$user_response_time_tolerance);
        $user_register_date = myuser::find($user_id)->created_at;
        $user_register_date_tolerance = Carbon::now()->diffInDays($user_register_date);
        $user_response_rate = (integer) $response_info['response_rate'];
        $user_response_rate_tolerance = 10;
        if($user_interested_categories){
            $user_interested_categories = explode(',',$user_interested_categories);
        }
        else{
            $user_interested_categories = [];
        }

        return compact([
            'user_response_time',
            'user_response_time_tolerance',
            'user_register_date',
            'user_response_rate',
            'user_response_rate_tolerance',
            'user_register_date_tolerance',
            'user_interested_categories'
        ]);
    }

    protected function get_product_sorting_metrics_priority($user_info)
    {
        extract($user_info);

        if($user_info['user_register_date']->diffInHours(Carbon::now()) < 24){
            $priorities = [
                'response_rate',
                'register_date',
                'ums',
                'response_time',
                // 'review_score',
            ];

            return function($item1,$item2) use($user_response_time,
                                    $user_register_date,
                                    $user_response_rate,
                                    $user_register_date_tolerance){
                
                $a = abs($user_response_rate - ((integer) ($item1['user_info']->response_rate) / 10)) ;
                $b = abs($user_response_rate - ((integer) ($item2['user_info']->response_rate) / 10)) ;

                if($a == $b){
                    $c = (integer) (($user_register_date->diffInDays($item1['user_info']->created_at)) / ($user_register_date_tolerance + 1));
                    $d = (integer) (($user_register_date->diffInDays($item2['user_info']->created_at)) / ($user_register_date_tolerance + 1));

                    if($c == $d){
                        $e = $item1['user_info']->ums;
                        $f = $item2['user_info']->ums;

                        if($e == $f){
                            $g = abs($user_response_time - $item1['user_info']->response_time);
                            $h = abs($user_response_time - $item2['user_info']->response_time);

                            if($g == $h){
                                $i = $item1['user_info']->active_pakage_type;
                                $j = $item2['user_info']->active_pakage_type;
                                
                                if($i == $j){
                                    $k = $item1['main']->is_elevated;
                                    $l = $item2['main']->is_elevated;

                                    if($k == $l){
                                        return $item1['main']->updated_at < $item2['main']->updated_at;
                                    }
                                    return ($k > $l) ? 1 : -1;
                                }
                                return ($i > $j) ? 1 : -1;
                            }
                            
                            return ($g > $h) ? 1 : -1;
                        }

                        return ($e > $f) ? 1 : -1;
                    }

                    return ($c > $d) ? 1 : -1;
                    
                }

                return ($a > $b) ? 1 : -1;
            };

        }
        else{
            $priorities = [
                'response_time',
                'register_date',
                'response_rate',
                'ums',
                // 'review_score',
            ];
            return function($item1,$item2) use($user_response_time,
                                    $user_register_date,
                                    $user_response_rate,
                                    $user_register_date_tolerance,
                                    $user_interested_categories){

                $a = abs($user_response_time - $item1['user_info']->response_time);
                $b = abs($user_response_time - $item2['user_info']->response_time);

                if($a == $b){
                    $c = (integer) (($user_register_date->diffInDays($item1['user_info']->created_at)) / $user_register_date_tolerance);
                    $d = (integer) (($user_register_date->diffInDays($item2['user_info']->created_at)) / $user_register_date_tolerance);

                    if($c == $d){
                        $e = (integer) in_array($item1['main']->sub_category_id,$user_interested_categories);
                        $f = (integer) in_array($item2['main']->sub_category_id,$user_interested_categories);

                        if($e == $f){
                            $g = $item1['user_info']->ums;
                            $h = $item2['user_info']->ums;
                           

                            if($g == $h){
                                $i = abs($user_response_rate - ((integer) ($item1['user_info']->response_rate) / 10)) ;
                                $j = abs($user_response_rate - ((integer) ($item2['user_info']->response_rate) / 10)) ;

                                if($i == $j){
                                    $k = $item1['user_info']->active_pakage_type;
                                    $l = $item2['user_info']->active_pakage_type;

                                    if($k == $l){
                                        return $item1['main']->updated_at < $item2['main']->updated_at;
                                    }
                                    
                                    return ($k > $l) ? 1 : -1;
                                }
                                
                                return ($i > $j) ? 1 : -1;
                            }

                            return ($g > $h) ? 1 : -1;
                        }
                        return ($e < $f) ? 1 : -1;
                    }

                    return ($c > $d) ? 1 : -1;
                    
                }

                return ($a > $b) ? 1 : -1;
            };
        }
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
            if($viewer_response_time){
                $response_time = pow(3 + 2 * $viewer_response_time,$total_contacts_count);
            }
            else{
                $response_time = pow(3,$total_contacts_count);
            }
        }
        else{
            $response_time =  round($total_delay/$total_contacts_count) + 100 - (integer) $response_rate;
        }

        $ums = $total_contacts_count;

        return compact('response_rate','response_time','ums'); // UMS stands for unique message senders to this user
    }

    protected function generate_products_cache_key(&$request)
    {
        $key = md5('product-' . json_encode($request->except([
            'from_record_number',
            'to_record_number',
            'response_rate'
            ])));

        return $key;
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

        // var_dump($selected_items);

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

    protected function apply_province_filter($query,$province_id)
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

    protected function apply_search_text_filter($query,$search_text)
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

    protected function apply_category_filter($query,$category_id)
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

    //public method
    public function get_product_by_id(Request $request)
    {
        $this->validate($request, [
            'product_id' => 'required|integer|min:1',
        ]);

        $product_id = $request->product_id;
        $product = product::where('id', $product_id)
            ->where('confirmed', true)
            ->first();

        if (is_null($product)) {
            return response()->json([
                'status' => false,
                'msg' => 'product not found.',
            ], 404);
        }

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

        $product_related_data['user_info']->response_rate = $this->get_user_response_rate($product->myuser_id);

        $product_parent_category_data = $product->category;
        $product_related_data['main']->category_id = $product_parent_category_data['parent_id'];
        $product_related_data['main']->category_name = (category::find($product_parent_category_data['parent_id']))['category_name'];

        return response()->json([
            'status' => true,
            'product' => $product_related_data,
        ], 201);
    }

    protected function increment_product_view_count($product, $current_user_id)
    {
        if (($pivot_record = $this->does_the_user_already_attached_to_this_product($product->id, $current_user_id))) {
            $pivot_record->updated_at = Carbon::now();
            $pivot_record->save();
        } else {
            $product->product_statistic()->attach($current_user_id, [
                'at_least_one_view' => true,
                'created_at' => Carbon::now(),
            ]);
        }
    }

    protected function does_the_user_already_attached_to_this_product($product_id, $user_id)
    {
        $pivot_record = product_statistics::where('myuser_id', $user_id)
            ->where('product_id', $product_id)
            ->get()
            ->first();

        if ($pivot_record) {
            return $pivot_record;
        } else {
            return false;
        }
    }

    //public method
    public function increment_product_phone_view_count(Request $request)
    {
        $this->validate($request, [
            'product_id' => 'required|numeric',
        ]);

        $product_id = $request->product_id;

        try {
            $product = product::findOrFail($product_id);
            $product_owner_info = myuser::findOrFail($product->myuser_id);
        } catch (\Exception $e) {
            return response()->json([
               'status' => false,
                'msg' => 'the product does not exist or application can not access database now',
            ], 500);
        }

        $phone_view_count_before_increment = $product->phone_view_count;

        $product->phone_view_count = $phone_view_count_before_increment + 1;

        $product->save();

        return response()->json([
            'status' => true,
            'phone' => $product_owner_info->phone,
            'count_before_increment' => $phone_view_count_before_increment,
            'count_after_increment' => $product->phone_view_count,
        ]);
    }

    //public method
    public function delete_product_by_id(Request $request)
    {
        $this->validate($request, [
            'product_id' => 'required|integer|min:1',
        ]);

        $product_id = $request->product_id;
        $user_id = session('user_id');

        try {
            $product = product::findOrFail($product_id);
        } catch (\Exception $e) {
            return response()->json([
               'status' => false,
                'msg' => 'product_id does not exist or already deleted.',
            ], 500);
        }

        if ($this->is_the_user_the_product_owner($user_id, $product)) {
            $product->delete();

            return response()->json([
               'status' => true,
                'msg' => 'محصول حذف شد.',
            ]);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'the user has not delete permission on this product',
            ], 500);
        }
    }

    protected function is_the_user_the_product_owner($user_id, &$product)
    {
        if ($product->myuser_id == $user_id) {
            return true;
        } else {
            return false;
        }
    }

    //public method
    public function get_product_list_by_user_name(Request $request)
    {
        $this->validate($request, [
           'user_name' => 'required|alpha_dash',
        ]);
        $user_name = $request->user_name;

        $user_id = $this->get_user_id_for_the_user_name($user_name);

        if ($user_id) {
            $this->validate($request, [
                'from_record_number' => 'numeric',
                'to_record_number' => 'numeric',
            ]);

            $current_user_products = null;

            if ($request->filled('from_record_number') && $request->filled('to_record_number')) {
                $from_record_number = $request->from_record_number;
                $to_record_number = $request->to_record_number;

                $current_user_products = $this->get_current_user_products_with_related_media($user_id, $from_record_number, $to_record_number);
            } else {
                $current_user_products = $this->get_current_user_products_with_related_media($user_id);
            }

            return response()->json([
                'status' => true,
                'products' => $current_user_products,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'msg' => "the user_name '{$user_name}' doesn't exists.",
            ]);
        }
    }

    protected function get_user_id_for_the_user_name($user_name)
    {
        $user_info = myuser::where('user_name', $user_name)
            ->get()
            ->first();

        if ($user_info) {
            return $user_info->id;
        } else {
            return null;
        }
    }

    //public method
    public function does_buyer_already_had_requested_the_product(Request $request)
    {
        if (session('is_buyer')) {
            $this->validate($request, [
                'product_id' => 'required|integer|min:1',
            ]);

            $product_id = $request->product_id;

            $user_id = session('user_id');

            $user_record = myuser::find($user_id);

            $user_product_table_record = user_product::where('product_id', $product_id)
                                                ->where('myuser_id', $user_id)
                                                ->get()
                                                ->first();

            if ($user_product_table_record) { //user already had sent buy request for the product
                return response()->json([
                   'status' => true,
                ], 200);
            } else {
                return response()->json([
                    'status' => false,
                ], 200);
            }
        } else {
            return response()->json([
               'status' => true,
               'msg' => 'Not Autorized!',
            ], 404);
        }
    }

    //public method
    public function register_buyer_request_for_the_product(Request $request)
    {
        if (session('is_buyer')) {
            $this->validate($request, [
                'product_id' => 'required|integer|min:1',
            ]);

            $product_id = $request->product_id;

            $product_record = product::find($product_id);

            if ($product_record) {
                $sms_controller_object = new sms_controller();
                $sms_controller_object->send_status_sms_message($product_record, 'برای یکی از آگهی های شما در باسکول درخواست خرید ثبت شده است.برای بررسی به buskool.com مراجعه کنید.');

                $user_id = session('user_id');

                $user_product_record = new user_product();

                $user_product_record->myuser_id = $user_id;
                $user_product_record->product_id = $product_id;

                $user_product_record->save();

                return response()->json([
                    'status' => true,
                    'msg' => 'record added!',
                ], 201);
            } else {
                return response()->json([
                    'status' => false,
                    'msg' => 'product Id is not valid',
                ], 404);
            }
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'Not Authorized!',
            ], 404);
        }
    }

    //public method
    public function refresh_product_updated_at_time(Request $request)
    {
        $this->validate($request, [
           'product_id' => 'required|integer|min:1',
        ]);

        $product_id = $request->product_id;

        $user_id = session('user_id');

        try {
            $product = product::findOrFail($product_id);
        } catch (\Exception $e) {
            return response()->json([
               'status' => false,
                'msg' => 'product_id does not exist',
            ], 404);
        }

        if ($this->is_the_user_the_product_owner($user_id, $product)) {
            try {
                $product->updated_at = Carbon::now();
                $product->save();

                return response()->json([
                    'status' => true,
                    'msg' => 'Product updated successfully!',
                ], 200);
            } catch (\Exception $e) {
                return response()->json([
                    'status' => false,
                    'msg' => $e->getMessage(),
                ], 500);
            }
        } else {
            //external use of API
            //report in log file
            return response()->json([
                'status' => false,
                'msg' => 'you are not authorized to refresh this product!',
            ], 500);
        }
    }

    protected function is_immediate_product_confirm_active()
    {
        $user_id = session('user_id');

        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;

        return config("subscriptionPakage.type-$user_active_pakage_type.immediate-confirm");
    }

    protected function is_user_allowed_to_register_another_product()
    {
        $user_id = session('user_id');

        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;

        $max_allowed_prodcut_register = config("subscriptionPakage.type-$user_active_pakage_type.max-products");

        $user_confirmed_products_count = product::where('myuser_id', $user_id)
                                            ->where('confirmed', true)
                                            ->get()
                                            ->count();

        if ($max_allowed_prodcut_register > $user_confirmed_products_count) {
            return true;
        } else {
            return false;
        }
    }

    protected function is_send_sms_to_buyers_active()
    {
        $user_id = session('user_id');

        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;

        return config("subscriptionPakage.type-$user_active_pakage_type.sms-to-buyers");
    }

    protected function does_search_text_matche_the_product($search_text, $product)
    {
        $search_text = str_replace('\\', '', $search_text);
        $search_text = str_replace('/', '', $search_text);
        $search_text_array = explode(' ', $search_text);

        $search_expresion = '(.*)';

        foreach ($search_text_array as $text) {
            $search_expresion .= "($text)(.*)";
        }

        $product_info[] = $product->product_name;
        $product_info[] = $product->description;
        $product_info[] = $product->subcategory_name;

        $result = array_filter($product_info, function ($item) use ($search_text,$search_expresion) {
            return preg_match("/$search_expresion/", $item);
        });

        if (sizeof($result) > 0) {
            return true;
        } else {
            return false;
        }
    }

    //public method
    public function edit_product_by_id(Request $request)
    {
        $this->validate($request, [
            'product_id' => 'required|integer|min:1',
            'min_sale_price' => 'required|integer|min:0',
            'max_sale_price' => 'required|integer|min:1',
            'min_sale_amount' => 'required|integer|min:1',
            'stock' => 'required|integer:min:1',
//            'description' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
        ]);

        $product_id = $request->product_id;
        $user_id = session('user_id');

        $product = product::find($product_id);

        if ($product) {
            if ($this->is_the_user_the_product_owner($user_id, $product)) {
                $data = [
                    'min_sale_price' => $request->min_sale_price,
                    'max_sale_price' => $request->max_sale_price,
                    'min_sale_amount' => $request->min_sale_amount,
                    'stock' => $request->stock,
                ];

                DB::table('products')
                        ->where('id', $product_id)
                        ->update($data);

                return response()->json([
                    'status' => true,
                    'msg' => 'ویرایش با موفقیت انجام شد',
                ], 200);
            } else {
                return response()->json([
                    'status' => false,
                    'msg' => 'شما مجاز به انجام این عملیات نیستید.',
                ]);
            }
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'محصول مورد نظر یافت نشد.',
            ], 404);
        }
    }

    //public method
    public function get_all_products_url_for_sitemap()
    {
        $products = collect($this->get_all_products_with_related_media());

        return $products;
    }

    protected function get_the_most_related_buyAd_to_the_given_product_if_there_is_any(&$product)
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(14); // last 2 weeks

        $related_subcategory_buyAds = buyAd::where('category_id', $product->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('created_at', [$from_date, $until_date])
                                            ->where('myuser_id','<>',$product->myuser_id)
                                            ->orderBy('created_at', 'desc')
                                            ->get();

        if ($related_subcategory_buyAds) {
            $the_most_related_buyAd_record = $this->get_the_most_related_buyAd_to_given_product($product, $related_subcategory_buyAds);

            return $the_most_related_buyAd_record ? $the_most_related_buyAd_record : null;
        } else {
            return null;
        }
    }

    protected function get_the_most_related_buyAd_to_given_product(&$product, &$related_subcategory_buyAds)
    {
        $most_related_record = null;
        $max_mached_score = 0;

        $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name))));

        $category_info = $this->get_category_and_subcategory_name($product->category_id);

        if (count($product_name_array) > 1) {
            if ($product_name_array[0] == $category_info['subcategory_name']) {
                array_splice($product_name_array, 0, 1); //removes the first element
            }
        }

        $product_name_array_count = count($product_name_array);

        foreach ($related_subcategory_buyAds as $buyAd) {
            $score = 0;

            $buyAd_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $buyAd->name))));

            foreach ($buyAd_name_array as $word) {
                $index = array_search($word, $product_name_array);
                if ($index !== false) {
                    $score += $this->factorial($product_name_array_count - $index);
                }
            }

            if ($score > $max_mached_score) {
                $most_related_record = $buyAd;
                $max_mached_score = $score;
            }
        }

        if ($most_related_record) {
            $this->append_category_info_to_buyAd($most_related_record, $category_info);
            $this->append_user_info_to_most_related_buyAd_record($most_related_record, $product);
        }

        return $most_related_record;
    }

    protected function append_user_info_to_most_related_buyAd_record(&$buyAd, &$product)
    {
        $buyAd_owner_user_record = myuser::where('id', $buyAd->myuser_id)
                                            ->select(['user_name', 'first_name', 'last_name'])
                                            ->get()
                                            ->first();

        $buyAd['user_name'] = $buyAd_owner_user_record->user_name;
        $buyAd['first_name'] = $buyAd_owner_user_record->first_name;
        $buyAd['last_name'] = $buyAd_owner_user_record->last_name;

        $date_convertor_object = new date_convertor();

        $buyAd['register_date'] = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);
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

    protected function append_category_info_to_buyAd($buyAd, &$category_info)
    {
//        $category_record = $this->get_category_and_subcategory_name($buyAd->category_id);

        $buyAd['category_name'] = $category_info['category_name'];
        $buyAd['subcategory_name'] = $category_info['subcategory_name'];
    }

    private function factorial($number)
    {
        if ($number > $this->max_factorial_input_number) {
            return 1;
        }

        $factorial = 1;
        for ($i = 1; $i < $number; ++$i) {
            $factorial = $factorial * $i;
        }

        return $factorial;
    }

    //public method
    public function is_user_allowed_to_register_product(Request $request)
    {
        if ($this->is_user_allowed_to_register_another_product() == false) {
            return response()->json([
                'status' => true,
                'is_limited' => true,
                'msg' => ' سقف تعداد محصولات ثبت شده شما پر شده است.برای اضافه کردن محصولات بیشتر بخش ارتقا عضویت را بررسی کنید.',
            ], 200);
        } else {
            return response()->json([
                'status' => true,
                'is_limited' => false,
            ], 200);
        }
    }

    //public method
    public function get_sample_products()
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(14); // last 2 weeks

        $products = product::where('confirmed', true)
                                ->whereBetween('created_at', [$from_date, $until_date])
                                ->select(['id', 'product_name', 'category_id', 'stock'])
                                ->orderBy('created_at', 'desc')
                                ->limit(10)
                                ->get()
                                ->shuffle()
                                ->slice(0, 9);

        $products->map(function ($product) {
            $category_info = $this->get_category_and_subcategory_name($product->category_id);

            $product->category_name = $category_info['category_name'];
            $product->subcategory_name = $category_info['subcategory_name'];
            $product->photo = product_media::where('product_id', $product->id)
                                                ->get()
                                                ->first()
                                                ->file_path;
        });

        return response()->json([
            'status' => true,
            'products' => $products,
        ], 200);
    }

    protected function get_user_response_rate($user_id)
    {
        $total_contacts_count = message::where('receiver_id', $user_id)
                                            ->select('sender_id')
                                            ->distinct()
                                            ->get()
                                            ->count();
        if ($total_contacts_count == 0) {
            return 0;
        }
        $seen_by_user_contacts_count = message::where('receiver_id', $user_id)
                                            ->where('is_read', true)
                                            ->select('sender_id')
                                            ->distinct()
                                            ->get()
                                            ->count();

        return round(($seen_by_user_contacts_count / $total_contacts_count) * 100, 2);
    }

    //public method
    public function get_related_products_to_given_the_product(Request $request)
    {
        $this->validate($request, [
            'product_id' => 'required|integer|min:1',
        ]);

        $product_id = $request->product_id;

        $product = product::find($product_id);

        if (is_null($product)) {
            return response()->json([
                'status' => false,
                'msg' => 'product not found!',
            ], 404);
        }

        $subcategory_related_products = $this->get_related_products_to_the_given_subcategory($product->category_id);

        $related_products = $this->get_related_products_to_the_given_product_from_given_products($product, $subcategory_related_products);

        $category_info = $this->get_category_and_subcategory_name($product->category_id);

        foreach ($related_products as $product) {
            $product->category_name = $category_info['category_name'];
            $product->subcategory_name = $category_info['subcategory_name'];
            $product->photo = product_media::where('product_id', $product->id)
                                                ->get()
                                                ->first()
                                                ->file_path;
        }

        return response()->json([
            'status' => true,
            'related_products' => $related_products,
        ], 200);
    }

    protected function get_related_products_to_the_given_subcategory($subcategory_id)
    {
//        $until_date = Carbon::now();
//        $from_date = Carbon::now()->subDays(28); // last 2 weeks

        $related_subcategory_products = product::where('category_id', $subcategory_id)
                                            ->where('confirmed', true)
                                            ->where('is_elevated', false)
//                                            ->whereBetween('created_at',[$from_date,$until_date])
                                            ->select(['id', 'product_name', 'category_id', 'stock'])
                                            ->orderBy('created_at', 'desc')
                                            ->get();

        return $related_subcategory_products;
    }

    protected function get_related_products_to_the_given_product_from_given_products($product, &$products)
    {
        $result_products = [];

        $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name))));

        foreach ($products as $product_item) {
            if ($product->id == $product_item->id) {
                continue;
            }

            $matched = false;

            $current_product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product_item->product_name))));

            foreach ($current_product_name_array as $word) {
                $index = array_search($word, $product_name_array);
                if ($index !== false) {
                    $matched = true;
                }
            }

            if ($matched == true) {
                $result_products[] = $product_item;

                if (count($result_products) > 10) {
                    break;
                }
            }
        }

        return $result_products;
    }

    public function get_category_tags_data_if_any(Request $request)
    {
         $this->validate($request,[
             'category_name' => 'required|string'
         ]);

         $category_name = $request->category_name;

         $category_record = category::where('category_name',$category_name)
                                        ->first();
        $schema_object = '';

        if($category_record){
            $category_id = $category_record->id;

            $tags_info = $this->get_category_meta_data($category_id);

            $tags_info->each(function($item) use(&$schema_object){
                if(! is_null($item->schema_object)){
                    if(!$schema_object){
                        $schema_object = $item->schema_object;
                    }
                }
                unset($item->schema_object);
            });

            return response()->json([
                'status' => true,
                'category_info' => $tags_info,
                'schema_object' => $schema_object
            ]);
        }
        else{
            $tags_info = tag::where('header',$request->category_name)
                                ->where('is_visible',true)
                                ->select([
                                    'id',
                                    'header',
                                    'content',
                                    'schema_object'
                                ])->get();

            if(sizeof($tags_info) > 0){
                $temp = $tags_info->first();
                $schema_object = $temp->schema_object;
                
                unset($temp->schema_object);
            }
                                
            

            if($tags_info){
                return response()->json([
                    'status' => true,
                    'category_info' => $tags_info,
                    'schema_object' => $schema_object,
                ]);
            }
            else{
                return response()->json([
                    'status' => true,
                    'msg' => 'wrong category name given!'
                ],404);
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
                                'schema_object'
                            ])->get();

        return $tags_info;
    }
}
