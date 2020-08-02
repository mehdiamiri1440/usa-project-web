<?php

namespace App\Jobs\Notifiers;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use App\Http\Controllers\Notification\fcm_controller;
use App\Jobs\sendSMS;

class RetentionReminder implements ShouldQueue
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
        $users = $this->get_unreturned_users();

        $topics = $this->generate_related_topics($users);

        $data = [
            'title' => 'باسکول',
            'message' => 'هزاران خریدار و فروشنده عمده در بازار باسکول منتظر شما هستند'
        ];

        $fcm_object = new fcm_controller();
        $fcm_object->send_notification_to_given_topic_group($data,$topics);

        // $this->send_sms_notification_reminder($users);
    }

    protected function get_unreturned_users()
    {
        $users = DB::select("select DISTINCT(id),phone from myusers where id not in (SELECT DISTINCT(myuser_id) as id from products where confirmed = true and date(created_at) BETWEEN date_sub(date(now()),INTERVAL 1 MONTH) and now()) and id not in (SELECT DISTINCT(sender_id) as id from messages where date(created_at) BETWEEN date_sub(date(now()),INTERVAL 1 MONTH) and now()) and id not in (SELECT DISTINCT(myuser_id) as id from buy_ads where confirmed = true and date(created_at) BETWEEN date_sub(date(now()),INTERVAL 1 MONTH) and date(now())) and date(myusers.created_at) > date_sub(date(now()),INTERVAL 3 MONTH) and id in (select distinct(sender_id) as id from messages where date(created_at) BETWEEN date_sub(date(now()),INTERVAL 3 MONTH) and date_sub(date(now()),INTERVAL 1 MONTH))");

        return $users;
    }

    protected function generate_related_topics(&$users)
    {
        $topics = [];

        foreach($users as $user)
        {
            $topics[] = 'FCM' . $user->id;
        }

        return $topics;
    }

    protected function send_sms_notification_reminder(&$users)
    {
        foreach($users as $user)
        {
            sendSMS::dispatch($user->phone, defineCode);
        }
    }
}
