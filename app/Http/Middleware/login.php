<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\profile;
use App\Models\myuser;
use JWTAuth;
use App\Http\Controllers\Accounting\token_controller;
use App\Traits\Token;

class login
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    use Token;

    public function handle($request, Closure $next)
    {   
        if($request->hasHeader('Authorization')){
            try{
                $token = explode(' ',$request->Header('Authorization'))[1];//explode(' ',$request->Authorization)[1];
                // $user = JWTAuth::parseToken()->authenticate();
                $user = $this->parse_token($token);

                if( ! is_object($user)){
                
                    if($user === 1){
                        $refreshed_token = $this->refresh_token($token);

                        if($refreshed_token === 0){
                            if($request->has()->session('user_id')){
                                return $next($request);
                            }

                            return response()->json([
                                'status' => false,
                                'redirect_to_login' => true,
                                'msg' => 'invalid token!!!'
                            ],401);
                        }

                        return response()->json([
                            'status' => false,
                            'refresh' => true,
                            'token' => $refreshed_token
                        ],401);

                    }
                    else{
                        
                        if($request->has()->session('user_id')){
                            return $next($request);
                        }

                        return response()->json([
                            'status' => false,
                            'redirect_to_login' => true,
                            'msg' => 'invalid token'
                        ],401);
                    }
                    
                }


                if(! $request->session()->has('user_id')){
                    $status = $this->set_user_session($user->phone,$user->password);

                    if($status){
                        return $next($request);
                    }
                    else{
                        return response()->json([
                            'status' => false,
                            'redirect_to_login' => true,
                            'msg' => 'token is not valid bla bla bla'
                        ],401);
                    }
                }

                return $next($request);
            }
            catch(\Exception $e){
                return response()->json([
                    'status' => false,
                    'redirect_to_login' => true,
                    'msg' => 'token is not valid!'
                ],401);
            }
        }
        else{
            try{
                if(! $request->session()->has('user_id'))
                {
                    $user_phone = $request->cookie('user_phone');
                    $user_hashed_password = $request->cookie('user_password');

                    if($user_phone && $user_hashed_password){
                        $status = $this->set_user_session($user_phone,$user_hashed_password);

                        if($status){
                            return $next($request);
                        }

                        else  return redirect('/login');

                    }
                    else {
                        return redirect('/login');
                    } 

                }
                else return $next($request);
            }
            catch(\Exception $e){
                return redirect('/login');
            }
        }
    }

    //this method is public because I had to call it from web.php, check it out!
    public function  set_user_session($user_phone,$user_hashed_password)
	{
        $user_info = myuser::where('phone',$user_phone)
                                ->where('password',$user_hashed_password)
                                ->get()
                                ->first();

        if($user_info){
            if($user_info->is_blocked == true){
                return false;
            }

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

        return true;
        }
        else return false;
    }

}

