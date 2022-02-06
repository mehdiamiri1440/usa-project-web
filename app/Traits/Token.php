<?php

namespace App\Traits;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

/**
 * 
 */
trait Token
{   
    public function generate_token($user_info,$expiry_date_time)
    {
        try{
            $first = $this->base64url_encode($user_info);

            $second = $this->base64url_encode(strtotime($expiry_date_time));
            
            $hash = sha1($first . $second . sha1($this->get_secret()) );

            $signiture = $this->base64url_encode($hash);

            $token = $first . '.' . $second . '.' . $signiture;

            return $token;
        }
        catch(\Exception $e){
            return null;
        }
        
    }

    public function parse_token($token)
    {
        if(! is_string($token)){
            return 0;
        }

        $token_parts = explode('.',$token);

        if(sizeof($token_parts) != 3){
            //token is not valid
            Log::info('token is not valid because of 3 part format :' . $token);

            return 0;
        }

        list($data,$expiry_time,$signiture) = $token_parts;

        $hash = sha1($data . $expiry_time . sha1($this->get_secret()));
        
        $expiry_time = $this->base64url_decode($expiry_time);

        
        if($hash != $this->base64url_decode($token_parts[2])){
            //token is not valid
            Log::info('token is not valid because of signiture mismatching : ' . $token);

            return 0;
        }
        
        $time = time();
        if($expiry_time < $time){
            //token expired
            return 1;
        }

        return json_decode($this->base64url_decode($data));
    }

    public function refresh_token($token)
    {
        if(! is_string($token)){
            return 0;
        }

        $token_parts = explode('.',$token);

        if(sizeof($token_parts) != 3){
            //token is not valid
            return 0;
        }

        list($data,$expiry_time,$signiture) = $token_parts;

        $hash = sha1($data . $expiry_time . sha1($this->get_secret()));
        
        $expiry_time = $this->base64url_decode($expiry_time);

        
        if($hash != $this->base64url_decode($token_parts[2])){
            //token is not valid
            return 0;
        }
        
        if($expiry_time < time()){
            //token expired
            $first = $token_parts[0];
            $second = $this->base64url_encode(strtotime(Carbon::now()->addHours(2)) );

            $hash = sha1($first . $second . sha1($this->get_secret()) );

            $signiture = $this->base64url_encode($hash);

            $token = $first . '.' . $second . '.' . $signiture;

            return $token;
        }

        else{
            return $token;
        }
    }

    protected function base64url_encode($data)
    {
      // First of all you should encode $data to Base64 string
      $b64 = base64_encode($data);
    
      // Make sure you get a valid result, otherwise, return FALSE, as the base64_encode() function do
      if ($b64 === false) {
        return false;
      }
    
      // Convert Base64 to Base64URL by replacing “+” with “-” and “/” with “_”
      $url = strtr($b64, '+/', '-_');
    
      // Remove padding character from the end of line and return the Base64URL result
      return rtrim($url, '=');
    }

    protected function base64url_decode($data, $strict = false)
    {
      // Convert Base64URL to Base64 by replacing “-” with “+” and “_” with “/”
      $b64 = strtr($data, '-_', '+/');
    
      // Decode Base64 string and return the original data
      return base64_decode($b64, $strict);
    }

    protected function get_secret()
    {
        return config('app.token_key');
    }
}
