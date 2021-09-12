<?php

namespace App\Http\Controllers\Payment;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Routing\Route;
use SoapClient;
use App\Models\myuser;
use Carbon\Carbon;
use App\Models\product;
use DB;
use App\Models\premium_service;
use App\Traits\Payment;
use App\Http\Controllers\Payment\payment_controller;


class wallet_controller extends Controller
{
    protected $package_types = [1,2,3];

    public function do_charge_wallet($amount)
    {
        if($amount >= 1000){
            $payment_amount = $amount * 10; //converting toman to Rial

            if(session()->has('payment_amount')){
                session()->pull('payment_amount'); //remove session from previous payment
            }
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }

        try{
            $gateway = \Gateway::zarinpal();
            $gateway->setCallback(url('/wallet_payment_callback'));
            $gateway->price($payment_amount)->ready();
            $refId =  $gateway->refId();
            $transID = $gateway->transactionId();

            // Your code here
            session(['gateway_transaction_id' => $transID]);
            session(['payment_amount' => $amount]);

            $this->record_payment_log([
                'myuser_id' => session('user_id'),
                'transaction_id' => $transID,
                'pay_for' => 'wallet-charge',
                'client' => 'web'
            ]);
            
            return $gateway->redirect(); 
        }catch (\Exception $e){ 
            return redirect('/contact-us');
        } 
    }

    public function do_app_charge_wallet($user_id,$amount)
    {
        if($amount >= 1000){
            $payment_amount = $amount * 10; //converting toman to Rial

            if(session()->has('payment_amount')){
                session()->pull('payment_amount'); //remove session from previous payment
            }
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'شما مجاز به انجام این پرداخت نیستید' 
             ]);
        }

        try{
            $gateway = \Gateway::zarinpal();
            $gateway->setCallback(url('/app-wallet-payment-callback'));
            $gateway->price($payment_amount)->ready();
            $refId =  $gateway->refId();
            $transID = $gateway->transactionId();

            // Your code here
            session(['gateway_transaction_id' => $transID]);
            session(['payment_amount' => $amount]);
            session(['app_user_id' => $user_id]);

            $this->record_payment_log([
                'myuser_id' => $user_id,
                'transaction_id' => $transID,
                'pay_for' => 'wallet-charge',
                'client' => 'mobile'
            ]);
            
            return $gateway->redirect(); 
        }catch (\Exception $e){ 
            return redirect('/contact-us');
        } 
    }

    public function wallet_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('user_id'),session('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_wallet_charge(session()->pull('payment_amount'),session('user_id'));
            
            return redirect('/seller/buyAd-requests');

        } 
        catch (\Exception $e)
        {
            return redirect('/seller/buyAd-requests');
        }
    }

    public function app_wallet_payment_callback()
    {
        try{ 
            $this->do_payment_callback(session('app_user_id'),session('payment_amount'));

            // عملیات خرید با موفقیت انجام شده است
            // در اینجا کالا درخواستی را به کاربر ارائه میکنم
            
            $this->do_after_payment_changes_for_wallet_charge(session()->pull('payment_amount'),session()->pull('app_user_id'));
            
            return redirect('buskool://my-buskool');

        } 
        catch (\Exception $e)
        {
            return redirect('buskool://wallet');
        }
    }

    protected function do_after_payment_changes_for_wallet_charge($payment_amount,$user_id)
    {
        if($user_id && is_integer((integer)$payment_amount)){
            DB::table('myusers')
                        ->where('id',$user_id)
                        ->increment('wallet_balance',$payment_amount);
        }

        return redirect('/pricing');  
    }

    public function insert_expendig_log_record($service_name,$unit_cost,$user_id,$count = 1)
    {
        $amount = $unit_cost * $count;

        $is_balance_updated = $this->update_user_account_balance($amount,$user_id);

        if($is_balance_updated == true){
            $now = Carbon::now();

            DB::table('expending_logs')
                    ->insert([
                        'created_at' => $now,
                        'updated_at' => $now,
                        'service_name' => $service_name,
                        'myuser_id'  => $user_id,
                        'amount'     => $amount,
                        'count'      => $count
                    ]);
        }
        
    }

    protected function update_user_account_balance($price,$user_id)
    {
        $result = DB::table('myusers')
                    ->where('id', $user_id)
                    ->where('wallet_balance','>=',$price)
                    ->decrement('wallet_balance',$price);

        return $result;
    }

    public function do_elevator_payment_from_wallet(Request $request)
    {
        $this->validate($request,[
            'product_id' => 'required|integer|exists:products,id',
        ]);

        $user_id = session('user_id');
        $product_id = $request->product_id;
        $min_required_balance = config("subscriptionPakage.elevator.price")/10;

        $related_record = DB::table('products')
                                ->join('myusers','myusers.id','=','products.myuser_id')
                                ->where('products.confirmed',true)
                                ->where('products.myuser_id',$user_id)
                                ->where('products.id',$product_id)
                                ->whereNull('products.deleted_at')
                                ->where('myusers.wallet_balance','>=',$min_required_balance)
                                ->get();

        if(count($related_record) == 0){
            return response()->json([
                'status' => false,
                'msg' => 'موجودی کیف پول شما کافی نیست. لطفا ابتدا موجودی کیف پول خود را افزایش دهید.'
            ],423);
        }

        $expiration_time_in_days = config("subscriptionPakage.elevator.expiration-time-in-days");
        $elevator_expiry = Carbon::now()->addDays($expiration_time_in_days);

        DB::table('products')
                ->where('id',$product_id)
                ->update([
                    'is_elevated' => true,
                    'updated_at' => Carbon::now(),
                    'elevator_expiry' => $elevator_expiry
                ]);

        $unit_cost = config("subscriptionPakage.elevator.price") / 10;
        $this->insert_expendig_log_record('product-elevator',$unit_cost,$user_id);

        return response()->json([
            'status' => true,
            'msg' => 'done!'
        ],200);
    }

    public function do_extra_buyAd_capacity_payment_from_wallet(Request $request)
    {
        $this->validate($request,[
            'extra_capacity' => 'required|integer|min:1'
        ]);

        $user_id = session('user_id');
        $extra_capacity_count = $request->extra_capacity;

        $user_record = DB::table('myusers')->where('id',$user_id)->first();

        if($user_record){
            $min_required_balance = ( config("subscriptionPakage.buyAd-capacity-price")/10 ) * $extra_capacity_count;
            
            if($user_record->wallet_balance < $min_required_balance){
                return response()->json([
                    'status' => false,
                    'msg' => 'موجودی کیف پول شما کافی نیست. لطفا ابتدا موجودی کیف پول خود را افزایش دهید.'
                ],423);
            }
            
            DB::table('myusers')
                    ->where('id',$user_record->id)
                    ->increment('extra_buyAd_reply_capacity',$extra_capacity_count);

            $unit_cost = config("subscriptionPakage.buyAd-capacity-price") / 10;
            $this->insert_expendig_log_record('buyAd-capacity',$unit_cost,$user_id,$extra_capacity_count);

            return response()->json([
                'status' => true,
                'msg' => 'done!'
            ],200);
        }

        return response()->json([
            'status' => false,
            'msg' => 'شما مجاز با انجام این عملیات نیستید.'
        ],200);

    }

    public function do_extra_product_capacity_payment_from_wallet(Request $request)
    {
        $this->validate($request,[
            'extra_capacity' => 'required|integer|min:1'
        ]);

        $user_id = session('user_id');
        $extra_capacity_count = $request->extra_capacity;

        $user_record = DB::table('myusers')->where('id',$user_id)->first();

        if($user_record){
            $min_required_balance = ( config("subscriptionPakage.product-capacity-price")/10 ) * $extra_capacity_count;

            if($user_record->wallet_balance < $min_required_balance){
                return response()->json([
                    'status' => false,
                    'msg' => 'موجودی کیف پول شما کافی نیست. لطفا ابتدا موجودی کیف پول خود را افزایش دهید.'
                ],423);
            }
            
            DB::table('myusers')
                    ->where('id',$user_record->id)
                    ->increment('extra_product_capacity',$extra_capacity_count);

            $unit_cost = config("subscriptionPakage.product-capacity-price") / 10;
            $this->insert_expendig_log_record('product-capacity',$unit_cost,$user_id,$extra_capacity_count);

            return response()->json([
                'status' => true,
                'msg' => 'done!'
            ],200);
        }

        return response()->json([
            'status' => false,
            'msg' => 'شما مجاز به انجام این عملیات نیستید.'
        ],200);
    }

    public function do_package_payemnt_from_wallet(Request $request)
    {
        $this->validate($request,[
            'package_type' => 'required|integer|min:1'
        ]);

        $package_type = $request->package_type;

        if(! in_array($package_type,$this->package_types) ){
            return response()->json([
                'status' => false,
                'msg' => 'wrong input!'
            ],404);
        }

        //
        $user_id = session('user_id');
        $user_record = DB::table('myusers')->where('id',$user_id)->first();

        $package_price = config("subscriptionPakage.type-$package_type.price")/10 ;

        if($user_record->wallet_balance < $package_price){
            return response()->json([
                'status' => false,
                'msg' => 'موجودی کیف پول شما کافی نیست. لطفا ابتدا موجودی کیف پول خود را افزایش دهید.'
            ],423);
        }

        DB::table('myusers')->where('id',$user_id)
                            ->update([
                                'active_pakage_type' => $package_type,
                                'pakage_start' => Carbon::now(),
                                'pakage_end' => Carbon::now()->addMonths(config("subscriptionPakage.type-$package_type.pakage-duration-in-months"))
                            ]);

        $unit_cost = $this->get_package_price($package_type,$user_id) / 10;

        $this->insert_expendig_log_record("package-type-$package_type",$unit_cost,$user_id);

        return response()->json([
            'status' => true,
            'msg' => 'done!'
        ],200);
    }

    protected function do_after_payment_changes_for_elevator($product_id)
    {   
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

    protected function record_payment_log($payment)
    {
        DB::table('payment_logs')->insert($payment);
    }

    protected function get_package_price($pakage_type,$user_id)
    {
        $payment_controller_object = new payment_controller();
        $prices_array = $payment_controller_object->get_packages_price_array($user_id);

        $unit_cost = $prices_array['type-' . $pakage_type .'-discount'] ?? $prices_array['type-' . $pakage_type];

        return $unit_cost;
    }
}
