<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\buyAd;
use App\sell_offer;
use Carbon\Carbon;
use App\product;
use App\myuser;
use App\profile;


class admin_statistics_controller extends Controller
{
    
    protected $terminated_transaction_status  = '0000000011111111';
    
    public function load_statistics()
    {   
        $until_date = new Carbon('today');
        $from_date = new Carbon('last month');
        
        $transactions_count = $this->get_transactions_count($from_date, $until_date);
        $buyAds_count = $this->get_buyAds_count($from_date, $until_date);
        $products_count = $this->get_products_count($from_date, $until_date);
        $sell_offers_count = $this->get_sell_offers_count($from_date, $until_date);
        $new_users_count = $this->get_new_users_count($from_date, $until_date);
        $new_profiles_count = $this->get_profile_updates_count($from_date, $until_date);
        //$active_users_count = $this->get_active_users_count($from_date, $until_date);
        
        return view('admin_panel.siteStatistics',compact(
            'transactions_count',
            'buyAds_count',
            'products_count',
            'sell_offers_count',
            'new_users_count',
            'new_profiles_count'
            )
        );
    }
    
    
    protected function get_transactions_count($from_date, $until_date)
    {
        $finished_transaction_count = sell_offer::where('transaction_status',$this->terminated_transaction_status)
                                            ->whereBetween('updated_at',[$from_date, $until_date])
                                            ->select('id') 
                                            ->get()
                                            ->count();
        
        return $finished_transaction_count;
    }
    
    protected function get_buyAds_count($from_date, $until_date)
    {
        $buyAds_count = buyAd::where('confirmed',true)
                                ->whereBetween('updated_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        
        return $buyAds_count;
    }
    
    protected function get_products_count($from_date, $until_date)
    {
        $products_count = product::where('confirmed', true)
                                ->whereBetween('updated_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        
        return $products_count;
    }
    
    protected function get_sell_offers_count($from_date, $until_date)
    {
        $sell_offers_count = sell_offer::where('confirmed',true)
                                ->whereBetween('updated_at',[$from_date, $until_date])
                                ->select('id')
                                ->get()
                                ->count();
        
        return $sell_offers_count;
    }
    
    protected function get_active_users_count($from_date, $until_date)
    {
       
    }
    
    protected function get_new_users_count($from_date, $until_date)
    {
        $new_users_count = myuser::whereBetween('created_at',[$from_date, $until_date])
                                        ->select('id') 
                                        ->get()
                                        ->count();
        
        return $new_users_count;
    }
    
    protected function get_profile_updates_count($from_date, $until_date)
    {
        $profile_updates = profile::where('confirmed',true)
                                        ->whereBetween('updated_at',[$from_date, $until_date])
                                        ->distinct('myuser_id') 
                                        ->get()
                                        ->count();
        
        return $profile_updates;
    }
}
