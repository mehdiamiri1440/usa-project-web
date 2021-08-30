<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\sell_offer;
use App\Models\sell_offer_media;
use App\Http\Library\date_convertor;
use App\Models\category;
use App\Models\buyAd;
use App\Models\myuser;
use App\Http\Controllers\Notification\sms_controller;
use DB;

class admin_sell_offer_controller extends Controller
{
    //////////////////////////////
    public function load_unconfirmed_sell_offer_list()
    {
        $sell_offers = DB::table('sell_offers')
                            ->Join('myusers','sell_offers.myuser_id','=','myusers.id') 
                            ->where('sell_offers.confirmed',false)
                            ->select([
                                'myusers.first_name',
                                'myusers.last_name',
                                'sell_offers.*'
                            ])
                            ->orderBy('sell_offers.created_at','desc')
                            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $sell_offers->each(function($sell_offer) use($date_convertor_object){
            //$category_array = $this->get_category_and_subcategory_name($sell_offer->category_id);
            
            $sell_offer->date_from = $date_convertor_object->get_persian_date($sell_offer->valid_date_from);
            $sell_offer->date_to = $date_convertor_object->get_persian_date($sell_offer->valid_date_to);
            
            $sell_offer->created_at = $date_convertor_object->get_persian_date($sell_offer->created_at);
            
            // $sell_offer_media_records = sell_offer_media::where('sell_offer_id',$sell_offer->id)
            //     ->select(['id','file_path'])
            //     ->get();
            // 
            // $sell_offer['photos'] = $this->get_file_path_array($sell_offer_media_records);
        });
        
        return view('admin_panel.sellOffer',[
           'sell_offers' => $sell_offers,
        ]);
    }
    
    ///////////////////////////////
    public function get_sell_offer_with_related_buyAd($sell_offer_id)
    {
        $sell_offer = sell_offer::find($sell_offer_id);
        
        $date_convertor_object = new date_convertor();
        
        $sell_offer->date_from = $date_convertor_object->get_persian_date($sell_offer->valid_date_from);
        $sell_offer->date_to = $date_convertor_object->get_persian_date($sell_offer->valid_date_to);
        
        $sell_offer_media_records = sell_offer_media::where('sell_offer_id',$sell_offer_id)
            ->select(['id','file_path'])
            ->get();
        
        $sell_offer['photos'] = $this->get_file_path_array($sell_offer_media_records);
        
        $buyAd = buyAd::find($sell_offer->buy_ad_id);
        
        $category_array = $this->get_category_and_subcategory_name($buyAd->category_id);
        
        $buyAd['category_name'] = $category_array['category_name'];
        $buyAd['subcategory_name'] = $category_array['subcategory_name'];
        
        $buyAd_user_info = myuser::find($buyAd->myuser_id);
        $sell_offer_user_info = myuser::find($sell_offer->myuser_id);
        
        return view('admin_panel.sellOfferDetail',[
            'sell_offer' => $sell_offer,
            'buyAd' => $buyAd,
            'sell_offer_user_info' => $sell_offer_user_info,
            'buyAd_user_info' => $buyAd_user_info,
        ]);
    }

    protected function get_file_path_array(&$records)
    {
        $result = array();
        
        foreach($records as $record){
            $temp = [
                'id' => $record->id,
                'file_path' => $record->file_path
            ];
            
            $result[] = $temp;
        }
        
        return $result;
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
      
    //////////////////////////////////
    public function confirm_sell_offer_by_id(Request $request)
    {
        $this->validate($request,[
           'sell_offer_id' => 'integer|min:1' 
        ]);
        
        $sell_offer_id = $request->sell_offer_id ;
        
        $sell_offer = sell_offer::find($sell_offer_id);
        
        $sell_offer->confirmed = true;
        
        $sell_offer->save();
        
        $this->notify_buyer($sell_offer);
        
        return response()->json([
           'status' => true,
            'msg' => 'the sell offer confirmed!'
        ]);
    }
    
    protected function notify_buyer(&$sell_offer)
    {
        $sell_offer_id = $sell_offer->id;
        $buyAd_id = $sell_offer->buy_ad_id;
        
        $buyer_user_id = $this->get_buyer_user_id_by_buyAd_id($buyAd_id);
        
        $msg_array = [
            'خریدار محترم باسکول',
            'یک پیشنهاد فروش برای درخواست خرید شما ثبت شده',
            'برای بررسی به www.buskool.com مراجعه کنید',
        ];
        
        $sms_controller_object = new sms_controller();
        
        $sms_controller_object->send_notify_sms_to_user($msg_array,$buyer_user_id);
        
    }

    protected function get_buyer_user_id_by_buyAd_id($buyAd_id)
    {
        $buyAd_record = buyAd::find($buyAd_id);
        
        $user_record = myuser::find($buyAd_record->myuser_id);
        
        return $user_record->id;
    }
    
    ///////////////////////////////////// 
    // zombie function
    public function load_accepted_sell_offer_list()
    {
         $sell_offers = sell_offer::where('confirmed',true)
            ->where('is_accepted',true)
            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $sell_offers->each(function($sell_offer) use($date_convertor_object){
            //$category_array = $this->get_category_and_subcategory_name($sell_offer->category_id);
            
            $sell_offer['date_from'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_from);
            $sell_offer['date_to'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_to);
            
            //$sell_offer_media_records = sell_offer_media::where('sell_offer_id',$sell_offer->id)
            //    ->select(['id','file_path'])
            //    ->get();
            //
            //$sell_offer['photos'] = $this->get_file_path_array($sell_offer_media_records);
        });
        
        return view('admin_panel.pendingList',[
           'sell_offers' => $sell_offers,
        ]);
    }
}