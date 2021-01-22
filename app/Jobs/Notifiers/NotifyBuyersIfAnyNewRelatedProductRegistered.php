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
use App\Models\product_suggestion;
use App\Http\Controllers\Notification\fcm_controller;
use App\Jobs\sendSMS;

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

        $subcategory_record = category::where('id', $this->product->category_id)
            ->select('category_name')
            ->get()
            ->first();

        $data = [
            'title' => 'باسکول',
            'message' => "یک فروشنده جدید {$subcategory_record->category_name} {$this->product->product_name} برای شما پیدا کردیم",
            'payload' => [
                'BTarget' => 'productList',
                'productId' => $this->product->id,
            ],
        ];

        // $fcm_object = new fcm_controller();

        // $fcm_object->send_notification_to_given_topic_group($data,$topics);

        //send SMS notification to buyers
        $this->send_sms_to_buyers($subcategory_record->category_name,$this->product->product_name,$the_most_related_buyAd_owners_ids);
    }

    protected function get_the_most_related_buyAd_owners_id_to_the_given_product_if_any(&$product)
    {
        $until = Carbon::now()->subMonth(1);
        $from = Carbon::now()->subMonths(6); // last 6 months

        $product_name_array = $this->get_product_name_array($product);

        $old_buyAds = DB::table('buy_ads')
                            ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                            ->where('buy_ads.myuser_id','<>',$product->myuser_id)
                            ->where('buy_ads.category_id',$product->category_id)
                            ->whereNull('buy_ads.deleted_at')
                            ->where('myusers.is_buyer',true)
                            ->whereBetween('buy_ads.updated_at',[$from,$until])
                            ->where('confirmed',true)
                            ->where(function($q) use($product_name_array){
                                foreach($product_name_array as $name){
                                    $q = $q->orWhere('name','like',"%$name%");
                                }

                                return $q;

                            })->whereNotExists(function($q){
                                $q->select(DB::raw(1))
                                    ->from('product_suggestions')
                                    ->whereRaw("product_suggestions.buyer_id = buy_ads.myuser_id")
                                    ->whereBetween('created_at',[Carbon::now()->subDays(3),Carbon::now()]);
                            })->orderBy('buy_ads.created_at','desc')
                            ->select('buy_ads.myuser_id as buyer_id')
                            ->distinct('buyer_id')
                            ->get();


        $new_buyAds = DB::table('buy_ads')
                            ->join('myusers','myusers.id','=','buy_ads.myuser_id')
                            ->where('buy_ads.myuser_id','<>',$product->myuser_id)
                            ->where('buy_ads.category_id',$product->category_id)
                            ->whereNull('buy_ads.deleted_at')
                            ->where('myusers.is_buyer',true)
                            ->whereBetween('buy_ads.updated_at',[$until,Carbon::now()])
                            ->where('confirmed',true)
                            ->where(function($q) use($product_name_array){
                                foreach($product_name_array as $name){
                                    $q = $q->orWhere('name','like',"%$name%");
                                }

                                return $q;

                            })->whereNotExists(function($q){
                                $q->select(DB::raw(1))
                                    ->from('product_suggestions')
                                    ->whereRaw("product_suggestions.buyer_id = buy_ads.myuser_id")
                                    ->whereBetween('created_at',[Carbon::now()->subDays(1),Carbon::now()]);
                            })->orderBy('buy_ads.created_at','desc')
                            ->select('buy_ads.myuser_id as buyer_id')
                            ->distinct('buyer_id')
                            ->get();

        //remove duplication in buyers
        $old_buyer_ids = array_map(function($item){
            return $item->buyer_id;
        },$old_buyAds->toArray());

        $new_buyer_ids = array_map(function($item){
            return $item->buyer_id;
        },$new_buyAds->toArray());

        $buyer_ids = array_unique(array_merge($old_buyer_ids,$new_buyer_ids));
        
        $buyer_ids = $this->filter_buyers_based_on_algorithm_detailes($buyer_ids);

        $product_suggestion_records = [];
        $now = Carbon::now();

        foreach($buyer_ids as $buyer_id)
        {
            $product_suggestion_records[] = [
                'buyer_id' => $buyer_id,
                'product_id' => $product->id,
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }
        
        //update product suggestions table
        DB::table('product_suggestions')
                ->insert($product_suggestion_records);

        return $buyer_ids;
    }

    protected function filter_buyers_based_on_algorithm_detailes(&$buyer_ids)
    {
        $tmp = product_suggestion::whereIn('buyer_id',$buyer_ids)
                                    ->select(DB::raw('MAX(created_at) as date,buyer_id as user_id'))
                                    ->groupBy('user_id')
                                    ->orderBy('date')
                                    ->get()
                                    ->values()
                                    ->toArray();

        $previous_notified_buyers = array_unique(array_column($tmp,'user_id'));

        $final_buyers = [];

        if(count($previous_notified_buyers) > 0){
            $filtered_buyers = array_filter($buyer_ids,function($buyer_id) use($previous_notified_buyers){
                return in_array($buyer_id,$previous_notified_buyers) === false;
            });

            if(count($filtered_buyers) < 10){
                $final_buyers = array_merge($filtered_buyers,array_slice($previous_notified_buyers,0, 10 - count($filtered_buyers) )  );
            }
            else{
                $final_buyers = array_slice($filtered_buyers,0,10);
            }
        }
        else{
            $final_buyers = array_slice($buyer_ids,0,10);
        }

        return $final_buyers;
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

    protected function get_product_name_array($product)
    {
        $product_name_array = array_filter(array_map('trim', explode(' ', str_replace('،', ' ', $product->product_name)))); //PHP is for professionals,not for kids
        
        $category_info = $this->get_category_and_subcategory_name($product->category_id);

        if (count($product_name_array)) {
            if ($product_name_array[0] == $category_info['subcategory_name']) {
                array_splice($product_name_array, 0, 1);
            }
        }

        $product_name_array = $this->remove_black_list_words($product_name_array);

        return $product_name_array;
    }

    protected function send_sms_to_buyers($category_name,$product_name,$buyer_ids)
    {
        $user_records = DB::table('myusers')
                            ->whereIn('id',$buyer_ids)
                            ->select('phone')
                            ->get();
        
        $data['productname'] = $product_name;

        foreach($user_records as $user)
        {
            sendSMS::dispatch($user->phone, 41522,$data);
        }  
    }
}
