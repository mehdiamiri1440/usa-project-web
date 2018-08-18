<?php

namespace App\Http\Controllers\admin_panel;

use App\Http\Controllers\Controller;
use \Illuminate\Http\Response;
use App\profile;
use App\buyAd;
use App\product;

class admin_notify_controller extends Controller
{
    public function get_notification_if_any()
    {
        $new_profile_record_cnt = profile::where('confirmed',false)
                                ->get()
                                ->count();
        
        $new_buyAd_record_cnt = buyAd::where('confirmed',false)
                                    ->get()
                                    ->count();
        
        $new_sellAd_record_cnt = product::where('confirmed',false)
                                    ->get()
                                    ->count();
        
        if($new_profile_record_cnt > 0)
        {
            return response()->json([
               'title' => 'پروفایل',
               'msg' =>  $new_profile_record_cnt . ' پروفایل جدید در انتظار تایید ',
               'notify' => true,
            ]);
        }
        else if($new_buyAd_record_cnt > 0)
        {
            return response()->json([
               'title' => 'آگهی خرید',
               'msg' =>  $new_buyAd_record_cnt . ' آگهی خرید جدید در انتظار تایید ',
               'notify' => true,
            ]);
        }
        else if($new_sellAd_record_cnt > 0)
        {
            return response()->json([
               'title' => 'آگهی فروش',
               'msg' =>  $new_sellAd_record_cnt . ' آگهی فروش جدید در انتظار تایید ',
               'notify' => true,
            ]);
        }
        else{
            return response()->json([
                'notify' => false,
            ]);
        }
    }
}