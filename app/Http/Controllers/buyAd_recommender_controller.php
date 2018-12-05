<?php

namespace App\Http\Controllers;

use DB;

class buyAd_recommender_controller extends Controller
{
    protected $registered_product_coef = 2;
    protected $registered_sell_offer_coef = 2;
    protected $sold_coef = 1;
    
    public function buyAd_list_recommender_for_seller(&$buyAd_list,$seller_user_id)
    {
        $registered_product_sub_category_array = $this->get_seller_registered_products_sub_category_array($seller_user_id);
        $this->apply_registered_product_filter_to_buyAd_list($buyAd_list,$registered_product_sub_category_array);
        
        $buyAd_list = $buyAd_list->sortByDesc('score');
        
        foreach($buyAd_list as $item){
            //echo $item->score ."\n";
        }
    }
    
    protected function get_seller_registered_products_sub_category_array($seller_user_id)
    {
        $category_array = DB::table('products')
                            ->join('categories','products.category_id','=','categories.id')
                            ->join('myusers','products.myuser_id','=','myusers.id') 
                            ->where('myusers.id',$seller_user_id)
                            ->select('categories.id as sub_category_id') 
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
    
    protected function increase_buyAd_score(&$buyAd,$score)
    {
        $buyAd['score'] += $score;
    }
}