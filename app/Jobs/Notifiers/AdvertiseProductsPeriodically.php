<?php

namespace App\Jobs\Notifiers;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use App\Jobs\Notifiers\NotifyBuyersIfAnyNewRelatedProductRegistered;
use Carbon\Carbon;

class AdvertiseProductsPeriodically implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $days_since_product_register;
    protected $payed_users;
    public function __construct($days_since_product_register,$payed_users = false)
    {
        $this->payed_users = $payed_users;
        $this->days_since_product_register = $days_since_product_register;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if($this->payed_users == true){
            $this->do_payed_users_advertisement();
        }
        else{
            $this->do_free_users_advertisement($this->days_since_product_register);
        }
    }

    protected function do_payed_users_advertisement()
    {
        $products = DB::table('products')
                            ->join('myusers','myusers.id','=','products.myuser_id')
                            ->join('product_suggestions','product_suggestions.product_id','products.id')
                            ->where('products.confirmed',true)
                            ->where('products.is_elevated',false)
                            ->whereNull('products.deleted_at')
                            ->where('myusers.active_pakage_type','>',0)
                            ->whereNotExists(function($q){
                                $q->select(DB::raw(1))
                                    ->from('product_suggestions')
                                    ->whereRaw("product_suggestions.product_id = products.id")
                                    ->whereBetween('product_suggestions.created_at',[Carbon::now()->subDays(10),Carbon::now()]);
                            })
                            ->select(DB::raw("products.* , count(distinct(product_suggestions.id)) as cnt"))
                            ->distinct('products.id')
                            ->groupBy('products.id')
                            ->get()
                            ->toArray();

        usort($products,function($item1,$item2){
            $a = $item1->cnt;
            $b = $item2->cnt;

            if($a == $b){
                return ($item1->updated_at < $item2->updated_at) ? 1 : -1;
            }

            return ($a < $b) ? 1 : -1;
        });

        $products = array_slice($products,0,10);


        foreach($products as $product)
        {
            unset($product->cnt);

            NotifyBuyersIfAnyNewRelatedProductRegistered::dispatch($product);
        }

    }

    protected function do_free_users_advertisement($days_since_product_register)
    {
        $products = DB::table('products')
                            ->where('products.confirmed',true)
                            ->where('products.is_elevated',false)
                            ->whereNull('products.deleted_at')
                            ->whereBetween('products.updated_at',[Carbon::today()->subDays($days_since_product_register),Carbon::today()])
                            ->get();

        foreach($products as $product)
        {
            NotifyBuyersIfAnyNewRelatedProductRegistered::dispatch($product,false,5);
        }
    }
}
