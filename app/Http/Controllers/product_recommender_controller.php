<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\category;
use App\myuser;
use DB;

class product_recommender_controller extends Controller
{
    protected $category_coef = 1;
    protected $register_request_coef = 2;
    protected $bought_coef = 3;
    
    public function product_list_recommender_for_buyer(&$product_list,$buyer_user_id)
    {
        //get buyer's category id
        $category_id = $this->get_buyer_main_category_id($buyer_user_id);
        $this->apply_category_filter_to_product_list($product_list,$category_id);
//        
        $bought_sub_category_array = $this->get_buyer_bought_items_sub_category_array($buyer_user_id);
        $this->apply_bought_filter_to_product_list($product_list,$bought_sub_category_array);
        
        
        $registered_requests_sub_category_array = $this->get_buyer_registered_requests_sub_category_array($buyer_user_id);
        $this->apply_register_request_filter_to_product_list($product_list,$registered_requests_sub_category_array);
        
        //sort based on score
        $product_list = $product_list->sortByDesc('score');
        
        
        //no return is needed becuase of reference call 
    }
    
    protected function get_buyer_main_category_id($buyer_user_id)
    {
        $user_record = myuser::where('id',$buyer_user_id)
                        ->select('category_id')
                        ->get()
                        ->first();
        
        return $user_record->category_id;
    }
    
    protected function apply_category_filter_to_product_list(&$product_list,$category_id)
    {
        $filtered_products = $product_list->filter(function(&$product) use($category_id){
            $product_category_id = $this->get_category_id($product->category_id);
            
            if( ! isset($product['score'])){
               $product['score'] = 0;
            } 
            return $category_id == $product_category_id;
        });
        
        $new_product_list = $filtered_products->each(function(&$product){
            $this->increase_product_score($product,$this->category_coef);
        });
        
    }
    
    protected function get_category_id($sub_category_id)
    {
        $sub_category_record = category::find($sub_category_id);
        
        return $sub_category_record->parent_id;
    }
    
    protected function increase_product_score(&$product,$coef)
    {
        $product['score'] += $coef;
    }
    
    protected function get_buyer_bought_items_sub_category_array($buyer_user_id)
    {
        $list = DB::table('sell_offers')
                        ->join('buy_ads','sell_offers.buy_ad_id','=','buy_ads.id')
                        ->join('myusers','buy_ads.myuser_id','=','myusers.id')
                        ->where('myusers.id',$buyer_user_id)
                        ->where('sell_offers.is_accepted',true)
                        ->select('buy_ads.category_id as subcategory_id')
                        ->distinct()
                        ->get();
        
        return $list;   
    }
    
    protected function apply_bought_filter_to_product_list(&$product_list,$bought_sub_category_array)
    {
        $filtered_products = $product_list->filter(function($product) use($bought_sub_category_array){
            if( ! isset($product['score'])){
               $product['score'] = 0;
            } 
            
            $flag = false;
            foreach($bought_sub_category_array as $item){
                if($item->subcategory_id == $product->category_id){
                    $flag = true;
                }
            }
            
            return $flag;
        });
        
        $new_product_list = $filtered_products->each(function(&$product){
               $this->increase_product_score($product,$this->bought_coef);
        });
    }
    
    protected function get_buyer_registered_requests_sub_category_array($buyer_user_id)
    {
        $list = DB::table('buy_ads')
                        ->join('myusers','buy_ads.myuser_id','=','myusers.id')
                        ->where('myusers.id',$buyer_user_id)
                        ->select('buy_ads.category_id as subcategory_id')
                        ->distinct()
                        ->get();
        
        return $list;  
    }
    
    protected function apply_register_request_filter_to_product_list(&$product_list,$registered_requests_sub_category_array)
    {
        $filtered_products = $product_list->filter(function($product) use($registered_requests_sub_category_array){
            if( ! isset($product['score'])){
               $product['score'] = 0;
            } 
            
            $flag = false;
            foreach($registered_requests_sub_category_array as $item){
                if($item->subcategory_id == $product->category_id){
                    $flag = true;
                }
            }
            
            return $flag;
        });
        
        $new_product_list = $filtered_products->each(function(&$product){
               $this->increase_product_score($product,$this->register_request_coef);
        });
    }
}