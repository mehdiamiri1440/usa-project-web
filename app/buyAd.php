<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class buyAd extends Model
{
    public function user()
	{
		return $this->belongsTo('App\myuser');
	}
	
	public function buyAd_media()
	{
		return $this->hasMany('App\buyAd_media');
	}
	
	public function category()
	{
		return $this->belongsTo('App\category');
	}
		
}
