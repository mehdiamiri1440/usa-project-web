<?php

namespace App\services\v1;

use App\myuser;
use phplusir\smsir\Smsir;

 class userService{
	 
	
	 protected $current_user;
	 
	 public function __construct()
	 {
		
	 }
	 public function get_users(){
		 return myuser::all();
	 }
	 
	 public function register_user($request)
	 {  
		 $user = new myuser();
		 
		 $user->first_name = $request->first_name;
		 $user->last_name = $request->last_name;
		 $user->phone = $request->phone;
		 $user->password  = sha1($request->password);
		 $user->sex = $request->sex;
		 $user->province = $request->province;
		 $user->city = $request->city;
		 $user->national_code = $request->national_code;
         $user->user_name = strtolower($request->user_name);
         $user->activity_type = $request->activity_type;
         $user->category_id = $request->category_id;
		 $user->credit = 10;
         
         if($request->activity_type == 0){
             $user->is_seller = true;
         }
         else if($request->activity_type == 1){
             $user->is_buyer = true;
         }
         
         
		 try{
			 $user->save();
             
			 return response()->json([
                 'status' => true,
                 'msg' => 'کاربر ثبت شد.'
             ],201);
		 }
		 catch(\Exception $e)
		 {
			 return response()->json([
                 'status' => false,
				 'msg' => 'سیستم قادر به اتصال به پایگاه داده نیست.'
			 ],500);
		 }
		 
	 }
	 
	 public function get_user($user_id,$phone = NULL,$password = NULL)
	 {
		 $user = NULL ;
		 
		 if($user_id == NULL && $phone != NULL && $password != NULL)
		 {
			$user = myuser::where('phone',$phone)
				->where('password',$password)
				->get()
				->first();
		 }
	 	else if($user_id != NULL && $phone == NULL && $password == NULL){
			 $user = myuser::findOrFail($user_id);
		}
		else if($id != NULL && $phone != NULL && $password != NULL)
		{
			$user = myuser::where('id',$user_id)
				->where('phone',$phone)
				->where('password',$password)
				->get()
				->first();
		}
		 
		return $user;
 	}
	 
	 
	
 }