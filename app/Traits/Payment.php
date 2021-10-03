<?php

namespace App\Traits;
use App\Jobs\GiveReferralReward;

/**
 * 
 */
trait Payment
{
    public function do_payment_callback($user_id,$payment_amount)
    {
        $gateway = \Gateway::verify();
        $trackingCode = $gateway->trackingCode();
        $refId = $gateway->refId();
        $cardNumber = $gateway->cardNumber();

        
        if(is_integer($user_id) && is_integer($payment_amount)){
            GiveReferralReward::dispatch($user_id,$payment_amount);
        }
    }
}
