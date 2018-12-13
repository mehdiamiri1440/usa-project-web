<?php

namespace App\Http\Controllers;

use DB;
use App\product;

class buyAd_recommender_controller extends Controller
{
    protected $registered_product_coef = 2;
    protected $registered_sell_offer_coef = 2;
    protected $sold_coef = 1;
    protected $previous_transaction_with_buyer_coef = 1 ;
    
    public function buyAd_list_recommender_for_seller(&$buyAd_list,$seller_user_id)
    {
        $registered_product_sub_category_array = $this->get_seller_registered_products_sub_category_array($seller_user_id);
        $this->apply_registered_product_filter_to_buyAd_list($buyAd_list,$registered_product_sub_category_array);
        
        $registered_sell_offer_sub_category_array = $this->get_seller_registered_sell_offer_sub_category_array($seller_user_id);
        $this->apply_registered_sell_offer_filter_to_buyAd_list($buyAd_list,$registered_sell_offer_sub_category_array);
        
        $buyers_user_id_array = $this->get_buyers_user_id_list_who_had_at_least_one_transaction_with_the_seller($seller_user_id);
        $this->apply_previous_transaction_with_the_buyers_filter_to_buyAd_list($buyAd_list,$buyers_user_id_array);
        
        $buyAd_list = $buyAd_list->sortByDesc('score');
        
    }
    
    protected function get_seller_registered_products_sub_category_array($seller_user_id)
    {
        $category_array = product::where('myuser_id',$seller_user_id)
                            ->select('category_id as sub_category_id') 
                            ->distinct()
                            ->get();
        
        return $category_array;
    }
    
    protected function apply_registered_product_filter_to_buyAd_list(&$buyAd_list,$sub_category_array)
    {
        $filtered_buyAd_list = $buyAd_list->filter(function($buyAd) use($sub_category_array){
           if( ! isset($buyAd['score'])){
               $buyAd['score'] = 0;
           } 
           
           $flag = false;
           foreach($sub_category_array as $item){
               if($item->sub_category_id == $buyAd->category_id){
                   $flag = true;
               }
           }
            
           return $flag;
        });
        
        $filtered_buyAd_list->each(function(&$buyAd){
             $this->increase_buyAd_score($buyAd,$this->registered_product_coef);
        });
    }
    
    protected function get_seller_registered_sell_offer_sub_category_array($seller_user_id)
    {
        $category_array = DB::table('sell_offers')
                                ->join('buy_ads','buy_ads.id','=','sell_offers.buy_ad_id')
                                ->join('myusers','myusers.id','=','sell_offers.myuser_id')
                                ->select('buy_ads.category_id as sub_category_id')
                                ->distinct()
                                ->get();
        
        return $category_array;
    }
    
    protected function apply_registered_sell_offer_filter_to_buyAd_list(&$buyAd_list,$sub_category_array)
    {
        $filtered_buyAd_list = $buyAd_list->filter(function($buyAd) use($sub_category_array){
            if( ! isset($buyAd['score'])){
                $buyAd['score'] = 0;
            } 
            
            $flag = false;
            foreach($sub_category_array as $item){
                if($item->sub_category_id == $buyAd->category_id){
                    $flag = true;
                }
            }
            
            return $flag;
        });
        
        $filtered_buyAd_list->each(function(&$buyAd){
            $this->increase_buyAd_score($buyAd,$this->registered_sell_offer_coef);
        });
    }
    
    protected function get_buyers_user_id_list_who_had_at_least_one_transaction_with_the_seller($seller_user_id)
    {
        $buyers_user_id_array = DB::table('sell_offers')
                                ->join('buy_ads','buy_ads.id','=','sell_offers.buy_ad_id')
                                ->where('sell_offers.myuser_id',$seller_user_id)
                                ->select('buy_ads.myuser_id as buyer_id') 
                                ->get();
        
        return $buyers_user_id_array;
    }
    
    protected function apply_previous_transaction_with_the_buyers_filter_to_buyAd_list(&$buyAd_list,$buyers_user_id_array)
    {
         $filtered_buyAd_list = $buyAd_list->filter(function($buyAd) use($buyers_user_id_array){
            if( ! isset($buyAd['score'])){
                $buyAd['score'] = 0;
            } 
            
            $flag = false;
            foreach($buyers_user_id_array as $item){
                if($item->buyer_id == $buyAd->myuser_id){
                    unset($buyAd->myuser_id);

                    $flag = true;
                }
            }
            
            return $flag;
        });
        
        $filtered_buyAd_list->each(function(&$buyAd){
            $this->increase_buyAd_score($buyAd,$this->previous_transaction_with_buyer_coef);
        });
    }
    
    protected function increase_buyAd_score(&$buyAd,$score)
    {
        $buyAd['score'] += $score;
    }
}