<?php

namespace App\Http\Controllers;
    
use App\myuser;
use App\Http\Controllers\product_controller;

class sitemap_controller extends Controller
{
    public function get_required_data_for_sitemap(){
        
        $product_controller_object = new product_controller();
        $user_names = myuser::select('user_name')
                            ->get();
        
        $products = $product_controller_object->get_all_products_url_for_sitemap();
        
        return response()->view('other.sitemap',[
            'user_names' => $user_names,
            'products'   => $products
        ])->header('Content-Type','text/xml');
    }
}