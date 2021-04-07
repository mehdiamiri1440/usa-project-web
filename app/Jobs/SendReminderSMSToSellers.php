<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Carbon\Carbon;
use App\Models\product;
use App\Models\myuser;
use App\Jobs\sendSMS;
use DB;

class SendReminderSMSToSellers implements ShouldQueue
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
        $sellers_to_notify = $this->get_sellers_who_did_not_registered_product_48_hours_after_signup();
        
        $sellers_to_notify->each(function($user){
             sendSMS::dispatch($user->phone,20692)->onQueue('sms');
        });
    }
    
    protected function get_sellers_who_did_not_registered_product_48_hours_after_signup()
    {
        $to = Carbon::now();
        $from = Carbon::now()->subDays(2);
    
        $products_ids = product::where('confirmed',true)
                            ->select('myuser_id')
                            ->distinct()
                            ->whereNull('deleted_at')
                            ->get()
                            ->toArray();
    
        $users_phone_numbers = DB::table('myusers')
                                    ->whereNotIn('id',$products_ids)
                                    ->where('is_seller',true)
                                    ->select('id','phone')
                                    ->whereBetween('created_at',[$from,$to])
                                    ->get();
    
        return $users_phone_numbers;                          
    }
}
