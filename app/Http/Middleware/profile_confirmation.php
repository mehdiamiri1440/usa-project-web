<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\profile;

class profile_confirmation
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
            return $next($request);
        }
        else{
            return abort(404);
        }
        
    }
}
