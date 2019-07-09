<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use Illuminate\Support\Collection;
use App\product;
use App\myuser; 
use App\product_media;
use App\category;
use Carbon\Carbon;
use App\product_statistics;
use App\profile;
use App\user_product;
use DB;
use App\Http\Controllers\sms_controller;
use App\Jobs\NotifyBuyersBySMS;


class product_controller extends Controller
{
	protected $current_user;
    protected $user_info_sent_by_product_array = [
        'id',
        'user_name',
        'first_name',
        'last_name',
        'active_pakage_type'
    ];
    protected $profile_info_sent_by_product_array = [
        'profile_photo',
    ];
    
    protected $product_register_fields_array = [
        'product_name',
        'stock',
        'min_sale_price',
        'max_sale_price',
        'min_sale_amount',
        'description',
        'category_id',//->sub_catrgory in fact
        'city_id',
    ];
    
    protected $product_register_nullable_fields_array_with_validation_rules = array(
        'description' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
    );	
	// public method
	public function add_product(Request $request)
	{
        if($this->is_user_allowed_to_register_another_product() == false){
            return response()->json([
                'status' => true,
                'msg' => 'سقف تعداد محصولات ثبت شده ی شما پر شده است.'
            ],200);
        }
		$rules = $this->set_product_validation_rules($request);		
		
		$this->validate($request,$rules);
		
		$product_object_or_failuire_message = $this->add_product_to_DB($request);
		
		if(is_object($product_object_or_failuire_message))
		{
			return response()->json([
				'status' => TRUE,
				'product' => $product_object_or_failuire_message,
			],201);
		}
		else{
			return response()->json([
				'status' => FALSE,
				'msg' => $product_object_or_failuire_message
			],500);
		}
	}
	
	protected function add_product_to_DB($request)
	{
		try{
			$product = new product();
			$user  = myuser::find(session('user_id'));
		    
            foreach($this->product_register_fields_array as $field_name)
            {
                if( ! is_null($request->$field_name))
                {
                    $product->$field_name = $request->$field_name ;    
                }
            }
            
            if($this->is_immediate_product_confirm_active()){
                $product->confirmed = true;
            }
			
			$user->product()->save($product);			
			
			$files_path_array = $this->save_product_photos($request,$request->images_count);
			$this->register_photos_path_in_DB($files_path_array,$product);
            
            if($this->is_send_sms_to_buyers_active()){
                NotifyBuyersBySMS::dispatch($product->id)->onQueue('default');
            }
			
			return $product;
		}
		catch(\Exception $e)
		{
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
            'product_name' => 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
//			'rules' => 'required',
			//'address' => 'required',
			'category_id' => 'required',
			'city_id' => 'required',
            'images_count' => 'required|integer|min:1',
		];	
        
        foreach($this->product_register_nullable_fields_array_with_validation_rules as $field_name => $validation_rules)
        {
            if(!is_null($request->$field_name))
            {
                $rules[$field_name] = $validation_rules;
            }
        }
		
      
        $photos_count = $request->images_count;
        foreach(range(0, $photos_count - 1) as $index) {
            $rules['image_' . $index] = 'image|mimes:png,jpg,jpeg|min:20|max:5000';
        }
 
        return $rules;
    }
	
	protected function save_product_photos($request,$image_count)
	{
		$files_path = [];
		
		for($i = 0 ; $i < $image_count ; $i++)
		{
			$image_name = 'image_'.$i ;
			$img = $request->$image_name;
			
			$path = $img->store('products');
			
			$files_path[] = $path;
		}
		
		return $files_path;
	}
	
	protected function register_photos_path_in_DB($photos_path_array,$product)
	{
		foreach($photos_path_array as $file_path)
		{
			$media = new product_media();
			
			$media->file_path = $file_path;
			
			$product->product_media()->save($media);
		}
	}
	
	// public method
	public function get_product_list(Request $request)
    {		
        $this->validate($request,[
            'from_record_number'    => 'integer|min:0',
            'to_record_number'      => 'integer|min:1',
            'category_id'           => 'integer|min:1',
            'sub_category_id'       => 'integer|min:1',
            'province_id'           => 'integer|min:1',
            'city_id'               => 'integer|min:1',
            'search_text'           => 'string',
        ]);

        $all_products = NULL ;

        if($request->filled('from_record_number') && $request->filled('to_record_number')){
            $all_products = $this->get_all_products_with_related_media($request->from_record_number,$request->to_record_number);
        }
        else{
            $all_products = $this->get_all_products_with_related_media();  
        } 
        
        //applying filters
        $all_products = array_filter($all_products, function($product) use($request){
            $category_flag = $sub_category_flag = $province_flag = $city_flag = $search_text_flag = true;
            
            if($request->filled('category_id')){
                $category_flag = ( $request->category_id == $product['main']->category_id);
            }
            if($request->filled('sub_category_id')){
                $sub_category_flag = ( $request->sub_category_id == $product['main']->sub_category_id);
            }
            if($request->filled('province_id')){
                $province_flag = ( $request->province_id == $product['main']->province_id);
            }
            if($request->filled('city_id')){
                $city_flag = ( $request->city_id == $product['main']->city_id);
            }
            if($request->filled('search_text')){
                $search_text = $request->search_text;
                
                $search_text_flag = $this->does_search_text_matche_the_product($search_text,$product);
            }
            
            return $category_flag && $sub_category_flag && $province_flag && $city_flag &&  $search_text_flag;
        });
        //changing view priority according to owners pakage type
//        usort($all_products,function($item1, $item2){
//            $a = $item1['user_info']->active_pakage_type;
//            $b = $item2['user_info']->active_pakage_type;
//            
////            if($a == $b){
////                return 0;
////            }
//            
//            return ($a >= $b) ? 1 : -1;
//        });

        return response()->json([
            'status' => TRUE,
            'products' => $all_products
        ],200);
		
	}
	
	protected function get_current_user_products_with_related_media($user_id = NULL,$from_record_number = NULL , $to_record_number = NULL)
	{
		$current_user_id = $user_id ? $user_id : session('user_id') ;
		
		$products = null;
		
		if($from_record_number !== null)
		{
			$take_count = abs($to_record_number - $from_record_number);
			
			$products = product::where('myuser_id',$current_user_id)
                ->where('confirmed',true)
				->skip($from_record_number)
				->take($take_count)
				->get();
		}
		else{
			$products = product::where('myuser_id',$current_user_id)
                ->where('confirmed',true)
				->get();
		}
		
		$result_products = array();
		
		foreach($products as $product)
		{		
			$temp = array();
			$product_related_photos = $product->product_media()
				->select('file_path')
				->get();			
			
			$product_related_data['main'] = $this->get_product_related_data($product->id);
            
            $product_related_user_info = myuser::where('id',$product->myuser_id)
                ->get($this->user_info_sent_by_product_array)
                ->first();
            
            $product_related_profile_info = profile::where('myuser_id',$product->myuser_id)
                ->where('confirmed',true)
                ->get($this->profile_info_sent_by_product_array)
                ->last();
            
            $product_related_data['user_info'] = $product_related_user_info;
            $product_related_data['profile_info'] = $product_related_profile_info; 
			
			$product_related_data['photos'] = $product_related_photos;
			 
			
			$product_parent_category_data =  $product->category;
			$product_related_data['main']->category_id = $product_parent_category_data['parent_id'];
			$product_related_data['main']->category_name = (category::find($product_parent_category_data['parent_id']))['category_name'];
			
			$result_products[] = $product_related_data; 
		}
		
		return $result_products;
		
	}
	
	protected function get_all_products_with_related_media($from_record_number = NULL, $to_record_number = NULL)
	{
		$products = NULL ;
        
        $product_recommender_object = new product_recommender_controller();
		
		if($from_record_number !== null)
		{			
			$take_count = abs($to_record_number - $from_record_number) ;
			
			$products = product::where('confirmed',true)
                ->skip($from_record_number)
				->take($take_count)
                ->orderBy('updated_at','desc')
				->get();
		}
		else{
			$products = product::where('confirmed',true)
                ->orderBy('updated_at','desc')
                ->get();
		}
		
		$result_products = array();
		
		foreach($products as $product)
		{		
			$temp = array();
			$product_related_photos = $product->product_media()
				->select('file_path')
				->get();			
			
			$product_related_data['main'] = $this->get_product_related_data($product->id);			
			$product_related_user_info = myuser::where('id',$product->myuser_id)
                ->get($this->user_info_sent_by_product_array)
                ->first();
            
            $product_related_profile_info = profile::where('myuser_id',$product->myuser_id)
                ->where('confirmed',true)
                ->get($this->profile_info_sent_by_product_array)
                ->last();
            
            $product_related_data['user_info'] = $product_related_user_info;
            $product_related_data['profile_info'] = $product_related_profile_info;           
			
			$product_related_data['photos'] = $product_related_photos;
			 
			
			$product_parent_category_data =  $product->category;
			$product_related_data['main']->category_id = $product_parent_category_data['parent_id'];
			$product_related_data['main']->category_name = (category::find($product_parent_category_data['parent_id']))['category_name'];
			
			$result_products[] = $product_related_data; 
		}
		
		return $result_products;
	}
	
	protected function get_product_related_data($product_id)
	{
		$product_with_related_data = DB::table('products')
												->join('categories','products.category_id','=','categories.id')	   											
													->leftJoin('cities','cities.id','=','products.city_id')
													->leftJoin('provinces','provinces.id','=','cities.province_id')
													->select('products.id','products.product_name','products.stock','products.min_sale_price','products.max_sale_price','products.min_sale_amount','products.description','products.address','products.myuser_id','products.category_id as sub_category_id','provinces.province_name','provinces.id as province_id','cities.city_name','cities.id as city_id','categories.category_name as sub_category_name')
													->where('products.id',$product_id)
                                                    ->where('confirmed',true)
													->get()
													->first();
		
		
		
		return $product_with_related_data;
	}
	
	//public method 
	public function get_product_by_id(Request $request)
	{
		$this->validate($request,[
			'product_id' => 'required|integer|min:1'
		]);
		
		$product_id = $request->product_id;
        $product = product::where('id',$product_id)
            ->where('confirmed',true)
            ->first();
        
        if(is_null($product))
        {
            return response()->json([
               'status' => false,
                'msg' => "The product has't been confirmed yet"
            ]);
        }
		
		$product_related_data['main'] = $this->get_product_related_data($product_id);
		
		$product = product::find($product_id);
		
		$product_related_photos = $product->product_media()
			->select('file_path')
			->get();
		
		$product_related_data['photos'] = $product_related_photos;	
        
        $product_related_user_info = myuser::where('id',$product->myuser_id)
                ->get($this->user_info_sent_by_product_array)
                ->first();
            
        $product_related_profile_info = profile::where('myuser_id',$product->myuser_id)
            ->where('confirmed',true)
            ->get($this->profile_info_sent_by_product_array)
            ->last();

        $product_related_data['user_info'] = $product_related_user_info;
        $product_related_data['profile_info'] = $product_related_profile_info;  
		
//		if(session()->has('user_id'))
//		{
//			$product_related_user_info = myuser::find(session('user_id'));
//			$product_related_data['phone'] = $product_related_user_info->phone ;
//		}
			
		$product_parent_category_data =  $product->category;
		$product_related_data['category_id'] = $product_parent_category_data['parent_id'];
		$product_related_data['category_name'] = (category::find($product_parent_category_data['parent_id']))['category_name'];
        
        $this->increment_product_view_count($product,session('user_id'));
		
		return response()->json([
			'status' => TRUE,
			'product' => $product_related_data,
		],200);
		
	}
    
    protected function increment_product_view_count($product,$current_user_id)
    {
        if( ($pivot_record = $this->does_the_user_already_attached_to_this_product($product->id,$current_user_id)) ){
            $pivot_record->updated_at = Carbon::now();
            $pivot_record->save();
        }
        else{
            $product->product_statistic()->attach($current_user_id,[
                'at_least_one_view' => true,
                'created_at' => Carbon::now(),
            ]); 
        }
        
    }
    
    protected function does_the_user_already_attached_to_this_product($product_id,$user_id)
    {
        $pivot_record = product_statistics::where('myuser_id',$user_id)
            ->where('product_id',$product_id)
            ->get()
            ->first();
        
        if($pivot_record)
        {
            return $pivot_record;
        }
        else return false;
    }
	
	//public method
	public function increment_product_phone_view_count(Request $request)
	{
		$this->validate($request,[
			'product_id' => 'required|numeric'
		]);
		
		$product_id = $request->product_id;
		
        try{
            $product  = product::findOrFail($product_id);
            $product_owner_info = myuser::findOrFail($product->myuser_id);
        }
        catch(\Exception $e){
            return response()->json([
               'status' => false,
                'msg' => 'the product does not exist or application can not access database now',
            ],500);
        }
		
		
		$phone_view_count_before_increment = $product->phone_view_count;
		
		$product->phone_view_count = $phone_view_count_before_increment + 1;
		
		$product->save();
		
		return response()->json([
            'status' => true,
            'phone' => $product_owner_info->phone,
			'count_before_increment' => $phone_view_count_before_increment,
			'count_after_increment' => $product->phone_view_count,
		]);
	}
	
	//public method
	public function delete_product_by_id(Request $request)
	{
		$this->validate($request,[
			'product_id' => 'required|integer|min:1'
		]);        
		
		$product_id = $request->product_id;
        $user_id = session('user_id');
        
        try{
            $product = product::findOrFail($product_id);
        }
        catch(\Exception $e)
        {
            return response()->json([
               'status' => false,
                'msg' => 'product_id does not exist or already deleted.'
            ],500);
        }
		
        if($this->is_the_user_the_product_owner($user_id,$product))
        {	
		    $product->delete();
            return response()->json([
               'status' => true,
                'msg' => 'محصول حذف شد.'
            ]);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'the user has not delete permission on this product',
            ],500);
        }		
	}
    
    protected function is_the_user_the_product_owner($user_id,&$product)
    {
        if($product->myuser_id == $user_id)
        {
            return true;
        }
        else return false;
    }
    
    //public method
    public function get_product_list_by_user_name(Request $request)
    {
        $this->validate($request,[
           'user_name' => 'required|alpha_dash' 
        ]);
        $user_name = $request->user_name;
        
        $user_id = $this->get_user_id_for_the_user_name($user_name);
        
        if($user_id)
        {	
			$this->validate($request,[
				'from_record_number' => 'numeric',
				'to_record_number' => 'numeric',
			]);
			
			$current_user_products = null;
			
			if($request->filled('from_record_number') && $request->filled('to_record_number'))
			{
				$from_record_number  = $request->from_record_number;
				$to_record_number = $request->to_record_number;
				
				$current_user_products = $this->get_current_user_products_with_related_media($user_id,$from_record_number,$to_record_number);
			}
			else{
				$current_user_products = $this->get_current_user_products_with_related_media($user_id);	
			}
			
			return response()->json([
				'status' => TRUE,
				'products' => $current_user_products
			],200);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => "the user_name '{$user_name}' doesn't exists."
            ]);
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
    public function does_buyer_already_had_requested_the_product(Request $request)
    {
        if(session('is_buyer')){
            $this->validate($request,[
                'product_id' => 'required|integer|min:1', 
            ]);
            
            $product_id = $request->product_id;
            
            $user_id = session('user_id');
            
            $user_record = myuser::find($user_id);
            
            $user_product_table_record = user_product::where('product_id',$product_id)
                                                ->where('myuser_id',$user_id)
                                                ->get()
                                                ->first();
            
            if($user_product_table_record){ //user already had sent buy request for the product
                return response()->json([
                   'status' => true, 
                ],200);
            }
            else {
                return response()->json([
                    'status' => false,
                ],200);
            }
        }
        else{
            return response()->json([
               'status' => true,
               'msg' => 'Not Autorized!',    
            ],404);
        }
    }
    
    //public method
    public function register_buyer_request_for_the_product(Request $request)
    {
        if(session('is_buyer')){
            $this->validate($request,[
                'product_id' => 'required|integer|min:1', 
            ]);
            
            $product_id = $request->product_id;
            
            $product_record = product::find($product_id);
            
            if($product_record){
                $sms_controller_object = new sms_controller();
                $sms_controller_object->send_status_sms_message($product_record,'برای یکی از آگهی های شما در اینکوباک درخواست خرید ثبت شده است.برای بررسی به incobac.com مراجعه کنید.');
                
                 $user_id = session('user_id');
            
                $user_product_record = new user_product();

                $user_product_record->myuser_id = $user_id;
                $user_product_record->product_id = $product_id;

                $user_product_record->save();


                return response()->json([
                    'status' => true,
                    'msg' => 'record added!',
                ],201);
            }
            else{
                return response()->json([
                    'status' => false,
                    'msg' => 'product Id is not valid',
                ],404);
            }
            
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'Not Authorized!',
            ],404);
        }
    }
	
	//public method
    public function refresh_product_updated_at_time(Request $request)
    {
        $this->validate($request,[
           'product_id' => 'required|integer|min:1' 
        ]);
        
        $product_id = $request->product_id;
        
        $user_id = session('user_id');
        
        
        try{
            $product = product::findOrFail($product_id);
        }
        catch(\Exception $e)
        {
            return response()->json([
               'status' => false,
                'msg' => 'product_id does not exist'
            ],404);
        }
        
        if($this->is_the_user_the_product_owner($user_id,$product)){
            try{
                $product->updated_at = Carbon::now();
                $product->save();
                
                return response()->json([
                    'status' => true,
                    'msg' => 'Product updated successfully!'
                ],200);
            }
            catch(\Exception $e){
                return response()->json([
                    'status' => false,
                    'msg' => $e->getMessage()
                ],500);
            }
        }
        else{
            //external use of API
            //report in log file
            return response()->json([
                'status' => false,
                'msg' => 'you are not authorized to refresh this product!'
            ],500);
        }
    }
    
    protected function is_immediate_product_confirm_active()
    {
        $user_id = session('user_id');
        
        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;
        
        return config("subscriptionPakage.type-$user_active_pakage_type.immediate-confirm");
    }
    
    protected function is_user_allowed_to_register_another_product()
    {
        $user_id = session('user_id');
        
        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;
        
        $max_allowed_prodcut_register = config("subscriptionPakage.type-$user_active_pakage_type.max-products");
        
        $user_confirmed_products_count = product::where('myuser_id',$user_id)
                                            ->where('confirmed',true)
                                            ->get()
                                            ->count();
        
        if($max_allowed_prodcut_register > $user_confirmed_products_count){
            return true;
        }
        else return false;
    }
    
    protected function is_send_sms_to_buyers_active()
    {
        $user_id = session('user_id');
        
        $user_active_pakage_type = myuser::find($user_id)->active_pakage_type;
        
        return config("subscriptionPakage.type-$user_active_pakage_type.sms-to-buyers");
    }
    
    protected function does_search_text_matche_the_product($search_text,&$product)
    {
        $search_text_array = explode(' ',$search_text);
        
        foreach($product['main'] as $key => $value){
            foreach($search_text_array as $search_text_value){
                if(is_string($value) && strpos($value,$search_text_value) !== false){
                    return true;
                }
            }
        }
        foreach($product['user_info']->toArray() as $key => $value){
            foreach($search_text_array as $search_text_value){
                if(is_string($value) && strpos($value,$search_text_value) !== false){
                    return true;
                }
            }
        }
        
        return false;
    }
    
    public function edit_product_by_id(Request $request)
    {
        $this->validate($request,[
            'product_id' => 'required|integer|min:1',
            'min_sale_price' => 'required|integer|min:0',
            'max_sale_price' => 'required|integer|min:1',
            'min_sale_amount' => 'required|integer|min:1',
            'stock' => 'required|integer:min:1',
            'description' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u',
        ]);
        
        $product_id = $request->product_id;
        $user_id = session('user_id');
        
        $product = product::find($product_id);
        
        if($product){
            if($this->is_the_user_the_product_owner($user_id,$product)){
                $data = [
                    'min_sale_price' => $request->min_sale_price,
                    'max_sale_price' => $request->max_sale_price,
                    'min_sale_amount' => $request->min_sale_amount,
                    'stock' => $request->stock,
                    'description' => $request->description,
                ];

                DB::table('products')
                        ->where('id',$product_id)
                        ->update($data);

                return response()->json([
                    'status' => true,
                    'msg' => 'ویرایش با موفقیت انجام شد'
                ],200);
            }
            else{
                return response()->json([
                    'status' => false,
                    'msg' => 'شما مجاز به انجام این عملیات نیستید.'
                ]);
            }
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'محصول مورد نظر یافت نشد.'
            ],404);
        }
    }
        
	
}