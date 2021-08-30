<?php

namespace App\Http\Controllers\admin_panel;

use \Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\product;
use App\Models\category;
use App\Models\product_media;
use DB;
use App\Http\Controllers\Notification\sms_controller;
use App\Models\myuser;
use App\Http\Library\date_convertor;
use Carbon\Carbon;
use App\Jobs\Backups\SaveProductPhotosInCloud;
use App\Jobs\Notifiers\NotifyBuyersIfAnyNewRelatedProductRegistered;

class admin_sellAd_controller extends Controller
{
    protected $sellAd_list_neccessary_fields_array = [
        'products.id',
        'products.product_name',
        'products.confirmed',
        'products.created_at',
        'products.category_id',
        'products.myuser_id',
        'myusers.first_name',
        'myusers.last_name',
        'myusers.active_pakage_type',
        'myusers.extra_product_capacity',
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
        'products.category_id as subcategory_id',
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
        'address',
        'category_id',
    ];
    
    protected $media_neccessary_fields_array = [
      'id',
      'file_path',  
    ];
    
    
    protected $sellAd_confirmation_sms_text = 'آگهی فروش شما در سامانه ی باسکول تایید گردید.';
    
    ////////////////////////////////////
    public function load_unconfirmed_sellAd_list(Request $request)
    {
        $unconfirmed_sellAd_list = $this->get_sellAd_list(0,$request);
        
        $this->add_meta_data_to_sellAd_list($unconfirmed_sellAd_list);
        
        return view('admin_panel.sellAd',[
            'sellAds' => $unconfirmed_sellAd_list, 
            'confirmed' => false,
        ]);
    }
    
    //////////////////////////////////////
    public function load_confirmed_sellAd_list(Request $request)
    {
        $confirmed_sellAd_list = $this->get_sellAd_list(1,$request);
        
        $this->add_meta_data_to_sellAd_list($confirmed_sellAd_list);
        
        return view('admin_panel.sellAd',[
            'sellAds' => $confirmed_sellAd_list, 
            'confirmed' => 'true',
        ]);
    }
    
    //////////////////////////////// incommon local functions
    protected function get_sellAd_list($confirm_status,&$request)
    {
        if($request->filled('search'))
        {
            $search = $request->search;

            $search_array = explode(' ',$search);

            $search_expresion = '';
            foreach ($search_array as $text) {
                $search_expresion .= "%$text%";
            }

            $list = DB::table('products')
                        ->leftJoin('myusers','products.myuser_id','=','myusers.id') 
                        ->where('products.confirmed',$confirm_status)
                        ->where(function($q) use($search_expresion){
                            return $q = $q->where('product_name','like',$search_expresion)
                                            ->orWhere(DB::raw("CONCAT(myusers.first_name,' ',myusers.last_name)"),'like',$search_expresion);
                        })
                        ->select($this->sellAd_list_neccessary_fields_array)
                        ->orderBy('products.created_at','desc')
                        ->paginate(10);
        }
        else{
            $list = DB::table('products')
                        ->leftJoin('myusers','products.myuser_id','=','myusers.id') 
                        ->where('products.confirmed',$confirm_status)
                        ->select($this->sellAd_list_neccessary_fields_array)
                        ->orderBy('products.created_at','desc')
                        ->paginate(10);
        }
        

        return $list;
    }
    
    protected function add_meta_data_to_sellAd_list(&$sellAd_list)
    {
        $date_convertor_object = new date_convertor();
         
        $sellAd_list->each(function($sellAd) use($date_convertor_object){
            $sub_category_record = category::find($sellAd->category_id);
            $category_record = category::find($sub_category_record->parent_id);
            
            $sellAd->created_at = $date_convertor_object->get_persian_date($sellAd->created_at);
            
            $sellAd->sub_category_name = $sub_category_record->category_name;
            $sellAd->category_name = $category_record->category_name;

            $sellAd_owner_confirmed_products = $this->get_seller_confirmed_products_count($sellAd->myuser_id);

            $sellAd->remained_capacity = (config("subscriptionPakage.type-{$sellAd->active_pakage_type}.max-products") + $sellAd->extra_product_capacity ) - $sellAd_owner_confirmed_products;
        });
    }

    protected function get_seller_confirmed_products_count($seller_id)
    {
        $count = DB::table('products')
                        ->where('myuser_id',$seller_id)
                        ->where('confirmed',true)
                        ->whereNull('deleted_at')
                        ->get()
                        ->count();

        return $count;
    }

    ////////////////////////////////////
    public function load_unconfirmed_sellAd_by_id($sellAd_id)
    {
        if(!is_numeric($sellAd_id))
        {
            return redirect()->route()->back();
        }
        
        $sellAd_record_with_related_data = $this->get_sellAd_by_id_with_related_data($sellAd_id,0);
        
        $category_record = category::find($sellAd_record_with_related_data->parent_id);
        $super_category_record = category::find($category_record->parent_id);
        
        $product_related_media = product_media::where('product_id',$sellAd_record_with_related_data->id)
                                            ->select($this->media_neccessary_fields_array)
                                            ->get();
            
        return view('admin_panel.sellAdDetail',[
           'sellAd' => $sellAd_record_with_related_data, 
           'category_record' => $category_record,
           'super_category_record' => $super_category_record,
           'related_media' => $product_related_media,
        ]);
    }

    ///////////////////////////////
    public function load_confirmed_sellAd_by_id($sellAd_id)
    {
        if(!is_numeric($sellAd_id))
        {
            return redirect()->route()->back();
        }
        
        $sellAd_record_with_related_data = $this->get_sellAd_by_id_with_related_data($sellAd_id,1);
        
        $category_record = category::find($sellAd_record_with_related_data->parent_id);
        $super_category_record = category::find($category_record->parent_id);
        
        $product_related_media = product_media::where('product_id',$sellAd_record_with_related_data->id)
                                            ->select($this->media_neccessary_fields_array)
                                            ->get();
            
        return view('admin_panel.sellAdDetail',[
           'sellAd' => $sellAd_record_with_related_data, 
           'category_record' => $category_record,
           'super_category_record' => $super_category_record,
           'related_media' => $product_related_media,
        ]);
    }
    
    /////////////////////////////
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
            
            if($this->is_user_package_active($user_id)){
                if($this->is_it_user_first_confirmed_product($user_id)){
                    $now = Carbon::now();
                    
                    $sellAd_record->is_elevated = true;
                    $sellAd_record->elevator_expiry = $now->addDays(14);
                }
            }
            
            $sellAd_record->confirmed = true;
            
            $sellAd_record->save();

            NotifyBuyersIfAnyNewRelatedProductRegistered::dispatch($sellAd_record);

            // SaveProductPhotosInCloud::dispatch($sellAd_record->id);
            //send SMS
            //$sms_controller_object = new sms_controller();            
            //$sms_controller_object->send_status_sms_message($sellAd_record,$this->sellAd_confirmation_sms_text);
            
            return redirect()->route('admin_panel_sellAd');
        }
        else if($request->type == 'reject')
        {
            //send SMS
            
            return redirect()->route('admin_panel_sellAd');
        }
    }

    protected function is_user_package_active($user_id)
    {
        $user_record = myuser::find($user_id);
        
        if($user_record->active_pakage_type >= 2){
            return true;
        }
        
        return false;
    }

    protected function is_it_user_first_confirmed_product($user_id)
    {
        $products = DB::table('products')->where('myuser_id',$user_id)
                            ->where('confirmed',true)
                            ->get();
        
        if($products->count() > 0){
            return false;
        }
        
        return true;
    }
    
    //////////////////////////////
    public function admin_sellAd_edit(Request $request)
    {
        $sellAd_id = $request->sellAd_id;
        
        $sellAd_record = product::find($sellAd_id);

        if(is_null($sellAd_record)){
            return redirect()->route('admin_panel_sellAd_list');
        }
        
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
    
    //////////////////////////////
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

    ///////////////////////////// incommon functions

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
    
}