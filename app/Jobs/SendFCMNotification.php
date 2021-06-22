<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use FCM;

class SendFCMNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $topic;
    protected $notification;
    protected $data;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($topic,$notification,$data)
    {
        $this->topic = $topic;
        $this->notification = $notification;
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        // $topicResponse = FCM::sendToTopic($this->topic, null, $this->notification, $this->data);

        // $topicResponse->isSuccess();
        // $topicResponse->shouldRetry();
        // $topicResponse->error();
    }
}
