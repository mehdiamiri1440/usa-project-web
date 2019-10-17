<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

use App\Jobs\sendNewMessageSMSNotification;
use App\Jobs\CheckPakageExpiry;
use DB;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $send_sms_notification_for_new_unread_messages_job = (new sendNewMessageSMSNotification())
            ->onQueue('sms');
        
        $schedule->job($send_sms_notification_for_new_unread_messages_job)
            ->hourly()
            ->between('9:00', '23:00');
        
        $schedule->call(function () {
            DB::table('daily_sms_blacklists')->delete();
        })->dailyAt('5:45');
        
        $check_pakage_expiry_time_job = new CheckPakageExpiry();
        
        $schedule->job($check_pakage_expiry_time_job)
                ->dailyAt('3:00');
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
