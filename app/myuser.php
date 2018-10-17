<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class myuser extends Authenticatable
{
    use Notifiable;
    
    public function product()
	{
		return $this->hasMany('App\product');
	}
	
	public function buyAd()
	{
		return $this->hasMany('App\buyAd');
	}
    
    public function product_statistic()
    {
        return $this->belongsToMany('App\product','product_statistics')
            ->withPivot(
                'at_least_one_view',
                'at_least_one_phone_view'
        );
    }
    
    protected $connection = 'mysql';
//    protected $guard = "admins";


    public function getIsAdminAttribute()
    {
        return true;
    }
    
    public static function check()
    {
        return true;
    }

    public static function user()
    {
        return myuser::find(session('user_id'));
    }
}

//<?php

//namespace App;
//
//use Illuminate\Notifications\Notifiable;
//use Illuminate\Foundation\Auth\User as Authenticatable;
//
//class User //extends Authenticatable
//{
//    //use Notifiable;
//
//    /**
//     * The attributes that are mass assignable.
//     *
//     * @var array
//     */
//    protected $fillable = [
//        'name', 'email', 'password',
//    ];
//
//    /**
//     * The attributes that should be hidden for arrays.
//     *
//     * @var array
//     */
////    protected $hidden = [
////        'password', 'remember_token',
////    ];
//}

