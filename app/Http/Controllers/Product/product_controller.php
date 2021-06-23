<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product;
use App\Models\myuser;
use App\Models\product_media;
use App\Models\category;
use Carbon\Carbon;
use App\Models\product_statistics;
use App\Models\profile;
use App\Models\user_product;
use DB;
use App\Jobs\NotifyBuyersBySMS;
use App\Models\buyAd;
use App\Http\Library\date_convertor;
use App\Models\message;
use App\Models\tag;
use App\Models\province;
use App\Models\cities;
use App\Http\Controllers\General\media_controller;
use Illuminate\Support\Facades\Cache;
use App\Http\Controllers\Accounting\comment_controller;
use App\Http\Middleware\login;

class product_controller extends Controller
{
    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر','درجه'
    ];

    protected $current_user;
    protected $user_info_sent_by_product_array = [
        'myusers.id as user_id',
        'myusers.user_name',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.active_pakage_type',
        'myusers.created_at',
        'myusers.is_verified',
        'myusers.wallet_balance',
        'myusers.phone_view_permission'
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
        'description' => 'string',
        // 'description' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}\x{060C}\x{061B}\x{061F}\x{0640}\x{066A}\x{066B}\x{066C}\x{0E}\x{0A}\<\>\/_\.\-\،\:\(\)\A-Za-z0-9 ]+$/u',
    );

    protected $max_factorial_input_number = 10;

    protected $related_buyAds_required_fields = [
        'buy_ads.id',
        'buy_ads.name',
        'buy_ads.created_at',
        'buy_ads.updated_at',
        'buy_ads.category_id',
        'buy_ads.requirement_amount',
        'buy_ads.myuser_id',
        'subcategory.category_name as subcategory_name',
        'categories.category_name as category_name',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.phone_view_permission',
    ];

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
            $most_related_buyAds = $this->get_new_most_related_buyAds($product_object_or_failuire_message); //$this->get_the_most_related_buyAd_to_the_given_product_if_there_is_any($product_object_or_failuire_message);

            if ($most_related_buyAds) {
                return response()->json([
                    'status' => true,
                    'buyAds' => $most_related_buyAds,
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

            $product['active_package_type'] = $user->active_pakage_type;

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
            'product_name' => 'required|string',
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

        $result_products = array();

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

            $category_id = category::find($product->category_id)->parent_id;
            $product_related_data['main']->category_id = $category_id;
            $product_related_data['main']->category_name = category::find($category_id)->category_name;

            $result_products[] = $product_related_data;
        }

        return $result_products;
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

        if(($product_related_data['user_info']->wallet_balance >= config('subscriptionPakage.phone-number.view-price') && str_split($product_related_data['user_info']->phone_view_permission)[0] == 1) || (str_split($product_related_data['user_info']->phone_view_permission)[0] == 1 && $product_related_data['user_info']->active_pakage_type > 0) )
        {
            $product_related_data['user_info']->has_phone = true;
        }
        else{
            $product_related_data['user_info']->has_phone = false;
        }

        unset($product_related_data['user_info']->wallet_balance);
        unset($product_related_data['user_info']->phone_view_permission);

        $product_related_data['profile_info'] = new \StdClass;
        foreach($profile_records as $property_name)
        {
            $product_related_data['profile_info']->$property_name = $product_related_data_tmp->$property_name;
        }

        $product_related_data['user_info']->response_rate = $this->get_user_response_info($product->myuser_id)['response_rate'];

        $comment_controller_object = new comment_controller();
        $product_related_data['user_info']->review_info = $comment_controller_object->get_user_avg_rating_score($product->myuser_id);


        $product_related_data['photos'] = $product_related_photos;

        $product_parent_category_data = $product->category;
        $product_related_data['main']->category_id = $product_parent_category_data['parent_id'];
        $product_related_data['main']->category_name = (category::find($product_parent_category_data['parent_id']))['category_name'];

        if(session()->has('user_id')){
            $now = Carbon::now();
            
            DB::table('user_products')->insert([
                'created_at' => $now,
                'updated_at' => $now,
                'product_id' => $product->id,
                'myuser_id' => session('user_id'),
            ]);
        }

        DB::table('products')->where('id',$product->id)->increment('product_view_count');

        return response()->json([
            'status' => true,
            'product' => $product_related_data,
        ], 201);
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

    protected function is_user_allowed_to_register_another_product()
    {
        $user_id = session('user_id');

        $user_record = myuser::find($user_id);
        $user_active_pakage_type = $user_record->active_pakage_type;

        $max_allowed_prodcut_register = config("subscriptionPakage.type-$user_active_pakage_type.max-products");

        $user_confirmed_products_count = product::where('myuser_id', $user_id)
                                            ->where('confirmed', true)
                                            ->get()
                                            ->count();

        if (($max_allowed_prodcut_register + $user_record->extra_product_capacity > $user_confirmed_products_count) && $user_record->is_blocked == false) {
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
        $products = DB::table('products')->where('confirmed',true)
                                ->join('categories as sub','sub.id','=','products.category_id')
                                ->whereNull('products.deleted_at')
                                ->orderBy('products.created_at','desc')
                                ->selectRaw('products.id,sub.category_name as sub_category_name,(select categories.category_name from categories where sub.parent_id = categories.id) as category_name')
                                ->distinct('product.id')
                                ->get();


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
        $from_date = Carbon::now()->subDays(10); // last 2 weeks

        $products = DB::table('products')
                                ->join('myusers','myusers.id','=','products.myuser_id')
                                ->leftJoin('cities', 'cities.id', '=', 'products.city_id')
                                ->leftJoin('provinces', 'provinces.id', '=', 'cities.province_id')
                                ->where('products.confirmed', true)
                                ->whereBetween('products.created_at', [$from_date, $until_date])
                                ->select(['products.id', 'products.product_name', 'products.category_id', 'products.stock','myusers.first_name','myusers.last_name','cities.city_name','provinces.province_name','myusers.is_verified'])
                                ->orderBy('products.created_at', 'desc')
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
                                                ->file_path ?? null;
        });

        return response()->json([
            'status' => true,
            'products' => $products,
        ], 200);
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

            $tags_info = $this->get_category_meta_data($category_id)->first();

            // foreach($tags_info as $item){
            //     if(! is_null($item->schema_object)){
            //         if(!$schema_object){
            //             $schema_object = $item->schema_object;
            //         }
            //     }
            //     unset($item->schema_object);

            //     break;
            // }

            if(! is_null($tags_info)){
                $schema_object = $tags_info->schema_object;
                unset($tags_info->schema_object);
            }
            

            return response()->json([
                'status' => true,
                'category_info' => array($tags_info),
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

    protected function get_new_most_related_buyAds($product)
    {
        $until = Carbon::now();
        $from = Carbon::now()->subMonths(4);

        $product_name_array = $this->get_product_name_array($product);

        $buyAds = DB::table('buy_ads')
                                ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                                ->join('categories as subcategory','subcategory.id','=','buy_ads.category_id')
                                ->join('categories','subcategory.parent_id','=','categories.id')
                                ->where('buy_ads.myuser_id','<>',$product->myuser_id)
                                ->where('buy_ads.category_id',$product->category_id)
                                ->whereNull('buy_ads.deleted_at')
                                ->where('myusers.is_buyer',true)
                                ->whereBetween('buy_ads.updated_at',[$from,$until])
                                ->where('confirmed',true)
                                ->where(function($q) use($product_name_array){
                                    foreach($product_name_array as $name){
                                        $q = $q->orWhere('name','like',"%$name%");
                                    }

                                    return $q;

                                })
                                ->orderBy('buy_ads.created_at','desc')
                                ->select($this->related_buyAds_required_fields)
                                ->get();

        //remove duplication in buyers
        $buyer_ids = [];
        $buyAds = $buyAds->filter(function($buyAd) use(&$buyer_ids){
                    $result = false;
                    if(in_array($buyAd->myuser_id,$buyer_ids) == false){
                        $buyer_ids[] = $buyAd->myuser_id;
                        $result = true;
                    }

                    return $result;
                });

        $buyAds = $this->get_most_valuable_buyAds($buyAds);

        foreach($buyAds as $buyAd){
            if(str_split($buyAd->phone_view_permission)[1] == true){
                $buyAd->has_phone = true;
            }
            else{
                $buyAd->has_phone = false;
            }

            unset($buyAd->phone_view_permission);
        }

        return $buyAds;
    }

    protected function get_product_name_array($product)
    {
        $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name)))); //PHP is for professionals,not for kids
        
        $category_info = $this->get_category_and_subcategory_name($product->category_id);

        if (count($product_name_array)) {
            if ($product_name_array[0] == $category_info['subcategory_name']) {
                array_splice($product_name_array, 0, 1);
            }
        }

        $product_name_array = $this->remove_black_list_words($product_name_array);

        return $product_name_array;
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

    protected function get_most_valuable_buyAds($buyAds)
    {
        $buyer_ids = $buyAds->map(function($buyAd){
            return collect($buyAd)->only('myuser_id');
        });

        $result = DB::table('messages')->selectRaw("receiver_id as user_id,count(DISTINCT(sender_id)) as in_degree,((SELECT count(DISTINCT(sender_id)) as cnt from messages where receiver_id = user_id and is_read = true)/count(DISTINCT(sender_id))) * 100 as response_rate,(SELECT count(DISTINCT(receiver_id)) as cnt from messages where sender_id = user_id) as out_degree,(select count(DISTINCT(viewer_id)) as cnt from phone_number_view_logs where myuser_id = user_id) as upr")
                                            ->whereIn('receiver_id',$buyer_ids)
                                            ->groupBy('user_id')
                                            ->havingRaw('in_degree >= 20 and out_degree>= 20 and upr >=20 and response_rate >= 95')
                                            ->orderByRaw('response_rate desc,out_degree,in_degree,upr')
                                            ->get()
                                            ->all();

        $result = array_column($result,'user_id');

        $important_buyAds = $buyAds->filter(function($buyAd) use($result){ //extract selected buyers from all related buyAds
            return in_array($buyAd->myuser_id,$result) == true;
        });

        $prioritized_buyAds_according_to_buyers_last_activity_date = $this->prioritize_buyAds_according_to_buyers_last_activity_date($important_buyAds);

        $golden_buyAds_ids = array_map(function($buyAd){
            return $buyAd->id;
        },$prioritized_buyAds_according_to_buyers_last_activity_date);


        $buyAds = $buyAds->all();

        $buyAds = array_filter($buyAds,function($buyAd) use($golden_buyAds_ids){
            return in_array($buyAd->id,$golden_buyAds_ids) == false;
        });

        usort($buyAds,function($item1,$item2){
            return $item1->updated_at < $item2->updated_at ? 1 : -1;
        });

        $simple_buyAds = array_slice($buyAds,0,6 - count($prioritized_buyAds_according_to_buyers_last_activity_date));

        foreach($simple_buyAds as $buyAd)
        {
            $buyAd->is_golden = false;
        }

        return array_merge($prioritized_buyAds_according_to_buyers_last_activity_date,$simple_buyAds);

    }

    protected function prioritize_buyAds_according_to_buyers_last_activity_date(&$buyAds)
    {
        $buyAds->each(function($buyAd){
            $activity_info = $this->get_user_activity_ratio($buyAd->myuser_id,$buyAd->created_at);
            $buyAd->activity_ratio = $activity_info['activity_ratio'];
            $buyAd->score = $activity_info['score'];
        });

        $buyAds = $buyAds->all();

        usort($buyAds,function($item1,$item2){
            if($item1->score == $item2->score){
                return $item1->activity_ratio < $item2->activity_ratio ? 1 : -1;
            }

            return $item1->score < $item2->score ? 1 : -1;
        });

        $golden_buyAds = array_slice($buyAds,0,3);

        foreach($golden_buyAds as $buyAd)
        {
            $buyAd->is_golden = true;
        }

        return $golden_buyAds;
    }

    protected function get_user_activity_ratio($user_id,$buyAd_register_date)
    {
        $sending_message_records = DB::table('messages')->where('sender_id',$user_id)
                                ->select(DB::raw("distinct(date(created_at)) as date"));

        $seen_message_records = DB::table('messages')->where('receiver_id',$user_id)
                                        ->where('is_read',true)
                                        ->select(DB::raw("distinct(date(updated_at)) as date"));

        $product_register_records = DB::table('products')->where('myuser_id',$user_id)
                                        ->select(DB::raw("distinct(date(created_at)) as date"));

        $buyAd_register_records = DB::table('buy_ads')->where('myuser_id',$user_id)
                                        ->select(DB::raw("distinct(date(created_at)) as date"));

        $user_record = DB::table('myusers')->where('id',$user_id)
                                        ->select(DB::raw("updated_at as date"));

        $login_record = DB::table('myusers')->where('id',$user_id)
                                        ->select(DB::raw("date(last_login_date) as date"))
                                        ->whereNotNull('last_login_date');

        $phone_number_view_record = DB::table('phone_number_view_logs')->where('viewer_id',$user_id)
                                        ->select(DB::raw("date(created_at) as date"));

        $result = DB::table('profiles')->where('myuser_id',$user_id)
                                    ->select(DB::raw("distinct(date(updated_at)) as date"))
                                    ->union($sending_message_records)
                                    ->union($seen_message_records)
                                    ->union($product_register_records)
                                    ->union($buyAd_register_records)
                                    ->union($user_record)
                                    ->union($login_record)
                                    ->union($phone_number_view_record)
                                    ->orderBy('date','desc')
                                    ->get();


        $result = array_unique($result->all(),SORT_REGULAR);

        $total_number_of_active_days  = count($result); 

        $days_since_buyAd_register = Carbon::now()->diffInDays($buyAd_register_date);

        $user_register_date = DB::table('myusers')->where('id',$user_id)->get()->first()->created_at;

        $days_between_last_activity_and_user_signup = Carbon::parse($user_register_date)->diffInDays(Carbon::parse($result[0]->date));

        if($days_since_buyAd_register != 0){
            $activity_ratio = round($total_number_of_active_days / $days_since_buyAd_register , 2) * 100;

            $score = round($days_between_last_activity_and_user_signup / $days_since_buyAd_register, 2);
        }
        else{
            $activity_ratio = $score = 0;
        }
        

        return compact('activity_ratio','score');
    }

    public function get_related_buyAds_to_the_last_registered_product()
    {
        $user_id = session('user_id');

        $user_record = myuser::find($user_id);

        if(is_null($user_record)){
            return response()->json([
                'status' => false,
                'msg' => 'شما به این قسمت دسترسی ندارید.'
            ]);
        }

        $product = product::where('myuser_id',$user_id)
                                ->whereBetween('created_at',[Carbon::now()->subMinutes(30),Carbon::now()])
                                ->orderBy('created_at','desc')
                                ->get()
                                ->first();

        if(is_null($product)){
            return response()->json([
                'status' => false,
                'msg' => 'شما به این قسمت دسترسی ندارید.'
            ]);
        }

        $buyAds = $this->get_new_most_related_buyAds($product);

        return response()->json([
            'status' => true,
            'buyAds' => $buyAds
        ]);

        
    }


    public function get_premium_users_buyAd_suggestion_list($user_id)
    {
        $user_record = myuser::find($user_id);

        if($user_record){
            if($user_record->active_pakage_type == 0){
                return response()->json([
                    'status' => false,
                    'msg' => 'شما به این قسمت دسترسی ندارید.'
                ],404);
            }
        }

        $products = product::where('myuser_id',$user_id)
                                // ->where('confirmed',true)
                                ->orderBy('created_at','desc')
                                ->get();

        $buyAds = [];
        foreach($products as $product)
        {
            $tmp = $this->get_new_most_related_buyAds($product);

            $tmp = array_filter($tmp,function($buyAd){
                return $buyAd->is_golden == true;
            });

            if(count($buyAds) <= 20){
                $buyAds = array_unique(array_merge($buyAds,$tmp),SORT_REGULAR);
            }
            else{
                break;
            }
        }

        return array_slice($buyAds,0,20);
    }

    public function get_product_blade(Request $request,$extra_text = null,$category_name = null,$product_id)
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

        if(($product_related_data['user_info']->wallet_balance >= config('subscriptionPakage.phone-number.view-price') && str_split($product_related_data['user_info']->phone_view_permission)[0] == 1) || (str_split($product_related_data['user_info']->phone_view_permission)[0] == 1 && $product_related_data['user_info']->active_pakage_type > 0) )
        {
            $product_related_data['user_info']->has_phone = true;
        }
        else{
            $product_related_data['user_info']->has_phone = false;
        }

        unset($product_related_data['user_info']->wallet_balance);
        unset($product_related_data['user_info']->phone_view_permission);

        $product_related_data['profile_info'] = new \StdClass;
        foreach($profile_records as $property_name)
        {
            $product_related_data['profile_info']->$property_name = $product_related_data_tmp->$property_name;
        }

        $product_related_data['user_info']->response_rate = $this->get_user_response_info($product->myuser_id)['response_rate'];

        $comment_controller_object = new comment_controller();
        $product_related_data['user_info']->review_info = $comment_controller_object->get_user_avg_rating_score($product->myuser_id);


        $product_related_data['photos'] = $product_related_photos;

        $product_parent_category_data = $product->category;
        $product_related_data['main']->category_id = $product_parent_category_data['parent_id'];
        $product_related_data['main']->category_name = (category::find($product_parent_category_data['parent_id']))['category_name'];

        
        return view('layout.product-detail',[
            'product' => $product_related_data,
        ]);
    }

    protected function _bot_detected() {

        return (
          isset($_SERVER['HTTP_USER_AGENT'])
          && preg_match('/bot|crawl|slurp|spider|mediapartners/i', $_SERVER['HTTP_USER_AGENT'])
        );
    }
}
