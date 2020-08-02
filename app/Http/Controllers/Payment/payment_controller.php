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
    

class payment_controller extends Controller
{
    
    public function __construct()
    {
//        session_start();
//        ini_set("soap.wsdl_cache_enabled", "0");
    }
    
    protected $allowed_package_types_to_pay = [1,2,3];
    
    public function do_payment($pakage_type)
    {
        $payment_amount = config("subscriptionPakage.type-$pakage_type.price");
        
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
                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                echo $e->getMessage();
            }   
        }
    } 
    
    public function app_do_payment($user_id,$pakage_type)
    {
        $payment_amount = config("subscriptionPakage.type-$pakage_type.price");
        
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
                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                echo $e->getMessage();
            }   
        }
    } 
    
    public function payment_callback()
    {
        
        try { 
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            $this->do_after_payment_changes_for_subscription(session('user_id'));
            
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
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            $this->do_after_payment_changes_for_subscription(session()->pull('app_user_id'));
            
            return redirect('buskool://buyAd-requests');

        } 
        catch (\Exception $e)
        {
            return redirect('buskool://pricing');
        }
    }
    
    protected function do_after_payment_changes($payed_amount_in_gateway,$base_factor_model)
    {
        $factor_id = $_SESSION['factor_id'];
        
        if($base_factor_model == 'instant_factor'){
            $factor_record = instant_factor::find($factor_id);
        }
        else if($base_factor_model == 'factor'){
            $factor_record = factor::find($factor_id);
        }
        
        
        $factor_record->payed_so_far = $factor_record->payed_so_far + intval($payed_amount_in_gateway)/10 ;
        
        if($factor_record->payed_so_far == $factor_record->amount_to_pay){
            $factor_record->is_payed = true;
        }
        
        $factor_record->save();
        
        if($factor_record->payed_so_far == $factor_record->amount_to_pay){
            return true;
        }
        else return false;
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
    
    public function do_external_url_payment($payment_amount)
    {
        $payment_amount = (int) $payment_amount ;
        
        if(is_integer($payment_amount) ){

            $payment_amount = $payment_amount * 10 > $this->gateway_max_amount_to_pay_value ? false : $payment_amount * 10 ;

            if($payment_amount != false){
                $_SESSION['merchantId'] = $this->MerchantId;
                $_SESSION['sha1Key'] = $this->sha1Key;
                $_SESSION['admin_email'] = 'ali_delkhosh@ymail.com';
                $_SESSION['amount'] = $payment_amount ;
                $_SESSION['PayOrderId'] = time();

                $revertURL = route('external_url_payment_callback');

                $client = new SoapClient('https://ikc.shaparak.ir/XToken/Tokens.xml', array('soap_version'   => SOAP_1_1));

                $params['amount'] =  $payment_amount;
                $params['merchantId'] = $this->MerchantId;
                $params['invoiceNo'] = $_SESSION['PayOrderId'];
                $params['paymentId'] = $_SESSION['PayOrderId'];
                $params['specialPaymentId'] = $_SESSION['PayOrderId'];
                $params['revertURL'] = $revertURL;
                $params['description'] = "";
                $result = $client->__soapCall("MakeToken", array($params));
                $_SESSION['token'] = $result->MakeTokenResult->token;
                $data['token'] = $_SESSION['token'];
                $data['merchantId'] = $_SESSION['merchantId'];

                $this->redirect_post('https://ikc.shaparak.ir/TPayment/Payment/index',$data);
            }
        }
        else echo 'error';
          
    }
    
    public function external_url_payment_callback()
    {
        
        if(isset($_POST['resultCode'])){
            if ($_POST['resultCode'] == '100'){
                
                $referenceId = isset($_POST['referenceId']) ? $_POST['referenceId'] : 0;
                $client = new SoapClient('https://ikc.shaparak.ir/XVerify/Verify.xml', array('soap_version'   => SOAP_1_1));
                $params['token'] =  $_SESSION['token'];
                $params['merchantId'] = $this->MerchantId;
                $params['referenceNumber'] = $referenceId;
                $params['sha1Key'] = $this->sha1Key;


                $result = $client->__soapCall("KicccPaymentsVerification", array($params));
                $result = ($result->KicccPaymentsVerificationResult);


                if (floatval($result) > 0 && floatval($result) == floatval($_SESSION['amount']) ){	
                    //Payment verified and OK !
                    //
                    // payed amount value in gateway
                    return view('payment.external_url_payment_callback',[
                            'payed_amount' => $result,
                            'reference_id'=> $referenceId,
                            'payment_id' => $_POST['paymentId'] ? $_POST['paymentId'] : 0,
                    ]);
                    
                }
                else{
                    //flush session
                    $this->flush_global_session();

                    return abort(404);
                }
            }
            else{
                return redirect()->back();
            }
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
            
//            return 'id'.session()->pull('product_id');
            return $gateway->redirect(); 
        }catch (Exception $e){ 
            echo $e->getMessage();
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
 
            return $gateway->redirect(); 
        }catch (Exception $e){ 
            echo $e->getMessage();
        }   
    }  
    
    public function elevator_payment_callback()
    {
        try{ 
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

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
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

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

                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                echo $e->getMessage();
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

                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                echo $e->getMessage();
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
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

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
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

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

                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                echo $e->getMessage();
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

                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                echo $e->getMessage();
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
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

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
            $gateway = \Gateway::verify();
            $trackingCode = $gateway->trackingCode();
            $refId = $gateway->refId();
            $cardNumber = $gateway->cardNumber();

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
    
    
}