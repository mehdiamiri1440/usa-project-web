<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Http\Controllers\message_controller;

class sendNewMessageSMSNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $msg_controller_object = new message_controller();

        $users_to_notify = $msg_controller_object->get_users_who_have_unread_messages();

        $msg_controller_object->update_daily_sms_black_list($users_to_notify);

        $users_to_notify->each(function ($user) {
            // sendSMS::dispatch($user->phone,20691)->onQueue('sms');
        });
    }
}
