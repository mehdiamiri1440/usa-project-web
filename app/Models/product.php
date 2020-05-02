<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class product extends Model
{
    use SoftDeletes;
    
    public function user()
	{
		return $this->belongsTo('App\Models\myuser');
	}
	
	public function product_media()
	{
		return $this->hasMany('App\Models\product_media');
	}
	
	public function category()
	{
		return $this->belongsTo('App\Models\category');
	}
    
    public function product_statistic()
    {
        return $this->belongsToMany('App\Models\myuser','product_statistics')
            ->withPivot(
                'at_least_one_view',
                'at_least_one_phone_view'
        );
    }
}
