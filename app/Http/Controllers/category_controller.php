<?php

namespace App\Http\Controllers;
use \Illuminate\Http\Request;

use App\category;

class category_controller extends Controller
{
    public function get_all_categories(Request $request)
    {
        $categories = NULL ;
        $parent_id = $request->parent_id;
        $casade_list = $request->cascade_list;

        if(!$request->has('parent_id')){

            $categories = category::where('parent_id',NULL)
                ->get();

            if($request->has('cascade_list') && $casade_list == true){

                $categories->each(function($item){
                    $item['subcategories'] = category::where('parent_id',$item->id)
                        ->get();
                });
            }
        }
        else{
            if($request->has('cascade_list') && $casade_list == true){
                $categories = [];

                $categories['category'] = category::find($parent_id);

                $categories['subcategories'] = category::where('parent_id',$parent_id)
                    ->get();
            }
            else{
                $categories = category::where('parent_id',$parent_id)
                    ->get();
            }
        }

        return response()->json([
            'status' => TRUE,
            'categories' => $categories
        ],200);

    }


}

