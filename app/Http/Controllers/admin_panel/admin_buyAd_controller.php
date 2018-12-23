<?php

namespace App\Http\Controllers\admin_panel;

use \Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\buyAd;
use App\buyAd_media;
use App\category;
use DB;
use App\myuser;
use App\Http\Controllers\sms_controller;
use Illuminate\Routing\UrlGenerator;
use App\Http\Library\date_convertor;

class admin_buyAd_controller extends Controller
{
    protected $buyAd_list_neccessary_fields_array = [
        'buy_ads.id',
        'buy_ads.name',
        'buy_ads.confirmed',
        'buy_ads.created_at',
        'buy_ads.category_id',
        'myusers.first_name',
        'myusers.last_name',
    ];
    
    protected $buyAd_detail_fields_array = [
        'buy_ads.id',
        'buy_ads.created_at',
        'buy_ads.name',
        'buy_ads.requirement_amount',
        'buy_ads.price',
        'buy_ads.description',
        'buy_ads.address',
        'buy_ads.confirmed',
        'buy_ads.pack_type',
        'categories.category_name as subcategory_name',
        'categories.parent_id',
        'cities.city_name',
        'provinces.province_name',
    ];
    
    protected $buyAd_validation_rules = [
        'requirement_amount' => 'numeric',
        'price' => 'numeric',
    ];
    
    protected $buyAd_editable_fields = [
        'name',
        'requirement_amount',
        'price',
        'address',
        'pack_type',
        'description',
    ];
    
   
    
    protected $buyAd_confirmation_sms_text = 'آگهی خرید شما در سامانه ی اینکوباک تایید گردید.';
    
    public function load_unconfirmed_buyAd_list()
    {
        $unconfirmed_buyAd_list =  $this->get_buyAd_list($confirm_status = 0);
        
        $this->add_categories_to_buyAd_list($unconfirmed_buyAd_list); 
        
        
        return view('admin_panel.buyAd',[
            'buyAds' => $unconfirmed_buyAd_list, 
            'confirmed' => false,
        ]);
    }
    
    public function load_confirmed_buyAd_list()
    {
        $confirmed_buyAd_list = $this->get_buyAd_list($confirm_status = 1);
        
        $this->add_categories_to_buyAd_list($confirmed_buyAd_list);
        
        return view('admin_panel.buyAd',[
             'buyAds' => $confirmed_buyAd_list, 
             'confirmed' => true,
        ]);
    }
    
    protected function get_buyAd_list($confirm_status)
    {
        $list = DB::table('buy_ads')
                        ->join('myusers','buy_ads.myuser_id','=','myusers.id')
                        ->where('buy_ads.confirmed',$confirm_status)
                        ->select($this->buyAd_list_neccessary_fields_array)
                        ->orderBy('buy_ads.created_at','desc')
                        ->get();
        
        return $list;
    }
    
    protected function add_categories_to_buyAd_list(&$buyAd_list)
    {
        $date_convertor_object = new date_convertor();
        
        $buyAd_list->each(function($buyAd) use($date_convertor_object){
            $sub_category_record = category::find($buyAd->category_id);
            $category_record = category::find($sub_category_record->parent_id);
            
            $buyAd->created_at = $date_convertor_object->get_persian_date($buyAd->created_at);
            
            $buyAd->sub_category_name = $sub_category_record->category_name;
            $buyAd->category_name = $category_record->category_name;
        });
        
    }
    
    public function load_unconfirmed_buyAd_by_id($buyAd_id)
    {
        if(!is_numeric($buyAd_id))
        {
            return redirect()->route()->back();
        }
        
        $buyAd_record_with_related_data = $this->get_buyAd_by_id_with_related_data($buyAd_id,0);
        
        $buyAd_media_records = buyAd_media::where('buy_ad_id',$buyAd_id)
            ->select(['id','file_path'])
            ->get();
        
        $category_name = category::find($buyAd_record_with_related_data->parent_id)->category_name;
            
        return view('admin_panel.buyAdDetail',[
           'buyAd' => $buyAd_record_with_related_data, 
           'related_media' => $buyAd_media_records,
           'category_name' => $category_name
        ]);
    }
    
    public function load_confirmed_buyAd_by_id($buyAd_id)
    {
        if(!is_numeric($buyAd_id))
        {
            return redirect()->route()->back();
        }
        
        $buyAd_record_with_related_data = $this->get_buyAd_by_id_with_related_data($buyAd_id,1);
        
        $buyAd_media_records = buyAd_media::where('buy_ad_id',$buyAd_id)
            ->select(['id','file_path'])
            ->get();
        
        $category_name = category::find($buyAd_record_with_related_data->parent_id)->category_name;
            
        return view('admin_panel.buyAdDetail',[
           'buyAd' => $buyAd_record_with_related_data, 
           'related_media' => $buyAd_media_records,
           'category_name' => $category_name,
        ]);
    }
    
    protected function get_buyAd_by_id_with_related_data($buyAd_id,$confirm_status)
    {
        $buyAd_with_related_data = DB::table('buy_ads')
													->join('categories','buy_ads.category_id','=','categories.id')
													->leftJoin('cities','cities.id','=','buy_ads.city_id')
													->leftJoin('provinces','provinces.id','=','cities.province_id')
													->select($this->buyAd_detail_fields_array)
													->where('buy_ads.id',$buyAd_id)
                                                    ->where('confirmed',$confirm_status)
													->get()
													->first();
        
        return $buyAd_with_related_data;
    }
    
    
    public function admin_buyAd_confirmation(Request $request)
    {
        if($request->type == 'accept')
        {
            $buyAd_id = $request->buyAd_id;
            
            $buyAd_record = buyAd::find($buyAd_id);
            
            $user_id = $buyAd_record->myuser_id;
            
            foreach($this->buyAd_editable_fields as $field_name)
            {
                if(!is_null($request->$field_name))
                {
                    $buyAd_record->$field_name = $request->$field_name;   
                }
            }
            
            $buyAd_record->confirmed = true;
            
            $buyAd_record->save();
            
            //send SMS
            $sms_controller_object = new sms_controller();
            $sms_controller_object->send_status_sms_message($buyAd_record,$this->buyAd_confirmation_sms_text);
            
            return redirect()->route('admin_panel_buyAd');
        }
        else if($request->type == 'reject')
        {
            //send SMS
            return redirect()->route('admin_panel_buyAd');
        }
    }
    
    public function admin_buyAd_edit(Request $request)
    {
        $buyAd_id = $request->buyAd_id;
        
        $buyAd_record = buyAd::find($buyAd_id);
        
        foreach($this->buyAd_editable_fields as $field_name)
        {
            if(!is_null($request->$field_name))
            {
                $buyAd_record->$field_name = $request->$field_name;   
            }
        }

        $buyAd_record->save();
        
        return redirect()->route('admin_panel_buyAd_list');        
    }
    
    protected function send_sms($msg,$link,$phone_number)
    {
        $msg = $msg . "\n $link\n";
        
        try{
            Smsir::sendToCustomerClub($msg,$phone_number);
        }
        catch(\Exception $e){
            //
        }      
    }
    
    public function admin_buyAd_photo_delete_by_id(Request $request)
    {
        $this->validate($request,[
           'photo_id' => 'required|numeric' 
        ]);
        
        $photo_id = $request->photo_id;
        
        try{
            $buyAd_media_record  =  buyAd_media::findOrFail($photo_id);
        }
        catch(\Exception $e){
            return response()->json([
                'status' => false,
               'msg' =>  'Failde',
            ]);
        }
        
        $buyAd_media_record->delete(); 
        
        return response()->json([
            'status' => true,
           'msg' => 'photo deleted', 
        ]);
    }
}