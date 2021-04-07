<?php

namespace App\Http\Controllers\MatchMaker;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use DB;

class send_buyAds_to_sellers extends Controller
{
    public function send_buyAd_to_sellers($buyAd_id,&$sellers_user_id)
    {
        $records_to_insert = [];

        $now = Carbon::now();

        foreach($sellers_user_id as $user_id)
        {
            $records_to_insert[] = [
                'created_at' => $now,
                'updated_at' => $now,
                'seller_id'  => $user_id,
                'buy_ad_id'  => $buyAd_id
            ];
        }

        DB::insert('buy_ad_suggestions',$records_to_insert);
    }

    public function get_unanswered_suggestions_for_the_buyAd($buyAd_id)
    {
        
    }

    
}
