<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    public function Parent() //P is upercase
	{
		return $this->belogsTo('App\category','parent_id');
	}
	
	public function children()
	{
		return $this->hasMany('App\category','parent_id');
	}
	
	public function product()
	{
		return $this->hasMany('App\product');
	}
	
	public function buyAd()
	{
		return $this->hasMany('App\buyAd');
	}
}
