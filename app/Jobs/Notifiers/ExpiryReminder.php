<?php

namespace App\Jobs\Notifiers;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Http\Controllers\Notification\fcm_controller;
use DB;
use Carbon\Carbon;
use App\Jobs\sendSMS;

class ExpiryReminder implements ShouldQueue
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
        $users = $this->get_expiring_subscriptions_user_info();

        $topics = $this->generate_related_topics($users);

        $data = [
            'title' => 'باسکول',
            'message' => ' بسته ی عضویت شما در باسکول به زودی به اتمام می رسد.',
            'payload' => [
                'BTarget' => 'productList'
            ],
        ];
    
        $fcm_object = new fcm_controller();
        $fcm_object->send_notification_to_given_topic_group($data,$topics);

        $this->send_sms_notification_reminder($users);
    }

    protected function get_expiring_subscriptions_user_info()
    {
        $users = DB::table('myusers')->where('active_pakage_type','>',0)
                                ->whereBetween('pakage_end',[Carbon::now(),Carbon::now()->addWeek(1)])
                                ->select('id','phone')
                                ->get();
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

    protected function send_sms_notification_reminder($users)
    {
        foreach($users as $user)
        {
            sendSMS::dispatch($user->phone, 30007);
        }
    }
}
