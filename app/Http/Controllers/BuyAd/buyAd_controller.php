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
        'name' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
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
        // 'myusers.user_name',
        'myusers.first_name',
        'myusers.last_name',
    ];

    protected $my_sell_offer_required_fields = [
        'buy_ad_id',
        'myuser_id',
    ];

    protected $related_products_fields = [
        'id',
        'product_name',
        'stock',
        'description',
        'category_id',
        'created_at',
        'myuser_id'
    ];

    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر',
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
            $buyAd = new buyAd();

            $user_id = session('user_id');

            foreach ($this->buyAd_register_fields_array as $field_name) {
                if (!is_null($request->$field_name)) {
                    $buyAd->$field_name = $request->$field_name;
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
            'from_record_number' => 'integer|min:1',
            'to_record_number' => 'integer|min:1',
        ]);

        $all_buyAds = null;
        if ($request->filled('from_record_number') && $request->filled('to_record_number')) {
            $all_buyAds = $this->get_all_buy_ads_with_related_media($request->form_record_number, $request->to_record_number);
        } else {
            $all_buyAds = $this->get_all_buy_ads_with_related_media();
        }

        return response()->json([
            'status' => true,
            'buy_ads' => $all_buyAds,
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
                'msg' => 'آگهی حذف شد.',
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
        $buyAd_recommender_object = new buyAd_recommender_controller();


        if ($user->is_seller) {
            $result_buyAds = array();

            $related_buyAds = $this->get_related_buyAds_list_to_the_user($user);

            // $record_count = config("subscriptionPakage.type-$user->active_pakage_type.buyAd-count");

            // if ($record_count <= config("subscriptionPakage.type-2.buyAd-count")) {
                $buyAd_recommender_object->buyAd_list_recommender_for_seller($related_buyAds, $seller_id); //check out the method for more details
            // } else {
            //     $related_buyAds = $related_buyAds->toArray();
            // }
            
            // $related_buyAds = array_slice($related_buyAds, 0, $record_count);

            foreach ($related_buyAds as $buyAd) {
                $category_array = $this->get_category_and_subcategory_name($buyAd->category_id);
                $buyAd->category_name = $category_array['category_name'];
                $buyAd->subcategory_name = $category_array['subcategory_name'];
                $buyAd->register_date = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);

                $result_buyAds[] = $buyAd;
            }

            return response()->json([
                'status' => true,
                'buyAds' => $result_buyAds,
            ], 200);
        } else {
            return response()->json([
               'status' => false,
               'msg' => 'حساب کاربریی که با آن وارد شده اید از نوع حساب فروشندگان نیست!',
            ], 404);
        }
    }

    protected function get_related_buyAds_list_to_the_user(&$user)
    {
        $query = DB::table('buy_ads')
                    ->join('myusers', 'buy_ads.myuser_id', '=', 'myusers.id')
                    ->where('buy_ads.confirmed', true)
                    ->where('buy_ads.reply_capacity','>',0)
                    ->whereBetween('buy_ads.updated_at',[Carbon::now()->subWeeks(2),Carbon::now()])
                    ->where('buy_ads.myuser_id','<>',$user->id);
        
        // if($user->active_pakage_type == 0){
        //     $query = $query->where('buy_ads.updated_at','<',Carbon::now()->subHours(2));
        // }

        $query = $query->select($this->related_buyAd_list_required_fields)
                    ->orderBy('buy_ads.updated_at', 'desc');

        $buyAds = $query->get();

        $golden_buyAds_update_date = Carbon::now()->subHours(2);
        $buyAds->each(function($buyAd) use($golden_buyAds_update_date){
            if($buyAd->updated_at > $golden_buyAds_update_date)
            {
                $buyAd->is_golden = true;
            }
            else{
                $buyAd->is_golden = false;
            }
        });
                    
        //relevance
        // $buyAds = $buyAds->filter(function ($buyAd) {
        //     $user_id = session('user_id');

        //     $category_record = category::find($buyAd->category_id);
        //     $user_record = myuser::find($user_id);

        //     $relevence = ($user_record->category_id == $category_record->parent_id) ? true : false;
        //     // $user_already_offered_for_buyAd = false;

        //     return  $relevence;
        // });

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
        if($buyAd->name){
            $until_date = Carbon::now();
            $from_date = Carbon::now()->subDays(14); // last 2 weeks
        }
        else{
            $until_date = Carbon::now()->subDays(14);
            $from_date = Carbon::now()->subDays(28); // first 2 weeks of last month
        }
        

        $related_subcategory_products = product::where('category_id', $buyAd->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('created_at', [$from_date, $until_date])
                                            ->where('myuser_id','<>',$buyAd->myuser_id)
                                            ->select($this->related_products_fields)
                                            ->orderBy('created_at','desc')
                                            ->get();

        if ($related_subcategory_products) {
            if($buyAd->name){
                $the_most_related_product_record = $this->get_the_most_related_products_to_given_buyAd($buyAd, $related_subcategory_products);
            }
            else{
                $the_most_related_product_record = $this->get_the_most_related_products_to_given_buyAd($buyAd, $related_subcategory_products,$skip_filtering = true);
            }

            return $the_most_related_product_record ? $the_most_related_product_record : null;
        } else {
            return null;
        }
    }

    protected function get_the_most_related_products_to_given_buyAd(&$buyAd, &$products,$skip_filtering = false)
    {
        $most_related_records = [];

        $category_info = $this->get_category_and_subcategory_name($buyAd->category_id);

        $avg_message_senders_count = $this->get_average_message_senders_count_to_sellers($buyAd->category_id,Carbon::now()->subMonths(1),Carbon::now());

        $reserved_products = [];

        if($skip_filtering == false){
            $buyAd_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $buyAd->name)))); //PHP is for professionals,not for kids

            $buyAd_name_array = $this->remove_subcategory_name_from_first_word_of_the_buyAd_name_array($buyAd_name_array,$category_info['subcategory_name']);

            $buyAd_name_array = $this->remove_black_list_words($buyAd_name_array);

            $buyAd_name_array_count = count($buyAd_name_array);

            if($products){
                foreach ($products as $product) {
    
                    $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name))));
    
                    foreach ($product_name_array as $word) {
                        $index = array_search($word, $buyAd_name_array); //$index will be false if the array doesn't contain the word
                        if ($index !== false) {//warning:don't change it to !=
                            $message_senders_to_product_owner_count = $this->get_user_message_senders_count($product->myuser_id);
                            
                            if($message_senders_to_product_owner_count > $avg_message_senders_count){
                                $reserved_products[] = $product; 
                            }
                            else{
                                $most_related_records[] = $product;
                            }
                            
                            break;
                        }
                    }
    
                    if(count($most_related_records) >= $this->offered_products_count_after_buyAd_register){
                        break;
                    }
                }
            }
        }
        else{
            if($products){
                foreach($products as $product){
                    $message_senders_to_product_owner_count = $this->get_user_message_senders_count($product->myuser_id);

                    if($message_senders_to_product_owner_count > $avg_message_senders_count){
                        $reserved_products[] = $product; 
                    }
                    else{
                        $most_related_records[] = $product;
                    }

                    if(count($most_related_records) >= $this->offered_products_count_after_buyAd_register){
                        break;
                    }
                }
            }
        }

        if(($product_shortage_count = $this->offered_products_count_after_buyAd_register - count($most_related_records)) > 0){
            if($product_shortage_count <= count($reserved_products)){
                $most_related_records = array_merge($most_related_records,array_slice($reserved_products,0,$product_shortage_count - 1));
            }
            else if(count($reserved_products)){
                if($most_related_records){
                    $most_related_records = array_merge($most_related_records,$reserved_products);
                }
                else{
                    $most_related_records = $reserved_products;
                }
            }
        }

        if(count($most_related_records)){
            $this->append_related_info_to_most_related_products($most_related_records,$buyAd,$category_info);
        }
        
        return $most_related_records;
    }

    protected function remove_subcategory_name_from_first_word_of_the_buyAd_name_array($buyAd_name_array,$subcategory_name)
    {
        if (count($buyAd_name_array)) {
            if ($buyAd_name_array[0] == $subcategory_name) {
                array_splice($buyAd_name_array, 0, 1);
            }
        }

        return $buyAd_name_array;
    }

    protected function append_related_info_to_most_related_products($products,$buyAd,$category_info)
    {
        foreach($products as $product){
            $this->append_category_info_to_product($product, $category_info);
            $this->append_user_info_to_most_related_product_record($product, $buyAd); //append using reference
            $this->append_related_media_to_most_related_product_record($product);
        }
    }

    protected function append_user_info_to_most_related_product_record($product)
    {
        $product_owner_user_record = myuser::where('id', $product->myuser_id)
                                            ->select(['user_name', 'first_name', 'last_name'])
                                            ->get()
                                            ->first();

        $product['user_name'] = $product_owner_user_record->user_name;
        $product['first_name'] = $product_owner_user_record->first_name;
        $product['last_name'] = $product_owner_user_record->last_name;

        $date_convertor_object = new date_convertor();

        $product['register_date'] = $date_convertor_object->get_persian_date_with_month_name($product->created_at);
    }

    protected function append_category_info_to_product($product, &$category_info)
    {
        $product['category_name'] = $category_info['category_name'];
        $product['subcategory_name'] = $category_info['subcategory_name'];
    }

    protected function append_related_media_to_most_related_product_record($product)
    {
        $product['photo'] = product_media::where('product_id',$product->id)
                                            ->select('file_path')
                                            ->first()
                                            ->file_path;
    }

    protected function get_average_message_senders_count_to_sellers($subcategory_id,$from_date,$until_date)
    {
        $product_owners_in_category = product::where('category_id',$subcategory_id)
                                                ->select('myuser_id')
                                                ->distinct()
                                                ->get();
        
        $temp = message::whereIn('receiver_id',$product_owners_in_category)
                            ->whereBetween('created_at',[$from_date,$until_date])
                            ->select(DB::raw("receiver_id,count(distinct(sender_id)) as cnt"))
                            ->groupBy('receiver_id')
                            ->get();

        return (integer) $temp->avg('cnt');

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

    protected function get_user_message_senders_count($user_id)
    {
        $msg_senders_count = message::where('receiver_id',$user_id)
                                        ->select('sender_id')
                                        ->distinct()
                                        ->get()
                                        ->count();
        return $msg_senders_count;
    }

    //public method
    public function get_sample_buyAds()
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(7); // last 2 weeks

        $buyAds = buyAd::where('confirmed', true)
                            ->whereBetween('created_at', [$from_date, $until_date])
                            ->select(['id', 'name', 'requirement_amount', 'created_at', 'category_id'])
                            ->orderBy('created_at', 'desc')
                            ->limit(10)
                            ->get()
                            ->shuffle()
                            ->slice(0, 5);

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
                                        ->select('buy_ads.id','myusers.first_name', 'myusers.last_name' ,'buy_ads.name', 'buy_ads.requirement_amount' ,'categories.category_name as subcategory_name' ,'buy_ads.myuser_id as buyer_id' ,'buy_ad_suggestions.created_at')
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
            else if($buyAd->remaining_time <= 0 && $buyAd->remaining_time > -8){
                $buyAd->expired = true;

                // unset($buyAd->remaining_time);
                
                return true;
            }
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

        // var_dump($user_products);

        $golden_buyAds = $this->get_related_golden_buyAds_to_given_products($user_products,$user_id);
        
        if(count($golden_buyAds) > 0){
            return $golden_buyAds;
        }

        return null;
        
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
                                ->select('buy_ads.id','myusers.first_name', 'myusers.last_name' ,'buy_ads.name', 'buy_ads.requirement_amount' ,'categories.category_name as subcategory_name' ,'buy_ads.myuser_id as buyer_id' )
                                ->get()
                                ->values()
                                ->toArray();
            // var_dump($golden_buyAds);

            $result_golden_buyAds = array_merge($result_golden_buyAds,$golden_buyAds);
        }
        


        return array_unique($result_golden_buyAds,SORT_REGULAR);
        
    }
}
