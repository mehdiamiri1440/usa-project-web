<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Http\Controllers\Accounting\profile_controller;
use App\Http\Controllers\Accounting\user_controller;


class myuser extends Authenticatable
{
    use Notifiable;

    public $referred_user_name = null;

    public function product()
    {
        return $this->hasMany('App\Models\product');
    }

    public function buyAd()
    {
        return $this->hasMany('App\Models\buyAd');
    }

    public function product_statistic()
    {
        return $this->belongsToMany('App\Models\product', 'product_statistics')
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

    public static function boot()
    {
        parent::boot();

        self::created(function ($user) {
            $profile_controller_object = new profile_controller();

            $profile_controller_object->add_a_confirmed_profile_record_for_user($user);

            if( ! is_null($user->referred_user_name))
            {
                $profile_controller_object->register_referred_user_info_of_given_user_id($user->id,$user->referred_user_name);
            }
        });
    }
}
