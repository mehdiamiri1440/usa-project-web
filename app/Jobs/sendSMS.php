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
    public $pattern_code;
    
    public function __construct($phone_number,$pattern_code)
    {
        $this->phone_number = $phone_number;
        $this->pattern_code = $pattern_code;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $sms_controller_object = new sms_controller();
        $sms_controller_object->send_sms_to_given_phone_number($this->phone_number,$this->pattern_code);
    }
}
