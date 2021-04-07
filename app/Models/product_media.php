<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class product_media extends Model
{
    public function product()
	{
		return $this->belongsTo('App\Models\product');
	}
}
