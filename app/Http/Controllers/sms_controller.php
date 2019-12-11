<?php

namespace App\Http\Controllers;

use App\myuser;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use phplusir\smsir\Smsir;

class sms_controller extends Controller
{
    protected $sex_array = [
        'آقا',
        'خانم',
    ];
    
	public function send_phone_verification_code(Request $request)
	{
		$rules = [
			'phone' => ['required','regex:/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u','unique:myusers']
		];
		
		$this->validate($request,$rules);
		
		$random_number = $this->generate_random_number();
		
		try{
            Smsir::sendVerification($random_number,$request->phone);
            
            $this->set_generated_code_in_session($random_number);
		
            return response()->json([
                'status' => TRUE,
                'msg' => 'verification code sent.'
            ]);
        }
        catch(\Exception $e){
            return response()->json([
               'status' => FALSE,
               'msg' => 'ارتباط خود با اینترنت را بررسی کنید.',
               'descriptive_msg' => $e->getMessage(),
            ],400);
        }
		
		
	}
    
    public function send_phone_verification_code_for_password_reset(Request $request)
    {
        $rules = [
			'phone' => ['required','regex:/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u']
		];
		
		$this->validate($request,$rules);
        
        $user_record = myuser::where('phone',$request->phone)
                                ->get()
                                ->first();
        
        if($user_record){
            $random_number = $this->generate_random_number();
		
            try{
                Smsir::sendVerification($random_number,$request->phone);

                $this->set_generated_code_in_session($random_number);

                return response()->json([
                    'status' => TRUE,
                    'msg' => 'verification code sent.'
                ],200);
            }
            catch(\Exception $e){
                return response()->json([
                   'status' => FALSE,
                   'msg' => 'ارتباط خود با اینترنت را بررسی کنید.',
                   'descriptive_msg' => $e->getMessage(),
                ],500);
             }
        }
		else{
            return response()->json([
                'status' => false,
                'msg' => 'phone number is not correct!',
            ],500);
        }
		
    }
	
	
	protected function generate_random_number()
	{
		return rand(1000,9999);
	}
	
	protected function set_generated_code_in_session($random_number)//also sets OTP_start session
    {
         session([
             'sms_OTP'=>$random_number,
             'OTP_start'=>time(),
         ]); 
    }
	
	public function verify_code(Request $request)
	{
		$rules = [
			'verification_code' => 'required'
		];
		
		$this->validate($request,$rules);
		
		if((session('OTP_start') + 20 * 60) >= time() && session('sms_OTP') == $request->verification_code)
		{
			return response()->json([
				'status' => TRUE,
				'msg' => 'verification code is correct.'
			]);
		}
		else{
			return response()->json([
				'status'=> FALSE,
				'msg' => 'verification time expired or code is incoorect.'
			]);
		}
	}
    
    
    //Ads messages
    public function send_status_sms_message(&$db_record,$status_message,$url_prefix = null)
    {
        $user_id = $db_record->myuser_id;
        $db_record_id = $db_record->id;
        
        $user_record = myuser::find($user_id);
            
        $message_array[] = $this->get_user_full_name_with_related_prefix($user_record);

        $user_phone = $user_record->phone;

        $message_array[] = $status_message ;

        if( ! is_null($url_prefix)){
            $record_link = url($url_prefix."/".$db_record_id);
            $message_array[] = $record_link;
        }
        
        $sms_message_text = $this->create_text_message($message_array);

        try{
            Smsir::sendToCustomerClub($sms_message_text,$user_phone);
        }
        catch(\Exception $e){
            //
        }
        
    }
    protected function create_text_message($message_array_to_concat_with_blank_line_between_elements)
    {
        return implode("\n",$message_array_to_concat_with_blank_line_between_elements)."\n";
    }
    
    protected function get_user_full_name_with_related_prefix(&$user_record)
    {
        if($user_record->sex == $this->sex_array[0]){
            $prefix = 'جناب ' . $this->sex_array[0] . 'ی';
        }
        else if($user_record->sex == $this->sex_array[1]){
            $prefix = 'سرکار ' . $this->sex_array[1] ;
        }
        else{
            $prefix = '';
        }
        
        $full_name = $user_record->first_name . ' ' . $user_record->last_name ; 
        
        return $prefix . ' ' . $full_name ;
    }
    
    protected function generate_plain_text_password($password_len)
    {
        $result = "";
        $chars = "abcdefghijkmnpqrstuvwxyzABCDEFGH123456789";
        $charArray = str_split($chars);
        for($i = 0; $i < $password_len; $i++){
            $randItem = array_rand($charArray);
            $result .= "".$charArray[$randItem];
        }
        return $result;
    }
    
    public function send_new_generated_password($password,$user_phone)
    {
        try{
            Smsir::ultraFastSend(['newPassword' => $password],17697,$user_phone);
        }
        catch(\Exception $e){
            //
        }
    }
    
    public function add_to_customer_club($first_name,$last_name,$phone)
    {
        Smsir::addToCustomerClub('',$first_name,$last_name,$phone);
    }
    
    public function send_notify_sms_to_user($msg_array,$user_id)
    {
        $final_msg = $this->create_text_message($msg_array);
        
        $user_phone = $this->get_user_phone_by_user_id($user_id);
        
        if($user_phone){
            try{
                Smsir::sendToCustomerClub($final_msg,$user_phone);
                return $user_phone;
            }
            catch(\Exception $e){
                //
            }
        }
        else{
            return false;
        }
    }
    
    protected function get_user_phone_by_user_id($user_id)
    {
        $user_record = myuser::find($user_id);
        
        if($user_record){
            return $user_record->phone;
        }
        else return false;
    }
    
    public function send_notify_sms_to_phone_number($msg_array,$phone_number)
    {
        $final_msg = $this->create_text_message($msg_array);
        
        try{
            Smsir::sendToCustomerClub($final_msg,$phone_number);
            return $phone_number;
        }
        catch(\Exception $e){
            //
        }
    }
    
    public function send_new_message_sms_notification($phone_number)
    {
        try{
            Smsir::ultraFastSend(['name' => 'کاربر'],17705,$phone_number);
        }
        catch(\Exception $e){
            //
        }
    }
    
    public function send_sms_to_given_phone_number($phone_number,$pattern_code)
    {
        try{
            Smsir::ultraFastSend(['name' => 'کاربر'],$pattern_code,$phone_number);
        }
        catch(\Exception $e){
            //
        }
    }
}