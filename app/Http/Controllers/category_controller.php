<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\category;
use Illuminate\Support\Facades\Cache;
use DB;

class category_controller extends Controller
{
    public function get_all_categories(Request $request)
    {
        $categories = null;
        $parent_id = $request->parent_id;
        $casade_list = $request->cascade_list;

        $all_categories = Cache::remember(md5('categories'),24 * 60,function(){
            return DB::table('categories')->get();
        });

        if (!$request->has('parent_id')) {
            $categories = $all_categories->filter(function($category){
                return $category->parent_id == null;
            });
            // $categories = category::where('parent_id', null)
            //     ->get();

            if ($request->has('cascade_list') && $casade_list == true) {
                $categories->each(function ($item) use($all_categories){
                    // $item['subcategories'] = category::where('parent_id', $item->id)
                    //     ->get();
                    $item->subcategories = $all_categories->filter(function($category) use($item){
                        return $category->parent_id == $item->id;
                    });
                });
            }
        } else {
            if ($request->has('cascade_list') && $casade_list == true) {
                $categories = [];

                // $categories['category'] = category::find($parent_id);
                $categories->category = $all_categories->filter(function($category){
                    return $category->parent_id == null;
                });

                // $categories['subcategories'] = category::where('parent_id', $parent_id)
                //     ->get();
                $categories->subcategories = $all_categories->filter(function($category) use($parent_id){
                    return $category->parent_id == $parent_id;
                });
            } else {
                // $categories = category::where('parent_id', $parent_id)
                //     ->get();
                $categories = $all_categories->filter(function($category) use($parent_id){
                    return $category->parent_id == $parent_id;
                });
            }
        }

        return response()->json([
            'status' => true,
            'categories' => array_values($categories->toArray()),
        ], 200);
    }
}
