<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\myuser;
use App\Http\Response;

class broadcastAuth
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
        $user = new myuser();
        $user->id = session('user_id');
        $user->user_name = 'test';

//        $auth =  $pusher->socket_auth($_POST['channel_name'], $_POST['socket_id']);
//        
//        return response()->json([
//            'auth' => $auth
//        ]);
        return true;
        return $next($request);
    }
}
