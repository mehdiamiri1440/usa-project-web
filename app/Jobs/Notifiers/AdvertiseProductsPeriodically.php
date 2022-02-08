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
    public function __construct($payed_users = false)
    {
        $this->payed_users = $payed_users;
        // $this->days_since_product_register = $days_since_product_register;
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
                        ->where('products.confirmed',true)
                        ->where('products.is_elevated',false)
                        ->whereNull('products.deleted_at')
                        // ->where('last_login_client','mobile')
                        ->where(function($q){
                            return $q->where('myusers.active_pakage_type','>',0)
                                        ->orWhere('myusers.wallet_balance','>',0);
                        })
                        ->where('last_login_date','>',Carbon::now()->subDays(30))
                        ->whereNotExists(function($q){
                                    $q->select(DB::raw(1))
                                        ->from('product_suggestions')
                                        ->whereRaw("product_suggestions.product_id = products.id")
                                        ->whereBetween('product_suggestions.created_at',[Carbon::now()->subDays(7),Carbon::now()]);
                        })
                        ->select('products.*')
                        ->distinct('products.id')
                        ->orderBy('myusers.last_login_date','desc')
                        ->get()
                        ->toArray();

        $products = array_slice($products,0,10);


        foreach($products as $product)
        {
            NotifyBuyersIfAnyNewRelatedProductRegistered::dispatch($product,false,10);
        }

    }

    protected function do_free_users_advertisement($days_since_product_register)
    {
        $products = DB::table('products')
                        ->join('myusers','myusers.id','=','products.myuser_id')
                        ->where('products.confirmed',true)
                        ->where('products.is_elevated',false)
                        ->whereNull('products.deleted_at')
                        // ->where('last_login_client','mobile')
                        ->where('myusers.active_pakage_type',0)
                        ->where('myusers.wallet_balance',0)
                        ->where('last_login_date','>',Carbon::now()->subDays(3))
                        ->whereNotExists(function($q){
                                    $q->select(DB::raw(1))
                                        ->from('product_suggestions')
                                        ->whereRaw("product_suggestions.product_id = products.id")
                                        ->whereBetween('product_suggestions.created_at',[Carbon::now()->subDays(7),Carbon::now()]);
                        })
                        ->select('products.*')
                        ->orderBy('myusers.last_login_date','desc')
                        ->distinct('products.id')
                        ->get()
                        ->toArray();


        $products = array_slice($products,0,10);

        foreach($products as $product)
        {
            NotifyBuyersIfAnyNewRelatedProductRegistered::dispatch($product,false,5);
        }
    }
}
