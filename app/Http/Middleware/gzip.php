<?php

namespace App\Http\Middleware;

use Closure;

class gzip
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
        $url = $request->url;
        
        if($this->endsWith($url,'.js')){
           $request->url = $request->url . ".gz" ;
        }
        
        $response =  $next($request);
        
        $response->header('Content-Encoding','gzip');
        return $next($response);
        // return $response;
    }
    
    protected function endsWith($haystack, $needle)
    {
        $length = strlen($needle);

        return $length === 0 || 
        (substr($haystack, -$length) === $needle);
    }
}
