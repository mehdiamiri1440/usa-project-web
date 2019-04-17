<?php

namespace App\Http\Middleware;

use Closure;

class cors
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
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, Application, X-CSRF-Token');
//        $response = $next($request);
//
//        $response->headers->set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//        $response->headers->set('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization, X-Requested-With, Application, X-CSRF-Token');
//        $response->headers->set('Access-Control-Allow-Origin', '*');
//
//        return $response;
//        $request->withHeaders([
//            'Access-Control-Allow-Origin' => 'https://www.incobac.com',
//            'Access-Control-Allow-Methods' => 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//            'Access-Control-Allow-Headers' => 'Content-Type, Accept, Authorization, X-Requested-With, Application, X-CSRF-Token'
//        ]);
//        
        

//        header('Access-Control-Allow-Origin: *');
//        header('Access-Control-Allow-Methods: *');
//        header('Access-Control-Allow-Headers: *');

        return $next($request);
    }
}
