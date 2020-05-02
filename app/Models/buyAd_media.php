<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class buyAd_media extends Model
{
    public function product()
	{
		return $this->belongsTo('App\Models\product');
	}
                    
	public function buyAd()
	{
		return $this->hasMany('App\Models\buyAd');
	}
}
