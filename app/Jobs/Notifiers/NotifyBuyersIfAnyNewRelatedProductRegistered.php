<?php

namespace App\Jobs\Notifiers;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use Carbon\Carbon;
use App\Models\product;
use App\Models\buyAd;
use App\Models\category;

class NotifyBuyersIfAnyNewRelatedProductRegistered implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $product;
    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر',
    ];

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(product $product)
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
        $the_most_related_buyAd_owners_ids = $this->get_the_most_related_buyAd_owners_id_to_the_given_product_if_any($this->product);

        $topics = $this->generate_related_topics($the_most_related_buyAd_owners_ids);

        $data = [
            'title' => 'باسکول',
            'message' => "یک فروشنده جدید {$this->product->product_name} برای شما پیدا کردیم"
        ];

        $fcm_object = new fcm_controller();

        $fcm_object->send_notification_to_given_topic_group($data,$topics);
    }

    protected function get_the_most_related_buyAd_owners_id_to_the_given_product_if_any(&$product)
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(14); // last 2 weeks

        $related_subcategory_buyAds = buyAd::where('category_id', $product->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('created_at', [$from_date, $until_date])
                                            ->where('myuser_id','<>',$product->myuser_id)
                                            ->orderBy('created_at')
                                            ->get();

        if ($related_subcategory_buyAds) {
            $the_most_related_buyAd_owners = $this->get_the_most_related_buyAd_owners_id_to_given_product($product, $related_subcategory_buyAds);
        } else {
            $the_most_related_buyAd_owners = [];
        }

        return $the_most_related_buyAd_owners;
    }

    protected function get_the_most_related_buyAd_owners_id_to_given_product($product, $buyAds)
    {
        $most_related_buyAd_owners = [];
        // $max_mached_score = 0;

        $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name)))); //PHP is for professionals,not for kids :D

        $category_info = $this->get_category_and_subcategory_name($product->category_id);

        if (count($product_name_array)) {
            if ($product_name_array[0] == $category_info['subcategory_name']) {
                array_splice($product_name_array, 0, 1);
            }
        }

        $product_name_array_count = count($product_name_array);

        foreach ($buyAds as $buyAd) {
            // $score = 0;

            $buyAd_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $buyAd->name))));

            $buyAd_name_array = $this->remove_black_list_words($buyAd_name_array);

            foreach ($buyAd_name_array as $word) {
                $index = array_search($word, $product_name_array); //$index will be false if the array doesn't contain the word
                if ($index !== false) {//warning:don't change it to !=
                    $most_related_buyAd_owners[] = $buyAd->myuser_id;
                    // $score += $this->factorial($buyAd_name_array_count - $index);
                }
            }
        }

        return array_unique($most_related_buyAd_owners);
    }

    protected function generate_related_topics(&$users)
    {
        $topics = [];

        foreach($users as $user_id)
        {
            $topics[] = 'FCM' . $user_id;
        }

        return $topics;
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
}
