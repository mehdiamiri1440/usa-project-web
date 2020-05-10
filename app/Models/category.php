<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
    public function Parent() //P is upercase
	{
		return $this->belogsTo('App\Models\category','parent_id');
	}
	
	public function children()
	{
		return $this->hasMany('App\Models\category','parent_id');
	}
	
	public function product()
	{
		return $this->hasMany('App\Models\product');
	}
	
	public function buyAd()
	{
		return $this->hasMany('App\Models\buyAd');
	}
}
