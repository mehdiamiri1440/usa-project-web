<?php

namespace App\Jobs\Notifiers;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use Carbon\Carbon;

class NotifyPriceUpdateForOldBuyers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $product;

    public function __construct($product)
    {
        $this->product = $product;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $seller_id = $this->product->myuser_id;
        $product_id = $this->product->id;

        $buyer_ids = $this->get_old_buyers_ids_from_seller_contact_list($seller_id,$product_id);

        $this->send_update_message_to_the_buyers($buyer_ids,$this->product);
    }

    protected function get_old_buyers_ids_from_seller_contact_list($seller_id,$product_id)
    {
        $from = Carbon::now()->subDays(7);
        $until = Carbon::now();

        $old_buyer_contacts_ids = DB::table('messages as m1')
                                        ->join('user_products','m1.sender_id','=','user_products.myuser_id')
                                        ->where('user_products.has_sent_msg',true)
                                        ->where('user_products.product_id',$product_id)
                                        ->where('m1.receiver_id',$seller_id)
                                        ->where('m1.is_read',true)
                                        ->whereNotExists(function($q) use($seller_id,$from,$until){
                                            $q->select(DB::raw(1))
                                                ->from('messages as m2')
                                                ->whereRaw("m1.sender_id = $seller_id and m2.receiver_id = m1.sender_id and m2.created_at between '" . $from . "' and '" . $until . "'");
                                        })
                                        ->whereNotExists(function($q){
                                            $q->select(DB::raw(1))
                                                ->from('messages as m3')
                                                ->whereRaw('m3.receiver_id = m1.sender_id and m3.is_read = false');
                                        })
                                        ->distinct()
                                        ->pluck('sender_id')
                                        ->toArray();

        return array_unique($old_buyer_contacts_ids);
    }

    protected function send_update_message_to_the_buyers($buyer_ids,$product)
    {   
        $text = $this->generate_price_update_message($product);

        $msgs = [];
        $now = Carbon::now();

        foreach($buyer_ids as $buyer_id)
        {
            $tmp = [
                'created_at' => $now,
                'updated_at' => $now,
                'text' => $text,
                'sender_id' => $product->myuser_id,
                'receiver_id' => $buyer_id,
                'is_read' => false
            ];

            $msgs[] = $tmp;
        }

        if(count($msgs) > 0){
            DB::table('messages')->insert($msgs);
        }
    }

    protected function generate_price_update_message($product)
    {
        $price = number_format($product->min_sale_price);

        $text = "سلام حدود قیمت جدید " . $product->product_name . " کیلویی " . $price . " تومان است در صورت تمایل به خرید این محصول از ما پیام بگذارید." . "\n\n";
        $text = $text . "تصاویر و جزییات محصول را با زدن روی لینک زیر ببینید." ."\n\n";
        $text = $text . "ارسال شده توسط دلسا (ربات خودکار باسکول ❤️ )" . "\n";
        $text = $text . ":p={$product->id}";

        return $text;
    }
}
