<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Http\Controllers\Notification\fcm_controller;

class SendGroupMessageNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $topic;

    public function __construct($topic)
    {
        $this->topic = $topic;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // event(new newMessage($this->msg));
        $this->send_notification_via_FCM($this->topic);
    }
    
    protected function send_notification_via_FCM($topic)
    {
        $fcm_controller_object = new fcm_controller();
        
        $data = [
            'title' => 'باسکول',
            'message' => 'پیام جدید در گروه'
        ];
        
        $fcm_controller_object->send_notification_to_the_given_topic($data,$topic);
    }
}
