<?php

namespace App\Jobs\Notifiers;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use App\Jobs\NotifySellersIfANewRelatedBuyAdRegistered;
use Carbon\Carbon;

class AdvertiseBuyAdsPeriodically implements ShouldQueue
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
        $buyAds = $this->get_unfulfilled_buyAds();

        $total_fulfilled_capacity = 0;
        foreach($buyAds as $buyAd)
        {
            if($total_fulfilled_capacity >= 200){
                break;
            }

            $total_fulfilled_capacity += $buyAd->remaining_capacity;
            
            NotifySellersIfANewRelatedBuyAdRegistered::dispatch($buyAd,$buyAd->remaining_capacity);
        }
    }

    protected function get_unfulfilled_buyAds()
    {
        $buyAds = DB::table('buy_ads')
                        ->where('confirmed',true)
                        ->whereBetween('updated_at',[Carbon::now()->subHours(12),Carbon::now()->subHours(4)])
                        ->where(function($q){
                            return $q = $q->where('buy_ads.reply_capacity','>',0)
                                            ->orWhere('buy_ads.phone_view_capacity','>',0);
                        })
                        ->selectRaw("buy_ads.* , (FLOOR((select count(distinct(m1.sender_id)) from messages as m1 where m1.is_read = true and m1.receiver_id = buy_ads.myuser_id and not exists(select * from messages where messages.receiver_id = buy_ads.myuser_id and m1.is_read = false ))/(select count(distinct(messages.sender_id)) from messages where messages.receiver_id = buy_ads.myuser_id) * 100 )) as response_rate")
                        ->get();

        $buyAds = $buyAds->filter(function($buyAd){
            return $buyAd->response_rate >= 75;
        });

        $buyAds = $buyAds->toArray();

        foreach($buyAds as $buyAd)
        {
            $buyAd->remaining_capacity = ($buyAd->reply_capacity > 0 ? $buyAd->reply_capacity : 0) + ($buyAd->phone_view_capacity > 0 ? $buyAd->phone_view_capacity :  0 ) ;
        }

        usort($buyAds,function($item1,$item2){
            $a = $item1->response_rate;
            $b = $item2->response_rate;

            if($a == $b){
                $c = $item1->remaining_capacity;
                $d = $item2->remaining_capacity;

                if($c == $d){
                    return ($item1->updated_at > $item2->updated_at) ? 1 : -1; // the older buyAd will have higher priority
                }

                return ($c > $d) ? 1 : -1; //the more remainied capacity, the higher proiority
            }

            return ($a < $b) ? 1 : -1;
        });

        return $buyAds;
    }
}
