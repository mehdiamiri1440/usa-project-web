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


class product_controller extends Controller
{
	protected $current_user;
    protected $user_info_sent_by_product_array = [
        'user_name',
        'first_name',
        'last_name'
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
			
			$user->product()->save($product);			
			
			$files_path_array = $this->save_product_photos($request,$request->images_count);
			$this->register_photos_path_in_DB($files_path_array,$product);
			
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
		if($request->current_user == TRUE)
		{
			if( ! $request->session()->has('user_id'))
			{
				return redirect()->route('login_page');
			}
			
			$this->validate($request,[
				'from_record_number' => 'integer|min:1',
				'to_record_number' => 'integer|min:1',
			]);
			
			$current_user_products = null;
			
			if($request->filled('from_record_number') && $request->filled('to_record_number'))
			{
				$from_record_number  = $request->from_record_number;
				$to_record_number = $request->to_record_number;
				
				$current_user_products = $this->get_current_user_products_with_related_media(null,$from_record_number,$to_record_number);
			}
			else{
				$current_user_products = $this->get_current_user_products_with_related_media(null);	
			}
			
			return response()->json([
				'status' => TRUE,
				'products' => $current_user_products
			],200);
		}
		else if($request->private_view == TRUE)
		{
			if(!session()->has('user_id'))
			{
				return redirect()->route('login_page');
			} 
			
			$this->validate($request,[
				'from_record_number' => 'integer|min:1',
				'to_record_number' => 'ingeger|min:1',
			]);
			
			$all_products = NULL;
			
			if($request->filled('from_record_number') && $request->filled('to_record_number')){
				$all_products = $this->get_all_products_with_related_media(TRUE,$request->from_record_number,$request->to_record_number);
			}
			else $all_products = $this->get_all_products_with_related_media(TRUE);
			
			
			return response()->json([
				'status' => TRUE,
				'products' => $all_products
			],200);
		}
		else{
			
			$this->validate($request,[
				'from_record_number' => 'integer|min:0',
				'to_record_number' => 'integer|min:1',
			]);
			
			$all_products = NULL ;
			
			if($request->filled('from_record_number') && $request->filled('to_record_number')){
				$all_products = $this->get_all_products_with_related_media(FALSE,$request->from_record_number,$request->to_record_number);
			}
			else $all_products = $this->get_all_products_with_related_media(FALSE);
			
			
			return response()->json([
				'status' => TRUE,
				'products' => $all_products
			],200);
		}
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
	
	protected function get_all_products_with_related_media($authentication, $from_record_number = NULL, $to_record_number = NULL)
	{
		$products = NULL ;
		
		if($from_record_number !== null)
		{			
			$take_count = abs($to_record_number - $from_record_number) ;
			
			$products = product::where('confirmed',true)
                ->skip($from_record_number)
				->take($take_count)
				->get();
		}
		else{
			$products = product::where('confirmed',true)
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
            
//			if($authentication == TRUE)
//			{
//				$product_related_user_info = myuser::find($product->myuser_id);
//				$product_related_data['phone'] = $product_related_user_info->phone ;
//			}
			
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
			'product_id' => 'required|numeric'
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
    
    protected function is_the_user_the_product_owner($user_id,$product)
    {
        if($product->myuser_id == $user_id)
        {
            return true;
        }
        else return false;
    }
    
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
                'msg' => 'Not Authorized!',
            ],404);
        }
    }
	
	
	
	
	
}