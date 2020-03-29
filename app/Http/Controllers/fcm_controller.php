<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use FCM;
use LaravelFCM\Message\Topics;
use GuzzleHttp\Client;
use DB;

class fcm_controller extends Controller
{
    protected $baseUrl = 'https://www.buskool.com';

    public function send_notification_to_the_given_topic($data_array,$topic_name)
    {
        $notificationBuilder = new PayloadNotificationBuilder($data_array['title']);
        $notificationBuilder->setBody($data_array['message'])                
                            ->setColor('#00c569')
                            ->setIcon("$this->baseUrl/assets/img/logo_dark.png")
                            ->setSound('default');

        if(stristr($topic_name,'fcm')){
            $notificationBuilder->setTag('buskool')
                ->setClickAction("$this->baseUrl/seller/messages");
        }
        else{
            $notificationBuilder->setTag('buskoolGroups')
                ->setClickAction("$this->baseUrl/seller/group-messages");
        }

        $notification = $notificationBuilder->build();
        
        $topic = new Topics();
        $topic->topic($topic_name);
        
        $topicResponse = FCM::sendToTopic($topic, null, $notification, null);

        $topicResponse->isSuccess();
        $topicResponse->shouldRetry();
        $topicResponse->error();
    }

    public function subscribe_token_in_topic(Request $request)
    {
        $this->validate($request,[
            'token' => 'required|string',
            'topic' => 'string'
        ]);

        $token = $request->token;
        if($request->has('topic')){
            $topic = $request->topic;
        }
        else{
            $topic = 'FCM' . session('user_id');
        }

        $status = $this->subscribe_token_in_fcm_server($token,$topic);

        return response()->json([
            'status' => $status,
            'token' => $token
        ]);
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

    public function subscribe_token_in_groups(Request $request)
    {
        $this->validate($request,[
            'token' => 'required|string'
        ]);

        $user_id = session('user_id');
        $token = $request->token;
        $user_subscribed_topics = $this->get_user_topic_list($user_id);
        
        try{
            $user_subscribed_topics->each(function($item) use($token){
                $this->subscribe_token_in_fcm_server($token,$item->topic_name);
            });
        }
        catch(\Exception $e){
            return response()->json([
                'status' => false,
                'msg' => 'registration failed! try again later!'
            ],500);
        }
        

        return response()->json([
            'status' => true,
            'token' => $token
        ],200);
    }

    protected function get_user_topic_list($user_id)
    {
        $subscribed_topics = DB::table('messenger_group_subscribers')
                                    ->join('messenger_groups','messenger_groups.id','=','messenger_group_subscribers.group_id')
                                    ->where([
                                        ['messenger_group_subscribers.myuser_id','=',$user_id],
                                        ['messenger_group_subscribers.is_active','=',true],
                                        ['messenger_groups.is_active','=',true],
                                    ])
                                    ->select('messenger_groups.topic_name')
                                    ->get();
        
        return $subscribed_topics;
    }

    protected function test()
    {
        // $notificationBuilder = new PayloadNotificationBuilder($data_array['title']);

        print_r(get_class_methods(new PayloadNotificationBuilder));
    }
            
}
