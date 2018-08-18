<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\services\v1\userService;
use App\profile;


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
	
	
}