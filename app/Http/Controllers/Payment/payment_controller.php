<?php

namespace App\Http\Controllers\Payment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use App\Models\Models\sell_offer;
use App\Models\instant_transaction;
use App\Models\factor;
use App\Models\instant_factor;
use App\Models\Http\Controllers\transaction_controller;
use App\Models\Http\Controllers\instant_transaction_controller;
use SoapClient;
use App\Models\myuser;
use Carbon\Carbon;
use App\Models\product;
use DB;
use App\Models\premium_service;
use App\Traits\Payment;
    

class payment_controller extends Controller
{
    use Payment;

    public function __construct()
    {
//        session_start();
//        ini_set("soap.wsdl_cache_enabled", "0");
    }
    
    protected $allowed_package_types_to_pay = [1,2,3];
    
    public function do_payment($pakage_type)
    {
        $prices_array = $this->get_packages_price_array();
        $payment_amount = $prices_array['type-' . $pakage_type .'-discount'] ?? $prices_array['type-' . $pakage_type];

        
        if(!in_array($pakage_type,$this->allowed_package_types_to_pay)){
            return redirect()->back()->withErrors([
               'error' => 'شما مجاز به انجام این پرداخت نیستید' 
            ]);
        }        
        else{
            try{
                $gateway = \Gateway::zarinpal();
                $gateway->setCallback(url('/payment_callback'));
                $gateway->price($payment_amount)->ready();
                $refId =  $gateway->refId();
                $transID = $gateway->transactionId();

                // Your code here
                session(['gateway_transaction_id' => $transID]);
                session(['pakage_type' => $pakage_type]);
                session(['pakage_duration_in_months' => config("subscriptionPakage.type-$pakage_type.pakage-duration-in-months")]);
                session(['elevator_count' => config("subscriptionPakage.type-$pakage_type.elevetor-count")]);
                session(['payment_amount' => $payment_amount]);

                $this->record_payment_log([
                    'myuser_id' => session('user_id'),
                    'transaction_id' => $transID,
                    'pay_for' => "package-type-$pakage_type",
                    'client' => 'web'
                ]);
                
                return $gateway->redirect(); 
            }catch (\Exception $e){ 
                return redirect('/contact-us');
            }   
        }
    } 
    
    public function app_do_payment($user_id,$pakage_type)
    {
        $prices_array = $this->get_packages_price_array($user_id);
        $payment_amount = $prices_array['type-' . $pakage_type .'-discount'] ?? $prices_array['type-' . $pakage_type];
        
        if(!in_array($pakage_type,$this->allowed_package_types_to_pay)){
            return redirect()->back()->withErrors([
               'error' => 'شما مجاز به انجام این پرداخت نیستید' 
            ]);
        }        
        else{
            try{
                $gateway = \Gateway::zarinpal();
                $gateway->setCallback(url('app-payment/payment_callback'));
                $gateway->price($payment_amount)->ready();
                $refId =  $gateway->refId();
                $transID = $gateway->transactionId();

                // Your code here
                session(['gateway_transaction_id' => $transID]);
                session(['pakage_type' => $pakage_type]);
                session(['pakage_duration_in_months' => config("subscriptionPakage.type-$pakage_type.pakage-duration-in-months")]);
                session(['elevator_count' => config("subscriptionPakage.type-$pakage_type.elevetor-count")]);
                session(['app_user_id' => $user_id]);
                session(['payment_amount' => $payment_amount]);

                $this->record_payment_log([
                    'myuser_id' => $user_id,
                    'transaction_id' => $transID,
                    'pay_for' => "package-type-$pakage_type",
                    'client' => 'mobile'
                ]);
                
                return $gateway->redirect(); 
            }catch (\Exception $e){ 
                return redirect('/contact-us');
            }   
        }
    } 
    
    public function payment_callback()
    {
        try { 
            $this->do_payment_callback(session('user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            $this->do_after_payment_changes_for_subscription(session('user_id'));
            
            $lastest_registered_product_count = DB::table('products')
                                                    ->where('myuser_id',session('user_id'))
                                                    ->whereBetween('created_at',[Carbon::now()->subMinutes(20),Carbon::now()])
                                                    ->orderBy('created_at','desc')
                                                    ->count();
            
            if($lastest_registered_product_count > 0){
                return redirect('/seller/register-product/success');
            }

            return redirect('/seller/buyAd-requests');

        } 
        catch (\Exception $e)
        {
            return redirect('/seller/pricing');
        }
    }

    public function app_payment_callback()
    {
        
        try { 
            $this->do_payment_callback(session('app_user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            $this->do_after_payment_changes_for_subscription(session()->pull('app_user_id'));


            $lastest_registered_product_count = DB::table('products')
                                                    ->where('myuser_id',session('user_id'))
                                                    ->whereBetween('created_at',[Carbon::now()->subMinutes(20),Carbon::now()])
                                                    ->orderBy('created_at','desc')
                                                    ->count();
            
            if($lastest_registered_product_count > 0){
                return redirect('buskool://register-product-successfully');
            }
            
            return redirect('buskool://buyAd-requests');

        } 
        catch (\Exception $e)
        {
            return redirect('buskool://pricing');
        }
    }
    
    protected function do_after_payment_changes_for_subscription($user_id)
    {
        // $user_id = session('user_id');
        $user_record = myuser::find($user_id);
        
        $user_record->active_pakage_type = session()->pull('pakage_type');
        $user_record->pakage_start = Carbon::now();
        $user_record->pakage_end   = Carbon::now()->addMonths(session()->pull('pakage_duration_in_months'));
        
        $user_record->save();

        $elevator_count = session()->pull('elevator_count');

        if($elevator_count){
            $user_product_record = product::where('myuser_id',$user_id)
                                    ->where('confirmed',true)
                                    ->orderBy('created_at') 
                                    ->first();
            
            if($user_product_record){
                $user_product_record->is_elevated = true;
                $user_product_record->elevator_expiry = Carbon::now()->addDays(7);

                $user_product_record->save();
            }
        }
        
    }

    protected function flush_global_session()
    {
        foreach($this->session_values_to_be_flushed as $key => $value)
        {
            unset($_SESSION[$key]);
        }
    }
    
    
    public function do_elevator_payment($product_id)
    {
        $payment_amount = config("subscriptionPakage.elevator.price");
        try{
            $gateway = \Gateway::zarinpal();
            $gateway->setCallback(url('/elevator_payment_callback'));
            $gateway->price($payment_amount)->ready();
            $refId =  $gateway->refId();
            $transID = $gateway->transactionId();

            // Your code here
            session(['gateway_transaction_id' => $transID]);
            session(['product_id' => $product_id]);
            session(['payment_amount' => $payment_amount]);
            
            $user_id = product::find($product_id)->myuser_id;

            $this->record_payment_log([
                'myuser_id' => $user_id,
                'transaction_id' => $transID,
                'pay_for' => "elevator",
                'client' => 'web'
            ]);

            return $gateway->redirect(); 
        }catch (\Exception $e){ 
            return redirect('/contact-us');
        }   
    }  

    public function app_do_elevator_payment($product_id)
    {
        $payment_amount = config("subscriptionPakage.elevator.price");
        try{
            $gateway = \Gateway::zarinpal();
            $gateway->setCallback(url('app-payment/elevator_payment_callback'));
            $gateway->price($payment_amount)->ready();
            $refId =  $gateway->refId();
            $transID = $gateway->transactionId();

            // Your code here
            session(['gateway_transaction_id' => $transID]);
            session(['product_id' => $product_id]);
            session(['payment_amount' => $payment_amount]);

            $user_id = product::find($product_id)->myuser_id;

            $this->record_payment_log([
                'myuser_id' => $user_id,
                'transaction_id' => $transID,
                'pay_for' => "elevator",
                'client' => 'mobile'
            ]);
 
            return $gateway->redirect(); 
        }catch (\Exception $e){ 
            return redirect('/contact-us');
        }   
    }  
    
    public function elevator_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_elevator(session()->pull('product_id'));
            
            return redirect('/product-list');

        } 
        catch (\Exception $e)
        {
            return redirect('/product-list');
        }
    }

    public function app_elevator_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('app_user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_elevator(session()->pull('product_id'));
            
            return redirect('buskool://product-list');

        } 
        catch (\Exception $e)
        {
            return redirect('buskool://product-list');
        }
    }
    
    protected function do_after_payment_changes_for_elevator($product_id)
    {
        // $product_id = session()->pull('product_id');
        
        try{
            $product_record = product::find($product_id);
        
            $now = Carbon::now();
            
            $expiration_time_in_days = config("subscriptionPakage.elevator.expiration-time-in-days");
            
            $product_record->is_elevated = true;
            $product_record->elevator_expiry = $now->addDays($expiration_time_in_days);

            $product_record->save();
        
        }
        catch(\Exception $e){
            //
        }
        
    }

    public function do_product_capacity_payment($extra_capacity)
    {
        if(!session()->has('user_id')){
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }

        if(is_integer((integer) $extra_capacity) && $extra_capacity > 0)
        {
            $payment_amount = config("subscriptionPakage.elevator.price");

            $payment_amount = $payment_amount * $extra_capacity;

            $user_id = session('user_id');

            try{
                $gateway = \Gateway::zarinpal();
                $gateway->setCallback(url('/product_capacity_payment_callback'));
                $gateway->price($payment_amount)->ready();
                $refId =  $gateway->refId();
                $transID = $gateway->transactionId();

                // Your code here
                session(['gateway_transaction_id' => $transID]);
                session(['extra_capacity' => $extra_capacity]);
                session(['uid' => $user_id]);
                session(['payment_amount' => $payment_amount]);


                $this->record_payment_log([
                    'myuser_id' => $user_id,
                    'transaction_id' => $transID,
                    'pay_for' => "product-capacity",
                    'client' => 'web'
                ]);

                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                return redirect('/contact-us');
            }  
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }
    }

    public function app_do_product_capacity_payment($user_id,$extra_capacity)
    {
        if(is_integer((integer) $extra_capacity) && $extra_capacity > 0)
        {
            $payment_amount = config("subscriptionPakage.elevator.price");

            $payment_amount = $payment_amount * $extra_capacity;

            try{
                $gateway = \Gateway::zarinpal();
                $gateway->setCallback(url('app-payment/product_capacity_payment_callback'));
                $gateway->price($payment_amount)->ready();
                $refId =  $gateway->refId();
                $transID = $gateway->transactionId();

                // Your code here
                session(['gateway_transaction_id' => $transID]);
                session(['extra_capacity' => $extra_capacity]);
                session(['app_user_id' => $user_id]);
                session(['payment_amount' => $payment_amount]);

                $this->record_payment_log([
                    'myuser_id' => $user_id,
                    'transaction_id' => $transID,
                    'pay_for' => "product-capacity",
                    'client' => 'mobile'
                ]);

                
                return $gateway->redirect(); 
            }catch (\Exception $e){ 
                return redirect('/contact-us');
            }  
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }
    }

    public function product_capacity_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_product_capacity(session('user_id'),session()->pull('extra_capacity'));
            
            return redirect('/seller/register-product');

        } 
        catch (\Exception $e)
        {
            return redirect('/seller/register-product');
        }
    }

    public function app_product_capacity_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('app_user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_product_capacity(session()->pull('app_user_id'),session()->pull('extra_capacity'));
            
            return redirect('buskool://register-product');

        } 
        catch (\Exception $e)
        {
            return redirect('buskool://register-product');
        }
    }

    protected function do_after_payment_changes_for_product_capacity($user_id,$extra_capacity)
    {
        // $extra_capacity = session()->pull('extra_capacity');
        // $user_id = session('user_id');

        try{
            DB::table('myusers')
                        ->where('id',$user_id)
                        ->increment('extra_product_capacity',$extra_capacity);
        }
        catch(\Exception $e){
            //
        }
    }

    public function do_buyAd_reply_capacity_payment($extra_reply_capacity)
    {
        if(!session()->has('user_id')){
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }

        if(is_integer((integer) $extra_reply_capacity) && $extra_reply_capacity > 0)
        {
            $payment_amount = config("subscriptionPakage.elevator.price");
            $payment_amount = $payment_amount * $extra_reply_capacity;

            $user_id = session('user_id');

            try{
                $gateway = \Gateway::zarinpal();
                $gateway->setCallback(url('/buyAd_reply_capacity_payment_callback'));
                $gateway->price($payment_amount)->ready();
                $refId =  $gateway->refId();
                $transID = $gateway->transactionId();

                // Your code here
                session(['gateway_transaction_id' => $transID]);
                session(['extra_reply_capacity' => $extra_reply_capacity]);
                session(['uid' => $user_id]);
                session(['payment_amount' => $payment_amount]);

                $this->record_payment_log([
                    'myuser_id' => $user_id,
                    'transaction_id' => $transID,
                    'pay_for' => "buyAd-capacity",
                    'client' => 'web'
                ]);

                
                return $gateway->redirect(); 
            }catch (\Exception $e){ 
                return redirect('/contact-us');
            } 
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }
    }

    public function app_do_buyAd_reply_capacity_payment($user_id,$extra_reply_capacity)
    {

        if(is_integer((integer) $extra_reply_capacity) && $extra_reply_capacity > 0)
        {
            $payment_amount = config("subscriptionPakage.elevator.price");
            $payment_amount = $payment_amount * $extra_reply_capacity;

            try{
                $gateway = \Gateway::zarinpal();
                $gateway->setCallback(url('app-payment/buyAd_reply_capacity_payment_callback'));
                $gateway->price($payment_amount)->ready();
                $refId =  $gateway->refId();
                $transID = $gateway->transactionId();

                // Your code here
                session(['gateway_transaction_id' => $transID]);
                session(['extra_reply_capacity' => $extra_reply_capacity]);
                session(['app_user_id' => $user_id]);
                session(['payment_amount' => $payment_amount]);

                $this->record_payment_log([
                    'myuser_id' => $user_id,
                    'transaction_id' => $transID,
                    'pay_for' => "buyAd-capacity",
                    'client' => 'mobile'
                ]);

                
                return $gateway->redirect(); 
            }catch (\Exception $e){ 
                return redirect('/contact-us');
            } 
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }
    }

    public function buyAd_reply_capacity_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_buyAd_reply_capacity(session('user_id'),session()->pull('extra_reply_capacity'));
            
            return redirect('/seller/buyAd-requests');

        } 
        catch (\Exception $e)
        {
//            echo $e->getMessage();
            return redirect('/seller/buyAd-requests');   
            //return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
        }
    }

    public function app_buyAd_reply_capacity_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('app_user_id'),session()->pull('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_buyAd_reply_capacity(session('app_user_id'),session()->pull('extra_reply_capacity'));
            
            return redirect('buskool://buyAd-requests');

        } 
        catch (\Exception $e)
        {
            return redirect('buskool://buyAd-requests');
        }
    }

    protected function do_after_payment_changes_for_buyAd_reply_capacity($user_id,$extra_capacity)
    {
        // $extra_capacity = session()->pull('extra_reply_capacity');
        // $user_id = session('user_id');

        try{
            DB::table('myusers')
                        ->where('id',$user_id)
                        ->increment('extra_buyAd_reply_capacity',$extra_capacity);
        }
        catch(\Exception $e){
            //
        }
    }


    protected function record_payment_log($payment)
    {
        DB::table('payment_logs')->insert($payment);
    }

    public function get_packages_price_array($user_id = null)
    {
        $pricing_change_date = Carbon::createFromFormat('m/d/Y H:i:s', '03/01/2021 00:00:00');

        if(is_null($user_id)){
            $user_id = session('user_id');
        }

        $user_record = myuser::find($user_id);

        if($user_record->created_at->lt($pricing_change_date)){
            $prices = [
                'type-1' => config("subscriptionPakage.type-1.price-1"),
                'type-3' => config("subscriptionPakage.type-3.price-1"),
                'type-1-discount' => null,
                'type-3-discount' => null
            ];
        }
        else{
            $prices = [
                'type-1' => config("subscriptionPakage.type-1.price"),
                'type-3' => config("subscriptionPakage.type-3.price"),
            ];

            if(($time_diff = Carbon::now()->diffInHours($user_record->created_at)) < 3 * 24)
            {
                $prices['type-1-discount'] = config("subscriptionPakage.type-1.price-discount");
                $prices['type-3-discount'] = config("subscriptionPakage.type-3.price-discount");

                $prices['discount-deadline']['days'] = (integer) (abs(3 * 24 - $time_diff)/24); 
                $prices['discount-deadline']['hours'] = (integer) abs(3 * 24 - $time_diff) % 24; 
            }
        }

        return $prices;
        
    }

    public function get_packages_price(){
        $prices = $this->get_packages_price_array();

        return response()->json([
            'prices' => $prices
        ],200);
    }



    
    
}