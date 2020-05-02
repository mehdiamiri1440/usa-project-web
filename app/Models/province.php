<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class province extends Model
{
    public $timestamps = false;
    
	public function city()
	{
		return $this->hasMany('App\Models\cities');
	}
    
}
