<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\buyAd;
use App\Http\Controllers\fcm_controller;
use App\myuser;
use App\product;
use App\category;
use Carbon\Carbon;

class NotifySellersIfANewRelatedBuyAdRegistered implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $buyAd;
    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر',
    ];

    public function __construct(buyAd $buyAd)
    {
        $this->buyAd = $buyAd;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $the_most_related_product_owners_ids = $this->get_the_most_related_product_owners_id_to_the_given_buyAd_if_any($this->buyAd);

        if (count($the_most_related_product_owners_ids) > 0) {
            foreach ($the_most_related_product_owners_ids as $user_id) {
                $this->notify_product_owner($user_id);
            }
        }
    }

    protected function get_the_most_related_product_owners_id_to_the_given_buyAd_if_any(&$buyAd)
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(14); // last 2 weeks

        $related_subcategory_products = product::where('category_id', $buyAd->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('created_at', [$from_date, $until_date])
                                            ->orderBy('created_at')
                                            ->get();

        if ($related_subcategory_products) {
            $the_most_related_product_owners = $this->get_the_most_related_product_owners_id_to_given_buyAd($buyAd, $related_subcategory_products);
        } else {
            $the_most_related_product_owners = [];
        }

        return $the_most_related_product_owners;
    }

    protected function get_the_most_related_product_owners_id_to_given_buyAd(&$buyAd, &$products)
    {
        $most_related_product_owners = [];
        // $max_mached_score = 0;

        $buyAd_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $buyAd->name)))); //PHP is for professionals,not for kids

        $category_info = $this->get_category_and_subcategory_name($buyAd->category_id);

        if (count($buyAd_name_array)) {
            if ($buyAd_name_array[0] == $category_info['subcategory_name']) {
                array_splice($buyAd_name_array, 0, 1);
            }
        }

        $buyAd_name_array_count = count($buyAd_name_array);

        foreach ($products as $product) {
            // $score = 0;

            $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name))));

            $product_name_array = $this->remove_black_list_words($product_name_array);

            foreach ($product_name_array as $word) {
                $index = array_search($word, $buyAd_name_array); //$index will be false if the array doesn't contain the word
                if ($index !== false) {//warning:don't change it to !=
                    $most_related_product_owners[] = $product->myuser_id;
                    // $score += $this->factorial($buyAd_name_array_count - $index);
                }
            }
        }

        return $most_related_product_owners;
    }

    protected function get_category_and_subcategory_name($subcategory_id)
    {
        $subcategory_record = category::where('id', $subcategory_id)
            ->select('category_name', 'parent_id')
            ->get()
            ->first();

        $category_record = category::where('id', $subcategory_record->parent_id)
            ->select('category_name')
            ->get()
            ->first();

        return [
            'category_name' => $category_record->category_name,
            'subcategory_name' => $subcategory_record->category_name,
        ];
    }

    protected function remove_black_list_words(&$words)
    {
        $result = [];

        foreach ($words as $word) {
            $index = array_search($word, $this->words_blacklist);
            if ($index === false) {
                $result[] = $word;
            }
        }

        return $result;
    }

    protected function notify_product_owner($user_id)
    {
        $user_phone = myuser::find($user_id)->phone;

        $this->notify_product_owner_via_sms($user_phone);

        $this->notify_product_owner_via_app_notification($user_id);
    }

    protected function notify_product_owner_via_sms($user_phone)
    {
        sendSMS::dispatch($user_phone, 19608)->onQueue('sms');
    }

    protected function notify_product_owner_via_app_notification($user_id)
    {
        $fcm_controller_object = new fcm_controller();

        $data = [
            'title' => 'اینکوباک',
            'message' => 'یک درخواست خرید مرتبط با محصول شما ثبت شد',
        ];

        $topic_name = 'FCM'.$user_id;

        $fcm_controller_object->send_notification_to_the_given_topic($data, $topic_name);
    }
}