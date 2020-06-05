<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Jobs\sendNewMessageSMSNotification;
use App\Jobs\CheckPakageExpiry;
use App\Jobs\SendReminderSMSToSellers;
use App\Jobs\CheckElevatorExpiry;
use App\Jobs\SendUpgradeAccoutnSMSToSellers;
use App\Jobs\CacheProductList;
use App\Jobs\AnomalyDetectors\MessagingAnomalyDetection;
use DB;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\createProductThumbnails::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
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

        $send_sms_for_sellers_who_did_not_registered_product_job = new SendReminderSMSToSellers();

        $schedule->job($send_sms_for_sellers_who_did_not_registered_product_job)
                ->dailyAt('10:30');

        $check_product_elevator_expiry_time_job = new CheckElevatorExpiry();

        $schedule->job($check_product_elevator_expiry_time_job)
                ->dailyAt('3:30');

        $send_sms_to_potential_sellers_for_upgrading_account_job = new SendUpgradeAccoutnSMSToSellers();

        $schedule->job($send_sms_to_potential_sellers_for_upgrading_account_job)
                ->dailyAt('9:30');

        $cache_product_list_job = new CacheProductList();

        $schedule->job($cache_product_list_job)
                ->everyFiveMinutes();

        $messenger_anomaly_detector_job = new MessagingAnomalyDetection();

        $schedule->job($messenger_anomaly_detector_job)
                    ->hourlyAt('45');
    }

    /**
     * Register the Closure based commands for the application.
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
