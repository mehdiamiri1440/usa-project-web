<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\profile;
use App\Models\myuser;
use JWTAuth;

class login
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        if($request->hasHeader('Authorization')){
            try{
                $user = JWTAuth::parseToken()->authenticate();

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
                if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                    return response()->json([
                        'status' => false,
                        'redirect_to_login' => true,
                        'msg' => 'token is not valid'
                    ],401);
                }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                    // If the token is expired, then it will be refreshed and added to the headers
                    try
                    {
                        $refreshed_token = JWTAuth::refresh(JWTAuth::getToken());
                        
                        
                        return response()->json([
                            'status' => false,
                            'refresh' => true,
                            'token' => $refreshed_token
                        ],401);

                    }catch (\Exception $e){
                        if($e instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException){
                            return response()->json([
                                'status' => false,
                                'redirect_to_login' => true,
                                'msg' => $e->getMessage()
                            ],403);
                        }
                        else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                            return response()->json([
                                'status' => false,
                                'redirect_to_login' => true,
                                'msg' => $e->getMessage()
                            ],401);
                        }

                        return response()->json([
                            'status' => false,
                            'redirect_to_login' => true,
                            'msg' => 'token can not be refreshed',
                        ],401);
                    }
                }
                else if($e instanceof \Tymon\JWTAuth\Exceptions\TokenBlacklistedException){
                    return response()->json([
                        'status' => false,
                        'redirect_to_login' => true,
                        'msg' => $e->getMessage()
                    ],401);
                }
                else{
                    response()->json([
                        'status' => false,
                        'redirect_to_login' => true,
                        'msg' => 'token not found!'
                    ],401);
                }
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

