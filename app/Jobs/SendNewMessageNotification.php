<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\Events\newMessage;
use App\Models\message;
use App\Http\Controllers\Notification\fcm_controller;

class SendNewMessageNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $msg;
    
    public function __construct(message $msg)
    {
        $this->msg = $msg;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // event(new newMessage($this->msg));
        $this->send_notification_via_FCM($this->msg);
    }
    
    protected function send_notification_via_FCM($msg)
    {
        $fcm_controller_object = new fcm_controller();
        
        $data = [
            'title' => 'باسکول',
            'message' => 'یک پیام جدید از مخاطبین'
        ];
        
        $topic_name = 'FCM'.$msg->receiver_id;
        
        $fcm_controller_object->send_notification_to_the_given_topic($data,$topic_name);
    }
}
