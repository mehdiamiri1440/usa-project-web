<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    public function user()
	{
		return $this->belongsTo('App\myuser');
	}
	
	public function product_media()
	{
		return $this->hasMany('App\product_media');
	}
	
	public function category()
	{
		return $this->belongsTo('App\category');
	}
    
    public function product_statistic()
    {
        return $this->belongsToMany('App\myuser','product_statistics')
            ->withPivot(
                'at_least_one_view',
                'at_least_one_phone_view'
        );
    }
}
