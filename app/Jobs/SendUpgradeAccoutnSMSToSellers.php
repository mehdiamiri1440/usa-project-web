<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Models\product;
use App\Models\myuser;
use App\Jobs\sendSMS;
use Carbon\Carbon;
use DB;

class SendUpgradeAccoutnSMSToSellers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $sellers_related_sms = [
        'first_day' => 51393,
        // 'third_day' => 10,
        'seventh_day' => 50873
    ];

    protected $product_stock_threshold = 10000;

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
        $potential_sellers_user_ids = $this->get_potential_sellers_user_id_list();

        foreach($this->sellers_related_sms as $key => $code)
        {
            $users_phone_numbers = $this->get_users_phone_numbers($potential_sellers_user_ids[$key]);

            $users_phone_numbers->each(function($user) use($code){
                sendSMS::dispatch($user->phone,$code)->onQueue('sms');
            });
        }
    }

    protected function get_potential_sellers_user_id_list()
    {
        $non_free_sellers = $this->get_non_free_sellers_user_id_list();

        $first_day_seller_ids = DB::table('products')
                                    ->where('confirmed',true)
                                    ->whereBetween('created_at',[Carbon::now()->subDays(20),Carbon::now()])
                                    ->whereNotIn('myuser_id',$non_free_sellers)
                                    // ->where('stock','>=',$this->product_stock_threshold)
                                    ->pluck('myuser_id');

        // $third_day_seller_ids = DB::table('myusers')
        //                             ->whereNotIn('myusers.id',$non_free_sellers)
        //                             ->whereBetween('created_at',[Carbon::now()->subDays(3),Carbon::now()->subDays(2)])
        //                             ->where('is_seller',true)
        //                             ->where('is_blocked',false)
        //                             ->whereExists(function($q){
        //                                 $q->select(DB::raw(1))
        //                                     ->from('products')
        //                                     ->whereRaw('myusers.id = products.myuser_id and products.confirmed = true');
        //                             })->whereExists(function($q){
        //                                 $q->select(DB::raw(1))
        //                                     ->from('messages')
        //                                     ->whereRaw('messages.receiver_id = myusers.id and messages.is_read = true');
        //                             })->select('myusers.id')
        //                             ->distinct()
        //                             ->get();


        $seventh_day_seller_ids = DB::table('myusers')
                                        ->whereNotIn('myusers.id',$non_free_sellers)
                                        ->whereBetween('created_at',[Carbon::now()->subDays(40),Carbon::now()->subDays(39)])
                                        ->where('is_seller',true)
                                        ->where('is_blocked',false)
                                        ->whereExists(function($q){
                                            $q->select(DB::raw(1))
                                                ->from('products')
                                                ->whereRaw('myusers.id = products.myuser_id and products.confirmed = true');
                                        })->whereExists(function($q){
                                            $q->select(DB::raw(1))
                                                ->from('messages')
                                                ->whereRaw('messages.receiver_id = myusers.id and messages.is_read = true');
                                        })->pluck('myusers.id');
                                        

        return [
            'first_day' => array_unique($first_day_seller_ids->toArray()),
            // 'third_day' => $third_day_seller_ids,
            'seventh_day' => array_unique($seventh_day_seller_ids->toArray())
        ];
    }

    protected function get_non_free_sellers_user_id_list()
    {
        $user_ids = myuser::where('active_pakage_type','<>',0)
                            // ->where('is_seller',true)
                            ->select('id')
                            ->get();

        return $user_ids;
    }

    protected function get_users_phone_numbers($user_ids)
    {
        $user_ids_array = $user_ids;
        
        $phone_numbers = myuser::whereIn('id',$user_ids_array)
                                ->select('phone')
                                ->distinct()
                                ->get();
        
        return $phone_numbers;
    }
}
