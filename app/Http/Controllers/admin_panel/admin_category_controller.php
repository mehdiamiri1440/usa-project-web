<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class admin_category_controller extends Controller
{
    public function load_add_category_form()
    {
        return view('admin_panel.newCategoryAdding');
    }

    public function add_new_super_category(Request $request)
    {
         $this->validate($request,[
             'super_category_name' => 'required|string|unique:categories.category_name'
         ]);

         $category_name = strip_tags($request->super_category_name);

         DB::table('categories')
                ->insert([
                    'category_name' => $category_name,
                    'parent_id' => null
                ]);

        $this->update_category_cache();

        return redirect()->back();
    }

    public function add_new_category(Request $request)
    {
        $this->validate($request,[
            'category_name' => 'required|string|unique:categories.category_name',
            'parent_id' => 'required|integer|min:1|exists:categories.id'
        ]);
        

        $parent_record = categories::find($request->parent_id);

        if($parent_record){
            if(is_null($parent_record->parent_id)){
                $category_name = strip_tags($request->super_category_name);

                DB::table('categories')
                    ->insert([
                        'category_name' => $category_name,
                        'parent_id' => $request->parent_id
                    ]);

                $this->update_category_cache();
            }
        }

       return redirect()->back();
    }

    public function add_new_sub_category(Request $request)
    {
        $this->validate($request,[
            'sub_category_name' => 'required|string|unique:categories.category_name',
            'parent_id' => 'required|integer|min:1|exists:categories.id',
            'grant_parent_id' => 'required|integer|min:1|exists:categories.id'
        ]);
        
        $grant_parent_record = categories::find($request->grant_parent_id);

        if(! $grant_parent_record ){
            return redirect()->back();
        }

        if( ! is_null($grant_parent_record->parent_id)){
            return redirect()->back();
        }

        $parent_record = categories::find($request->parent_id);

        if($parent_record){
            if($parent_record->parent_id != $grant_parent_record->id){
                return redirect()->back();
            }

            
            $category_name = strip_tags($request->super_category_name);

            DB::table('categories')
                ->insert([
                    'category_name' => $category_name,
                    'parent_id' => $request->parent_id
                ]);

            $this->update_category_cache();
            
        }

       return redirect()->back();
    }

    protected function update_category_cache()
    {

    }
}
