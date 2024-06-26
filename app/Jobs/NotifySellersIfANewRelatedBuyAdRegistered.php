<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Models\buyAd;
use App\Http\Controllers\Notification\fcm_controller;
use App\Models\myuser;
use App\Models\product;
use App\Models\category;
use Carbon\Carbon;
use DB;
use App\Http\Controllers\MatchMaker\seller_finder_controller;

class NotifySellersIfANewRelatedBuyAdRegistered implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    protected $buyAd;
    protected $max_notified_sellers;
    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر',
    ];

    public function __construct($buyAd,$max_notified_sellers = 12)
    {
        $this->buyAd = $buyAd;
        $this->max_notified_sellers = $max_notified_sellers;
    }

    /**
     * Execute the job.
     */
    public function handle()
    {
        $seller_finder_controller_object = new seller_finder_controller($this->max_notified_sellers);
        $the_most_related_product_owners_ids = $seller_finder_controller_object->get_the_most_related_product_owners_id_to_the_given_buyAd_if_any($this->buyAd);
        $the_most_related_product_owners_ids = array_unique($the_most_related_product_owners_ids); 


        $now = Carbon::now();

        if (count($the_most_related_product_owners_ids) > 0) {
            $buyAd_suggestion_records = [];

            foreach ($the_most_related_product_owners_ids as $user_id) {
                
                $buyAd_suggestion_records[] = [
                    'created_at' => $now,
                    'updated_at' => $now,
                    'seller_id'  => $user_id,
                    'buy_ad_id'  => $this->buyAd->id,
                ];

                $this->notify_product_owner($user_id);
            }
            
            DB::table('buy_ad_suggestions')->insert($buyAd_suggestion_records);
        }

    }

    protected function get_the_most_related_product_owners_id_to_the_given_buyAd_if_any(&$buyAd)
    {
        $until_date = Carbon::now();
        $from_date = Carbon::now()->subDays(30); // last month

        $related_subcategory_products = product::where('category_id', $buyAd->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('updated_at', [$from_date, $until_date])
                                            ->where('myuser_id','<>'.$buyAd->myuser_id)
                                            ->orderBy('created_at')
                                            ->get();

        $premium_users_id = myuser::where('active_pakage_type','>',0)
                                ->select('id')
                                ->get();

        $premium_products = product::where('category_id',$buyAd->category_id)
                                            ->where('confirmed',true)
                                            ->whereIN('myuser_id',$premium_users_id)
                                            ->where('myuser_id','<>',$buyAd->myuser_id)
                                            ->orderBy('created_at')
                                            ->get();


        $related_subcategory_products = $related_subcategory_products->merge($premium_products)->unique();

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

        return array_unique($most_related_product_owners);
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
        $user_record = myuser::find($user_id);

        $this->notify_product_owner_via_sms($user_record->phone);
        // if($user_record->active_pakage_type > 0){
            // $this->notify_product_owner_via_sms($user_record->phone);
        // }
        // else{
        //     $this->notify_product_owner_via_sms($user_record->phone,$delayed = true);
        // }
        

        $this->notify_product_owner_via_app_notification($user_id);
        
        
    }

    protected function notify_product_owner_via_sms($user_phone,$delayed = false)
    {
        if($delayed){
            sendSMS::dispatch($user_phone, 51386)->delay(Carbon::now()->addHours(2))->onQueue('sms');
        }
        else{
            sendSMS::dispatch($user_phone, 51386)->onQueue('sms');
        }
        
    }

    protected function notify_product_owner_via_app_notification($user_id)
    {
        $fcm_controller_object = new fcm_controller();

        $data = [
            'title' => 'باسکول',
            'message' => 'یک خریدار جدید برای محصول شما پیدا شد. خریدار فقط تا چهار ساعت دیگر منتظر پاسخ شما می ماند ',
            'sound' => 'buskool_voice.mp3',
            'payload' => [
                'BTarget' => 'buyAdSuggestion'
            ]
        ];

        $topic_name = 'FCM'.$user_id;

        $fcm_controller_object->send_notification_to_the_given_topic($data, $topic_name);
    }

    protected function get_old_related_product_owners_id_to_the_given_buyAd_if_any(&$buyAd)
    {
        $until_date = Carbon::now()->subDays(15); // last 2 weeks;
        $from_date = Carbon::now()->subMonths(3); // last 3 months

        $related_subcategory_products = product::where('category_id', $buyAd->category_id)
                                            ->where('confirmed', true)
                                            ->whereBetween('created_at', [$from_date, $until_date])
                                            ->where('myuser_id','<>'.$buyAd->myuser_id)
                                            ->orderBy('created_at')
                                            ->get();

        if ($related_subcategory_products) {
            $the_most_related_product_owners = $this->get_the_most_related_product_owners_id_to_given_buyAd($buyAd, $related_subcategory_products);
        } else {
            $the_most_related_product_owners = [];
        }

        return $the_most_related_product_owners;
    }

    protected function generate_related_topics(&$users)
    {
        $topics = [];

        foreach($users as $user)
        {
            $topics[] = 'FCM' . $user->id;
        }

        return $topics;
    }

    
}
