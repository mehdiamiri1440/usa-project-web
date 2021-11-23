<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use DB;


class admin_seo_controller extends Controller
{
    public function edit_meta_content_to_a_category(Request $request)
    {
        $this->validate($request,[
            'header' => 'required|string|max:250',
            'content' => 'required|string',
            'schema' => 'nullable|string',
            'meta_data_id' => 'required|integer|exists:tags,id',
            'category_id' => 'required|integer|exists:categories,id'
            // 'password' => 'required',
        ]);

        $schema = $request->schema == null ? NULL : $request->schema;

        $now = Carbon::now();
        $meta_data_record = [
            'updated_at' => $now,
            'header' => $request->header,
            'content' => $request->content,
            'schema_object' => $schema,
            'category_id' => $request->category_id
        ];

        DB::table('tags')
                ->where('id',$request->meta_data_id)
                ->update($meta_data_record);

        return redirect()->route('admin_panel_load_meta_contents_list');
    }

    public function add_meta_content_to_a_category(Request $request)
    {
        $this->validate($request,[
            'header' => 'required|string|max:250',
            'content' => 'required|string',
            'schema' => 'nullable|string',
            'category_id' => 'required|integer|exists:categories,id'
            // 'password' => 'required',
        ]);

        $schema = $request->schema == null ? NULL : $request->schema;

        $now = Carbon::now();
        $meta_data_record = [
            'updated_at' => $now,
            'created_at' => $now,
            'header' => $request->header,
            'content' => $request->content,
            'schema_object' => $schema,
            'category_id' => $request->category_id,
            'is_visible' => false
        ];

        DB::table('tags')->insert($meta_data_record);

        return redirect()->route('admin_panel_load_meta_contents_list');
    }

    public function load_meta_contents_list(Request $request)
    {
        $query = DB::table('tags')
            ->orderBy('updated_at','desc');

        if($request->filled('search')){
            $text = strip_tags($request->search);

            $query = $query->where('header','like',"%$text%");
        }

        $meta_records = $query->paginate(10);

        return view('admin_panel.categoryMetaDataList',[
            'meta_records' => $meta_records
        ]);
    }

    public function load_meta_content_details($id)
    {
        $record = DB::table('tags')->where('id',$id)->first();

        return view('admin_panel.categoryMetaDataDetail',[
            'data' => $record
        ]);
    }

    public function make_category_meta_content_visible($id)
    {
        DB::table('tags')->where('id',$id)
                        ->update([
                            'is_visible' => true
                        ]);

        return redirect()->route('admin_panel_load_meta_contents_list');
    }

    public function make_category_meta_content_invisible($id)
    {
        DB::table('tags')->where('id',$id)
                        ->update([
                            'is_visible' => false
                        ]);

        return redirect()->route('admin_panel_load_meta_contents_list');
    }

    public function load_add_new_category_meta_form()
    {
        return view('admin_panel.addNewCategoryMetaData');
    }
}
