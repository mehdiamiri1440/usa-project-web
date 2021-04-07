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
        header('Access-Control-Allow-Origin: localhost:2020,localhost:3030');
        // header('Access-Control-Allow-Headers: Content-Type, Accept, Authorization, X-Requested-With, Application, X-CSRF-Token');
        $headers = [
            'Access-Control-Allow-Methods'=> 'POST',
            'Access-Control-Max-Age' => 0,
            'Access-Control-Allow-Headers'=> 'Content-Type, X-Requested-With, Authorization, Origin'
        ];
        if($request->getMethod() == "OPTIONS") {
            // The client-side application can set only headers allowed in Access-Control-Allow-Headers
            return Response::make('OK', 200, $headers);
        }

        $response = $next($request);
        foreach($headers as $key => $value){
            $response->header($key, $value);
        }
            
        return $response;
    }
}
