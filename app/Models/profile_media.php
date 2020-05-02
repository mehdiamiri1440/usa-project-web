<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class profile_media extends Model
{
    use softDeletes;
    
    public function profile()
    {
        return $this->belongsToMany('App\Models\profile');
    }
    
    protected $dates = ['deleted_at'];
}
