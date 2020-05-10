<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\profile;
use App\Models\myuser;

class profile_and_contract_confirmation
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
        $user_id = session('user_id');
        
        $last_confirmed_profile_record =  profile::where('myuser_id',$user_id)
                            ->where('confirmed',TRUE)
                            ->get()
                            ->last(); 
        
        if($last_confirmed_profile_record){
            $user_record = myuser::find($user_id);
            if($user_record->contract_confirmed == true){
                return $next($request);   
            }
            else return abort(404);
        }
        else{
            return abort(404);
        }
        
    }
}
