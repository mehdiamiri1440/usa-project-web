<?php

namespace App\Http\Middleware;

use Closure;

class admin_login
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
        if(!$request->session()->has('admin_user_id'))
        {
            return redirect()->route('admin_login_page');
        }
        return $next($request);
    }
}
