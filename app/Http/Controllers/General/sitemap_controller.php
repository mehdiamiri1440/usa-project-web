<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Models\myuser;
use App\Http\Controllers\Product\product_controller;
use App\Models\category;

class sitemap_controller extends Controller
{
    protected $extra_categories = [
        'برنج عنبربو',
        'برنج طارم',
        'برنج ایرانی',
        'برنج هاشمی',
        'برنج شمال',
        'پسته احمد آقایی',
        'پسته فندقی',
        'پسته کله قوچی',
        'پسته اکبری',
        'خرما ربی',
        'خرما مضافتی',
        'خرما کبکاب',
        'خرما زاهدی',
        'خرما خاصویی',
        'خرما پیارم',
        'خرما شاهانی',

    ];

    public function get_required_data_for_sitemap(){
        
        $product_controller_object = new product_controller();
        // $user_names = myuser::select('user_name')
        //                     ->get();

        $category_names = category::whereNotNull('parent_id')
                                        ->select('category_name')
                                        ->get()
                                        ->toArray();

        $category_names = array_column($category_names,'category_name');

        $category_names = array_merge($category_names,$this->extra_categories);

        $categories_result = [];
        foreach($category_names as $category_name){
            $categories_result[] = str_replace(" ","-",$category_name);
        }
        
        $products = $product_controller_object->get_all_products_url_for_sitemap();
        
        return response()->view('other.sitemap',[
            // 'user_names' => $user_names,
            'categories' => $categories_result,
            'products'   => $products
        ])->header('Content-Type','text/xml');
    }
}