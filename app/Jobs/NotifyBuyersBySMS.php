<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use App\product;
use App\Jobs\sendSMS;
use App\myuser;
use App\buyAd;
use Carbon\Carbon;
use DB;

class NotifyBuyersBySMS implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    
    protected $product;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($product_id)
    {
        $product_record = product::findOrFail($product_id);
        
        if($product_record){
            $this->product = $product_record;
        }
        else $this->product = null;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if($this->product != null){
            $matched_buyers_phone_number_array = $this->get_the_list_of_matched_buyers_for_the_product($this->product);
        
            $product_owner_user_name = $this->get_product_owner_user_name();
        
            $link = "www.incobac.com/profile/$product_owner_user_name";
        
            $msg_array = [
              'یک محصول مشابه محصول درخواستی شما یافت شد',
              'مشخصات محصول و فروشنده در لینک زیر',
              $link
            ];

            foreach($matched_buyers_phone_number_array  as $phone_number){
                 sendSMS::dispatch($msg_array, $phone_number)->onQueue('sms');
            }
        }
        
    }
    
    protected function get_product_owner_user_name()
    {
       $user_id = $this->product->myuser_id;
       return myuser::find($user_id)->user_name;
    }
    
    protected function get_the_list_of_matched_buyers_for_the_product($product)
    {
        $related_buyAds = $this->get_related_buyAds($product->category_id);
        
        $related_buyAds = $related_buyAds->filter(function($buyAd) use($product){
             if($buyAd->name != null && $product->name != null){
                 similar_text($buyAd->name,$product->name,$similarity_percentage);
                 
                 if($similarity_percentage > 70){
                     return true;
                 }
                 else return false;
             }
             else return true;
        });
        
        $related_buyers_phone_number = [];
        
        foreach($related_buyAds as $buyAd){
            $buyer_phone_number = myuser::where('id',$buyAd->myuser_id)
                                            ->first()->phone;
            
            if( ! in_array($buyer_phone_number,$related_buyers_phone_number)){
                $related_buyers_phone_number[] = $buyer_phone_number;
            }
        } 
        
        return $related_buyers_phone_number;
    }
    
    protected function get_related_buyAds($product_category_id)
    {
        $now = Carbon::now();
        $last_month = $now->subMonths(1);
            
        $related_buyAds = DB::table('buy_ads')
                                ->where('category_id',$product_category_id)
                                ->where('confirmed',true)
                                ->where('created_at','>',$last_month)
                                ->get();
        return $related_buyAds;
    }
}
