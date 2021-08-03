<?php

namespace App\Traits;

/**
 * 
 */
trait Payment
{
    public function do_payment_callback($user_id,$payment_amount)
    {
        // try{ 
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

            

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
        //     $this->$after_payment_method_name($method_param);
            
        //     return redirect($redirect_urls_array['success']);

        // } 
        // catch (\Exception $e)
        // {
        //     return redirect($redirect_urls_array['fail']);
        // }
    }
}
