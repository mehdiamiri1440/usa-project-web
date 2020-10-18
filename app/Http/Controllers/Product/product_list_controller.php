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
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

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
        'profiles.profile_photo',
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

    protected $activate_cache = true;
    protected $is_search_text_category_name = true;

    public function get_product_list(Request $request)
    {
        $this->validate($request,$this->product_list_validation_rules);

        $products = $this->get_products_from_cache();

        $this->apply_product_filters($request,$products);

        if(is_null($products)){
            return response()->json([
                'status' => false,
                'msg' => 'Try again later!'
            ],500);
        }

        if($request->has('sort_by')){
            
            if($this->is_sorting_option_valid($request->sort_by)){
                
                if($request->sort_by == 'BM'){
                    $products = $this->{$this->sorting_options_array[$request->sort_by]}($products);
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

            Cache::put($cache_key,$products,30);  
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
        if($request->has('category_id')){
            $this->apply_category_filter($products,$request->category_id);
        }

        if($request->has('province_id')){
            $this->apply_province_filter($products,$request->province_id);
        }

        if($request->has('city_id')){
            $this->apply_city_filter($products,$request->city_id);
        }

        if($request->has('search_text')){
            $this->apply_search_text_filter($products,$request->search_text);
        }

        if($request->has('special_products')){
            $this->apply_special_products_filter($products,$request->special_products);
        }
    }

    public function get_all_products_with_related_media()
    {
        $products = $this->get_all_products();

        $products = $this->append_related_data_to_given_products($products);

        foreach($products as $product)
        {
            $response_info = $this->get_user_response_info($product['user_info']->id);
            if(Carbon::now()->diffInMonths($product['main']->updated_at) >= 3){
                $product['user_info']->response_time =  -1;
            }
            else{
                $product['user_info']->response_time =  $response_info['response_time'];
            }
            $product['user_info']->response_rate = $response_info['response_rate'];
            if($product['user_info']->active_pakage_type > 0 && $product['user_info']->response_rate > 70){
                $product['user_info']->ums = (integer) ($response_info['ums']/(Carbon::now()->diffInWeeks($product['main']->updated_at) + 1));
            }
            else{
                $product['user_info']->ums = $response_info['ums'];
            }
            
        }

        return $products;
    }

    protected function get_all_products()
    {
        $query = product::where('confirmed', true);

        // if ($request->special_products == true) {
        //     $package_buyers_user_id = $this->get_package_buyers_user_id_array();

        //     $query = $query->whereIn('myuser_id', $package_buyers_user_id);
        // }
        // if($request->has('sub_category_id')){
        //     $query->where('category_id',$request->sub_category_id);

        //     $this->activate_cache = false;
        // }
        // if($request->has('city_id')){
        //     $query->where('city_id',$request->city_id);

        //     $this->activate_cache = false;
        // }
        // if($request->has('province_id')){
        //     $province_id = $request->province_id;

        //     $query = $this->apply_province_filter($query,$province_id);

        //     $this->activate_cache = false;
        // }
        // if($request->has('category_id')){
        //     $category_id = $request->category_id;

        //     $query = $this->apply_category_filter($query,$category_id);

        //     $this->activate_cache = false;
        // }
        // if($request->has('search_text')){
        //     $search_text = $request->search_text;
            
        //     $query = $this->apply_search_text_filter($query,$search_text);
        // }

        $query = $query->orderBy('updated_at', 'desc');

        // if($$request->has('to_record_number')){
        //     $to_record_number = $request->to_record_number;

        //     if($request->response_rate == false){
        //         $helper_query = clone $query;

        //         $products = $query->whereBetween('updated_at',[Carbon::now()->subDays(((integer) $to_record_number/10) * 7),Carbon::now()])->get();
        //         if($products->count() < $to_record_number){
        //             $products = $helper_query->get();
        //         }
        //     }
        //     else{
        //         $products = $query->get();
        //     }
        // }
        // else {
        //     $products = $query->get();
        // }
        $products = $query->get();

        return $products;
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
            $the_buyer_last_buyAd_request = buyAd::where('myuser_id',$user_id)
                                                    // ->where('confirmed',true)
                                                    ->orderBy('updated_at')
                                                    ->get()
                                                    ->last();

            if($the_buyer_last_buyAd_request){
                $tmp_products =  $products;
                $tmp_products = $this->get_the_most_related_products_to_buyer($the_buyer_last_buyAd_request,$tmp_products);
                $tmp_products = array_slice($tmp_products,0,5);
            }
        }

        $user_response_info = $this->get_user_response_info($user_id);
        $user_response_info['created_at'] = $user_info->created_at;

        if($tmp_products){
            $tmp_product_ids = [];
            foreach($tmp_products as $product)
            {
                $tmp_product_ids[] = $product['main']->id;
            }

            $products = array_filter($products,function($product) use($tmp_product_ids){
                return in_array($product['main']->id,$tmp_product_ids) === false;
            });
        }
        

        $sorting_callback_function = $this->get_best_match_call_back_function($user_response_info);

        usort($products,$sorting_callback_function);

        if($tmp_products){
            $products = array_merge($tmp_products,$products);
        }

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
                    $c = (Carbon::now()->diffInDays($item1['main']->updated_at) < 3) ? 1 : $this->get_users_similarity($item1['user_info'],$user_response_info);
                    $d = (Carbon::now()->diffInDays($item2['main']->updated_at) < 3) ? 1 : $this->get_users_similarity($item2['user_info'],$user_response_info);
    
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
    
                    return ($c < $d) ? 1 : -1;
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
        $category_record = category::where('category_name',$search_text)
                                        ->whereNotNull('parent_id')
                                        ->first();

        if($category_record){
            $this->apply_category_filter($products,$category_record->id);
        }
        else{
            $products = array_filter($products,function($product) use($search_text){
                return $this->does_search_text_matche_the_product($search_text,$product);
            });
        }
    }

    protected function does_search_text_matche_the_product($search_text, &$product)
    {
        $search_text = str_replace('\\', '', $search_text);
        $search_text = str_replace('/', '', $search_text);
        $search_text_array = explode(' ', $search_text);

        $search_expresion = '(.*)';

        foreach ($search_text_array as $text) {
            $search_expresion .= "($text)(.*)";
        }

        $product_info[] = $product['main']->sub_category_name;
        $product_info[] = $product['main']->product_name;
        $product_info[] = $product['main']->description;
        $product_info[] = $product['user_info']->first_name . $product['user_info']->last_name;

        $result = array_filter($product_info, function ($item) use ($search_text,$search_expresion) {
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
                return $product['user_info']->active_pakage_type == 3;
            });
        }
    }

    protected function sort_products_by_response_rate(&$products)
    {
        usort($products,function($item1,$item2){
            $a = $item1['user_info']->response_rate;
            $b = $item2['user_info']->response_rate;

            if($a == $b){
                $c = $item1['user_info']->active_pakage_type;
                $d = $item2['user_info']->active_pakage_type;

                if($c == $d){
                    return $item1['main']->updated_at < $item2['main']->updated_at;
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
            $a = ($item1['user_info']->response_time > 0 && $item1['user_info']->response_rate > 70) ? ($item1['user_info']->response_time + ((100 - $item1['user_info']->response_rate) * $item1['user_info']->ums)) : 10000;
            $b = ($item2['user_info']->response_time > 0 && $item2['user_info']->response_rate > 70) ? ($item2['user_info']->response_time + ((100 - $item2['user_info']->response_rate) * $item2['user_info']->ums)) : 10000;

            if($a == $b){
                $c = $item1['user_info']->response_rate > 70 ? $item1['user_info']->response_rate : 0;
                $d = $item2['user_info']->response_rate > 70 ? $item2['user_info']->response_rate : 0;

                if($c == $d){
                    return $item1['main']->updated_at < $item2['main']->updated_at;
                }
                return ($c < $d) ? 1 : -1;
            }

            return ($a > $b) ? 1 : -1;
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


}