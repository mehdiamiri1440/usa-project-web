<?php

namespace App\Http\Middleware;

use Closure;
use DB;

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
        
        $admin_id = session('admin_user_id');

        if(! $request->session()->has('allowed_routes')){
            $allowed_routes =  DB::table('admin_permissions')
                                    ->join('admin_routes','admin_routes.id','=','admin_permissions.route_id')
                                    ->where('admin_permissions.admin_id',$admin_id)
                                    ->where('admin_permissions.confirmed',true)
                                    ->select('admin_routes.route')
                                    ->distinct()
                                    ->pluck('route')
                                    ->all();
                
            $allowed_routes = array_values($allowed_routes);

            session(['allowed_routes' => $allowed_routes]);
        }
        else{
            $allowed_routes = session('allowed_routes');
        }

        $current_route = $request->route()->getName();
        if(in_array($current_route,$allowed_routes)){
            return $next($request);
        }
        
        return redirect()->back();
    }
}
