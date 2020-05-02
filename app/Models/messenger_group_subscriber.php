<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Messenger\group_message_controller;

class messenger_group_subscriber extends Model
{
    public static function boot()
    {
        parent::boot();

        self::created(function($model){
            $group_message_controller_object = new group_message_controller();

            $group_message_controller_object->make_latest_group_messages_accessible_for_new_subscriber($model);
        });
    }
}
