<?php

namespace App\Http\Controllers\admin_panel\inspectors;

use App\Http\Controllers\Controller;
use App\farmer;
use App\farmer_product;
use App\farmer_media;
use App\Http\Library\date_convertor;

class admin_farmer_controller extends Controller
{
    public function get_farmer_list()
    {
        $farmers = farmer::all();
        
        return view('admin_panel.inspectors.farmerList',[
           'farmers' => $farmers 
        ]);
    }
    
    public function get_farmer_product_list($farmer_id)
    {
        $farmer_products = farmer_product::where('farmer_id',$farmer_id)
            ->get();
        
        $date_convertor_object = new date_convertor();
        
        $farmer_products->each(function($product) use($date_convertor_object){
            $product['start_date'] = $date_convertor_object->get_persian_date_with_month_name($product->date_from);
            $product['end_date'] = $date_convertor_object->get_persian_date_with_month_name($product->date_to);
        });
        
        $farmer = farmer::find($farmer_id);
        
        $farmer_media = farmer_media::where('farmer_id',$farmer_id)
            ->get();
        
        return view('admin_panel.inspectors.farmerProductList',[
           'products' => $farmer_products, 
           'farmer' => $farmer,
           'farmer_media' => $farmer_media,
        ]);
    }
}