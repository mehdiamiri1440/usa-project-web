<?php

namespace App\Jobs\Channel;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use App\Models\channel_content;
use Carbon\Carbon;
use App\Models\category;
use App\Models\product_media;

class PushPoroductIntoPublicChannel implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $product = DB::table('products')
                            ->join('myusers','myusers.id','=','products.myuser_id')
                            ->leftJoin('channel_contents','channel_contents.product_id','=','products.id')
                            ->where('products.confirmed',true)
                            ->whereNull('products.deleted_at')
                            ->where('myusers.active_pakage_type','>=',3)
                            ->select(DB::raw("products.id,products.product_name,products.stock,products.category_id,count(channel_contents.id) as cnt"))
                            ->groupBy('products.id')
                            ->orderByRaw('cnt , products.created_at desc')
                            ->first();

        $category_name = category::find($product->category_id)->category_name;
        $file_path = product_media::where('product_id',$product->id)->first()->file_path;

        $now = Carbon::now();
        $channel_content_array = [
            'created_at' => $now,
            'updated_at' => $now,
            'sub_category_id' => $product->category_id,
            'title' =>  $product->product_name,
            'text' => $category_name . ' | ' .$product->product_name . "\n" . "موجودی :‌ " . $product->stock . ' کیلوگرم ',
            'file_path' => $file_path,
            'is_for_buyer' => true,
            'is_for_seller' => false,
            'is_sharable' => false,
            'product_id' => $product->id,
            'min_contacts_count' => 10,
        ];

        DB::table('channel_contents')->insert($channel_content_array);
        
    }
}
