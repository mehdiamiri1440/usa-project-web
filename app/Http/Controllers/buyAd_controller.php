<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\Http\Library\date_convertor;
use App\product;
use App\myuser;
use App\buyAd;
use App\category;
use App\profile;
use DB;
use App\sell_offer;
use App\buyAd_media;
use App\Http\Controllers\buyAd_recommender_controller;

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
        'category_id',//sub_category_id in fact
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
        'price' => 'integer|min:0',
        'address' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
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
        'buy_ads.category_id',
        'buy_ads.requirement_amount',
        'buy_ads.confirmed',
        'buy_ads.myuser_id',
        'myusers.user_name',
        'myusers.first_name',
        'myusers.last_name',
    ];

    protected $my_sell_offer_required_fields = [
        'buy_ad_id',
        'myuser_id'
    ];

	public function __construct()
	{
		$this->date_convertor = new date_convertor();
	}

	public function add_buyAd(Request $request)
	{
        $rules = $this->set_buyAd_validation_rules($request);

		$this->validate($request,$rules);

		$buyAd_object_or_failuire_message = $this->add_buyAd_to_DB($request);

		if(is_object($buyAd_object_or_failuire_message))
		{
			return response()->json([
				'status' => TRUE,
				'buyAd' => $buyAd_object_or_failuire_message
			],201);
		}
		else{
			return response()->json([
				'status' => FALSE,
				'msg' => $buyAd_object_or_failuire_message
			],500);
		}
	}

    protected function set_buyAd_validation_rules($request)
    {
        foreach($this->buyAd_register_mandetory_fields_array_with_validation_rules as $field_name => $validation_rule){
            $rules[$field_name] = $validation_rule;
        }

        foreach($this->buyAd_register_nullable_fields_array_with_validation_rules as $field_name => $validation_rules)
        {
            if($request->filled($field_name))
            {
                $rules[$field_name] = $validation_rules;
            }
        }

        return $rules;
    }

	protected function add_buyAd_to_DB($request)
	{
		try{
			$buyAd = new buyAd();
			$user  = myuser::find(session('user_id'));

            foreach($this->buyAd_register_fields_array as $field_name)
            {
                if(!is_null($request->$field_name))
                {
                    $buyAd->$field_name = $request->$field_name;
                }
            }

			$user->buyAd()->save($buyAd);

            $file_path_array = $this->save_buyAd_photos($request,$request->images_count);
            $this->register_photos_path_in_DB($file_path_array,$buyAd);

			return $buyAd;
		}
		catch(\Exception $e)
		{
			return $e->getMessage();
		}
	}

    protected function save_buyAd_photos(&$request,$image_count)
	{
		$files_path = [];

		for($i = 0 ; $i < $image_count ; $i++)
		{
			$image_name = 'image_'.$i ;
			$img = $request->$image_name;

			$path = $img->store('buyAds');

			$files_path[] = $path;
		}

		return $files_path;
	}

	protected function register_photos_path_in_DB($photos_path_array,&$buyAd)
	{
		foreach($photos_path_array as $file_path)
		{
			$media = new buyAd_media();

			$media->file_path = $file_path;

			$buyAd->buyAd_media()->save($media);
		}
	}


	//public method
	public function get_buyAd_list(Request $request)
	{
		if($request->current_user == TRUE){

			if( ! session()->has('user_id'))
			{
				return redirect('/login');;
			}

			$this->validate($request,[
				'from_record_number' => 'integer|min:1',
				'to_record_number' => 'integer|min:1'
			]);


			if($request->filled('from_record_number') && $request->filled('to_record_number'))
			{
				$from_record_number = $request->from_record_number;
				$to_record_number = $request->to_record_number;

				$current_user_buyAds = $this->get_current_user_buyAd_list_with_related_media(null,$from_record_number,$to_record_number);

			}
			else{
				$current_user_buyAds = $this->get_current_user_buyAd_list_with_related_media();
			}


			return response()->json([
				'status' => TRUE,
				'buy_ads' => $current_user_buyAds
			],200);
		}
		else if($request->private_view == TRUE){
			$all_buyAds = buyAd::all();

			return response()->json([
				'status' => TRUE,
				'buyAds' => $all_buyAds
			],200);
		}
		else{
			$this->validate($request,[
				'from_record_number' => 'integer|min:1',
				'to_record_number' => 'integer|min:1'
			]);

			$all_buyAds = NULL;
			if($request->filled('from_record_number') && $request->filled('to_record_number'))
			{
				$all_buyAds = $this->get_all_buy_ads_with_related_media(FALSE,$request->form_record_number,$request->to_record_number);
			}
			else {
				$all_buyAds = $this->get_all_buy_ads_with_related_media(FALSE);
			}

			return response()->json([
				'status' => TRUE,
				'buy_ads' => $all_buyAds
			],200);
		}
	}


	protected function get_current_user_buyAd_list_with_related_media($user_id = null,$from_record_number = null, $to_record_number = null)
	{
		$current_user_id = $user_id ? $user_id : session('user_id');

		$buyAds = null;

		if($from_record_number)
		{
			$take_count = abs($to_record_number - $from_record_number);

			$buyAds = buyAd::where('myuser_id',$current_user_id)
                ->where('confirmed',true)
				->skip($from_record_number)
				->take($take_count)
				->get();
		}
		else{
			$buyAds = buyAd::where('myuser_id',$current_user_id)
                ->where('confirmed',true)
				->get();
		}

		$result_buyAds = array();

		foreach($buyAds as $buyAd)
		{
			$buyAd_related_photos = $buyAd->buyAd_media()
				->select('file_path')
				->get();

			$buyAd_related_data['main'] = $this->get_buy_ad_related_data($buyAd->id);

            $buyAd_related_data['user_info'] = myuser::where('id',$buyAd->myuser_id)
                ->get($this->user_info_sent_by_buy_ad_array)
                ->first();

            $buyAd_related_data['profile_info'] = profile::where('myuser_id',$buyAd->myuser_id)
                ->where('confirmed',true)
                ->get($this->profile_info_sent_by_buy_ad_array)
                ->last();

			$buyAd_related_data['photos'] = $buyAd_related_photos ;


			$buyAd_parent_category_data =  $buyAd->category;
			$buyAd_related_data['category_id'] = $buyAd_parent_category_data['parent_id'];
			$buyAd_related_data['category_name'] = (category::find($buyAd_parent_category_data['parent_id']))['category_name'];

			$result_buyAds[] = $buyAd_related_data;
		}

		return $result_buyAds;
	}

	protected function get_all_buy_ads_with_related_media($authentication,$from_record_number = null,$to_record_number = null)
	{
		$buy_ads = NULL ;

		if($from_record_number)
		{
			$take_count = abs($to_record_number - $from_record_number) ;

			$buy_ads = buyAd::where('confiremd',true)
                ->skip($from_record_number)
				->take($take_count)
				->get();
		}
		else{
			$buy_ads = buyAd::where('confirmed',true)
                ->get();
		}

		$result_buyAd = array();

		foreach($buy_ads as $buy_ad)
		{
			$buy_ad_related_photos = $buy_ad->buyAd_media()
				->select('file_path')
				->get();

			$buy_ad_related_data['main'] = $this->get_buy_ad_related_data($buy_ad->id);

            $buy_ad_related_data['user_info'] = myuser::where('id',$buy_ad->myuser_id)
                ->get($this->user_info_sent_by_buy_ad_array)
                ->first();

            $buy_ad_related_data['profile_info'] = profile::where('myuser_id',$buy_ad->myuser_id)
                ->where('confirmed',true)
                ->get($this->profile_info_sent_by_buy_ad_array)
                ->last();

//			if($authentication == TRUE)
//			{
//				$buy_ad_related_user_info = myuser::find($buy_ad->myuser_id);
//				$buy_ad_related_data['phone'] = $product_related_user_info->phone ;
//			}

			$buy_ad_related_data['photos'] = $buy_ad_related_photos;

			$buy_ad_parent_category_data =  $buy_ad->category;
			$buy_ad_related_data['category_id'] = $buy_ad_parent_category_data['parent_id'];
			$buy_ad_related_data['category_name'] = (category::find($buy_ad_parent_category_data['parent_id']))['category_name'];

			$result_buyAd[] = $buy_ad_related_data ;
		}

		return $result_buyAd;
	}

	protected function get_buy_ad_related_data($buy_ad_id)
	{
            $products_with_related_data = DB::table('buy_ads')
													->join('categories','buy_ads.category_id','=','categories.id')
													->leftJoin('cities','cities.id','=','buy_ads.city_id')
													->leftJoin('provinces','provinces.id','=','cities.province_id')
													->select('buy_ads.id','buy_ads.name','buy_ads.requirement_amount','buy_ads.address','buy_ads.description','buy_ads.address','buy_ads.price','buy_ads.category_id as sub_category_id','provinces.province_name','provinces.id as province_id','cities.city_name','cities.id as city_id','categories.category_name as sub_category_name')
													->where('buy_ads.id',$buy_ad_id)
                                                    ->where('confirmed',true)
													->get()
													->first();


		return $products_with_related_data;
	}

	//public method
	public function get_buy_ad_by_id(Request $request)
	{
		$this->validate($request,[
			'buy_ad_id' => 'required|integer|min:1'
		]);
		$buy_ad_id = $request->buy_ad_id;

		$buy_ad = buyAd::where('id',$buy_ad_id)
            ->where('confirmed',true)
            ->first();

        if(is_null($buy_ad)){
            return response()->json([
                'status' => false,
                'msg' => "buy_ad hasn't been confirmed yet or doesn't exsist!",
            ],404);
        }

		$buy_ad_related_photos = $buy_ad->buyAd_media()
				->select('file_path')
				->get();

		$buy_ad_related_data['main'] = $this->get_buy_ad_related_data($buy_ad_id);


        $buy_ad_related_data['user_info'] = myuser::where('id',$buy_ad->myuser_id)
                ->get($this->user_info_sent_by_buy_ad_array)
                ->first();

        $buy_ad_related_data['profile_info'] = profile::where('myuser_id',$buy_ad->myuser_id)
                ->where('confirmed',true)
                ->get($this->profile_info_sent_by_buy_ad_array)
                ->last();

//		if(session()->has('user_id'))
//		{
//			$buy_ad_related_user_info = myuser::find(session('user_id'));
//			$buy_ad_related_data['phone'] = $buy_ad_related_user_info->phone ;
//		}

		$buy_ad_related_data['photos'] = $buy_ad_related_photos;

		$buy_ad_parent_category_data =  $buy_ad->category;
		$buy_ad_related_data['category_id'] = $buy_ad_parent_category_data['parent_id'];
		$buy_ad_related_data['category_name'] = (category::find($buy_ad_parent_category_data['parent_id']))['category_name'];

		return response()->json([
			'status' => true,
			'buy_ad' => $buy_ad_related_data,
		],200);
	}

    //public method
    public function increment_buy_ad_phone_view_count(Request $request)
    {
        $this->validate($request,[
			'buy_ad_id' => 'required|numeric'
		]);

		$buy_ad_id = $request->buy_ad_id;
		try{
            $buyAd  = buyAd::findOrFail($buy_ad_id);
            $buyAd_owner_info = myuser::find($buyAd->myuser_id);
        }
        catch(\Exception $e)
        {
            return response()->json([
               'status' => false,
                'msg' => 'the given buyAd does not exist.'
            ],500);
        }


		$buy_ad_view_count_before_increment = $buyAd->phone_view_count;

		$buyAd->phone_view_count = $buy_ad_view_count_before_increment + 1;

		$buyAd->save();

		return response()->json([
            'status' => true,
            'phone' => $buyAd_owner_info->phone,
			'count_before_increment' => $buy_ad_view_count_before_increment,
			'count_after_increment' => $buyAd->phone_view_count,
		],201);
    }

    //public method
    public function delete_buy_ad_by_id(Request $request)
    {
        $this->validate($request,[
           'buy_ad_id' => 'required|numeric'
        ]);

        $user_id = session('user_id');
        $buy_ad_id = $request->buy_ad_id;

        try{
            $buyAd = buyAd::findOrFail($buy_ad_id);
        }
        catch(\Exception $e){
            return response()->json([
               'status' => false,
                'msg' => 'buyAd does not exist or already has been deleted',
            ],500);
        }

        if($this->is_user_the_buy_ad_owner($user_id,$buyAd)){
            $buyAd->delete();

            return response()->json([
               'status' => true,
                'msg' => 'آگهی حذف شد.'
            ],200);
        }
        else{
            return response()->json([
               'status' => false,
                'msg' => 'the user has not permited to delete the buyAd',
            ],500);
        }
    }

    protected function is_user_the_buy_ad_owner($user_id,$buyAd)
    {
        if($buyAd->myuser_id == $user_id){
            return true;
        }
        else return false;
    }

    public function get_buyAd_list_by_user_name(Request $request)
    {
        $this->validate($request,[
           'user_name' => 'required|alpha_dash'
        ]);

        $user_name = $request->user_name;
        $user_id = $this->get_user_id_for_the_user_name($user_name);

        if($user_id)
        {
			$this->validate($request,[
				'from_record_number' => 'integer|min:1',
				'to_record_number' => 'integer|min:1'
			]);

			if($request->filled('from_record_number') && $request->filled('to_record_number'))
			{
				$from_record_number = $request->from_record_number;
				$to_record_number = $request->to_record_number;

				$current_user_buyAds = $this->get_current_user_buyAd_list_with_related_media($user_id,$from_record_number,$to_record_number);

			}
			else{
				$current_user_buyAds = $this->get_current_user_buyAd_list_with_related_media($user_id);
			}


			return response()->json([
				'status' => TRUE,
				'buy_ads' => $current_user_buyAds
			],200);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => "the user_name '{$user_name}' doesn't exists."
            ],404);
        }
    }

    protected function get_user_id_for_the_user_name($user_name)
    {
        $user_info = myuser::where('user_name',$user_name)
            ->get()
            ->first();

        if($user_info)
        {
           return $user_info->id ;
        }
        else return null;

    }

    //public method
    public function get_my_buyAds_with_related_sell_offers(Request $request)
    {
        $user_id = session('user_id');

        $my_buyAds = $this->get_user_buyAds($user_id);

        $date_convertor_object = new date_convertor();

        $my_buyAds->each(function($buyAd) use($date_convertor_object){

            $category_array = $this->get_category_and_subcategory_name($buyAd->category_id) ;//subcategory_id in fact
            $buyAd['category_name'] = $category_array['category_name'];
            $buyAd['subcategory_name'] = $category_array['subcategory_name'];

            $buyAd['register_date'] = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);

            $sell_offers = $this->get_buyAd_sell_offers($buyAd->id,$this->sell_offer_required_fields_for_buy_ad_list,[
                'is_pending' => true,
                'confirmed'  => true,
            ]);

            $buyAd['sell_offer_count'] = $sell_offers->count();

            $buyAd['sell_offers'] = $sell_offers;
        });

         return response()->json([
             'status' => true,
             'buyAds' => $my_buyAds,
        ],200);
    }

    protected function get_user_buyAds($user_id)
    {
       $buyAds = buyAd::where('myuser_id',$user_id)
           ->select($this->my_buyAd_required_fields)
           ->orderBy('created_at','desc')
           ->get()
           ;

       return $buyAds;
    }

    protected function get_category_and_subcategory_name($subcategory_id)
    {
        $subcategory_record = category::where('id',$subcategory_id)
            ->select('category_name','parent_id')
            ->get()
            ->first();

        $category_record = category::where('id',$subcategory_record->parent_id)
            ->select('category_name')
            ->get()
            ->first();

        return [
            'category_name' => $category_record->category_name,
            'subcategory_name' => $subcategory_record->category_name,
        ];
    }

    protected function get_buyAd_sell_offers($buyAd_id,$fields,$conditions)
    {
        $query = sell_offer::where('buy_ad_id',$buyAd_id) ;

        foreach($conditions as $column => $value){
            $query = $query->where($column,$value);
        }

        $sell_offers = $query
            ->orderBy('created_at','desc')
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

        if($user->is_seller){

            $result_buyAds = array();

            $related_buyAds = $this->get_related_buyAds_list_to_the_user($user);
            //$buyAd_recommender_object->buyAd_list_recommender_for_seller($related_buyAds,session('user_id')); //check out the method for more details

//            $related_buyAds->each(function($buyAd) use($date_convertor_object,&$related_buyAds){
//                   $category_array = $this->get_category_and_subcategory_name($buyAd->category_id);
//                   $buyAd['category_name'] = $category_array['category_name'];
//                   $buyAd['subcategory_name'] = $category_array['subcategory_name'];
//                   $buyAd['register_date'] = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);
//
//                   $result_buyAds[] = $buyAd;
//            });

            foreach($related_buyAds as $buyAd){
                   $category_array = $this->get_category_and_subcategory_name($buyAd->category_id);
                   $buyAd->category_name = $category_array['category_name'];
                   $buyAd->subcategory_name = $category_array['subcategory_name'];
                   $buyAd->register_date = $date_convertor_object->get_persian_date_with_month_name($buyAd->created_at);

                   $result_buyAds[] = $buyAd;
            }


            return response()->json([
                'status' => true,
                'buyAds' => $result_buyAds,
            ],200);
        }
        else{
            return response()->json([
               'status' => false,
               'msg' => 'حساب کاربریی که با آن وارد شده اید از نوع حساب فروشندگان نیست!',
            ],404);
        }
    }

    protected function get_related_buyAds_list_to_the_user(&$user)
    {
        $buyAds = DB::table('buy_ads')
                    ->join('myusers','buy_ads.myuser_id','=','myusers.id')
                    ->where('buy_ads.confirmed', true)
                    ->select($this->related_buyAd_list_required_fields)
                    ->orderBy('buy_ads.created_at','desc')
                    ->get();

        //relevance
        $buyAds = $buyAds->filter(function($buyAd){
            $user_id = session('user_id');

            $category_record = category::find($buyAd->category_id);
            $user_record = myuser::find($user_id);

//            $buyAd->profile_photo = profile::where('myuser_id',$buyAd->myuser_id)
//                ->where('confirmed',true)
//                ->select('profile_photo')
//                ->get()
//                ->last()
//                ->profile_photo;

            $relevence = ($user_record->category_id == $category_record->parent_id) ? true : false;
            $user_already_offered_for_buyAd = false;

            $buyAd_sell_offers = $this->get_buyAd_sell_offers($buyAd->id,$this->my_sell_offer_required_fields,[
                'confirmed' => true,
            ]);

            $buyAd_sell_offers->each(function($sell_offer) use(&$user_already_offered_for_buyAd,$user_id,$buyAd){

               if($sell_offer->myuser_id == $user_id && $sell_offer->buy_ad_id == $buyAd->id){
                    $user_already_offered_for_buyAd = true;

                    return false; //break the 'each' loop
                }
            });

            return  $relevence && ($user_already_offered_for_buyAd == false);
        });

        return $buyAds;
    }

    //public method
    public function get_seller_related_buyAd_by_id($buyAd_id)
    {
        $buyAd = buyAd::where('id',$buyAd_id)
                    ->where('confirmed',true)
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

        if($buyAd){
            //check if seller is authorized to access the buyAd
            //code here

            //add required additional data
            $related_media_records = buyAd_media::where('buy_ad_id',$buyAd->id)
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
                'buyAd' => $buyAd
            ],200);

        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'آیتم مورد نظر یافت نشد!'
            ]);
        }
    }

    protected function get_file_path_array(&$records)
    {
        $result = array();

        foreach($records as $record){
            $result[] = $record->file_path;
        }

        return $result;
    }

    //public method
    public function get_buyAd_owner_user_id(Request $request)
    {
        $this->validate($request,[
           'buyAd_id' => 'required|integer|min:1'
        ]);

        $buyAd_id = $request->buyAd_id;

        $buyAd_record = buyAd::find($buyAd_id);

        if($buyAd_record){
            return response()->json([
                'status' => true,
                'user_id' => $buyAd_record->myuser_id
            ],200);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'buyAd not found!'
            ],404);
        }
    }

    //public method
    public function is_user_allowed_to_access_buyAd_requests(Request $request)
    {
        $user_id = session('user_id');

        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;

        return response()->json([
            'status' => true,
            'access_to_buyAd_requests' => config("subscriptionPakage.type-$user_active_pakage_type.access-to-buy-requests")
        ],200);
    }

}
