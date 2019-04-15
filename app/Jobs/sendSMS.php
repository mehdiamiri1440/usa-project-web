<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\Http\Controllers\sms_controller;

class sendSMS implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $phone_number;
    public $message_array;
    
    public function __construct($msg_array,$phone_number)
    {
        $this->phone_number = $phone_number;
        $this->message_array = $msg_array;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $sms_controller_object = new sms_controller();
        
        $sms_controller_object->send_notify_sms_to_phone_number($this->message_array,$this->phone_number);
    }
}
