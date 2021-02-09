<?php

namespace App\services\v1;

use App\Models\myuser;
use phplusir\smsir\Smsir;
use App\Http\Controllers\Notification\sms_controller;
use App\Http\Controllers\Accounting\profile_controller;
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
		 $user->sex = $request->sex;
		 $user->province = $request->province;
		 $user->city = $request->city;
		 $user->national_code = $request->national_code;
         $user->user_name = $this->generate_unique_user_name();
         $user->activity_type = $request->activity_type;
         $user->category_id = $request->category_id;
		 $user->credit = 10;

         if($request->activity_type == 0){
             $user->is_seller = true;
         }
         else if($request->activity_type == 1){
             $user->is_buyer = true;
		 }
		 
		 if($request->filled('password')){
			$user->password  = sha1($request->password);
		 }
		 else{
			$user->password = sha1($this->generate_plain_text_password(8));
		 }

        //  $sms_controller_object = new sms_controller();
        //  $profile_controller_object = new profile_controller();

		 try{
			 $user->save();

//             $sms_controller_object->add_to_customer_club($user->firs_name,$user->last_name,$user->phone);

//             $profile_controller_object->add_a_confirmed_profile_record_for_user($user);

//             $this->register_user_in_wp_forum($request);

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
             'meta_value' => 'a:1:{s:8:"customer";b:1;}',
         ];

         DB::connection('forum')->table('wp_usermeta')->insert($user_meta_record);
	 }
	 
	 protected function generate_unique_user_name()
	 {
		 $smallCharacters = range('a','z');
		 $bigCharacters = range('A','Z');
		 $digits = range(1,20);
		 $alphanum_array = array_merge($smallCharacters,$digits,['_'],$bigCharacters);
		
		 shuffle($alphanum_array);

		 $origin_string = implode('',$alphanum_array);

		 for(;;){
			 $user_name_length = rand(4,8);
			 $generated_user_name = strtolower(substr($origin_string,0,$user_name_length));

			 $user_record = myuser::where('user_name',$generated_user_name)->first();

			 if($user_record){
				 continue;
			 }

			 return $generated_user_name;
		 }
	 }

	protected function generate_plain_text_password($password_len)
    {
        $result = '';
        $chars = 'abcdefghijkmnpqrstuvwxyz123456789';
        $charArray = str_split($chars);
        for ($i = 0; $i < $password_len; ++$i) {
            $randItem = array_rand($charArray);
            $result .= ''.$charArray[$randItem];
        }

        return $result;
    }


 }
