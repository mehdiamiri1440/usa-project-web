<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class profile extends Model
{
    public function profile_media()
    {
        return $this->hasMany('App\Models\profile_media');
    }
}
