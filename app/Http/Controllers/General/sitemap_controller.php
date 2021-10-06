<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use App\Models\myuser;
use App\Http\Controllers\Product\product_controller;
use App\Models\category;
use DB;
use App\Http\Controllers\General\category_controller;

class sitemap_controller extends Controller
{
    public function get_required_data_for_sitemap(){
        
        $product_controller_object = new product_controller();
        // $user_names = myuser::select('user_name')
        //                     ->get();

        $category_names = DB::table('categories')
                                        ->whereNotNull('parent_id')
                                        ->whereNotExists(function($q){
                                            $q->select(DB::raw(1))
                                                ->from('categories as c')
                                                ->whereRaw('c.parent_id = categories.id');
                                        })
                                        ->pluck('category_name')
                                        // ->get()
                                        ->toArray();

        // $category_names = array_column($category_names,'category_name');
        $category_controller_object = new category_controller();

        $extra_categories = $category_controller_object->get_all_extra_category_names();

        $category_names = array_merge($category_names,$extra_categories);

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