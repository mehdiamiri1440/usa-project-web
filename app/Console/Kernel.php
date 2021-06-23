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
use App\Jobs\PhoneNumberAutoSend\SendPhoneNumberToBuyerIfConditionsIsSatisfied;
use App\Jobs\Notifiers\RetentionReminder;
use App\Jobs\Notifiers\BuyAdRegisterReminder;
use App\Jobs\Notifiers\ProductRegisterReminder;
use App\Jobs\Notifiers\ExpiryReminder;
use App\Jobs\AnomalyDetectors\MessagingAnomalyDetection;
use DB;
use App\Jobs\PhoneNumberAutoSend\ProductAutoDeleteForUnresponsiveSellers;
use App\Jobs\Notifiers\AdvertiseProductsPeriodically;
use App\Jobs\Notifiers\AdvertiseBuyAdsPeriodically;
use App\Jobs\LeadHandler\LeadDistributorBot;
use App\Jobs\LeadHandler\LeadGenerator;
use App\Jobs\LeadHandler\ShareCalculator;


class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\createProductThumbnails::class,
        Commands\backupUserFiles::class,
        Commands\downloadMediaFromCloud::class,
        Commands\takeBlogBackup::class,
        Commands\syncMedia::class,
        Commands\deleteBlogBackupFiles::class,
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

        // $schedule->job($send_sms_notification_for_new_unread_messages_job)
        //     ->hourly()
        //     ->between('9:00', '23:00');

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
                ->everyTenMinutes();


        $product_register_reminder_job = new ProductRegisterReminder();
        $schedule->job($product_register_reminder_job)
                ->dailyAt('11:30');

        $buyAd_register_reminder_job = new BuyAdRegisterReminder();
        $schedule->job($buyAd_register_reminder_job)
                ->dailyAt('12:30');

        $expiry_reminder_job = new ExpiryReminder();
        $schedule->job($expiry_reminder_job)
            ->weekly()
            ->tuesdays()
            ->at('11:45');

        $phone_number_auto_sending_job = new SendPhoneNumberToBuyerIfConditionsIsSatisfied();
        $schedule->job($phone_number_auto_sending_job)
                ->hourlyAt(22)
                ->between('6:00', '22:00');

        $product_auto_delete_job = new ProductAutoDeleteForUnresponsiveSellers();
        $schedule->job($product_auto_delete_job)
                ->dailyAt('02:33');


        $daily_product_avertisement_for_premium_sellers = new AdvertiseProductsPeriodically(0,true,true);
        // $schedule->job($daily_product_avertisement_for_premium_sellers)
        //                 ->dailyAt('10:45');

        // $daily_product_avertisement_for_first_day_after_register_product = new AdvertiseProductsPeriodically(1,false,false);
        // $schedule->job($daily_product_avertisement_for_first_day_after_register_product)
        //                 ->dailyAt('16:45');

        // $daily_product_avertisement_for_third_day_after_register_product = new AdvertiseProductsPeriodically(3,false,false);
        // $schedule->job($daily_product_avertisement_for_third_day_after_register_product)
        //                 ->dailyAt('17:45');

        // $daily_buyAds_advertisement = new AdvertiseBuyAdsPeriodically();
        // $schedule->job($daily_buyAds_advertisement)
        //                 ->dailyAt('8:13');

        // $schedule->job($daily_buyAds_advertisement)
        //                 ->dailyAt('20:13');


        $user_automatic_blocking_job = new MessagingAnomalyDetection();
        $schedule->job($user_automatic_blocking_job)
                        ->cron('*/18 * * * *');

        $lead_generator_job = new LeadGenerator();
        $schedule->job($lead_generator_job)
                        ->cron('44 */4 * * *');

        $lead_distributor_job = new LeadDistributorBot();
        $schedule->job($lead_distributor_job)
                        ->cron('47 */2 * * *')
                        ->between('6:00','23:00');

        $lead_balance_calculator_job = new ShareCalculator();
        $schedule->job($lead_balance_calculator_job)
                ->weekly()
                ->saturdays()
                ->at('00:47');


        // $schedule->command('backup:clean')->daily()->at('12:27');
        $schedule->command('backup:run --only-db')->cron('15 */6 * * *'); // every 6 hours 15 mins after hour
        $schedule->command('media:sync --days=1')->cron('30 */4 * * *'); // every 4 hours 30 mins after hour
        // $schedule->command('create:backup --bucket=product-photos --days=1')->daily()->at('01:05');
        // $schedule->command('create:backup --bucket=product-thumbnails --days=1')->daily()->at('01:15');
        // $schedule->command('create:backup --bucket=profile-photos --days=1')->daily()->at('01:25');
        // $schedule->command('create:backup --bucket=verification-photos --days=1')->daily()->at('01:30');
        // $schedule->command('create:backup --bucket=related-photos --days=1')->daily()->at('01:35');
        // $schedule->command('create:backup --bucket=certificate-photos --days=1')->daily()->at('01:45');
         
    }

    /**
     * Register the Closure based commands for the application.
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
