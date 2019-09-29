<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\services\v1\userService;
use App\profile;
use App\myuser;
use App\Http\Controllers\sms_controller;
use JWTAuth;
use App\product;
use App\Http\Controllers\reputation_controller;

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
            $user_confirmed_profile_record_status = $this->does_user_have_confirmed_profile_record($user->id);

			$this->set_user_session($user);
            $jwt_token = JWTAuth::fromUser($user);
			 return response()->json([
			 	'status' => TRUE,
                 'is_buyer' => $user->is_buyer,
                 'is_seller' => $user->is_seller,
                 'confirmed_profile_record' => $user_confirmed_profile_record_status,
			 	 'msg' => 'Login successfull',
                 'token' => $jwt_token
			 ],200)
                 ->withCookie(cookie(
                        'user_phone', $user->phone, 43200 // 30 days in minutes
                    ))
                 ->withCookie(cookie(
                        'user_password', $user->password, 43200 // 30 days in minutes
                    ));
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

    protected function does_user_have_confirmed_profile_record($user_id)
    {
        $profile_record = profile::where('myuser_id',$user_id)
                                        ->where('confirmed',true)
                                        ->select('id')
                                        ->get()
                                        ->last();

        if($profile_record)
            return true;
        else
            return false;
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
        $chars = "abcdefghijkmnpqrstuvwxyz123456789";
        $charArray = str_split($chars);
        for($i = 0; $i < $password_len; $i++){
            $randItem = array_rand($charArray);
            $result .= "".$charArray[$randItem];
        }
        return $result;
    }

    //public method
    public function get_contract_sides_user_info(Request $request)
    {
        $this->validate($request,[
           'seller_user_id' => 'required|integer|min:1',
           'buyer_user_id' => 'required|integer|min:1'
        ]);

        $seller_user_id = $request->seller_user_id;
        $buyer_user_id = $request->buyer_user_id;

        $seller_user_record = myuser::find($seller_user_id);
        $buyer_user_record = myuser::find($buyer_user_id);

        if($seller_user_record && $buyer_user_record){
            $fields = ['first_name','last_name','national_code'];

            return response()->json([
                'status' => true,
                'seller_user_info' => $seller_user_record->only($fields),
                'buyer_user_info' => $buyer_user_record->only($fields),
            ],200);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'user not found!'
            ],404);
        }
    }

    //public method
    public function is_user_from_webview(Request $request)
    {
        $is_webview =  $request->header('User-Agent') == 'webView';
        return response()->json([
            'status' => true,
            'is_webview' => $is_webview
        ],200);
    }
    
    protected function generate_jwt_token($request)
    {
        $credentials = $request->only('phone', 'password');
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        return $token;
    }
    
    //public method
    public function get_seller_dashboard_required_data(Request $request)
    {
        $user_pakage_type = myuser::find(session('user_id'))->active_pakage_type;
        
        $pakage_info = config("subscriptionPakage.type-$user_pakage_type");
        $confirmed_products_count = $this->get_user_confirmed_products_count();
        
        $active_pakage_type = $user_pakage_type;
        $reputation_score   = $this->get_user_reputation_score();
        $accessable_buyAds  = $pakage_info['buyAd-count'];
        $is_valid           = $pakage_info['validated-seller'];
        $max_allowed_product_register_count = $pakage_info['max-products'] - $confirmed_products_count;
        
        return response()->json(compact([
            'active_pakage_type',
            'reputation_score',
            'accessable_buyAds',
            'is_valid',
            'max_allowed_product_register_count',
            'confirmed_products_count',
        ]),200);
    }
    
    protected function get_user_reputation_score()
    {
        $user_id = session('user_id');
        
        $reputaion_controller_object = new reputation_controller();
        
        $score = $reputaion_controller_object->calculate_user_reputation_score($user_id);
        
        return $score;
    }
    
    protected function get_user_confirmed_products_count()
    {
        $user_id  = session('user_id');
        
        $confirmed_products_count = product::where('myuser_id',$user_id)
                                            ->where('confirmed',true)
                                            ->get()
                                            ->count();
        
        return $confirmed_products_count;
    }

}
