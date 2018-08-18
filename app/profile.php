<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class profile extends Model
{
    public function profile_media()
    {
        return $this->hasMany('App\profile_media');
    }
}
