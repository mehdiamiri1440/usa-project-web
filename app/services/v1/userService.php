<?php

namespace App\services\v1;

use App\myuser;
use phplusir\smsir\Smsir;
use App\Http\Controllers\sms_controller;
use App\Http\Controllers\profile_controller;
use DB;
use MikeMcLin\WpPassword\Facades\WpPassword;
use Carbon\Carbon;

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
         
         $sms_controller_object = new sms_controller();
         $profile_controller_object = new profile_controller();
         
		 try{
			 $user->save();
             
             $sms_controller_object->add_to_customer_club($user->firs_name,$user->last_name,$user->phone);
             
             $profile_controller_object ->add_a_confirmed_profile_record_for_user($user);
             
             $this->register_user_in_wp_forum($request);
             
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
     
     protected function register_user_in_wp_forum($request)
     {
         $user_full_name = $request->first_name.' '.$request->last_name;
         $hashed_password = WpPassword::make($request->password);
         
         $user_record = [
             'user_login' => $request->phone,
             'user_pass' => $hashed_password,
             'user_email' => '',
             'user_nicename' => $request->first_name,
             'user_url' => '',
             'user_activation_key' => '',
             'user_status' => '',
             'display_name' => $user_full_name,
             'user_registered' => Carbon::now(),
             'user_status' => 0,
         ];
         
         $wp_user_id = DB::connection('forum')->table('wp_users')->insertGetId($user_record,'ID');
         
         $user_meta_record = [
             'user_id' => $wp_user_id,
             'meta_key' => 'wp_capabilities',
             'meta_value' => 'a:1:{s:10:"subscriber";b:1;}',
         ];
         
         DB::connection('forum')->table('wp_usermeta')->insert($user_meta_record);
     }
	 
	
 }