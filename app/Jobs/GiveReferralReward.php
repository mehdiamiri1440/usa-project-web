<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;

class GiveReferralReward implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $user_id;
    protected $payment_amount;

    public function __construct($user_id,$payment_amount)
    {
        $this->user_id = $user_id;
        $this->payment_amount = $payment_amount;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $related_referral_record = DB::table('referred_users')
                                    ->where('referred_user_id',$this->user_id)
                                    ->first();

        if($related_referral_record){
            $are_they_logged_in_from_same_device = $this->are_these_users_using_same_device($this->user_id,$related_referral_record->myuser_id);

            if($are_they_logged_in_from_same_device == false){
                DB::table('myusers')->where('id',$related_referral_record->myuser_id)
                                    ->increment('wallet_balance',(integer)($this->payment_amount / 2));
            } 
        }  
    }

    protected function are_these_users_using_same_device($first_user_id,$second_user_id)
    {
        $first_user_device_ids = DB::table('client_meta_datas')
                                ->where('myuser_id',$first_user_id)
                                ->whereNotNull('device_id')
                                ->pluck('device_id');

        if(cont($first_user_device_ids) == 0){
            return false;
        }

        $same_device_ids_count = DB::table('client_meta_datas')
                                        ->where('myuser_id',$second_user_id)
                                        ->whereNotNull('device_id')
                                        ->whereIn('device_id',$first_user_device_ids)
                                        ->get()
                                        ->count();

        if($same_device_ids_count > 0){
            return true;
        }

        return false;
    }
}
