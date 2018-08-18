<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\myuser;
class admin extends Model
{
    protected $connection = 'mysql';
//    protected $guard = "admins";


    public function getIsAdminAttribute()
    {
       return true;
    }
    
    public static function check()
    {
        $user_id = session('user_id');
        
        if(!$user_id){
            return false;
        }
        
        $user  = myuser::find($user_id);        
        
        if($user->panel_visisbility)
        {
            return true;
        }
        else{
            return false;
        }
    }

    public static function user()
    {
        return myuser::find(session('user_id'));
    }
    
    
}
