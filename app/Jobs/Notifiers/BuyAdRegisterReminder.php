<?php

namespace App\Jobs\Notifiers;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use Carbon\Carbon;
use App\Http\Controllers\Notification\fcm_controller;

class BuyAdRegisterReminder implements ShouldQueue
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
        $users = $this->get_users_info_whom_did_not_registered_buyAd_yet();

        $topics = $this->generate_related_topics($users);

        $data = [
            'title' => 'باسکول',
            'message' => 'به دنبال فروشنده محصولات کشاورزی هستید؟ همین حالا در بازار کشاورزی باسکول درخواست خرید ثبت کنید'
        ];
        
        $fcm_object = new fcm_controller();
        $fcm_object->send_notification_to_given_topic_group($data,$topics);
    }

    protected function get_users_info_whom_did_not_registered_buyAd_yet()
    {
        $users = DB::table('myusers')
                    ->where([
                        ['is_buyer','=',true],
                        ['is_blocked','=',false],
                    ])
                    ->whereBetween('created_at',[Carbon::today()->subDays(3),Carbon::today()])
                    ->whereRaw(DB::raw("myusers.id not in (select distinct(myuser_id) as id from buy_ads) and myusers.id not in (select distinct(myuser_id) as id from products)"))
                    ->select('id')
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
}
