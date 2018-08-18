<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class buyAd_media extends Model
{
    public function product()
	{
		return $this->belongsTo('App\product');
	}
                    
	public function buyAd()
	{
		return $this->hasMany('App\buyAd');
	}
}
