<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\product;
use App\myuser;
use App\Jobs\sendSMS;
use Carbon\Carbon;

class SendUpgradeAccoutnSMSToSellers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $product_stock_threshold = 10000;

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
        $potential_sellers_user_id = $this->get_potential_sellers_user_id_list();

        $users_phone_numbers = $this->get_users_phone_numbers($potential_sellers_user_id);

        $users_phone_numbers->each(function($user){
            sendSMS::dispatch($user->phone,21579)->onQueue('sms');
        });
    }

    protected function get_potential_sellers_user_id_list()
    {
        $non_free_sellers = $this->get_non_free_sellers_user_id_list();

        $user_ids = product::where('confirmed',true)
                            ->whereBetween('created_at',[Carbon::now()->subHours(24),Carbon::now()])
                            ->whereNotIn('myuser_id',$non_free_sellers)
                            ->where('stock','>=',$this->product_stock_threshold)
                            ->select('myuser_id')
                            ->distinct()
                            ->get();

        return $user_ids;
    }

    protected function get_non_free_sellers_user_id_list()
    {
        $user_ids = myuser::where('active_pakage_type','<>',0)
                            // ->where('is_seller',true)
                            ->select('id')
                            ->get();

        return $user_ids;
    }

    protected function get_users_phone_numbers($user_ids)
    {
        $user_ids_array = $user_ids->toArray();
        
        $phone_numbers = myuser::whereIn('id',$user_ids_array)
                                ->select('phone')
                                ->distinct()
                                ->get();
        
        return $phone_numbers;
    }
}
