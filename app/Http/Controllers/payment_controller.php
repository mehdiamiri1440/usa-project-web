<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use App\sell_offer;
use App\instant_transaction;
use App\factor;
use App\instant_factor;
use App\Http\Controllers\transaction_controller;
use App\Http\Controllers\instant_transaction_controller;
use SoapClient;
use App\myuser;
use Carbon\Carbon;
use App\product;
    

class payment_controller extends Controller
{
    
    public function __construct()
    {
//        session_start();
//        ini_set("soap.wsdl_cache_enabled", "0");
    }
    
    protected $transaction_id_increase_amount_proportional_to_real_id = 100000 ;
    protected $MerchantId = 'D0CA';
    protected $admin_email = 's.radmanesh95@gmail.com';
    protected $sha1Key = '22338240992352910814917221751200141041845518824222260';
    protected $session_values_to_be_flushed = [
        'transaction_id',
        'factor_id',
        'amount',
        'merchantId',
        'sha1Key',
        'PayOrderId',
        'token',
        'payment_type',
    ];
    
    protected $gateway_max_amount_to_pay_value = 500000000; //Rials -> 50 M Toman
    
    public function do_payment($pakage_type)
    {
        $payment_amount = config("subscriptionPakage.type-$pakage_type.price");//$this->get_payment_amount($type,$transaction_id);
        
        if($pakage_type != 3){
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
//                session(['transaction_id' => $transaction_id]);
//                session(['payment_type' => $type]);
                
                return $gateway->redirect(); 
            }catch (Exception $e){ 
                echo $e->getMessage();
            }   
        }
        
        //do payment stuff
        //return redirect()->back();
    }   
    
    protected function get_payment_amount($type,$transaction_id)
    {
        $transaction_id = (int) $transaction_id;
        
        if(is_integer($transaction_id)){
            $real_sell_offer_id = $transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id;   
        }
        else{ return false ;}
        
        $sell_offer_record = sell_offer::find($real_sell_offer_id);
        
        if($sell_offer_record){
            if($type == 'prepayment'){
                $factor_record = factor::where('sell_offer_id',$sell_offer_record->id)
                                            ->where('type','prepayment')
                                            ->where('is_payed',false)
                                            ->get()
                                            ->last();
                if($factor_record){
                    
//                    session(['factor_id' => $factor_record->id]);
                    $_SESSION['factor_id'] = $factor_record->id;
                    
                    return $factor_record->amount_to_pay - $factor_record->payed_so_far;
                }
                else return false;
            }
            else if($type == 'finalPayment'){
                $factor_record = factor::where('sell_offer_id',$sell_offer_record->id)
                                            ->where('type','payment')
                                            ->where('is_payed',false)
                                            ->get()
                                            ->last();
                if($factor_record){
                    //save factor id in session
//                    session(['factor_id' => $factor_record->id]);
                    $_SESSION['factor_id'] = $factor_record->id;
                    
                    return $factor_record->amount_to_pay - $factor_record->payed_so_far;
                }
                else return false;
            }
            else return false;
        }
        else return false;
        
    }
    
    protected function get_instant_transaction_payment_amount($type,$transaction_id)
    {
        $transaction_id = (int) $transaction_id;
        
        if(is_integer($transaction_id)){
            $transaction_id = $transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id;   
        }
        else{ return false ;}
        
        $transaction_record = instant_transaction::find($transaction_id);
        
        if($transaction_record){
            if($type == 'prepayment'){
                $factor_record = instant_factor::where('transaction_id',$transaction_record->id)
                                            ->where('type','prepayment')
                                            ->where('is_payed',false)
                                            ->get()
                                            ->last();
                if($factor_record){
                    
//                    session(['factor_id' => $factor_record->id]);
                    $_SESSION['factor_id'] = $factor_record->id;
                    
                    return $factor_record->amount_to_pay - $factor_record->payed_so_far;
                }
                else return false;
            }
            else if($type == 'finalPayment'){
                $factor_record = instant_factor::where('transaction_id',$transaction_record->id)
                                            ->where('type','payment')
                                            ->where('is_payed',false)
                                            ->get()
                                            ->last();
                if($factor_record){
                    //save factor id in session
//                    session(['factor_id' => $factor_record->id]);
                    $_SESSION['factor_id'] = $factor_record->id;
                    
                    return $factor_record->amount_to_pay - $factor_record->payed_so_far;
                }
                else return false;
            }
            else return false;
        }
        else return false;
        
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
            $this->do_after_payment_changes_for_subscription();
            
            return redirect('/seller/pricing');

        } 
        catch (\Exception $e)
        {
            return redirect('/seller/pricing');
            //return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
        }
//         catch (PortNotFoundException $e) 
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
//         catch (InvalidRequestException $e)
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
//         catch (NotFoundTransactionException $e)
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
//         catch (\Exception $e) 
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
        
        
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
    
    protected function do_after_payment_changes_for_subscription()
    {
        $user_id = session('user_id');
        $user_record = myuser::find($user_id);
        
        $now = Carbon::now();
        
        $user_record->active_pakage_type = session()->pull('pakage_type');
        $user_record->pakage_start = $now;
        $user_record->pakage_end   = $now->addMonths(session()->pull('pakage_duration_in_months'));
        
        $user_record->save();
        
        $user_product_record = product::where('myuser_id',$user_id)
                                    ->where('confirmed',true)
                                    ->orderBy('created_at') 
                                    ->first();
        
        if($user_product_record){
            $user_product_record->is_elevated = true;
            $user_product_record->elevator_expiry = $now->addDays(14);

            $user_product_record->save();
        }
        
    }
    
    public function do_my_payment($type,$transaction_id)
    {   
        $payment_amount = $this->get_payment_amount($type,$transaction_id);
        
        if($payment_amount == false){
            return redirect()->back()->withErrors([
               'error' => 'شما مجاز به انجام این پرداخت نیستید' 
            ]);
        }        
        else{
                
                $payment_amount = $payment_amount * 10 > $this->gateway_max_amount_to_pay_value ? $this->gateway_max_amount_to_pay_value : $payment_amount * 10 ;
            
                $_SESSION['merchantId'] = $this->MerchantId;
                $_SESSION['sha1Key'] = $this->sha1Key;
                $_SESSION['admin_email'] = 'ali_delkhosh@ymail.com';
                $_SESSION['amount'] = $payment_amount ;
                $_SESSION['PayOrderId'] = time();

                $revertURL = route('payment_callback');

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
                $_SESSION['transaction_id'] = $transaction_id ;
                $_SESSION['payment_type'] = $type ;
                $this->redirect_post('https://ikc.shaparak.ir/TPayment/Payment/index',$data);
            }
           
    }
    
    public function do_instant_transaction_payment($type,$transaction_id)
    {   
        $payment_amount = $this->get_instant_transaction_payment_amount($type,$transaction_id);
        
        if($payment_amount == false){
            return redirect()->back()->withErrors([
               'error' => 'شما مجاز به انجام این پرداخت نیستید' 
            ]);
        }        
        else{
                
                $payment_amount = $payment_amount * 10 > $this->gateway_max_amount_to_pay_value ? $this->gateway_max_amount_to_pay_value : $payment_amount * 10 ;
            
                $_SESSION['merchantId'] = $this->MerchantId;
                $_SESSION['sha1Key'] = $this->sha1Key;
                $_SESSION['admin_email'] = 'ali_delkhosh@ymail.com';
                $_SESSION['amount'] = $payment_amount ;
                $_SESSION['PayOrderId'] = time();

                $revertURL = route('instant_transaction_payment_callback');

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
                $_SESSION['transaction_id'] = $transaction_id ;
                $_SESSION['payment_type'] = $type ;
                $this->redirect_post('https://ikc.shaparak.ir/TPayment/Payment/index',$data);
            }
           
    }
    
    protected function redirect_post($url, array $data)
    {

      echo '<html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <title>در حال اتصال ...</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
        #main {
            background-color: #F1F1F1;
            border: 1px solid #CACACA;
            height: 90px;
            left: 50%;
            margin-left: -265px;
            position: absolute;
            top: 200px;
            width: 530px;
        }
        #main p {
            color: #757575;
            direction: rtl;
            font-family: Arial;
            font-size: 16px;
            font-weight: bold;
            line-height: 27px;
            margin-top: 30px;
            padding-right: 60px;
            text-align: right;
        }
        </style>
            <script type="text/javascript">
                function closethisasap() {
                    document.forms["redirectpost"].submit();
                }
            </script>
        </head>
        <body onload="closethisasap();">';
       echo '<form name="redirectpost" method="post" action="'.$url.'">';

            if ( !is_null($data) ) {
                foreach ($data as $k => $v) {
                    echo '<input type="hidden" name="' . $k . '" value="' . $v . '"> ';
                }
            }

       echo' </form><div id="main">
    <p>درحال اتصال به درگاه بانک</p></div>
        </body>
        </html>';

        exit;
    }
    
    public function my_payment_callback()
    {
        $transaction_id = $_SESSION['transaction_id'];
        
        if(isset($_POST['resultCode'])){
            if ($_POST['resultCode'] == '100') 
            {
                $referenceId = isset($_POST['referenceId']) ? $_POST['referenceId'] : 0;
                $client = new SoapClient('https://ikc.shaparak.ir/XVerify/Verify.xml', array('soap_version'   => SOAP_1_1));
                $params['token'] =  $_SESSION['token'];
                $params['merchantId'] = $this->MerchantId;
                $params['referenceNumber'] = $referenceId;
                $params['sha1Key'] = $this->sha1Key;


                $result = $client->__soapCall("KicccPaymentsVerification", array($params));
                $result = ($result->KicccPaymentsVerificationResult);


                if (floatval($result) > 0 && floatval($result) == floatval($_SESSION['amount']) )
                {	
                    //Payment verfed and OK !
                    $payment_done_completely = $this->do_after_payment_changes($result,'factor'); //result is the payed amount value in gateway

                    //$payment_type = session()->pull('payment_type');
                    if($payment_done_completely == true){
                        $payment_type = $_SESSION['payment_type'];


                        if($payment_type == 'prepayment'){
                            $action_id = 5; //load action id from config file later
                        }
                        else if($payment_type == 'finalPayment'){
                            $action_id = 7;
                        }

                        $request = Request::create('/action', 'POST',[
                                'action_id' => $action_id,
                                'transaction_id' => $transaction_id,
                        ]);

                        $transaction_controller_object = new transaction_controller();

                        $transaction_controller_object->action_controller($request);
                    }
                    
                    
                    //flush session
                    $this->flush_global_session();

                    return redirect()->route('back-to-basic',['id' => $transaction_id]);
                }else{
                    //flush session
                    $this->flush_global_session();
                    
                    return view('dashboard.buyer.transaction.payment-error',[
                       'error_msg' => $this->message2($result),
                       'id' => $transaction_id
                    ]);
                }
            }
            else{
                //flush session
                $this->flush_global_session();
                
                return view('dashboard.buyer.transaction.payment-error',[
                       'error_msg' => $this->message($_POST['resultCode']),
                       'id' => $transaction_id
                    ]);
            }
        }
        else{
            return redirect()->back();
        }
    }
    
    public function instant_transaction_payment_callback()
    {
        $transaction_id = $_SESSION['transaction_id'];
        
        if(isset($_POST['resultCode'])){
            if ($_POST['resultCode'] == '100') 
            {
                $referenceId = isset($_POST['referenceId']) ? $_POST['referenceId'] : 0;
                $client = new SoapClient('https://ikc.shaparak.ir/XVerify/Verify.xml', array('soap_version'   => SOAP_1_1));
                $params['token'] =  $_SESSION['token'];
                $params['merchantId'] = $this->MerchantId;
                $params['referenceNumber'] = $referenceId;
                $params['sha1Key'] = $this->sha1Key;


                $result = $client->__soapCall("KicccPaymentsVerification", array($params));
                $result = ($result->KicccPaymentsVerificationResult);


                if (floatval($result) > 0 && floatval($result) == floatval($_SESSION['amount']) )
                {	
                    //Payment verfed and OK !
                    $payment_done_completely = $this->do_after_payment_changes($result,'instant_factor'); //result is the payed amount value in gateway

                    //$payment_type = session()->pull('payment_type');
                    if($payment_done_completely == true){
                        $payment_type = $_SESSION['payment_type'];


                        if($payment_type == 'prepayment'){
                            $action_id = 4; //load action id from config file later
                        }
                        else if($payment_type == 'finalPayment'){
                            $action_id = 6;
                        }

                        $request = Request::create('/instant_action', 'POST',[
                                'action_id' => $action_id,
                                'transaction_id' => $transaction_id,
                        ]);

                        $transaction_controller_object = new instant_transaction_controller();

                        $transaction_controller_object->action_controller($request);
                    }
                    
                    
                    //flush session
                    $this->flush_global_session();

                    return redirect()->route('instant-back-to-basic',['id' => $transaction_id]);
                }else{
                    //flush session
                    $this->flush_global_session();
                    
                    return view('dashboard.buyer.transaction.payment-error',[
                       'error_msg' => $this->message2($result),
                       'id' => $transaction_id
                    ]);
                }
            }
            else{
                //flush session
                $this->flush_global_session();
                
                return view('dashboard.buyer.transaction.payment-error',[
                       'error_msg' => $this->message($_POST['resultCode']),
                       'id' => $transaction_id
                    ]);
            }
        }
        else{
            return redirect()->back();
        }
    }
    
    protected function message2($result)
    {
            switch ($result) 
            {
                case '-20':
                        return "در درخواست کارکتر های غیر مجاز وجو دارد";
                    break;
                    case '-30':
                        return " تراکنش قبلا برگشت خورده است";
                    break;
                    case '-50':
                        return " طول رشته درخواست غیر مجاز است";
                    break;
                    case '-51':
                        return " در در خواست خطا وجود دارد";
                    break;
                    case '-80':
                        return " تراکنش مورد نظر یافت نشد";
                    break;
                    case '-81':
                        return " خطای داخلی بانک";
                    break;
                    case '-90':
                        return " تراکنش قبلا تایید شده است";
                    break;
            }
        }
    
    protected function message($resultCode)
    {
        switch ($resultCode) 
        {
            case 110:
                    return " انصراف دارنده کارت";
                break;
            case 120:
                return"   موجودی کافی نیست";
                break;
            case 130:
            case 131:
            case 160:
                return"   اطلاعات کارت اشتباه است";
                break;
            case 132:
            case 133:
                return"   کارت مسدود یا منقضی می باشد";
                break;
            case 140:
                return" زمان مورد نظر به پایان رسیده است";
                break;
            case 200:
            case 201:
            case 202:
                return" مبلغ بیش از سقف مجاز";
                break;
            case 166:
                return" بانک صادر کننده مجوز انجام  تراکنش را صادر نکرده";
                break;
            case 150:
            default:
                return " خطا بانک  $resultCode";
            break;
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
//        return $product_id;
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
        
        
        //do payment stuff
        //return redirect()->back();
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
            
            $this->do_after_payment_changes_for_elevator();
            
            return redirect('/product-list');

        } 
        catch (\Exception $e)
        {
//            echo $e->getMessage();
            return redirect('/product-list');
            //return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
        }
//         catch (PortNotFoundException $e) 
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
//         catch (InvalidRequestException $e)
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
//         catch (NotFoundTransactionException $e)
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
//         catch (\Exception $e) 
//        {
//            return redirect()->route('show-transaction-detail',['id' => $transaction_id]);
//        }
    }
    
    protected function do_after_payment_changes_for_elevator()
    {
        $product_id = session()->pull('product_id');
        
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
    
    
}