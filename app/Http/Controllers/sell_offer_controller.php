<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\sell_offer;
use App\Http\Library\date_convertor;
use App\sell_offer_media;
use App\buyAd;
use App\category;
use App\myuser;
use App\profile;
use Carbon\Carbon;
use JWTAuth;

class sell_offer_controller extends Controller
{
    protected $sell_offer_mandetory_fields_with_validation_rules_array = [
        'price' => 'required|integer|min:0',
        'deliver_at' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
        'valid_date_from' => 'required',
        'valid_date_to' => 'required',
        'description' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
        'photos_count' => 'required|numeric|min:1', //at least one photo,
        'buy_ad_id' => 'required|numeric|min:1',
    ];

    protected $sell_offer_fields_array = [
        'price',
        'deliver_at',
        'valid_date_from',
        'valid_date_to',
        'description',
        'buy_ad_id',
    ];

    public function add_sell_offer(Request $request)
    {
        $validation_rules = $this->set_sell_offer_validation_rules($request);
        $this->validate($request,$validation_rules);

        if($this->user_already_has_sell_offer_for_the_buy_ad($request->buy_ad_id) == true){
            return response()->json([
               'status' => false,
               'msg' => 'شما قبلا پیشنهادتان برای این درخواست را ثبت کرده اید.'
            ],422);
        }

        $sell_offer_object_or_failuire_message = $this->add_sell_offer_to_DB($request);

        if(is_object($sell_offer_object_or_failuire_message)){
            return response()->json([
                'status' => true,
            ],201);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => $sell_offer_object_or_failuire_message,
            ],500);
        }
    }

    protected function set_sell_offer_validation_rules(&$request)
    {
        $rules = [];

        foreach($this->sell_offer_mandetory_fields_with_validation_rules_array as $field_name => $validation_rule){
            $rules[$field_name] = $validation_rule;
        }

        if($request->filled('photos_count')){
            for($index = 0 ; $index < $request->photos_count ; $index++){
                $image_field_name = "img_$index";

                $rules[$image_field_name] = 'required|mimes:jpg,jpeg,png|max:2000';
            }
        }

        return $rules;
    }

    protected function user_already_has_sell_offer_for_the_buy_ad($buyAd_id)
    {
        $old_sell_offer_record_for_the_buyAd_offered_by_the_user = sell_offer::where('buy_ad_id',$buyAd_id)
                                            ->where('myuser_id',session('user_id'))
                                            ->get();

        if($old_sell_offer_record_for_the_buyAd_offered_by_the_user->count() > 0){
            return true;
        }
        else{
            return false;
        }
    }

    protected function add_sell_offer_to_DB(&$request)
    {
        try{
            $sell_offer = new sell_offer();

            $date_convertor_object = new date_convertor();

            foreach($this->sell_offer_fields_array as $field_name){
                if($field_name == 'valid_date_from' || $field_name == 'valid_date_to'){
                    $sell_offer->$field_name = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->$field_name);
                }
                else{
                    $sell_offer->$field_name = $request->$field_name;
                }
            }

            $sell_offer->myuser_id = session('user_id');

            $sell_offer->save();

            $file_path_array = $this->save_sell_offer_photos($request,$request->photos_count);

            foreach($file_path_array as $file_path){
                $sell_offer_media = new sell_offer_media();

                $sell_offer_media->file_path = $file_path;
                $sell_offer_media->sell_offer_id = $sell_offer->id;

                $sell_offer_media->save();
            }

            return $sell_offer;
        }
        catch(\Exception $e){
            return $e->getMessage();
        }
    }

    protected function save_sell_offer_photos(&$request,$image_count)
	{
		$files_path = [];

		for($i = 0 ; $i < $image_count ; $i++)
		{
			$image_name = 'img_'.$i ;
			$img = $request->$image_name;

			$path = $img->store('sell_offers');

			$files_path[] = $path;
		}

		return $files_path;
	}

    //public method
    public function get_sell_offer_by_id(Request $request)
    {
        $this->validate($request,[
           'sell_offer_id' => 'required|numeric|min:1'
        ]);

        $sell_offer_id = $request->sell_offer_id;

        $user_id = session('user_id');

        $sell_offer_record = sell_offer::where('id',$sell_offer_id)
                ->get()
                ->first()
                ;
        if(! $sell_offer_record){
            return abort(404);
        }

        if($this->is_user_authorized_to_access_the_sell_offer($sell_offer_record) == false){
            return abort(404);
        }

        $related_media_records = sell_offer_media::where('sell_offer_id',$sell_offer_id)
                            ->select('file_path')
                            ->get()
                            ;

        $date_convertor_object = new date_convertor();

        $sell_offer_record['date_from'] = $date_convertor_object->get_persian_date_with_month_name($sell_offer_record->valid_date_from);
        $sell_offer_record['date_to'] = $date_convertor_object->get_persian_date_with_month_name($sell_offer_record->valid_date_to);
        $sell_offer_record['photos'] = $this->get_file_path_array($related_media_records);

        $sell_offer_user_info = myuser::where('id',$sell_offer_record->myuser_id)
                ->select([
                    'id',
                    'first_name',
                    'last_name',
                    'city',
                    'province',
                    'user_name'
                ])
                ->get()
                ->first();

        $sell_offer_profile_record = profile::where('myuser_id',$sell_offer_user_info->id)
            ->where('confirmed',true)
            ->select('profile_photo')
            ->get()
            ->last();

        return response()->json([
            'status' => true,
            'sell_offer' => $sell_offer_record,
            'sell_offer_user_info' => $sell_offer_user_info,
            'profile_photo' => $sell_offer_profile_record ? $sell_offer_profile_record->profile_photo : '',
        ],200);
    }

    protected function is_user_authorized_to_access_the_sell_offer(&$sell_offer_record)
    {
        $user_id = session('user_id');

        $buyAd_id = $sell_offer_record->buy_ad_id;

        $buyAd_record = buyAd::where('id',$buyAd_id)
            ->select('myuser_id')
            ->get()
            ->first();

        return $buyAd_record->myuser_id == $user_id ;
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
    public function get_my_sell_offer_list()
    {
//        $user = JWTAuth::parseToken()->authenticate();
//        $userId = $user->id;
//
//        return response()->json([
//           'user_id' => $userId,
//        ]);

        $user_id = session('user_id');

        $sell_offers = sell_offer::where('myuser_id',$user_id)
            ->orderBy('created_at','desc')
            ->get();


        $date_convertor_object = new date_convertor();

        $sell_offers->each(function($sell_offer) use($date_convertor_object){
            $buyAd = buyAd::where('id',$sell_offer->buy_ad_id)
                ->select([
                    'category_id',
                    'name',
                ])
                ->get()
                ->first();

            $category_array = $this->get_category_and_subcategory_name($buyAd->category_id);
            $sell_offer['category_name'] = $category_array['category_name'];
            $sell_offer['subcategory_name'] = $category_array['subcategory_name'];

            $sell_offer['valid_from'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_from);
            $sell_offer['valid_to'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_to);
            $sell_offer['name'] = $buyAd->name;

            if($sell_offer->is_pending == true && $sell_offer->is_accepted == false){
                $sell_offer['status'] = 'در حال بررسی';
            }
            else if($sell_offer->is_pending == false && $sell_offer->is_accepted == true){
                $sell_offer['status'] = 'تایید شده';
            }
            else if($sell_offer->is_pending == false && $sell_offer->is_accepted == false){
                $sell_offer['status'] = 'رد شده';
            }
        });

        return response()->json([
           'status' => true,
           'sell_offers' => $sell_offers,
        ]);
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

    //public method
    public function accept_sell_offer_by_id(Request $request)
    {
        $this->validate($request,[
           'sell_offer' => 'integer|min:1'
        ]);

        $sell_offer_id = $request->sell_offer_id;

        $sell_offer_record = sell_offer::find($sell_offer_id);

        if(! $sell_offer_id){
            return response()->json([
               'status' => false,
               'msg' => 'Failed to Find!'
            ],404);
        }

        if($this->is_user_authorized_to_access_the_sell_offer($sell_offer_record) == false){
            return response()->json([
               'status' => false,
               'msg' => 'UnAthourized to access the sell offer',
            ],404);
        }

        $sell_offer_record->is_accepted = true;
        $sell_offer_record->is_pending = false;
        $sell_offer_record->deal_date = Carbon::now();
        $sell_offer_record->transaction_status = '0000000000000000';

        $sell_offer_record->save();

        return response()->json([
           'status' => true,
           'msg' => 'status changed!'
        ]);
    }

    //public method
    public function reject_sell_offer_by_id(Request $request)
    {
        $this->validate($request,[
           'sell_offer' => 'integer|min:1'
        ]);

        $sell_offer_id = $request->sell_offer_id;

        $sell_offer_record = sell_offer::find($sell_offer_id);

        if(! $sell_offer_id){
            return response()->json([
               'status' => false,
               'msg' => 'Failed to Find!'
            ],404);
        }

        if($this->is_user_authorized_to_access_the_sell_offer($sell_offer_record) == false){
            return response()->json([
               'status' => false,
               'msg' => 'UnAthourized to access the sell offer',
            ],404);
        }

        $sell_offer_record->is_pending = false;

        $sell_offer_record->save();

        return response()->json([
           'status' => true,
           'msg' => 'status changed!'
        ]);
    }
}
