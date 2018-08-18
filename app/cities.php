<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class cities extends Model
{
    public $timestamps = false;
    
    public function province()
	{
		return $this->belongesTo('App\province');
	}
}
