<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\services\v1\userService;
use App\profile;
use App\myuser;
use App\Http\Controllers\sms_controller;

use Illuminate\Support\Facades\Auth;

class user_controller extends Controller
{
	public $users;
	
	public function __construct(userService $service)
	{
		$this->users = $service;
	}
	
	public function login(Request $request)
	{		
		$rules = array(
			'phone' => 'required',
			'password' => 'required'
		);
		
		$this->validate($request,$rules);
		
		$user = $this->users->get_user(null,$request->phone,sha1($request->password));		
		
		if($user)
		{
			$this->set_user_session($user);
			 return response()->json([
			 	'status' => TRUE,
			 	'msg' => 'Login successfull'
			 ],200);
		}		
		 else return response()->json([
		 	'status' => FALSE,
             'msg' => "شماره تلفن یا گذر واژه اشتباه است.",
		 ],200);
	}
	
	protected function set_user_session($user_info)
	{
        $user_profile_record = profile::where('myuser_id',$user_info->id)
                ->select('profile_photo')
                ->get()
                ->last();
        
		session([
			'user_id' => $user_info->id,
            'is_buyer' => $user_info->is_buyer,
            'is_seller' => $user_info->is_seller,
            'user_name' => $user_info->user_name,
            'full_name' => $user_info->first_name. ' ' . $user_info->last_name,
            'city' => $user_info->city,
            'province' => $user_info->province,
            'profile_photo' => $user_profile_record ? $user_profile_record->profile_photo : null,
		]);
	}
    
    public function does_user_name_already_exists(Request $request)
    {
        $request->user_name = strtolower($request->user_name);
        
        $this->validate($request,[
           'user_name' => 'required|unique:myusers' 
        ]);
        
        return response()->json([
           'status' => true 
        ],200);
    }
    
    public function does_national_code_already_exists(Request $request)
    {
        $this->validate($request,[
           'national_code' => 'required|unique:myusers' 
        ]);
        
        return response()->json([
            'status' => true,
        ],200);
    }
    
    public function initial_contract_confirmation_by_user()
    {
        $user_id = session('user_id');
        
        try{
            $user_record = myuser::find($user_id);
        
            $user_record->contract_confirmed = true;
        
            $user_record->save();  
            
            return response()->json([
                'status' => true,
                'msg' => 'DONE',
            ],200);
        }
        catch(\Exception $e){
            return response()->json([
                'status' => false,
                'msg' => 'failed',
            ],500);
        }
        
        
    }
    
    public function api_login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'phone' => 'required|string',
            'password'=> 'required'
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $credentials = $request->only('phone', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return response()->json(compact('token'));
    }
    
    public function change_password(Request $request)
    {
        $this->validate($request,[
            'current_password' => 'required',
            'new_password' => 'required'
        ]);
        
        $user_name = session('user_name');
        
        $user_record = myuser::where('user_name',$user_name)
                                ->where('password',sha1($request->current_password))
                                ->get()
                                ->first();
        
        if($user_record){
//            DB::transaction(function() use($request){
                try{
                    $user_record->password = sha1($request->new_password);
                    $user_record->save();
                }
                catch(\Exception $e){
                    return response()->json([
                        'status' => false,
                        'msg' => 'Change password failed!',
                    ],500);
                }
                
                return response()->json([
                        'status' => true,
                        'msg' => 'Password changed successfully!',
                    ],200);
//            });
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'current password is not correct!' 
            ],200);
        }
        
    }
    
    public function reset_password(Request $request)
    {
        $rules = [
            'phone' => ['required','regex:/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u'], 
			'verification_code' => 'required'
		];
		
		$this->validate($request,$rules);
		
		if((session('OTP_start') + 20 * 60) >= time() && session('sms_OTP') == $request->verification_code)
		{
			$new_generated_password = $this->generate_plain_text_password(8);
            
            $user_record = myuser::where('phone',$request->phone)
                                    ->get()
                                    ->first();
            try{
                $user_record->password = sha1($new_generated_password);
                $user_record->save();
                //send new password to user's phone
                //send SMS
                $sms_controller_object = new sms_controller();
                
                $sms_controller_object->send_new_generated_password($new_generated_password,$request->phone);
                
                return response()->json([
                    'status' => true,
                    'msg' => 'password has been sent'
                ],200);
            }
            catch(\Exception $e){
                return response()->json([
                    'status' => false,
                    'msg' => '',
                ],500);
            }
		}
		else{
			return response()->json([
				'status'=> FALSE,
				'msg' => 'verification time expired or code is incoorect.'
			]);
		}
        
    }
    
    protected function generate_plain_text_password($password_len)
    {
        $result = "";
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGH0123456789";
        $charArray = str_split($chars);
        for($i = 0; $i < $password_len; $i++){
            $randItem = array_rand($charArray);
            $result .= "".$charArray[$randItem];
        }
        return $result;
    }
	
	
	
	
}