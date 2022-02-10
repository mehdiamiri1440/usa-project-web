<?php

namespace App\Http\Controllers\Notification;

use App\Http\Controllers\Controller;
use App\Models\myuser;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use phplusir\smsir\Smsir;
use App\Http\Controllers\Accounting\user_controller;
use App\services\v1\userService;
use DB;
use Illuminate\Support\Facades\Cache;

class sms_controller extends Controller
{
    protected $sex_array = [
        'آقا',
        'خانم',
    ];
    
	public function send_phone_verification_code(Request $request)
	{
		$rules = [
			'phone' => ['required','regex:/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u']
        ];

        $this->validate($request,$rules);

        $client_ip = $this->get_client_ip_address();

        if($this->is_request_safe($request,$client_ip) == false){
            return response()->json([
                'status' => false
            ],429);
        }
		
		$random_number = $this->generate_random_number();
		
		try{
            if($request->filled('client') && $request->client == 'mobile'){
                Smsir::ultraFastSend([
                    'code' => $random_number
                ],61952,$request->phone);
            }
            else{
                Smsir::sendVerification($random_number,$request->phone);
                // Smsir::ultraFastSend([
                //     'code' => $random_number
                // ],61951,$request->phone);
            }

            // Smsir::sendVerification($random_number,$request->phone);
            
            $this->set_generated_code_in_session($random_number,$request->phone,$client_ip);
		
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

                $this->set_generated_code_in_session($random_number,$request->phone);

                return response()->json([
                    'status' => TRUE,
                    'msg' => 'verification code sent.'
                ],200);
            }
            catch(\Exception $e){
                return response()->json([
                   'status' => FALSE,
                   'msg' => 'ارتباط خود با اینترنت را بررسی کنید.',
                //    'descriptive_msg' => $e->getMessage(),
                ],500);
             }
        }
		else{
            return response()->json([
                'status' => false,
                'msg' => 'این شماره در باسکول ثبت نشده است. شاید با شماره دیگری ثبت نام کرده اید.',
            ],500);
        }
		
    }
	
	
	protected function generate_random_number()
	{
		return rand(1000,9999);
	}
	
	protected function set_generated_code_in_session($random_number,$phone_number,$client_ip)//also sets OTP_start session
    {
         session([
             'sms_OTP'=>$random_number,
             'OTP_start'=>time(),
         ]); 

         if(Cache::has($phone_number)){
             Cache::increment($phone_number);
         }
         else{
            Cache::put($phone_number,1,2); //setting up counter in cahce for 2 minutes
         }

         if($client_ip){
             if(Cache::has($client_ip)){
                 Cache::increment($client_ip);
             }
             else{
                 Cache::put($client_ip,1,10);
             }
         }

         if(session()->has('OTP_count')){
             $cnt = session('OTP_count');

             session([
                 'OTP_count' => $cnt + 1
             ]);
         }
         else{
             session([
                 'OTP_count' => 1
             ]);
         }
    }
	
	public function verify_code(Request $request)
	{
		$rules = [
            'verification_code' => 'required',
            'phone' => ['required','regex:/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u'],
            'client' => 'string',
		];
		
		$this->validate($request,$rules);
		
		if((session('OTP_start') + 2 * 60) >= time() && session('sms_OTP') == $request->verification_code)
		{
            if($request->filled('phone')){
                $phone = $request->phone;

                $user_record = myuser::where('phone',$phone)->first();
                if($user_record){
                    if($request->filled('client') && $request->client == 'mobile'){
                        $last_login_client = 'mobile';
                    }
                    else{
                        $last_login_client = 'web';
                    }

                    if($request->filled('device_id')){
                        $device_id = $request->device_id;
                    }
                    else{
                        $device_id = null;
                    }

                    $req = Request::create('/dologin', 'POST',[
                        'phone' => $user_record->phone,
                        'password' => $user_record->password,
                        'client' => $last_login_client,
                        'plain' => false,
                        'device_id' => $device_id,
                        'user_agent' => $request->server('HTTP_USER_AGENT')
                    ]);

                    $user_controller_object = new user_controller(new userService);
                    
                    return $user_controller_object->login($req);
                }

                return response()->json([
                    'status' => true,
                    'redirected' => false,
                    'msg' => 'کد درست است',
                ]);
                
            }

			return response()->json([
                'status' => false,
                'redirected' => false,
				'msg' => '.کد وارد شده صحیح نیست'
			]);
		}
		else{
			return response()->json([
				'status'=> FALSE,
				'msg' => 'کد منقضی شده یا اشتباه است.'
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
            Smsir::ultraFastSend(['newPassword' => $password],20694,$user_phone);
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
            Smsir::ultraFastSend(['name' => 'کاربر'],20691,$phone_number);
        }
        catch(\Exception $e){
            //
        }
    }
    
    public function send_sms_to_given_phone_number($phone_number,$pattern_code,$data = [])
    {
        $user_record = DB::table('myusers')
                            ->where('phone',$phone_number)
                            ->where('is_blocked',false)
                            ->select('first_name')
                            ->get();

        if(count($user_record) > 0)
        {
            $user_first_name = $user_record->first()->first_name;

            $sending_data = [
                'name' => $user_first_name
            ];
    
            if(! is_null($data)){
                $sending_data = array_merge($sending_data,$data);
            }
    
            
            try{
                Smsir::ultraFastSend($sending_data,$pattern_code,$phone_number);
            }
            catch(\Exception $e){
                echo $e->getMessage();
            }
        }
        else{
            //user should not receive sms message
            return false;
        }
  
    }

    protected function is_request_safe($request,$client_ip){

        if( (Cache::has($request->phone) || Cache::has($client_ip)) && (! $request->session()->has("sms_OTP"))){
            return false;
        }

        return true;
    }

    protected function get_client_ip_address()
    {
        try{
            if (isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
                $_SERVER['REMOTE_ADDR'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
                $_SERVER['HTTP_CLIENT_IP'] = $_SERVER["HTTP_CF_CONNECTING_IP"];
            }
            $client  = @$_SERVER['HTTP_CLIENT_IP'];
            $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
            $remote  = $_SERVER['REMOTE_ADDR'];
        
            if(filter_var($client, FILTER_VALIDATE_IP)){
                $client_ip = $client;
            }
            elseif(filter_var($forward, FILTER_VALIDATE_IP)){
                $client_ip = $forward;
            }
            else{
                $client_ip = $remote;
            }
        
            if($client_ip){
                return $client_ip;
            }
    
            return false;
        }
        catch(\Exception $e){
            return false;
        }
        
    }
}