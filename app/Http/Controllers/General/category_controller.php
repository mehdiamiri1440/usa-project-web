<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\category;
use Illuminate\Support\Facades\Cache;
use DB;

class category_controller extends Controller
{
    public function get_all_categories(Request $request)
    {
        $categories = null;
        $parent_id = $request->parent_id;
        $casade_list = $request->cascade_list;

        $all_categories = Cache::remember(md5('categories'),1,function(){
            return DB::table('categories')
                        ->leftJoin('products','products.category_id','=','categories.id')
                        ->select('categories.*',DB::raw('count(products.id) as score'))
                        ->groupBy('categories.id','categories.created_at','categories.updated_at','categories.category_name','categories.parent_id')
                        ->orderByRaw('score desc, categories.id')
                        ->get();
        });

        if ( ! $request->has('parent_id')) {
            $categories = $all_categories->filter(function($category){
                return $category->parent_id == null;
            });
            // $categories = category::where('parent_id', null)
            //     ->get();

            if ($request->has('cascade_list') && $casade_list == true) {
                $categories->each(function ($item) use($all_categories){
                    // $item['subcategories'] = category::where('parent_id', $item->id)
                    //     ->get();
                    $other = null;
                    $item->subcategories = $all_categories->filter(function($category) use($item,&$other){
                        if($category->parent_id == $item->id && $category->category_name == 'سایر'){
                            $other = $category;
                            return false;
                        }

                        return $category->parent_id == $item->id;
                    });

                    $item->subcategories->each(function($item) use($all_categories){
                        $other = null;
                        $item->subcategories = $all_categories->filter(function($category) use($item,&$other){
                            if($category->parent_id == $item->id && $category->category_name == 'سایر'){
                                $other = $category;
                                return false;
                            }

                            return $category->parent_id == $item->id;
                        });
                    });
                    

                    if(! is_null($other)){
                        ($item->subcategories)[] = $other;
                    }

                    // $item->subcategories = collect($item->subcategories);
                });
            }
        } 
        else {
            if ($request->has('cascade_list') && $casade_list == true) {
                $categories = [];

                // $categories['category'] = category::find($parent_id);
                $categories->category = $all_categories->filter(function($category){
                    return $category->parent_id == null;
                });

                // $categories['subcategories'] = category::where('parent_id', $parent_id)
                //     ->get();
                
                $other = null;
                $categories->subcategories = $all_categories->filter(function($category) use($parent_id,&$other){
                    if($category->parent_id == $parent_id && $category->category_name == 'سایر'){
                        $other = $category;
                        return false;
                    }
                    return $category->parent_id == $parent_id;
                });

                    if(! is_null($other))
                    {
                        ($categories->subcategories)[] = $other;
                    }
            } else {
                            // $categories = category::where('parent_id', $parent_id)
                            //     ->get();
                            $other = null;
                            $categories = $all_categories->filter(function($category) use($parent_id,&$other){
                                if($category->parent_id == $parent_id && $category->category_name == 'سایر'){
                                    $other = $category;
                                    return false;
                                }

                                return $category->parent_id == $parent_id;
                            });

                            if(! is_null($other)){
                                $categories[] = $other;
                            }
                        }
                    }

                    return response()->json([
                        'status' => true,
                        'categories' => array_values($categories->toArray()),
                    ], 200);
    }


    public function get_related_category_names(Request $request)
    {
        $this->validate($request,[
            'category_id' => 'required|exists:categories,id',
            'category_name' => 'required|string'
        ]);

        $category_id = $request->category_id;
        $category_name = $request->category_name;

        $category_names = $this->get_related_category_names_array($category_id,$category_name);

        return response()->json([
            'status' => true,
            'category_names' => $category_names
        ]);
    }

    public function get_related_category_names_array($category_id,$category_name)
    {
        $related_category_names = DB::table('tags')
                            ->where('category_id',$category_id)
                            ->where('header','<>',$category_name)
                            ->pluck('header')
                            ->toArray();

        $related_category_names = array_filter($related_category_names,function($item){
            return $item == strip_tags($item);
        });

        return array_unique($related_category_names);
    }

    public function get_all_extra_category_names()
    {
        $category_names = DB::table('tags')
                                ->whereNotExists(function($q){
                                    $q->select(DB::raw(1))
                                        ->from('categories')
                                        ->where('categories.category_name','tags.header');
                                })->pluck('header')
                                ->toArray();

        $category_names = array_filter($category_names,function($item){
            return $item == strip_tags($item);
        });

        return array_unique($category_names);
    }
}

    

