<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class myuser extends Model
{
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
