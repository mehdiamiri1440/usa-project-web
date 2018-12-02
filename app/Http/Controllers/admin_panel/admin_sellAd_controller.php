<?php

namespace App\Http\Controllers\admin_panel;

use \Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\product;
use App\category;
use App\product_media;
use DB;
use App\Http\Controllers\sms_controller;
use App\myuser;
use App\Http\Library\date_convertor;

class admin_sellAd_controller extends Controller
{
    protected $sellAd_list_neccessary_fields_array = [
        'products.id',
        'products.product_name',
        'products.confirmed',
        'products.created_at',
        'products.category_id',
        'myusers.first_name',
        'myusers.last_name',
    ];
    
    protected $sellAd_detail_fields_array = [
        'products.id',
        'products.created_at',
        'products.product_name',
        'products.stock',
        'products.min_sale_price',
        'products.min_sale_amount',
        'products.description',
        'products.address',
        'products.confirmed',
        'categories.category_name as subcategory_name',
        'categories.parent_id',
        'cities.city_name',
        'provinces.province_name',
    ];
    
    protected $sellAd_validation_rules = [
        'stock' => 'numeric',
        'min_sale_price' => 'numeric',
        'min_sale_amount' => 'numeric'
    ];
    
    protected $sellAd_editable_fields = [
        'product_name',
        'stock',
        'min_sale_price',
        'min_sale_amount',
        'description',
        'address'
    ];
    
    protected $media_neccessary_fields_array = [
      'id',
      'file_path',  
    ];
    
    
    protected $sellAd_confirmation_sms_text = 'آگهی فروش شما در سامانه ی اینکوباک تایید گردید.';
    
    public function load_unconfirmed_sellAd_list()
    {
        $unconfirmed_sellAd_list = $this->get_sellAd_list(0);
        
        $this->add_categories_to_sellAd_list($unconfirmed_sellAd_list);
        
        return view('admin_panel.sellAd',[
            'sellAds' => $unconfirmed_sellAd_list, 
            'confirmed' => false,
        ]);
    }
    
    public function load_confirmed_sellAd_list()
    {
        $confirmed_sellAd_list = $this->get_sellAd_list(1);
        
        $this->add_categories_to_sellAd_list($confirmed_sellAd_list);
        
        return view('admin_panel.sellAd',[
            'sellAds' => $confirmed_sellAd_list, 
            'confirmed' => 'true',
        ]);
    }
    
    protected function get_sellAd_list($confirm_status)
    {
        $list = DB::table('products')
                        ->leftJoin('myusers','products.myuser_id','=','myusers.id') 
                        ->where('products.confirmed',$confirm_status)
                        ->select($this->sellAd_list_neccessary_fields_array)
                        ->orderBy('products.created_at','desc')
                        ->get();

        return collect($list);
    }
    
    protected function add_categories_to_sellAd_list(&$sellAd_list)
    {
        $date_convertor_object = new date_convertor();
         
        $sellAd_list->each(function($sellAd) use($date_convertor_object){
            $sub_category_record = category::find($sellAd->category_id);
            $category_record = category::find($sub_category_record->parent_id);
            
            $sellAd->created_at = $date_convertor_object->get_persian_date($sellAd->created_at);
            
            $sellAd->sub_category_name = $sub_category_record->category_name;
            $sellAd->category_name = $category_record->category_name;
        });
    }
    
    public function load_unconfirmed_sellAd_by_id($sellAd_id)
    {
        if(!is_numeric($sellAd_id))
        {
            return redirect()->route()->back();
        }
        
        $sellAd_record_with_related_data = $this->get_sellAd_by_id_with_related_data($sellAd_id,0);
        
        $category_name = category::find($sellAd_record_with_related_data->parent_id)->category_name;
        
        $product_related_media = product_media::where('product_id',$sellAd_record_with_related_data->id)
                                            ->select($this->media_neccessary_fields_array)
                                            ->get();
            
        return view('admin_panel.sellAdDetail',[
           'sellAd' => $sellAd_record_with_related_data, 
           'category_name' => $category_name,
           'related_media' => $product_related_media,
        ]);
    }
    
    public function load_confirmed_sellAd_by_id($sellAd_id)
    {
        if(!is_numeric($sellAd_id))
        {
            return redirect()->route()->back();
        }
        
        $sellAd_record_with_related_data = $this->get_sellAd_by_id_with_related_data($sellAd_id,1);
        
        $category_name = category::find($sellAd_record_with_related_data->parent_id)->category_name;
        
        $product_related_media = product_media::where('product_id',$sellAd_record_with_related_data->id)
                                            ->select($this->media_neccessary_fields_array)
                                            ->get();
            
        return view('admin_panel.sellAdDetail',[
           'sellAd' => $sellAd_record_with_related_data, 
           'category_name' => $category_name,
           'related_media' => $product_related_media,
        ]);
    }
    
    protected function get_sellAd_by_id_with_related_data($sellAd_id,$confirm_status)
    {
        $sellAd_with_related_data = DB::table('products')
													->join('categories','products.category_id','=','categories.id')
													->leftJoin('cities','cities.id','=','products.city_id')
													->leftJoin('provinces','provinces.id','=','cities.province_id')
													->select($this->sellAd_detail_fields_array)
													->where('products.id',$sellAd_id)
                                                    ->where('confirmed',$confirm_status)
													->get()
													->first();
        
        return $sellAd_with_related_data;
    }
    
    
    public function admin_sellAd_confirmation(Request $request)
    {
        $sellAd_id = $request->sellAd_id;
        
        if($request->type == 'accept')
        {
            $sellAd_record = product::find($sellAd_id);
            
            $user_id = $sellAd_record->myuser_id;
             
            foreach($this->sellAd_editable_fields as $field_name)
            {
                if(!is_null($request->$field_name))
                {
                    $sellAd_record->$field_name = $request->$field_name;   
                }
            }
            
            $sellAd_record->confirmed = true;
            
            $sellAd_record->save();
            
            //send SMS
            $sms_controller_object = new sms_controller();            
            $sms_controller_object->send_status_sms_message($sellAd_record,$this->sellAd_confirmation_sms_text);
            
            return redirect()->route('admin_panel_sellAd');
        }
        else if($request->type == 'reject')
        {
            //send SMS
            
            return redirect()->route('admin_panel_sellAd');
        }
    }
    
    public function admin_sellAd_edit(Request $request)
    {
        $sellAd_id = $request->sellAd_id;
        
        $sellAd_record = product::find($sellAd_id);
        
        foreach($this->sellAd_editable_fields as $field_name)
        {
            if(!is_null($request->$field_name))
            {
                $sellAd_record->$field_name = $request->$field_name;   
            }
        }

        $sellAd_record->save();
        
        return redirect()->route('admin_panel_sellAd_list');
    }
    
    
    public function admin_sellAd_photo_delete_by_id(Request $request)
    {
        $this->validate($request,[
           'photo_id' => 'required|numeric' 
        ]);
        
        $photo_id = $request->photo_id;
        
        try{
            $product_media_record  =  product_media::findOrFail($photo_id);
        }
        catch(\Exception $e){
            return response()->json([
                'status' => false,
               'msg' =>  'Failde',
            ]);
        }
        
        $product_media_record->delete(); 
        
        return response()->json([
            'status' => true,
           'msg' => 'photo deleted', 
        ]);
    }
    
}