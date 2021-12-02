<?php

namespace App\Http\Controllers\Accounting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class token_controller extends Controller
{
    public function generate_token($user_info,$expiry_time_date,$secret = 'alideli')
    {
        $first = $this->base64url_encode($user_info);

        $second = $this->base64url_encode(time() + strtotime($expiry_time_date) );
        
        $hash = sha1($first . $second . sha1($secret) );

        $signiture = $this->base64url_encode($hash);

        $token = $first . '.' . $second . '.' . $signiture;

        return $token;
    }

    public function parse_token($token)
    {
        $token_parts = explode('.',$token);

        if(sizeof($token_parts) != 3){
            //token is not valid
            return 'token is not valid';
        }

        list($data,$expiry_time,$signiture) = $token_parts;

        $hash = sha1($data . $expiry_time . sha1('alidel'));
        
        $expiry_time = $this->base64url_decode($expiry_time);

        

        if($hash != $this->base64url_decode($token_parts[2])){
            //token is not valid
            return 'token is not valid 2';
        }
        
        if($expiry_time < time()){
            //token expired
            return 'token expired';
        }

        return json_decode($this->base64url_decode($data));

    }

    public function refresh_token($token)
    {
        $token_parts = explode('.',$token);

        if(sizeof($token_parts) != 3){
            //token is not valid
            return 'token is not valid';
        }

        list($data,$expiry_time,$signiture) = $token_parts;

        $hash = sha1($data . $expiry_time . sha1($this->secret));
        
        $expiry_time = $this->base64url_decode($expiry_time);

        
        if($hash != $this->base64url_decode($token_parts[2])){
            //token is not valid
            return 'token is not valid 2';
        }
        
        if($expiry_time < time()){
            //token expired
            $first = $token_parts[0];
            $second = $this->base64url_encode(time() + strtotime(Carbon::now()->addHours(2)) );

            $hash = sha1($first . $second . sha1($this->secret) );

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
}
