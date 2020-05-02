<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Messenger\group_message_controller;

class group_message extends Model
{
    protected static $group_id;

    public function __construct($attributes = [],$group_id = null)
    {
        parent::__construct($attributes);
        self::$group_id = $group_id;
    }

    public static function boot()
    {
        parent::boot();

        self::created(function ($message) {
            // echo "created";
            $group_message_controller_object = new group_message_controller();

            $group_message_controller_object->make_message_accessible_for_group_subscribers($message,self::$group_id);
        });
    }
}
