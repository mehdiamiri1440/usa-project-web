<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

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
                                    ->where('referred_user_id',$user_id)
                                    ->first();

        if($related_referral_record){
            DB::table('myusers')->where('id',$related_referral_record->myuser_id)
                                    ->increment('wallet_balance',$this->payment_amount);
        }  

    }
}
