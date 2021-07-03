<?php

namespace App\Http\Controllers\BuyAd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Library\date_convertor;
use App\Models\product;
use App\Models\myuser;
use App\Models\buyAd;
use App\Models\category;
use App\Models\profile;
use DB;
use App\Models\sell_offer;
use App\Models\buyAd_media;
use Carbon\Carbon;
use App\Models\product_media;
use App\Models\message;
use App\Http\Controllers\Product\product_controller;
use Illuminate\Support\Facades\Cache;

class buyAd_controller extends Controller
{
    protected $current_user;
    protected $date_convertor;
    protected $user_info_sent_by_buy_ad_array = [
        'user_name',
        'first_name',
        'last_name',
    ];
    protected $profile_info_sent_by_buy_ad_array = [
        'profile_photo',
    ];

    protected $buyAd_register_fields_array = [
        'name',
        'requirement_amount',
        'description',
        'category_id', //sub_category_id in fact
        'city_id',
        'price',
        'pack_type',
    ];

    protected $buyAd_register_mandetory_fields_array_with_validation_rules = array(
        'requirement_amount' => 'required|integer|min:0',
        'category_id' => 'required|integer|min:1',
        //new mandetory fields
//        'description' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
//        'pack_type' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
    );

    protected $buyAd_register_nullable_fields_array_with_validation_rules = array(
        'name' => 'string',
        // 'name' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
        //'city_id' => 'integer|min:1',
        // 'price' => 'integer|min:0',
        // 'address' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
    );

    protected $sell_offer_required_fields_for_buy_ad_list = [
        'id',
        'price',
        'deliver_at',
    ];

    protected $my_buyAd_required_fields = [
        'id',
        'name',
        'category_id',
        'created_at',
    ];

    protected $related_buyAd_list_required_fields = [
        'buy_ads.id',
        'buy_ads.name',
        'buy_ads.created_at',
        'buy_ads.updated_at',
        'buy_ads.category_id',
        'buy_ads.requirement_amount',
        'buy_ads.confirmed',
        'buy_ads.myuser_id',
        'buy_ads.reply_capacity',
        'buy_ads.phone_view_capacity',
        'myusers.phone_view_permission',
        // 'myusers.user_name',
        'myusers.first_name',
        'myusers.last_name',
        'c.category_name as subcategory_name'
    ];

    protected $related_public_buyAd_list_required_fields = [
        'buy_ads.id',
        'buy_ads.name',
        'buy_ads.created_at',
        'buy_ads.updated_at',
        'buy_ads.category_id',
        'buy_ads.requirement_amount',
        // 'myusers.user_name',
        'myusers.first_name',
        'myusers.last_name',
        'c.category_name as subcategory_name'
    ];

    protected $my_sell_offer_required_fields = [
        'buy_ad_id',
        'myuser_id',
    ];

    protected $related_products_fields = [
        'products.id',
        'products.product_name',
        'products.stock',
        'products.description',
        'products.category_id',
        'products.created_at',
        'products.myuser_id',
        'categories.category_name as category_name',
        'subcategory.category_name as subcategory_name',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.active_pakage_type',
        'myusers.is_verified',
        'myusers.phone_view_permission',
        'myusers.wallet_balance',
    ];

    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر',
    ];

    protected $related_buyAds_required_fields = [
        'buy_ads.id',
        'buy_ads.name',
        'buy_ads.created_at',
        'buy_ads.updated_at',
        'buy_ads.category_id',
        'buy_ads.requirement_amount',
        'buy_ads.myuser_id as buyer_id',
        'subcategory.category_name as subcategory_name',
        'categories.category_name as category_name',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.phone_view_permission'
    ];

    protected $my_buyAds_required_fields = [
        'buy_ads.id',
        'buy_ads.name',
        'buy_ads.created_at',
        'buy_ads.updated_at',
        'buy_ads.category_id',
        'buy_ads.requirement_amount',
        'buy_ads.myuser_id',
        'buy_ads.reply_capacity',
        'subcategories.category_name as subcategory_name',
        'categories.category_name as category_name',
    ];

    protected $offered_products_count_after_buyAd_register = 6;

    protected $max_factorial_input_number = 10;

    public function __construct()
    {
        $this->date_convertor = new date_convertor();
    }

    public function add_buyAd(Request $request)
    {
        $rules = $this->set_buyAd_validation_rules($request);

        $this->validate($request, $rules);

        $buyAd_object_or_failuire_message = $this->add_buyAd_to_DB($request);

        if (is_object($buyAd_object_or_failuire_message)) {
            $most_related_products = $this->get_the_most_related_products_to_the_given_buyAd_if_any($buyAd_object_or_failuire_message);

            $interested_categories = '';

            if($request->cookie('interestedCategories')){
                $interested_categories_array = explode(',',$request->cookie('interested_categories'));
                $interested_categories_array[] = $request->category_id;
                $interested_categories_array = array_unique($interested_categories_array);

                $interested_categories = implode(',',$interested_categories_array);
            }
            else{
                $interested_categories = $request->category_id;
            }

            Cache::forget(md5('products-' . session('user_id')));

            if ($most_related_products) {
                return response()->json([
                    'status' => true,
                    'products' => $most_related_products,
                ], 201)->withCookie(cookie('interestedCategories',$interested_categories,43200));
            } else {
                return response()->json([
                    'status' => true,
                    'buyAd' => $buyAd_object_or_failuire_message,
                    ], 201)->withCookie(cookie('interestedCategories',$interested_categories,43200));
            }
        } else {
            return response()->json([
                'status' => false,
                'msg' => $buyAd_object_or_failuire_message,
            ], 500);
        }
    }

    protected function set_buyAd_validation_rules($request)
    {
        foreach ($this->buyAd_register_mandetory_fields_array_with_validation_rules as $field_name => $validation_rule) {
            $rules[$field_name] = $validation_rule;
        }

        foreach ($this->buyAd_register_nullable_fields_array_with_validation_rules as $field_name => $validation_rules) {
            if ($request->filled($field_name)) {
                $rules[$field_name] = $validation_rules;
            }
        }

        return $rules;
    }

    protected function add_buyAd_to_DB($request)
    {
        try {
            $user_id = session('user_id');
            $is_user_blocked = DB::table('myusers')->where('id',$user_id)->first()->is_blocked;

            if($is_user_blocked){
                return 'حساب کاربری شما مسدود شده است.';
            }

            $buyAd = new buyAd();

            

            foreach ($this->buyAd_register_fields_array as $field_name) {
                if (!is_null($request->$field_name)) {
                    $buyAd->$field_name = strip_tags($request->$field_name);
                }
            }
            $buyAd->myuser_id = $user_id;

            $buyAd->save();
            // $file_path_array = $this->save_buyAd_photos($request, $request->images_count);
            // $this->register_photos_path_in_DB($file_path_array, $buyAd);

            return $buyAd;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    protected function save_buyAd_photos(&$request, $image_count)
    {
        $files_path = [];

        for ($i = 0; $i < $image_count; ++$i) {
            $image_name = 'image_'.$i;
            $img = $request->$image_name;

            $path = $img->store('buyAds');

            $files_path[] = $path;
        }

        return $files_path;
    }

    protected function register_photos_path_in_DB($photos_path_array, &$buyAd)
    {
        foreach ($photos_path_array as $file_path) {
            $media = new buyAd_media();

            $media->file_path = $file_path;

            $buyAd->buyAd_media()->save($media);
        }
    }

    //public method
    public function check_user_permisson_for_sending_buyAd_reply(Request $request)
    {
        $this->validate($request,[
            'buy_ad_id' => 'required|exists:buy_ads,id'
        ]);

        $sender_id = session('user_id');
        $buyAd_id = $request->buy_ad_id;

        $today = Carbon::today();
        $tomorrow = Carbon::tomorrow();

        $already_replied_to_the_buyAd = DB::table('buy_ad_reply_meta_datas')
                ->where([
                    ['buy_ad_id','=',$buyAd_id],
                    ['replier_id','=',$sender_id],
                ])->get()->count();

        if($already_replied_to_the_buyAd > 0){
            return response()->json([
                'status' => true,
                'permission' => true
            ],200);
        }

        $user_reply_records = DB::table('buy_ad_reply_meta_datas')
                                    ->join('myusers','myusers.id','=','buy_ad_reply_meta_datas.replier_id')
                                    ->where('replier_id',$sender_id)
                                    ->whereBetween('buy_ad_reply_meta_datas.created_at',[$today, $tomorrow])
                                    ->get();
        
        $today_replies_count = $user_reply_records->count();
        if($today_replies_count > 0){
            
            $user_daily_reply_capacity = config("subscriptionPakage.type-{$user_reply_records->first()->active_pakage_type}.buyAd-reply-count");
            // var_dump($user_daily_reply_capacity);
            if($today_replies_count >= $user_daily_reply_capacity + $user_reply_records->first()->extra_buyAd_reply_capacity){
                return response()->json([
                    'status' => false,
                    'permission' => false,
                ],200);
            }
        }
    
        return response()->json([
            'status' => true,
            'permission' => true
        ],200);
    }

    //public method
    public function get_buyAd_list(Request $request)
    {
        $this->validate($request, [
            'from' => 'integer|min:1',
            'to' => 'integer|min:1',
        ]);

        $query = DB::table('buy_ads')
                    ->join('myusers', 'buy_ads.myuser_id', '=', 'myusers.id')
                    ->join('categories as c', 'buy_ads.category_id', '=', 'c.id')
                    ->where('buy_ads.confirmed', true)
                    ->where('myusers.is_blocked',false)
                    ->where(function($q){
                        return $q = $q->where('buy_ads.reply_capacity','>',0)
                                        ->orWhere('buy_ads.phone_view_capacity','>',0);
                    })
                    ->whereNull('buy_ads.deleted_at')
                    ->whereBetween('buy_ads.updated_at',[Carbon::now()->subWeeks(3),Carbon::now()]);
                    // ->where('buy_ads.myuser_id','<>',$user->id);

        $query = $query->select($this->related_public_buyAd_list_required_fields)
                        ->orderBy('buy_ads.updated_at','desc');

        $buyAds = $query->get()->toArray();

        if ($request->filled('from') && $request->filled('to')) {
            $buyAds = array_slice($buyAds,$request->from, abs($request->to - $request->from));
        } 
        
        $date_convertor_object = new date_convertor();
        $result_buyAds = [];
        foreach ($buyAds as $buyAd) {
            $buyAd->register_date = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);

            $result_buyAds[] = $buyAd;
        }
        

        return response()->json([
            'status' => true,
            'buyAds' => $result_buyAds,
        ], 200);
    }

    protected function get_current_user_buyAd_list_with_related_media($user_id = null, $from_record_number = null, $to_record_number = null)
    {
        $current_user_id = $user_id ? $user_id : session('user_id');

        $buyAds = null;

        if ($from_record_number) {
            $take_count = abs($to_record_number - $from_record_number);

            $buyAds = buyAd::where('myuser_id', $current_user_id)
                ->where('confirmed', true)
                ->skip($from_record_number)
                ->take($take_count)
                ->get();
        } else {
            $buyAds = buyAd::where('myuser_id', $current_user_id)
                ->where('confirmed', true)
                ->get();
        }

        $result_buyAds = array();

        foreach ($buyAds as $buyAd) {
            $buyAd_related_photos = $buyAd->buyAd_media()
                ->select('file_path')
                ->get();

            $buyAd_related_data['main'] = $this->get_buy_ad_related_data($buyAd->id);

            $buyAd_related_data['user_info'] = myuser::where('id', $buyAd->myuser_id)
                ->get($this->user_info_sent_by_buy_ad_array)
                ->first();

            $buyAd_related_data['profile_info'] = profile::where('myuser_id', $buyAd->myuser_id)
                ->where('confirmed', true)
                ->get($this->profile_info_sent_by_buy_ad_array)
                ->last();

            $buyAd_related_data['photos'] = $buyAd_related_photos;

            $buyAd_parent_category_data = $buyAd->category;
            $buyAd_related_data['category_id'] = $buyAd_parent_category_data['parent_id'];
            $buyAd_related_data['category_name'] = (category::find($buyAd_parent_category_data['parent_id']))['category_name'];

            $result_buyAds[] = $buyAd_related_data;
        }

        return $result_buyAds;
    }

    protected function get_all_buy_ads_with_related_media($from_record_number = null, $to_record_number = null)
    {
        $buy_ads = null;

        if ($from_record_number) {
            $take_count = abs($to_record_number - $from_record_number);

            $buy_ads = buyAd::where('confiremd', true)
                ->skip($from_record_number)
                ->take($take_count)
                ->get();
        } else {
            $buy_ads = buyAd::where('confirmed', true)
                ->where('reply_capacity','>',0)
                ->get();
        }

        $result_buyAd = array();

        foreach ($buy_ads as $buy_ad) {
            $buy_ad_related_data['main'] = $this->get_buy_ad_related_data($buy_ad->id);

            $buy_ad_related_data['user_info'] = myuser::where('id', $buy_ad->myuser_id)
                ->get($this->user_info_sent_by_buy_ad_array)
                ->first();

            $buy_ad_category_id = category::find($buy_ad->category_id)->parent_id;
            $buy_ad_related_data['category_id'] = $buy_ad_category_id;
            $buy_ad_related_data['category_name'] = category::find($buy_ad_category_id)->category_name;

            $result_buyAd[] = $buy_ad_related_data;
        }

        return $result_buyAd;
    }

    protected function get_buy_ad_related_data($buy_ad_id)
    {
        $products_with_related_data = DB::table('buy_ads')
                                                    ->join('categories', 'buy_ads.category_id', '=', 'categories.id')
                                                    ->leftJoin('cities', 'cities.id', '=', 'buy_ads.city_id')
                                                    ->leftJoin('provinces', 'provinces.id', '=', 'cities.province_id')
                                                    ->select('buy_ads.id', 'buy_ads.name', 'buy_ads.requirement_amount', 'buy_ads.address', 'buy_ads.description', 'buy_ads.address', 'buy_ads.price', 'buy_ads.category_id as sub_category_id', 'buy_ads.reply_capacity', 'provinces.province_name', 'provinces.id as province_id', 'cities.city_name', 'cities.id as city_id', 'categories.category_name as sub_category_name')
                                                    ->where('buy_ads.id', $buy_ad_id)
                                                    ->where('confirmed', true)
                                                    ->whereNull('buy_ads.deleted_at')
                                                    ->get()
                                                    ->first();

        return $products_with_related_data;
    }

    //public method
    public function get_buy_ad_by_id(Request $request)
    {
        $this->validate($request, [
            'buy_ad_id' => 'required|integer|min:1',
        ]);
        $buy_ad_id = $request->buy_ad_id;

        $buy_ad = buyAd::where('id', $buy_ad_id)
            ->where('confirmed', true)
            ->first();

        if (is_null($buy_ad)) {
            return response()->json([
                'status' => false,
                'msg' => "buy_ad hasn't been confirmed yet or doesn't exsist!",
            ], 404);
        }

        $buy_ad_related_photos = $buy_ad->buyAd_media()
                ->select('file_path')
                ->get();

        $buy_ad_related_data['main'] = $this->get_buy_ad_related_data($buy_ad_id);

        $buy_ad_related_data['user_info'] = myuser::where('id', $buy_ad->myuser_id)
                ->get($this->user_info_sent_by_buy_ad_array)
                ->first();

        $buy_ad_related_data['profile_info'] = profile::where('myuser_id', $buy_ad->myuser_id)
                ->where('confirmed', true)
                ->get($this->profile_info_sent_by_buy_ad_array)
                ->last();

        //		if(session()->has('user_id'))
        //		{
        //			$buy_ad_related_user_info = myuser::find(session('user_id'));
        //			$buy_ad_related_data['phone'] = $buy_ad_related_user_info->phone ;
        //		}

        $buy_ad_related_data['photos'] = $buy_ad_related_photos;

        $buy_ad_parent_category_data = $buy_ad->category;
        $buy_ad_related_data['category_id'] = $buy_ad_parent_category_data['parent_id'];
        $buy_ad_related_data['category_name'] = (category::find($buy_ad_parent_category_data['parent_id']))['category_name'];

        return response()->json([
            'status' => true,
            'buy_ad' => $buy_ad_related_data,
        ], 200);
    }

    //public method
    public function increment_buy_ad_phone_view_count(Request $request)
    {
        $this->validate($request, [
            'buy_ad_id' => 'required|numeric',
        ]);

        $buy_ad_id = $request->buy_ad_id;
        try {
            $buyAd = buyAd::findOrFail($buy_ad_id);
            $buyAd_owner_info = myuser::find($buyAd->myuser_id);
        } catch (\Exception $e) {
            return response()->json([
               'status' => false,
                'msg' => 'the given buyAd does not exist.',
            ], 500);
        }

        $buy_ad_view_count_before_increment = $buyAd->phone_view_count;

        $buyAd->phone_view_count = $buy_ad_view_count_before_increment + 1;

        $buyAd->save();

        return response()->json([
            'status' => true,
            'phone' => $buyAd_owner_info->phone,
            'count_before_increment' => $buy_ad_view_count_before_increment,
            'count_after_increment' => $buyAd->phone_view_count,
        ], 201);
    }

    //public method
    public function delete_buy_ad_by_id(Request $request)
    {
        $this->validate($request, [
           'buy_ad_id' => 'required|numeric',
        ]);

        $user_id = session('user_id');
        $buy_ad_id = $request->buy_ad_id;

        try {
            $buyAd = buyAd::findOrFail($buy_ad_id);
        } catch (\Exception $e) {
            return response()->json([
               'status' => false,
                'msg' => 'buyAd does not exist or already has been deleted',
            ], 500);
        }

        if ($this->is_user_the_buy_ad_owner($user_id, $buyAd)) {
            $buyAd->delete();

            return response()->json([
               'status' => true,
                'msg' => 'درخواست خرید شما با موفقیت حذف شد.',
            ], 200);
        } else {
            return response()->json([
               'status' => false,
                'msg' => 'the user has not permited to delete the buyAd',
            ], 500);
        }
    }

    protected function is_user_the_buy_ad_owner($user_id, $buyAd)
    {
        if ($buyAd->myuser_id == $user_id) {
            return true;
        } else {
            return false;
        }
    }

    public function get_buyAd_list_by_user_name(Request $request)
    {
        $this->validate($request, [
           'user_name' => 'required|alpha_dash',
        ]);

        $user_name = $request->user_name;
        $user_id = $this->get_user_id_for_the_user_name($user_name);

        if ($user_id) {
            $this->validate($request, [
                'from_record_number' => 'integer|min:1',
                'to_record_number' => 'integer|min:1',
            ]);

            if ($request->filled('from_record_number') && $request->filled('to_record_number')) {
                $from_record_number = $request->from_record_number;
                $to_record_number = $request->to_record_number;

                $current_user_buyAds = $this->get_current_user_buyAd_list_with_related_media($user_id, $from_record_number, $to_record_number);
            } else {
                $current_user_buyAds = $this->get_current_user_buyAd_list_with_related_media($user_id);
            }

            return response()->json([
                'status' => true,
                'buy_ads' => $current_user_buyAds,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'msg' => "the user_name '{$user_name}' doesn't exists.",
            ], 404);
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
    public function get_my_buyAds_with_related_sell_offers(Request $request)
    {
        $user_id = session('user_id');

        $my_buyAds = $this->get_user_buyAds($user_id);

        $date_convertor_object = new date_convertor();

        $my_buyAds->each(function ($buyAd) use ($date_convertor_object) {
            $category_array = $this->get_category_and_subcategory_name($buyAd->category_id); //subcategory_id in fact
            $buyAd['category_name'] = $category_array['category_name'];
            $buyAd['subcategory_name'] = $category_array['subcategory_name'];

            $buyAd['register_date'] = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);

            $sell_offers = $this->get_buyAd_sell_offers($buyAd->id, $this->sell_offer_required_fields_for_buy_ad_list, [
                'is_pending' => true,
                'confirmed' => true,
            ]);

            $buyAd['sell_offer_count'] = $sell_offers->count();

            $buyAd['sell_offers'] = $sell_offers;
        });

        return response()->json([
             'status' => true,
             'buyAds' => $my_buyAds,
        ], 200);
    }

    protected function get_user_buyAds($user_id)
    {
        $buyAds = buyAd::where('myuser_id', $user_id)
           ->select($this->my_buyAd_required_fields)
           ->orderBy('created_at', 'desc')
           ->get()
           ;

        return $buyAds;
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

    protected function get_buyAd_sell_offers($buyAd_id, $fields, $conditions)
    {
        $query = sell_offer::where('buy_ad_id', $buyAd_id);

        foreach ($conditions as $column => $value) {
            $query = $query->where($column, $value);
        }

        $sell_offers = $query
            ->orderBy('created_at', 'desc')
            ->select($fields)
            ->get();

        return $sell_offers;
    }

    //public method
    public function get_related_buyAds_list_to_the_seller(Request $request)
    {
        $seller_id = session('user_id');

        $user = myuser::find($seller_id);

        $date_convertor_object = new date_convertor();

        if ($user->is_seller) {
            $result_buyAds = [];

            $cache_key = md5('AllBuyAds');

            if(Cache::has($cache_key)){
                $related_buyAds = Cache::get($cache_key);
            }
            else{
                $related_buyAds = $this->get_related_buyAds_list_to_the_user();

                Cache::put($cache_key,$related_buyAds,5);  
            }

            foreach ($related_buyAds as $buyAd) {
                $buyAd->register_date = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);

                $result_buyAds[] = $buyAd;
            }

            $user_registered_products = DB::table('products')->where('myuser_id',$seller_id)
                                                ->whereNull('deleted_at')
                                                ->where(function($q){
                                                    return $q = $q->where('confirmed',true)
                                                                    ->orWhereBetween('created_at',[Carbon::now()->subHours(24),Carbon::now()]);
                                                })
                                                ->get();

            $filtered_buyAds = [];
            if(count($user_registered_products) > 0){

                foreach($user_registered_products as $product){
                    
                    $product_name_array = array_slice($this->get_product_name_array($product),0,3);
                    $tmp = [];
                    foreach($product_name_array as $word){
                        $tmp = array_filter($result_buyAds,function($buyAd) use($product,$word,$user){
                            if(is_null($buyAd->name)){
                                return false;
                            }

                            return preg_match("/$word/", $buyAd->name) && $buyAd->category_id == $product->category_id && $buyAd->myuser_id != $user->id;
                        });
                    }
                    
                    $filtered_buyAds = array_merge($filtered_buyAds,$tmp);
                }

                //sort buyAds according to recency and response rate
                usort($filtered_buyAds,function($item1,$item2){
                    $a = $item1->is_golden ? 1 : 0;
                    $b = $item2->is_golden ? 1: 0;

                    if($a == $b){
                        $c = is_null($item1->response_rate) ? 100 : $item1->response_rate;
                        $d = is_null($item2->response_rate) ? 100 : $item2->response_rate;

                        if($c == $d){
                            return ($item1->updated_at < $item2->updated_at) ? 1 : -1;
                        }

                        return ($c < $d) ? 1 : -1;
                    } 

                    return ($a < $b) ? 1 : -1;
                    
                });

                

            }

            if(count($filtered_buyAds) > 0){
                $result_buyAds = array_filter($result_buyAds,function($buyAd) use($filtered_buyAds,$user){
                    return in_array($buyAd->id,array_column($filtered_buyAds,'id')) == false && $buyAd->myuser_id != $user->id;
                });
            }
            

            $user_registered_products_categories_array = [];

            foreach($user_registered_products as $product)
            {
                $user_registered_products_categories_array[] = $product->category_id;
            }

            $user_registered_products_categories_array = array_unique($user_registered_products_categories_array);

            usort($result_buyAds,function($item1,$item2) use($user_registered_products_categories_array){
                $a =  (in_array($item1->category_id,$user_registered_products_categories_array) == true) ? 1 : -1;
                $b =  (in_array($item2->category_id,$user_registered_products_categories_array) == true) ? 1 : -1;

                if($a == $b){
                    $c = $item1->is_golden ? 1 : 0;
                    $d = $item2->is_golden ? 1 : 0;

                    if($c == $d){
                        $e = $item1->response_rate;
                        $f = $item2->response_rate;

                        if($e == $f){
                            return ($item1->updated_at < $item2->updated_at) ? 1 : -1;
                        }

                        return ($e < $f) ? 1 : -1;
                    }

                    return ($c < $d) ? 1 : -1;
                }

                return ($a < $b) ? 1 : -1;
                
            });

            $result_buyAds = array_merge($filtered_buyAds,$result_buyAds);

            $result_buyAds = array_unique($result_buyAds,SORT_REGULAR);

            return response()->json([
                'status' => true,
                'buyAds' => collect($result_buyAds),
            ], 200);
        } else {
            return response()->json([
               'status' => false,
               'msg' => 'حساب کاربریی که با آن وارد شده اید از نوع حساب فروشندگان نیست!',
            ], 404);
        }
    }

    protected function get_related_buyAds_list_to_the_user()
    {
        $query = DB::table('buy_ads')
                    ->join('myusers', 'buy_ads.myuser_id', '=', 'myusers.id')
                    ->join('categories as c', 'buy_ads.category_id', '=', 'c.id')
                    ->where('buy_ads.confirmed', true)
                    ->where('myusers.is_blocked',false)
                    ->where(function($q){
                        return $q = $q->where('buy_ads.reply_capacity','>',0)
                                        ->orWhere('buy_ads.phone_view_capacity','>',0);
                    })
                    ->whereNull('buy_ads.deleted_at')
                    ->whereBetween('buy_ads.updated_at',[Carbon::now()->subWeeks(3),Carbon::now()]);
                    // ->where('buy_ads.myuser_id','<>',$user->id);

        $query = $query->selectRaw(implode(', ',$this->related_buyAd_list_required_fields) . ",(FLOOR((select count(distinct(m1.sender_id)) from messages as m1 where m1.is_read = true and m1.receiver_id = buy_ads.myuser_id and not exists(select * from messages where messages.receiver_id = buy_ads.myuser_id and m1.is_read = false ))/(select count(distinct(messages.sender_id)) from messages where messages.receiver_id = buy_ads.myuser_id) * 100 )) as response_rate,
        (select categories.category_name from categories where c.parent_id = categories.id) as category_name")
                    ->orderBy('buy_ads.updated_at', 'desc');

        $buyAds = $query->get();

        $buyAds = $buyAds->filter(function($buyAd){
            return is_null($buyAd->response_rate) || $buyAd->response_rate >= 50;
        });

        $golden_buyAds_update_date = Carbon::now()->subHours(2);
        $buyAds->each(function($buyAd) use($golden_buyAds_update_date){
            if(str_split($buyAd->phone_view_permission)[1] == 1 && $buyAd->phone_view_capacity > 0){
                $buyAd->has_phone = true;
            }

            if($buyAd->reply_capacity > 0){
                $buyAd->has_msg = true;
            }

            if($buyAd->updated_at > $golden_buyAds_update_date)
            {
                $buyAd->is_golden = true;
            }
            else{
                $buyAd->is_golden = false;
            }

            unset($buyAd->phone_view_permission);
        });
                    

        return $buyAds;
    }

    //public method
    public function get_seller_related_buyAd_by_id($buyAd_id)
    {
        $buyAd = buyAd::where('id', $buyAd_id)
                    ->where('confirmed', true)
                    ->select([
                        'id',
                        'name',
                        'created_at',
                        'category_id',
                        'address',
                        'price',
                        'description',
                        'requirement_amount',
                    ])
                    ->get()
                    ->first();

        if ($buyAd) {
            //check if seller is authorized to access the buyAd
            //code here

            //add required additional data
            $related_media_records = buyAd_media::where('buy_ad_id', $buyAd->id)
                    ->select('file_path')
                    ->get();

            $date_convertor_object = new date_convertor();
            $buyAd['register_date'] = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);

            $category_array = $this->get_category_and_subcategory_name($buyAd->category_id);
            $buyAd['category_name'] = $category_array['category_name'];
            $buyAd['subcategory_name'] = $category_array['subcategory_name'];
            $buyAd['photos'] = $this->get_file_path_array($related_media_records);

            return response()->json([
                'status' => true,
                'buyAd' => $buyAd,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'آیتم مورد نظر یافت نشد!',
            ]);
        }
    }

    protected function get_file_path_array(&$records)
    {
        $result = array();

        foreach ($records as $record) {
            $result[] = $record->file_path;
        }

        return $result;
    }

    //public method
    public function get_buyAd_owner_user_id(Request $request)
    {
        $this->validate($request, [
           'buyAd_id' => 'required|integer|min:1',
        ]);

        $buyAd_id = $request->buyAd_id;

        $buyAd_record = buyAd::find($buyAd_id);

        if ($buyAd_record) {
            return response()->json([
                'status' => true,
                'user_id' => $buyAd_record->myuser_id,
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'buyAd not found!',
            ], 404);
        }
    }

    //public method
    public function is_user_allowed_to_access_buyAd_requests(Request $request)
    {
        $user_id = session('user_id');

        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;

        return response()->json([
            'status' => true,
            'access_to_buyAd_requests' => config("subscriptionPakage.type-$user_active_pakage_type.access-to-buy-requests"),
        ], 200);
    }

    protected function get_the_most_related_products_to_the_given_buyAd_if_any(&$buyAd)
    {
        
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subMonths(3); // last 3 months
        
        $buyAd_name_array = $this->get_buyAd_name_array($buyAd);

        $free_related_products = DB::table('products')
                                                ->join('myusers','myusers.id','=','products.myuser_id')
                                                ->join('categories as subcategory','subcategory.id','=','products.category_id')
                                                ->join('categories','categories.id','=','subcategory.parent_id')
                                                ->where('myusers.active_pakage_type','=',0)
                                                ->where('products.category_id', $buyAd->category_id)
                                                ->where('products.confirmed', true)
                                                ->whereNull('products.deleted_at')
                                                ->whereBetween('products.created_at', [$from_date, $until_date])
                                                ->where('products.myuser_id','<>',$buyAd->myuser_id)
                                                ->where('products.stock','>=',$buyAd->requirement_amount)
                                                ->where(function($q) use($buyAd_name_array){
                                                    foreach($buyAd_name_array as $name){
                                                        $q = $q->orWhere('product_name','like',"%$name%");
                                                    }
                
                                                    return $q;
                
                                                })
                                                ->select($this->related_products_fields)
                                                ->distinct('products.myuser_id')
                                                ->orderBy('created_at','desc')
                                                ->get()
                                                ->all();

        $premium_related_products = DB::table('products')
                                                ->join('myusers','myusers.id','=','products.myuser_id')
                                                ->join('categories as subcategory','subcategory.id','=','products.category_id')
                                                ->join('categories','categories.id','=','subcategory.parent_id')
                                                ->where('myusers.active_pakage_type','<>',0)
                                                ->where('products.category_id', $buyAd->category_id)
                                                ->where('products.confirmed', true)
                                                ->whereNull('products.deleted_at')
                                                ->where('products.myuser_id','<>',$buyAd->myuser_id)
                                                ->where('products.stock','>=',$buyAd->requirement_amount)
                                                ->where(function($q) use($buyAd_name_array){
                                                    foreach($buyAd_name_array as $name){
                                                        $q = $q->orWhere('product_name','like',"%$name%");
                                                    }

                                                    return $q;

                                                })
                                                ->select($this->related_products_fields)
                                                ->distinct('products.myuser_id')
                                                ->orderBy('created_at','desc')
                                                ->get()
                                                ->all();

        $the_most_related_premium_product_record = $the_most_related_free_product_record = [];

        if (count($premium_related_products) > 0) {
            if($buyAd->name){
                $the_most_related_premium_product_record = $this->get_the_most_premium_related_products_to_the_given_buyAd($buyAd, $premium_related_products);
            }

            $the_most_related_premium_product_record = $the_most_related_premium_product_record ??  [];
        }

        if(count($free_related_products) > 0){
            if($buyAd->name){
                $the_most_related_free_product_record = $this->get_the_most_free_related_products_to_the_given_buyAd($buyAd, $free_related_products);
            }

            $the_most_related_free_product_record = $the_most_related_free_product_record ??  [];
        }

        if(count($the_most_related_premium_product_record) < 3 && count($the_most_related_free_product_record) > 3){
            $result = array_merge($the_most_related_premium_product_record,
                                                    array_slice($the_most_related_free_product_record,
                                                    0,
                                                    count($the_most_related_free_product_record) - count($the_most_related_premium_product_record)
                                                    )
                                            );
        }
        else{
            $result = array_merge($the_most_related_premium_product_record,
                                            array_slice($the_most_related_free_product_record,0,3)
            );
        }
        
        if(count($result) > 0){
            $this->append_related_info_to_most_related_products($result);
        }
        

        return $result;
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

    protected function get_the_most_premium_related_products_to_the_given_buyAd(&$buyAd, &$products)
    {
        $most_related_records = [];

        $seller_ids = array_map(function($product){
            return $product->myuser_id;
        },$products);

        $in_degrees = DB::table('messages')
                        ->whereIn('receiver_id',$seller_ids)
                        ->select(DB::raw("receiver_id as seller_id,count(distinct(sender_id)) as in_degree"))
                        ->groupBy('seller_id')
                        ->orderBy('in_degree','desc')
                        ->get()
                        ->all();

        $tmp_seller_ids = [];

        foreach($products as $product)
        {
            if(in_array($product->myuser_id,$tmp_seller_ids)){
                continue;
            }

            $key =  array_search($product->myuser_id,array_column($in_degrees,'seller_id') ); 

            if($key !== false){
                $product->score = $in_degrees[$key]->in_degree;
            }
            else{
                $product->score = 1000000;
            }

            $tmp_seller_ids[] = $product->myuser_id;
        }

        $products = array_filter($products,function($product){
            return isset($product->score) == true;
        });
        
        usort($products,function($item1,$item2){
            if($item1->score == $item2->score){
                return $item1->created_at < $item2->created_at ? 1 : -1;
            }

            return $item1->score > $item2->score ? 1 : -1;
        });

        $final_products = array_slice($products,0,3);

        return $final_products;
    }

    protected function get_the_most_free_related_products_to_the_given_buyAd(&$buyAd, &$products)
    {
        $seller_ids = array_map(function($product){
            return $product->myuser_id;
        },$products);

        $seller_ids = array_unique($seller_ids);

        $out_degrees = DB::table('messages')
                            ->whereIn('sender_id',$seller_ids)
                            ->select(DB::raw("sender_id as seller_id,count(distinct(receiver_id)) as out_degree"))
                            ->groupBy('seller_id')
                            ->orderBy('out_degree','desc')
                            ->get();

        $seller_ids = $out_degrees->map(function($item){
            return collect($item)->only('seller_id');
        });

        $in_degrees = DB::table('messages')
                        ->whereIn('receiver_id',$seller_ids)
                        ->where('is_read',true)
                        ->select(DB::raw("receiver_id as seller_id,count(distinct(sender_id)) as in_degree"))
                        ->groupBy('seller_id')
                        ->orderBy('in_degree','desc')
                        ->get();

        $out_degrees = $out_degrees->filter(function($item){
            return $item->out_degree >= 20;
        });

        $in_degrees = $in_degrees->filter(function($item){
            return $item->in_degree >= 20;
        });

        $seller_ids_based_on_out_degree = [];

        $out_degrees->each(function($item) use(&$seller_ids_based_on_out_degree){
            $seller_ids_based_on_out_degree[] = $item->seller_id;
        });

        $seller_ids_based_on_in_degree = [];

        $in_degrees->each(function($item) use(&$seller_ids_based_on_in_degree){
            $seller_ids_based_on_in_degree[] = $item->seller_id;
        });

        $result = array_intersect($seller_ids_based_on_in_degree,$seller_ids_based_on_out_degree);

        $important_products = array_filter($products,function($product) use($result){ //extract selected sellers from all related products
            return in_array($product->myuser_id,$result) == true;
        });

        $important_products = array_filter($important_products,function($product){ //filter according to seller response rate
            return $this->get_user_response_info($product->myuser_id)['response_rate'] >= 75 ;
        });

        $final_important_products = [];

        $tmp_seller_ids = [];
        foreach($important_products as $key => $product) //remove duplications
        {
            if(in_array($product->myuser_id,$tmp_seller_ids))
            {
                continue;
            }

            $final_important_products[] = $product;
            $tmp_seller_ids[] = $product->myuser_id;
        }

        $prioritized_products_according_to_sellers_last_activity_date = $this->prioritize_products_according_to_sellers_last_activity_date($final_important_products);
        
        return $prioritized_products_according_to_sellers_last_activity_date;
    }

    protected function prioritize_products_according_to_sellers_last_activity_date(&$products)
    {
        foreach($products as $product)
        {
            $activity_info = $this->get_user_activity_ratio($product->myuser_id,$product->created_at);
            $product->activity_ratio = $activity_info['activity_ratio'];
            $product->score = $activity_info['score'];
        }

        usort($products,function($item1,$item2){
            if($item1->score == $item2->score){
                return $item1->activity_ratio < $item2->activity_ratio ? 1 : -1;
            }

            return $item1->score < $item2->score ? 1 : -1;
        });

        $result_products = array_slice($products,0,6);

        return $result_products;
    }

    protected function get_user_activity_ratio($user_id,$product_register_date)
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

        $days_since_product_register = Carbon::now()->diffInDays($product_register_date);
        
        $user_register_date = DB::table('myusers')->where('id',$user_id)->get()->first()->created_at;

        $days_between_last_activity_and_user_signup = Carbon::parse($user_register_date)->diffInDays(Carbon::parse($result[0]->date));

        if($days_since_product_register != 0){
            $activity_ratio = round($total_number_of_active_days / $days_since_product_register , 2) * 100;

            $score = round($days_between_last_activity_and_user_signup / $days_since_product_register, 2);
        }
        else{
            $activity_ratio = $score = 0;
        }
        

        return compact('activity_ratio','score');
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

    protected function append_related_info_to_most_related_products(&$products)
    {
        foreach($products as $product){
            $this->append_related_media_to_most_related_product_record($product);

            $phone_view_permission = str_split($product->phone_view_permission)[0];
            if( 
                ($phone_view_permission == true && $product->wallet_balance >= config("subscriptionPakage.phone-number.view-price")) 
                || ($phone_view_permission == true && $product->active_pakage_type > 0)
              ){
                $product->has_phone = true;
            }
            else{
                $product->has_phone = false;
            }

            unset($product->phone_view_permission);
            unset($product->wallet_balance);
        }
    }

    protected function append_related_media_to_most_related_product_record($product)
    {
        $product->photo = product_media::where('product_id',$product->id)
                                            ->select('file_path')
                                            ->first()
                                            ->file_path;
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

    //public method
    public function get_sample_buyAds()
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(7); // last 2 weeks

        $buyAds = DB::table('buy_ads')
                            ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                            ->where('buy_ads.confirmed', true)
                            ->whereBetween('buy_ads.created_at', [$from_date, $until_date])
                            ->select(['buy_ads.id', 'buy_ads.name', 'buy_ads.requirement_amount', 'buy_ads.created_at', 'buy_ads.category_id','myusers.first_name','myusers.last_name'])
                            ->orderBy('buy_ads.created_at', 'desc')
                            ->limit(10)
                            ->get()
                            ->shuffle()
                            ->slice(0, 6);

        $date_convertor_object = new date_convertor();

        $buyAds->map(function ($buyAd) use ($date_convertor_object) {
            $category_info = $this->get_category_and_subcategory_name($buyAd->category_id);

            $buyAd->category_name = $category_info['category_name'];
            $buyAd->subcategory_name = $category_info['subcategory_name'];

            $buyAd->register_date = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);
        });

        return response()->json([
            'status' => true,
            'buyAds' => $buyAds,
        ], 200);
    }

    //public method
    public function get_my_buyAd_suggestions(Request $request)
    {
        $user_id = session('user_id');

        $my_buyAd_suggestions = DB::table('buy_ad_suggestions')
                                        ->join('buy_ads','buy_ads.id','=','buy_ad_suggestions.buy_ad_id')
                                        ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                                        ->join('categories','buy_ads.category_id','=','categories.id')
                                        ->where('buy_ad_suggestions.seller_id',$user_id)
                                        ->select('buy_ads.id','myusers.first_name', 'myusers.last_name' , 'myusers.phone_view_permission', 'buy_ads.name', 'buy_ads.requirement_amount' ,'categories.category_name as subcategory_name' ,'buy_ads.myuser_id as buyer_id' ,'buy_ad_suggestions.created_at')
                                        ->get();

        $my_buyAd_suggestions->each(function($buyAd){
            $buyAd->remaining_time = 4 - Carbon::now()->diffInHours($buyAd->created_at);
            unset($buyAd->created_at);
        });

        $my_buyAd_suggestions = $my_buyAd_suggestions->filter(function($buyAd){            
            if($buyAd->remaining_time > 0 && $buyAd->remaining_time <= 4){
                $buyAd->expired = false;

                return true;
            }
            // else if($buyAd->remaining_time <= 0 && $buyAd->remaining_time > -1){
            //     $buyAd->expired = true;

            //     // unset($buyAd->remaining_time);
                
            //     return true;
            // }
            else{
                return false;
            }
        });

        $final_golden_buyAds = [];
        
        if(count($my_buyAd_suggestions) > 0){
            $golden_buyAds = $this->get_golden_buyAds_for_this_user($user_id);

            $my_buyAd_suggestions = $my_buyAd_suggestions->toArray();

            if($golden_buyAds){
                $my_buyAd_suggestion_ids = [];
                $my_buyer_ids = [];

                foreach($my_buyAd_suggestions as $buyAd)
                {
                    $my_buyAd_suggestion_ids[] = $buyAd->id;
                    $my_buyer_ids[] = $buyAd->buyer_id;
                }

                $final_golden_buyAds = array_filter($golden_buyAds,function($buyAd) use($my_buyAd_suggestion_ids,$my_buyer_ids){
                    return in_array($buyAd->id,$my_buyAd_suggestion_ids) === false && in_array($buyAd->buyer_id,$my_buyer_ids) === false;
                });
            }
            
            usort($my_buyAd_suggestions,function($a,$b){
                return $a->remaining_time <= $b->remaining_time;
            });
        }
        else{
            $products = DB::table('products')
                                    ->where('myuser_id',$user_id)
                                    // ->whereNull('deleted_at') 
                                    ->where(function($q){
                                        return $q = $q->where('confirmed',true)
                                                            ->orWhereBetween('created_at',[Carbon::now()->subHours(12),Carbon::now()]);
                                    })
                                    ->orderBy('created_at','desc')
                                    ->get();

            foreach($products as $product){
                $user_active_package_type = myuser::find($user_id)->active_pakage_type;

                $tmp = $this->get_new_most_related_buyAds($product,$user_active_package_type);

                if(count($final_golden_buyAds) <= 50){
                    $final_golden_buyAds = array_unique(array_merge($final_golden_buyAds,$tmp),SORT_REGULAR);
                }
                else{
                    break;
                }
                
            }

            if(count($final_golden_buyAds) > 0){
                usort($final_golden_buyAds,function($item1,$item2){
                    return $item1->updated_at < $item2->updated_at;
                });
            }
            
        }

        if($final_golden_buyAds instanceof Illuminate\Database\Eloquent\Collection || is_object($final_golden_buyAds)){
            $final_golden_buyAds = (array) $final_golden_buyAds;
        }

        foreach($final_golden_buyAds as $buyAd){
            if(str_split($buyAd->phone_view_permission)[1] == 1){
                $buyAd->has_phone = true;
            }
            else{
                $buyAd->has_phone = false;
            }

            unset($buyAd->phone_view_permission);
        }

        foreach($my_buyAd_suggestions as $buyAd){
            if(str_split($buyAd->phone_view_permission)[1] == 1){
                $buyAd->has_phone = true;
            }
            else{
                $buyAd->has_phone = false;
            }

            unset($buyAd->phone_view_permission);
        }

        return response()->json([
            'status' => true,
            'buyAds' => $my_buyAd_suggestions,
            'golden_buyAds' => $final_golden_buyAds
        ],200);

    }

    protected function get_golden_buyAds_for_this_user($user_id)
    {
        $user_products = DB::table('products')
                                ->where('confirmed',true)
                                ->whereNull('deleted_at')
                                ->where('myuser_id',$user_id)
                                ->orderBy('updated_at')
                                ->get();

        $golden_buyAds = $this->get_related_golden_buyAds_to_given_products($user_products,$user_id);
        
        if(count($golden_buyAds) > 0){
            return $golden_buyAds;
        }

        return [];
        
    }

    protected function get_related_golden_buyAds_to_given_products(&$products,$user_id)
    {
        $result_golden_buyAds = [];

        foreach($products as $product){
            $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name))));

            $category_info = $this->get_category_and_subcategory_name($product->category_id);

            if (count($product_name_array) > 1) {
                if ($product_name_array[0] == $category_info['subcategory_name']) {
                    array_splice($product_name_array, 0, 1); //removes the first element
                }
            }

            $product_name_array = $this->remove_black_list_words($product_name_array);

            $golden_buyAds = DB::table('buy_ads')
                                ->join('categories','categories.id','=','buy_ads.category_id')
                                ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                                ->where('buy_ads.category_id',$product->category_id)
                                ->where(function($q) use($product_name_array){
                                    foreach($product_name_array as $name){
                                        $q = $q->orWhere('name','like',"%$name%");
                                    }

                                    return $q;
                                })
                                ->whereBetween('buy_ads.updated_at',[Carbon::now()->subHours(4),Carbon::now()])
                                ->where('myuser_id','<>',$user_id)
                                ->where('confirmed',true)
                                ->where('buy_ads.category_id',$product->category_id)
                                ->whereNull('buy_ads.deleted_at')
                                ->select('buy_ads.id','myusers.first_name', 'myusers.last_name' ,'myusers.phone_view_permission','buy_ads.name', 'buy_ads.requirement_amount' ,'categories.category_name as subcategory_name' ,'buy_ads.myuser_id as buyer_id' )
                                ->get();

            $result_golden_buyAds = array_merge($result_golden_buyAds,array_values($golden_buyAds->toArray()));
        }
        


        return array_unique($result_golden_buyAds,SORT_REGULAR);
        
    }

    protected function get_new_most_related_buyAds($product,$user_active_package_type = 0)
    {
        $until = Carbon::now();
        $from = Carbon::now()->subMonths(4);

        $product_name_array = $this->get_product_name_array($product);

        $buyAds = DB::table('buy_ads')
                                ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                                ->join('categories as subcategory','subcategory.id','=','buy_ads.category_id')
                                ->join('categories','subcategory.parent_id','=','categories.id')
                                ->where('buy_ads.category_id',$product->category_id)
                                ->where('myusers.is_buyer',true)
                                ->where('buy_ads.requirement_amount','<=',$product->stock)
                                ->whereBetween('buy_ads.updated_at',[$from,$until])
                                ->where('buy_ads.confirmed',true)
                                ->whereNull('buy_ads.deleted_at')
                                ->where(function($q) use($product_name_array){
                                    foreach($product_name_array as $name){
                                        $q = $q->orWhere('name','like',"%$name%");
                                    }

                                    return $q;

                                })
                                ->orderBy('updated_at','desc')
                                ->select($this->related_buyAds_required_fields)
                                ->get();

        $buyAds = $this->get_most_valuable_buyAds($buyAds,$user_active_package_type);

        return $buyAds;
    }

    protected function get_most_valuable_buyAds($buyAds,$user_active_package_type)
    {
        $buyer_ids = [];

        foreach($buyAds as $buyAd){
            $buyer_ids[] = $buyAd->buyer_id;
        }

        $buyer_ids = array_unique($buyer_ids);

        $query_result = DB::table('messages')->selectRaw("receiver_id as user_id,count(DISTINCT(sender_id)) as in_degree,((SELECT count(DISTINCT(sender_id)) as cnt from messages where receiver_id = user_id and is_read = true)/count(DISTINCT(sender_id))) * 100 as response_rate,(SELECT count(DISTINCT(receiver_id)) as cnt from messages where sender_id = user_id) as out_degree")
                                            ->whereIn('receiver_id',$buyer_ids)
                                            ->groupBy('user_id')
                                            ->havingRaw('response_rate >= 90')
                                            ->orderByRaw('response_rate desc,out_degree,in_degree')
                                            ->get()
                                            ->all();

        $result = array_column($query_result,'user_id');

        $high_degree_buyers = [];
        foreach($query_result as $item)
        {
            if($item->in_degree >= 20 && $item->out_degree >= 20)
            {
                $high_degree_buyers[] = $item->user_id;
            }
        }


        $buyer_ids = [];
        $important_buyAds = [];
        $new_buyAds = [];
        
        foreach($buyAds as $buyAd){
            if(in_array($buyAd->buyer_id,$result) === true && in_array($buyAd->buyer_id,$buyer_ids) === false){
                
                if( in_array($buyAd->buyer_id,$high_degree_buyers)){

                    $buyAd->is_golden = true;
                    unset($buyAd->created_at);

                    $important_buyAds[] = $buyAd;
                    $buyer_ids[] = $buyAd->buyer_id;
                }
                else if($user_active_package_type > 0 && Carbon::now()->diffInHours($buyAd->updated_at) <= 12){
                    $buyAd->is_golden = true;
                    unset($buyAd->created_at);

                    $new_buyAds[] = $buyAd; 
                    $buyer_ids[] = $buyAd->buyer_id;
                }
            }
        } 

        return array_merge($new_buyAds,$important_buyAds);
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

    public function get_my_buyAds()
    {
        $user_id = session('user_id');

        $my_buyAds = DB::table('buy_ads')
                            ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                            ->join('categories as subcategories','subcategories.id','=','buy_ads.category_id')
                            ->join('categories','subcategories.parent_id','=','categories.id')
                            ->whereNull('deleted_at')
                            ->where('confirmed',true)
                            ->where('buy_ads.myuser_id',$user_id)
                            ->orderBy('buy_ads.created_at','desc')
                            ->select($this->my_buyAds_required_fields)
                            ->get();
                        
        foreach($my_buyAds as $buyAd)
        {
            $buyAd->reply_capacity = abs(10 - $buyAd->reply_capacity);
        }

        
        return response()->json([
            'status' => true,
            'buyAds' => $my_buyAds,
        ],200);
        
    }
}
