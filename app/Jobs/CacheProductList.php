<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Http\Controllers\Product\product_list_controller;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;

class CacheProductList implements ShouldQueue
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
        $product_list_controller_object = new product_list_controller();
        echo 'start calculations at ' . Carbon::now() . "\n";
        $products = $product_list_controller_object->get_all_products_with_related_media();
        echo 'start writning on file at ' . Carbon::now() . "\n";
        Cache::put(md5('AllProducts'),$products,120);
        echo 'ended at ' . Carbon::now() . "\n";
    }
}
