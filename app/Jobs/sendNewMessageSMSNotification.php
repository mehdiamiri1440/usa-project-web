<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\Http\Controllers\message_controller;
use App\Jobs\sendSMS;

class sendNewMessageSMSNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {   
        $msg_controller_object = new message_controller();
        
        $msg_array = [
            'شما پیام خوانده نشده در اینکوباک دارید',
            'برای مشاهده به وبسایت مراجعه کنید'
        ];
        
        $users_to_notify = $msg_controller_object->get_users_who_have_unread_messages();
        
        $msg_controller_object->update_daily_sms_black_list($users_to_notify);
        
        $users_to_notify->each(function($user) use($msg_array){
            sendSMS::dispatch($msg_array,$user->phone)->onQueue('sms');
        });
    }
}
