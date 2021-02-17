<?php

namespace App\Http\Controllers\Messenger;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\channel_content;
use App\Models\myuser;
use DB;

class channel_controller extends Controller
{
    protected $channel_validation_rules = [
        'title' => 'required|string',
        'text' => 'required_without:media|string',
        'media' => 'required_without:text|image|mimes:jpeg,jpg,png|max:2000',
        'is_for_seller' => 'boolean',
        'is_for_buyer' => 'boolean',
        'sub_category_id' => 'exists:categories,id',
        'is_for_verified' => 'boolean',
        'min_contacts_count' => 'integer:min:0',
        'active_package_type' => 'integer:min:0',
        'register_date_from' => 'date',
        'register_date_until' => 'date',
        'last_login_date_from' => 'date',
        'last_login_date_until' => 'date',
        'last_login_client' => 'string',
        'myuser_id' => 'exists:myusers,id',
        // 'product_id' => 'exists:products,id',
        'is_sharable' => 'boolean',
    ];

    protected $required_channel_content_fields = [
        'id',
        'text',
        'file_path',
        'is_sharable',
        'product_id',
        'created_at'
    ];

    protected $required_channel_content_fields_for_public_page = [
        'id',
        'text',
        'file_path',
        'is_sharable',
        'product_id',
        'created_at',
        'title'
    ];

    public function add_content(Request $request)
    {
        $this->validate($request,$this->channel_validation_rules);

        $channel_content_record = new channel_content();

        foreach($this->channel_validation_rules as $key => $rule)
        {
            if($request->filled($key) || $request->hasFile($key)){
                if($key == 'media'){
                    //store file
                    $file = $request->media;
                    $path = $file->store('channel');

                    $channel_content_record->file_path = $path;
                }
                else{
                    $channel_content_record->$key = $request->$key;
                }
            }
        }

        $channel_content_record->save();

        return response()->json($channel_content_record);
    }

    public function get_channel_contents()
    {
        $user_id = session('user_id');

        $user_record = myuser::find($user_id);

        if(! $user_record){
            return response()->json([
                'status' => false,
            ],404);
        }

        $sending_contacts_count = DB::table('messages')
                    ->select(DB::raw("count(distinct(receiver_id)) as cnt"))
                    ->where('sender_id',$user_record->id)
                    ->get()->first()->cnt;

        $receiving_contacts_count = DB::table('messages')
                        ->select(DB::raw("count(distinct(sender_id)) as cnt"))
                        ->where('receiver_id',$user_record->id)
                        ->get()->first()->cnt;

        $total_contacts_count = $sending_contacts_count + $receiving_contacts_count;

        $contents = DB::table('channel_contents')
                        ->where(function($q) use($user_record){
                            $q = $q->where('is_for_seller',$user_record->is_seller)
                                ->orWhereNull('is_for_seller');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('is_for_buyer',$user_record->is_buyer)
                                ->orWhereNull('is_for_buyer');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->whereIn('sub_category_id',function($query) use($user_record){

                                $query->select(DB::raw("distinct(category_id) as id"))
                                            ->from('products')
                                            ->where('myuser_id',$user_record->id);

                            })->orWhereNull('sub_category_id');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->whereIn('sub_category_id',function($query) use($user_record){

                                $query->select(DB::raw("distinct(category_id) as id"))
                                            ->from('buy_ads')
                                            ->where('myuser_id',$user_record->id);

                            })->orWhereNull('sub_category_id');

                            return $q;
                        })
                        ->where(function($q) use($user_record){
                            $q = $q->where('is_for_verified',$user_record->is_verified)
                                ->orWhereNull('is_for_verified');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('active_package_type',$user_record->active_pakage_type)
                                ->orWhereNull('active_package_type');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('last_login_client',$user_record->last_login_client)
                                ->orWhereNull('last_login_client');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('myuser_id',$user_record->id)
                                ->orWhereNull('myuser_id');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('register_date_from','<=',$user_record->created_at)
                                ->orWhereNull('register_date_from');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('register_date_until','>=',$user_record->created_at)
                                ->orWhereNull('register_date_until');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('last_login_date_from','<=',$user_record->created_at)
                                ->orWhereNull('last_login_date_from');

                            return $q;
                        })->where(function($q) use($user_record){
                            $q = $q->where('last_login_date_until','>=',$user_record->created_at)
                                ->orWhereNull('last_login_date_until');

                            return $q;
                        })->where(function($q) use($total_contacts_count){
                            $q = $q->where('min_contacts_count','<=',$total_contacts_count)
                                ->orWhereNull('min_contacts_count');

                            return $q;
                        })
                        ->whereNull('deleted_at')
                        ->select($this->required_channel_content_fields)
                        ->orderBy('created_at','asc')
                        ->paginate(10);

        $contents = $contents->getCollection();
        $contents->each(function($content){
            if($content->product_id){
                $content->is_product = true;

                $product = DB::table('products')
                                ->join('categories','categories.id','=','products.category_id')
                                ->join('product_media','products.id','=','product_media.product_id')
                                ->where('products.id',$content->product_id)
                                ->select('categories.category_name','product_name','stock','file_path')
                                ->first();

                $content->text = $product->category_name . ' | ' .$product->product_name . "\n" . "موجودی :‌ " . $product->stock . ' کیلوگرم ';
                $content->file_path = $product->file_path;
            }
            else{
                $content->is_product = false;
                unset($content->product_id);
            }
        });

        return response()->json([
            'status' => true,
            'contents' => $contents
        ],200);
        
    }

    public function delete_channel_content(Request $request)
    {
        $this->validate($request,[
            'content_id' => 'required|exists:channel_contents,id'
        ]);

        $content = channel_content::find($request->content_id)->delete();

        return response()->json([
            'status' => true,
            'msg' => 'content deleted!'
        ]);
    }

    public function get_all_channel_contents()
    {
        $contents = DB::table('channel_contents')
                            ->orderBy('created_at','desc')
                            ->paginate(10);

        return view('',[
            'contents' => $contents
        ]);
    }
    
    public function submit_contents_to_channel()
    {
        return view('admin_panel.chanel-pages.chanel');
    }

    public function get_channel_content_by_id($slug)
    {
        $exploded_slug = explode('-',$slug);
        $id = $exploded_slug[count($exploded_slug) - 1];
        
        if(!is_numeric($id)){
            return abort(404);
        }

        $id = (integer) $id;

        $content = DB::table('channel_contents')
                        ->where('id',$id)
                        ->whereNull('deleted_at')
                        ->where('is_sharable',true)
                        ->whereNull('product_id')
                        ->whereNull('myuser_id')
                        ->select($this->required_channel_content_fields_for_public_page)
                        ->first();

        if($content){
            $real_slug = $this->slugify_url($slug,$content->id,$content->title);
            if($real_slug !== false){
                return redirect("public-channel/$real_slug",301);
            }
        }
        else{
            return abort(404);
        }

        return view('admin_panel.login',[
            'content' => $content
        ]);
    }

    protected function slugify_url($slug,$content_id,$title)
    {
        $real_slug = implode(explode(' ',$title),'-') . '-' . $content_id;
        
        if($real_slug != $slug)
        {
            return $real_slug;
        }

        else{
            return false;
        }
    }


}
