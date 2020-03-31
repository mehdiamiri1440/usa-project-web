<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use GuzzleHttp\Client;

class FCMSubscriber implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $token = '';
    protected $user_subscribed_topics = [];
    protected $action = ''; // boolean -> true for subscribe, false for unsuscribe

    public function __construct($token,$user_subscribed_topics,$action)
    {
        $this->token = $token;
        $this->user_subscribed_topics = $user_subscribed_topics;
        $this->action = $action;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if($this->action === true){
            $this->user_subscribed_topics->each(function($item){
                $this->subscribe_token_in_fcm_server($this->token,$item->topic_name);
            });
        }
        else if($this->action === false){
            $this->user_subscribed_topics->each(function($item){
                $this->unsubscribe_token_from_fcm_server($this->token,$item->topic_name);
            });
        }
    }

    protected function subscribe_token_in_fcm_server($token,$topic)
    {
        $url = "https://iid.googleapis.com/iid/v1/$token/rel/topics/$topic";

        $client = new Client();
        $api_key = 'key=' . config("fcm.http.server_key");

        $res = $client->request('POST', $url , [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' =>  $api_key
            ],
        ]);

        $response_code =  $res->getStatusCode();
        
        if($response_code == 200){
            return true;
        }

        return false;
    }

    protected function unsubscribe_token_from_fcm_server($token,$topic)
    {
        $url = "https://iid.googleapis.com/iid/v1:batchRemove";

        $client = new Client();
        $api_key = 'key=' . config("fcm.http.server_key");

        $res = $client->request('POST', $url , [
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization' =>  $api_key
            ],
            'json' => [
                "to" => "/topics/$topic",
                "registration_tokens" => [$token]
            ]
        ]);

        $response_code =  $res->getStatusCode();
        
        if($response_code == 200){
            return true;
        }

        return false;
    }
}
