<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class buyAd extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    
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
