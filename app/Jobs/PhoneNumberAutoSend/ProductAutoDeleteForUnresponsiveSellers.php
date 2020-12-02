<?php

namespace App\Jobs\PhoneNumberAutoSend;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Models\product;
use Carbon\Carbon;
use DB;

class ProductAutoDeleteForUnresponsiveSellers implements ShouldQueue
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
        $unresponding_sellers_ids = $this->get_unresponding_sellers_ids();

        $deleting_products = product::whereIn('myuser_id',$unresponding_sellers_ids)
                                        ->where('confirmed',true)
                                        ->get();

        $deleting_products->each(function($product){
            $product->delete();
        });
    }

    protected function get_unresponding_sellers_ids()
    {
        $sellers_ids = DB::table('auto_sent_phone_numbers_meta_datas')
                                ->whereBetween('created_at',[Carbon::yesterday(),Carbon::today()])
                                ->select('sender_id as seller_id')
                                ->distinct()
                                ->get()
                                ->values()
                                ->all();

        $seller_ids = [];
        foreach($sellers_ids as $item)
        {
            if($this->is_user_ignorant_and_unresponsive($item->seller_id))
            {
                $seller_ids[] = $item->seller_id;
            }
        }

        return array_unique($seller_ids);
    }

    protected function is_user_ignorant_and_unresponsive($user_id)
    {
        $last_activity_date = $this->get_user_last_activity_date($user_id);

        $seller_auto_sent_phone_numbers_records = DB::table('auto_sent_phone_numbers_meta_datas')
                                                    ->where('sender_id',$user_id)
                                                    ->whereBetween('created_at',[$last_activity_date,Carbon::today()])
                                                    ->orderyBy('created_at','desc')
                                                    ->get();

        if($seller_auto_sent_phone_numbers_records->count() >= 5){
            if(Carbon::now()->diffInDays($seller_auto_sent_phone_numbers_records->last()->created_at) >= 3){
                return true;
            }
        }

        return false;

    }

    protected function get_user_last_activity_date($user_id)
    {
        $sending_message_records = DB::table('messages')
                                ->where('sender_id',$user_id)
                                ->whereNotExists(function($q) use($user_id){ //prevent duplication
                                    $q->select(DB::raw(1))
                                            ->from('auto_sent_phone_numbers_meta_datas as tmp')
                                            ->whereRaw("tmp.sender_id = $user_id")
                                            ->whereRaw('messages.receiver_id <> tmp.receiver_id');
                                })
                                ->select(DB::raw("distinct(created_at) as date"));

        $seen_message_records = DB::table('messages')->where('receiver_id',$user_id)
                                        ->where('is_read',true)
                                        ->select(DB::raw("distinct(updated_at) as date"));

        $profile_records = DB::table('profiles')->where('myuser_id',$user_id)
                                            ->select(DB::raw("distinct(created_at) as date"));

        $product_records = DB::table('products')->where('products.myuser_id',$user_id)
                                            ->select(DB::raw("distinct(updated_at) as date"));

        $last_activity_date = DB::table('buy_ads')->where('buy_ads.myuser_id',$user_id)
                                            ->select(DB::raw("distinct(updated_at) as date"))
                                            ->union($sending_message_records)
                                            ->union($profile_records)
                                            ->union($product_records)
                                            ->union($sending_message_records)
                                            ->orderBy('date','desc')
                                            ->get()
                                            ->first()
                                            ->date;


        return $last_activity_date;
    }
}
