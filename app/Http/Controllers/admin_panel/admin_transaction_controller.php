<?php

namespace App\Http\Controllers\admin_panel;

use App\Http\Controllers\Controller;
use App\sell_offer;
use App\sell_offer_media;
use App\Http\Library\date_convertor;
use App\category;
use App\buyAd;
use App\myuser;
use App\factor;
use App\profile;
use Illuminate\Http\Request;
use App\instant_transaction;
use Carbon\Carbon;

class admin_transaction_controller extends Controller
{
    
    protected $waitig_for_factor_issuance_statuses = [
        'buyer' => [
            'prepayment' => '0000000000000011' ,
            'prepayment2' => '0000000000000111' ,
            'payment' => '0000000000011111', 
        ],
        'seller' => [
            //
        ]
    ];
    
    protected $waiting_for_transaction_termination_status = '0000000001111111';
    protected $waiting_for_transaction_checkout_status = '0000000011111111';
    
    public function load_waiting_to_initiate_transactions_list()
    {
        $sell_offers = sell_offer::where('confirmed',true)
            ->where('is_accepted',true)
            ->where('is_pending',false)
            ->where('transaction_status','0000000000000000')
            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $sell_offers->each(function($sell_offer) use($date_convertor_object){            
            $sell_offer['date_from'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_from);
            $sell_offer['date_to'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_to);
        });
        
        return view('admin_panel.pendingList',[ 
           'sell_offers' => $sell_offers,
        ]);
    }
    
    public function get_transaction_with_related_buyAd($real_transaction_id)
    {
        $sell_offer = sell_offer::find($real_transaction_id);
        
        $date_convertor_object = new date_convertor();
        
        $sell_offer['date_from'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_from);
        $sell_offer['date_to'] = $date_convertor_object->get_persian_date($sell_offer->valid_date_to);
        
        $sell_offer_media_records = sell_offer_media::where('sell_offer_id',$real_transaction_id)
            ->select(['id','file_path'])
            ->get();
        
        $sell_offer['photos'] = $this->get_file_path_array($sell_offer_media_records);
        
        $buyAd = buyAd::find($sell_offer->buy_ad_id);
        
        $category_array = $this->get_category_and_subcategory_name($buyAd->category_id);
        
        $buyAd['category_name'] = $category_array['category_name'];
        $buyAd['subcategory_name'] = $category_array['subcategory_name'];
        
        $buyAd_user_info = myuser::find($buyAd->myuser_id);
        $sell_offer_user_info = myuser::find($sell_offer->myuser_id);
        
        $sell_offer_user_profile_info = profile::where('myuser_id',$sell_offer->myuser_id)
                                            ->where('confirmed',true)
                                            ->get()
                                            ->last();                                            
                                            
        
        $prepayment_factor_record = null;
        $payment_factor_record = null;
        
        if($sell_offer->transaction_status == $this->waitig_for_factor_issuance_statuses['buyer']['payment']){
            $prepayment_factor_record = factor::where('sell_offer_id',$sell_offer->id)
                                                ->where('type','prepayment')
                                                ->get()
                                                ->first()
                                                ;
        }
        
        if($sell_offer->transaction_status == $this->waiting_for_transaction_checkout_status){
            $payment_factor_record = factor::where('sell_offer_id',$sell_offer->id)
                                                ->where('type','payment')
                                                ->get()
                                                ->first()
                                                ;
        }
        
        return view('admin_panel.transactionDetail',[
            'transaction' => $sell_offer,
            'buyAd' => $buyAd,
            'sell_offer_user_info' => $sell_offer_user_info,
            'buyAd_user_info' => $buyAd_user_info,
            'sell_offer_user_profile_info' => $sell_offer_user_profile_info,
            'prepayment_factor' => $prepayment_factor_record ? $prepayment_factor_record : null, 
            'payment_factor' => $payment_factor_record ? $payment_factor_record : null,
        ]);
    }
    
    protected function get_category_and_subcategory_name($subcategory_id)
    {
        $subcategory_record = category::where('id',$subcategory_id)
            ->select('category_name','parent_id')
            ->get()
            ->first();
        
        $category_record = category::where('id',$subcategory_record->parent_id)
            ->select('category_name')
            ->get()
            ->first();
        
        return [
            'category_name' => $category_record->category_name,
            'subcategory_name' => $subcategory_record->category_name,
        ];
    }
    
    protected function get_file_path_array(&$records)
    {
        $result = array();
        
        foreach($records as $record){
            $temp = [
                'id' => $record->id,
                'file_path' => $record->file_path
            ];
            
            $result[] = $temp;
        }
        
        return $result;
    }
    //public method
    public function load_waiting_for_prepayment_factor_issuance_transactions_list(Request $request)
    {
        $transactions = sell_offer::where('transaction_status',$this->waitig_for_factor_issuance_statuses['buyer']['prepayment'])
                            ->orWhere('transaction_status',$this->waitig_for_factor_issuance_statuses['buyer']['prepayment2'])
                            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $transactions->each(function($transaction) use($date_convertor_object){            
            $transaction['date_from'] = $date_convertor_object->get_persian_date($transaction->valid_date_from);
            $transaction['date_to'] = $date_convertor_object->get_persian_date($transaction->valid_date_to);
        });
        
        return view('admin_panel.prepaymentFactorIssuanceList',[
           'sell_offers' => $transactions, 
        ]);                            
    }  
    
    //public method
    public function load_waiting_for_payment_factor_issuance_transactions_list(Request $request)
    {
        $transactions = sell_offer::where('transaction_status',$this->waitig_for_factor_issuance_statuses['buyer']['payment'])
                            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $transactions->each(function($transaction) use($date_convertor_object){            
            $transaction['date_from'] = $date_convertor_object->get_persian_date($transaction->valid_date_from);
            $transaction['date_to'] = $date_convertor_object->get_persian_date($transaction->valid_date_to);
        });
        
        return view('admin_panel.paymentFactorIssuanceList',[
           'sell_offers' => $transactions, 
        ]);                            
    }  
    
    //public method
    public function load_waiting_for_termination_transaction_list(Request $request)
    {
        $transactions = sell_offer::where('transaction_status',$this->waiting_for_transaction_termination_status)
                            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $transactions->each(function($transaction) use($date_convertor_object){            
            $transaction['date_from'] = $date_convertor_object->get_persian_date($transaction->valid_date_from);
            $transaction['date_to'] = $date_convertor_object->get_persian_date($transaction->valid_date_to);
        });
        
        return view('admin_panel.transactionTerminationList',[
           'sell_offers' => $transactions, 
        ]);  
    }
    
    //public method
    public function load_waiting_for_checkout_transaction_list(Request $request)
    {
        $transactions = sell_offer::where('transaction_status',$this->waiting_for_transaction_checkout_status)
                            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $transactions->each(function($transaction) use($date_convertor_object){            
            $transaction['date_from'] = $date_convertor_object->get_persian_date($transaction->valid_date_from);
            $transaction['date_to'] = $date_convertor_object->get_persian_date($transaction->valid_date_to);
        });
        
        return view('admin_panel.transactionCheckOutList',[
           'sell_offers' => $transactions, 
        ]);  
    }
    
    
    //public method
    public function initiate_instant_transaction(Request $request)
    {
        $this->validate($request,[
            'seller_phone' => 'required',
            'buyer_phone'  => 'required',
            'loading_dead_line' => 'required',
            'commission_percentage' => 'required',
            'admin_notes' => 'required',
        ]);
        
        $date_convertor_object = new date_convertor();
        
        $seller_user_id = $this->get_user_id_by_phone_number($request->seller_phone);
        $buyer_user_id = $this->get_user_id_by_phone_number($request->buyer_phone);
        
        if($seller_user_id && $buyer_user_id){
            $transaction_object = new instant_transaction();
        
            $transaction_object->seller_id = $seller_user_id;
            $transaction_object->buyer_id = $buyer_user_id;
            $transaction_object->loading_dead_line = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->loading_dead_line);
            $transaction_object->commission_percentage = $request->commission_percentage;
            $transaction_object->admin_notes = $request->admin_notes;
            $transaction_object->transaction_status = '0000000000000001';
            $transaction_object->deal_date = Carbon::now();

            $transaction_object->save();
            
            return response()->json([
                'status' => true,
                'msg' => 'transaction inserted!',
            ],201);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'seller or buyer phone number does not exist!',
            ],404);
        }
        
        
        
    }
    
    protected function get_user_id_by_phone_number($phone_number)
    {
        $user_record = myuser::where('phone',$phone_number)
                                ->get()
                                ->first()
                                ;
        
        if($user_record){
            return $user_record->id;
        }
        else return false;
    }
    
}