<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LaravelFCM\Message\OptionsBuilder;
use LaravelFCM\Message\PayloadDataBuilder;
use LaravelFCM\Message\PayloadNotificationBuilder;
use FCM;
use LaravelFCM\Message\Topics;

class fcm_controller extends Controller
{
    public function send_notification_to_the_given_topic($data_array,$topic_name)
    {
        $notificationBuilder = new PayloadNotificationBuilder($data_array['title']);
        $notificationBuilder->setBody($data_array['message'])                
                            ->setColor('#00c569')
                            ->setTag('buskool')
                            ->setSound('default');

        $notification = $notificationBuilder->build();
        
        $topic = new Topics();
        $topic->topic($topic_name);
        
        $topicResponse = FCM::sendToTopic($topic, null, $notification, null);

        $topicResponse->isSuccess();
        $topicResponse->shouldRetry();
        $topicResponse->error();
    }
}
