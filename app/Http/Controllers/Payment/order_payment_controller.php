<?php

namespace App\Http\Controllers\Payment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Carbon\Carbon;
use DB;

class order_payment_controller extends Controller
{
    public function do_order_payment($order_id)
    {
        $user_id = session('user_id');

        if(is_integer((integer) $order_id))
        {
            $order = DB::table('light_orders')
                        ->where('id',$order_id)
                        ->get()
                        ->first();
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }
        
        if(! is_null($order)){
            if($user_id != $order->buyer_id && $order->status != '00000000'){
                return redirect()->back()->withErrors([
                    'error' => 'شما مجاز به انجام این پرداخت نیستید' 
                 ]);
            }
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }

        $payment_amount = $order->total_price * 10;
       
        try{
            $gateway = \Gateway::zarinpal();
            $gateway->setCallback(url('/order_payment_callback'));
            $gateway->price($payment_amount)->ready();
            $refId =  $gateway->refId();
            $transID = $gateway->transactionId();

            // Your code here
            // session(['gateway_transaction_id' => $transID]);
            session(['order_id' => $order->id]);
            
            return $gateway->redirect(); 
        }catch (Exception $e){ 
            echo $e->getMessage();
        }    
    }

    public function do_order_payment_callback(Request $request)
    {
        try { 
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            $this->do_after_payment_changes_for_light_orders();
            
            return redirect('/seller/pricing');

        } 
        catch (\Exception $e)
        {
            return redirect('/seller/pricing');
            //return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
        }
    }

    protected function do_after_payment_changes_for_light_orders()
    {
        $order_id = session()->pull('order_id');

        DB::table('light_orders')
                ->where('id',$order_id)
                ->update([
                    'status' => '00000001',
                    'payment_date' => Carbon::now()
                ]);
    }
}
