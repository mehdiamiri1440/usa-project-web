<?php

namespace App\Http\Controllers\admin_panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Charts\general;
use App\Models\message;
use Carbon\Carbon;
use DB;
use App\Http\Library\date_convertor;
use App\Models\myuser;
use App\Models\product;
use App\Models\buyAd;
use App\Models\phone_number_view_log;

class admin_chart_controller extends Controller
{
    /////////////////////////////////

    public function chart_loader(Request $request)
    {    
        if($request->filled('start_date') && $request->filled('end_date')){
            $date_convertor_object = new date_convertor();
            
            $from_date = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->start_date);
            $until_date = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->end_date);

            session([
                'start_date' => $request->start_date,
                'end_date'  => $request->end_date
            ]);
        }
        else{
            if(session()->has('start_date') && session()->has('end_date')){
                $date_convertor_object = new date_convertor();
            
                $from_date = $date_convertor_object->get_georgian_date_from_standard_persian_date_string(session('start_date'));
                $until_date = $date_convertor_object->get_georgian_date_from_standard_persian_date_string(session('end_date'));
            }
            else{
                $until_date = Carbon::now();
                $from_date = Carbon::now()->subMonths(1);
            }
        }
        
        if($request->filled('user_type')){
            $user_type = $request->user_type;
            session(['myuser_type' => $user_type]);
        }
        else{
            session()->forget('myuser_type');
            $user_type = null;
        }

        if($request->has('retention_period')){
            $this->validate($request,[
                'retention_period' => 'integer|min:1|max:30'
            ]);

            $retention_period = $request->retention_period;
            session(['retention_period' => $retention_period]);
        }
        else{
            session()->forget('retention_period');
            $retention_period = 1;
        }
        
        $msg_senders_chart = $this->get_unique_message_senders_chart($from_date,$until_date,$user_type);
        $msg_receivers_chart = $this->get_unique_message_receivers_chart($from_date,$until_date,$user_type);
        
        $users_signup_chart = $this->get_signup_chart($from_date,$until_date,$user_type);
        
        $product_posting_chart = $this->get_product_posting_chart($from_date,$until_date);
        
        $buyAd_posting_chart = $this->get_buyAd_posting_chart($from_date,$until_date);
        
        $product_elevator_buying_chart = $this->get_product_elevator_buying_chart($from_date,$until_date);
        
        $package_buyers_chart = $this->get_package_buyers_chart($from_date,$until_date);
        $active_users_chart = $this->get_active_users_chart($from_date,$until_date,$user_type);
        $sellers_phone_number_viewers_chart = $this->get_phone_number_viewers_chart($from_date,$until_date);

        // $returning_users_chart = $this->get_returning_users_chart($from_date,$until_date,$user_type,$retention_period);

        return view('admin_panel.charts.test',[
            'UMSChart' => $msg_senders_chart,
            'UMRChart'=> $msg_receivers_chart,
            'signUpChart' => $users_signup_chart,
            'productPostingChart' => $product_posting_chart,
            'buyAdPostingChart' => $buyAd_posting_chart,
            'productElevatorChart' => $product_elevator_buying_chart,
            'activeUsersChart' => $active_users_chart,
            'sellersPhoneNumberViewersChart' => $sellers_phone_number_viewers_chart,
            // 'returningUsersChart' => $returning_users_chart
        // 'packageBuyersChart' => $package_buyers_chart
        ]);
    }
    
    
    protected function get_unique_message_senders_chart($from,$to,$user_type = null)
    {   
        if(is_null($user_type)){
            $unique_message_senders = message::whereBetween('created_at',[$from,$to])
                                        ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(distinct(sender_id)) as cnt'))
                                        ->groupBy('date')
                                        ->get();
        }
        else if($user_type == 'seller'){
            $unique_message_senders = DB::table('messages')
                            ->join('myusers','myusers.id','=','messages.sender_id')
                            ->where('myusers.is_seller',true)
                            ->whereBetween('messages.created_at',[$from, $to])
                            ->select(DB::raw('DATE(messages.created_at) as date'), DB::raw('count(distinct(sender_id)) as cnt'))
                            ->groupBy('date')
                            ->get();
        }
        else if($user_type == 'buyer'){
            $unique_message_senders = DB::table('messages')
                            ->join('myusers','myusers.id','=','messages.sender_id')
                            ->where('myusers.is_buyer',true)
                            ->whereBetween('messages.created_at',[$from, $to])
                            ->select(DB::raw('DATE(messages.created_at) as date'), DB::raw('count(distinct(sender_id)) as cnt'))
                            ->groupBy('date')
                            ->get();
        }
        
        
        $msg_senders_chart = new general();
        
        foreach($unique_message_senders as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $msg_senders_chart->title('نمودار ارسال کننده های پیام به تفکیک روز');
        $msg_senders_chart->labels($labels);
        $msg_senders_chart->dataset($user_type.' Uniqeue Message Senders', 'line', $values);
        
        
        return $msg_senders_chart;
    }
    
    protected function get_unique_message_receivers_chart($from,$to,$user_type = null)
    {
        if(is_null($user_type)){
             $unique_message_receivers = message::whereBetween('created_at',[$from,$to])
                                        ->select(DB::raw('DATE(created_at) as date'), DB::raw('count(distinct(receiver_id)) as cnt'))
                                        ->groupBy('date')
                                        ->get();
        }
        else if($user_type == 'seller'){
            $unique_message_receivers = DB::table('messages')
                            ->join('myusers','myusers.id','=','messages.receiver_id')
                            ->where('myusers.is_seller',true)
                            ->whereBetween('messages.created_at',[$from, $to])
                            ->select(DB::raw('DATE(messages.created_at) as date'), DB::raw('count(distinct(receiver_id)) as cnt'))
                            ->groupBy('date')
                            ->get();
        }
        else if($user_type == 'buyer'){
            $unique_message_receivers = DB::table('messages')
                            ->join('myusers','myusers.id','=','messages.receiver_id')
                            ->where('myusers.is_buyer',true)
                            ->whereBetween('messages.created_at',[$from, $to])
                            ->select(DB::raw('DATE(messages.created_at) as date'), DB::raw('count(distinct(receiver_id)) as cnt'))
                            ->groupBy('date')
                            ->get();
        }
       
        
        $msg_receivers_chart = new general();
        
        foreach($unique_message_receivers as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $msg_receivers_chart->title('نمودار دریافت کننده های پیام به تفکیک روز');
        $msg_receivers_chart->labels($labels);
        $msg_receivers_chart->dataset($user_type .' Uniqeue Message Receivers', 'line', $values)
                        ->color('red');
        
        
        return $msg_receivers_chart;
    }
    
    protected function get_signup_chart($from,$to,$user_type = null)
    {
        if(is_null($user_type)){
            $data = myuser::whereBetween('created_at',[$from, $to])
                                        ->select(DB::raw('DATE(created_at) as date'),
                                                 DB::raw('count(id) as cnt')
                                        )
                                        ->groupBy('date')
                                        ->get();
        }
        else if($user_type = 'seller'){
            $data = myuser::whereBetween('created_at',[$from, $to])
                                        ->where('is_seller',true)
                                        ->select(DB::raw('DATE(created_at) as date'),
                                                 DB::raw('count(id) as cnt')
                                        )
                                        ->groupBy('date')
                                        ->get();
        }
        else if($user_type = 'buyer'){
            $data = myuser::whereBetween('created_at',[$from, $to])
                                        ->where('is_buyer',true)
                                        ->select(DB::raw('DATE(created_at) as date'),
                                                 DB::raw('count(id) as cnt')
                                        )
                                        ->groupBy('date')
                                        ->get();
        }
        
        $users_chart = new general();
        
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $users_chart->title('نمودار ثبت نام کاربران به تفکیک روز');
        $users_chart->labels($labels);
        $users_chart->dataset($user_type . ' Users Signup', 'line', $values)
                        ->color('green');
        
        
        return $users_chart;
    }
    
    protected function get_product_posting_chart($from,$to)
    {
        $data = product::where('confirmed', true)
                                ->whereBetween('created_at',[$from, $to])
                                ->select(DB::raw('DATE(created_at) as date'),
                                                 DB::raw('count(id) as cnt')
                                )
                                ->groupBy('date')
                                ->get();
        
        $products_chart = new general();
        
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $products_chart->title('نمودار ثبت محصول به تفکیک روز');
        $products_chart->labels($labels);
        $products_chart->dataset('Product Posting', 'line', $values)
                        ->color('orange');
        
        
        return $products_chart;
        
    }
    
    protected function get_buyAd_posting_chart($from,$to)
    {
        $data = buyAd::where('confirmed', true)
                                ->whereBetween('created_at',[$from, $to])
                                ->select(DB::raw('DATE(created_at) as date'),
                                                 DB::raw('count(id) as cnt')
                                )
                                ->groupBy('date')
                                ->get();
        
        $buyAds_chart = new general();
        
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $buyAds_chart->title('نمودار ثبت درخواست خرید به تفکیک روز');
        $buyAds_chart->labels($labels);
        $buyAds_chart->dataset('buyAd Posting', 'line', $values)
                        ->color('blue');
        
        
        return $buyAds_chart;
    }
    
    protected function get_product_elevator_buying_chart($from,$to)
    {
        $data = product::where('confirmed', true)
                                ->whereBetween('created_at',[$from, $to])
                                ->where('is_elevated',true)
                                ->select(DB::raw('DATE(created_at) as date'),
                                                 DB::raw('count(id) as cnt')
                                )
                                ->groupBy('date')
                                ->get();
        
        $products_elevator_chart = new general();
        
        $labels = [];
        $values = [];
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $products_elevator_chart->title('نمودار تاریخ ثبت محصولاتی که نردبان خریده اند به تفکیک روز');
        $products_elevator_chart->labels($labels);
        $products_elevator_chart->dataset('Elevator Buying Count', 'line', $values)
                        ->color('pink');
        
        
        return $products_elevator_chart;
    }
    
    protected function get_package_buyers_chart($from,$to)
    {
        $data = myuser::whereBetween('pakage_start',[$from,$to])
                        ->select(DB::raw('DATE(pakage_start) as date'),
                                DB::raw('count(distinct(id)) as cnt')
                        )
                        ->groupBy('date')
                        ->get();
        
        $package_buyers_chart = new general();
        
        $labels = [];
        $values = [];
        
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $package_buyers_chart->title('نمودار تاریخ ثبت محصولاتی که نردبان خریده اند به تفکیک روز');
        $package_buyers_chart->labels($labels);
        $package_buyers_chart->dataset('Package Buyers','line', $values)
                        ->color('green');
        
        return $package_buyers_chart;
        
        
    }

    protected  function get_active_users_chart($from,$to,$user_type = null)
    {
        if(is_null($user_type)){
            $data = DB::select("SELECT date,COUNT(user_id) as cnt from (SELECT DISTINCT(myusers.id) as user_id,date(products.created_at) as date from myusers,products where myusers.id = products.myuser_id and products.confirmed = true  and products.created_at BETWEEN '" . $from ."' and "."'" .$to."' UNION SELECT DISTINCT(myusers.id) as user_id,date(buy_ads.created_at) as date from myusers,buy_ads where myusers.id = buy_ads.myuser_id and buy_ads.confirmed = true and  buy_ads.created_at BETWEEN '" .$from ."' and "."'".$to."' UNION SELECT DISTINCT(myusers.id) as user_id,date(messages.created_at) as date from myusers,messages where myusers.id = messages.sender_id and  messages.created_at BETWEEN '". $from. "' and "."'" . $to ." 'UNION SELECT DISTINCT(viewer_id) as user_id,date(created_at) as date from phone_number_view_logs where created_at BETWEEN '". $from. "' and "."'" . $to ."') as tmp group by date");
        }
        else if($user_type == 'seller'){
            $data = DB::select("SELECT date,COUNT(user_id) as cnt from (SELECT DISTINCT(myusers.id) as user_id,date(products.created_at) as date from myusers,products where myusers.id = products.myuser_id and products.confirmed = true  and products.created_at BETWEEN '" . $from ."' and "."'" .$to."' UNION SELECT DISTINCT(myusers.id) as user_id,date(messages.created_at) as date from myusers,messages where myusers.id = messages.sender_id  and myusers.is_seller = true and  messages.created_at BETWEEN '". $from. "' and "."'" . $to ."') as tmp group by date");
        }
        else if($user_type == 'buyer'){
            $data = DB::select("SELECT date,COUNT(user_id) as cnt from (SELECT DISTINCT(myusers.id) as user_id,date(buy_ads.created_at) as date from myusers,buy_ads where myusers.id = buy_ads.myuser_id and buy_ads.confirmed = true and  buy_ads.created_at BETWEEN '" .$from ."' and "."'".$to."' UNION SELECT DISTINCT(myusers.id) as user_id,date(messages.created_at) as date from myusers,messages where myusers.id = messages.sender_id and myusers.is_buyer = true and messages.created_at BETWEEN '". $from. "' and "."'" . $to ."') as tmp group by date");
        }
        
        $active_users_chart = new general();
        
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $active_users_chart->title('نمودار کاربران فعال به تفکیک روز');
        $active_users_chart->labels($labels);
        $active_users_chart->dataset($user_type . ' Active Users', 'line', $values)
                        ->color('green');
        
        
        return $active_users_chart;
    }

    // this functions usage commented out
    protected function get_returning_users_chart($from,$to,$user_type,$retention_period)
    {
        // print $retention_period;
        if(is_null($user_type)){
            $seller_data = DB::select("SELECT COUNT(DISTINCT(user_id)) as cnt,date from ((SELECT DISTINCT(m1.id) as user_id,date(p1.created_at) as date FROM myusers m1,buy_ads p1 where m1.id = p1.myuser_id and p1.confirmed = true and date(p1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,buy_ads p2 where m2.id = p2.myuser_id and p2.confirmed = true and date(p2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,'".$retention_period."',p1.created_at) < p2.created_at)) UNION (SELECT DISTINCT(m1.id) as user_id,date(msg1.created_at) as date FROM myusers m1,messages msg1 where m1.id = msg1.sender_id and m1.is_seller = true and date(msg1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,messages msg2 where m2.id = msg2.sender_id and date(msg2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,'".$retention_period."',msg1.created_at) < msg2.created_at))) tmp GROUP by date");
            $buyer_data  = DB::select("SELECT Count(DISTINCT(user_id)) as cnt,date from ((SELECT DISTINCT(m1.id) as user_id,date(p1.created_at) as date FROM myusers m1,buy_ads p1 where m1.id = p1.myuser_id and p1.confirmed = true and date(p1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,buy_ads p2 where m2.id = p2.myuser_id and p2.confirmed = true and date(p2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,'".$retention_period."',p1.created_at) < p2.created_at)) UNION (SELECT DISTINCT(m1.id) as user_id,date(msg1.created_at) as date FROM myusers m1,messages msg1 where m1.id = msg1.sender_id and m1.is_buyer = true and date(msg1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,messages msg2 where m2.id = msg2.sender_id and date(msg2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,'".$retention_period."',msg1.created_at) < msg2.created_at))) tmp GROUP by date");
            // $seller_data = DB::select("SELECT COUNT(DISTINCT(m1.id)) as cnt,date(msg1.created_at) as date FROM myusers m1,products p1,messages msg1 where m1.id = p1.myuser_id and m1.id = msg1.sender_id and p1.confirmed = true and date(p1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date(msg1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,products p2,messages msg2 where m2.id = p2.myuser_id and m2.id = msg2.sender_id and p2.confirmed = true and date(p2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date(msg2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date_add(p2.created_at,INTERVAL 8 HOUR) > p1.created_at and date_add(msg2.created_at,INTERVAL 8 HOUR) > msg1.created_at ) GROUP by date ");
            // $buyer_data  = DB::select("SELECT COUNT(DISTINCT(m1.id)) as cnt,date(msg1.created_at) as date FROM myusers m1,buy_ads p1,messages msg1 where m1.id = p1.myuser_id and m1.id = msg1.sender_id and p1.confirmed = true and date(m1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date(p1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date(msg1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,buy_ads p2,messages msg2 where m2.id = p2.myuser_id and m2.id = msg2.sender_id and p2.confirmed = true and date(m2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date(p2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date(msg2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and date_add(p2.created_at,INTERVAL 24 HOUR) > p1.created_at and date_add(msg2.created_at,INTERVAL 24 HOUR) > msg1.created_at ) group by date");
            $dates = [];
            foreach($seller_data as $item){
                $dates[] = $item->date;
            }
            foreach($buyer_data as $item){
                $dates[] = $item->date;
            }

            $dates = array_unique($dates);
            
            $data = [];
            foreach($dates as $date){
                $tmp = ['date' => $date , 'cnt' => 0];

                foreach($seller_data as $s_item){
                    if($s_item->date == $date){
                        $tmp['cnt'] += $s_item->cnt;
                    break;
                    }
                }

                foreach($buyer_data as $b_item){
                    if($b_item->date == $date){
                        $tmp['cnt'] += $b_item->cnt;
                    break;
                    }
                }

                $data[] = (object)$tmp;
            }
        }
        else if($user_type == 'seller'){
            $data = DB::select("SELECT COUNT(DISTINCT(user_id)) as cnt,date from ((SELECT DISTINCT(m1.id) as user_id,date(p1.created_at) as date FROM myusers m1,buy_ads p1 where m1.id = p1.myuser_id and p1.confirmed = true and date(p1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,buy_ads p2 where m2.id = p2.myuser_id and p2.confirmed = true and date(p2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,1,p1.created_at) < p2.created_at)) UNION (SELECT DISTINCT(m1.id) as user_id,date(msg1.created_at) as date FROM myusers m1,messages msg1 where m1.id = msg1.sender_id and m1.is_seller = true and date(msg1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,messages msg2 where m2.id = msg2.sender_id and date(msg2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,1,msg1.created_at) < msg2.created_at))) tmp GROUP by date");
        }
        else if($user_type == 'buyer'){
            $data = DB::select("SELECT Count(DISTINCT(user_id)) as cnt,date from ((SELECT DISTINCT(m1.id) as user_id,date(p1.created_at) as date FROM myusers m1,buy_ads p1 where m1.id = p1.myuser_id and p1.confirmed = true and date(p1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,buy_ads p2 where m2.id = p2.myuser_id and p2.confirmed = true and date(p2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,1,p1.created_at) < p2.created_at)) UNION (SELECT DISTINCT(m1.id) as user_id,date(msg1.created_at) as date FROM myusers m1,messages msg1 where m1.id = msg1.sender_id and m1.is_buyer = true and date(msg1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,messages msg2 where m2.id = msg2.sender_id and date(msg2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,1,msg1.created_at) < msg2.created_at))) tmp GROUP by date");
        }
        // $data = DB::select("SELECT Count(DISTINCT(user_id)) as cnt,date from ((SELECT DISTINCT(m1.id) as user_id,date(p1.created_at) as date FROM myusers m1,buy_ads p1 where m1.id = p1.myuser_id and p1.confirmed = true and date(p1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,buy_ads p2 where m2.id = p2.myuser_id and p2.confirmed = true and date(p2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,1,p1.created_at) < p2.created_at)) UNION (SELECT DISTINCT(m1.id) as user_id,date(msg1.created_at) as date FROM myusers m1,messages msg1 where m1.id = msg1.sender_id and m1.is_buyer = true and date(msg1.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and EXISTS ( SELECT * FROM myusers m2,messages msg2 where m2.id = msg2.sender_id and date(msg2.created_at) BETWEEN '" . $from ."' and "."'" .$to."' and TIMESTAMPADD(DAY,1,msg1.created_at) < msg2.created_at))) tmp GROUP by date");
        $returning_users_chart = new general();
        
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $returning_users_chart->title('نمودار کاربران بازگشتی به تفکیک روز');
        $returning_users_chart->labels($labels);
        $returning_users_chart->dataset($user_type . ' Returning Users', 'line', $values)
                        ->color('green');
        
        return $returning_users_chart;
    }

    protected function get_phone_number_viewers_chart($from,$to)
    {
        
        $data = phone_number_view_log::whereBetween('created_at',[$from,$to])
                            ->select(DB::raw('DATE(created_at) as date'),
                                                DB::raw('count(id) as cnt')
                            )
                            ->groupBy('date')
                            ->get();
        
        
        
        $phone_chart = new general();
        
        foreach($data as $item){
            $labels[] = $item->date;
            $values[] = $item->cnt;
        }
        
        $phone_chart->title('نمودار مشاهده شماره تماس فروشندگان');
        $phone_chart->labels($labels);
        $phone_chart->dataset('sellers phone number viewers', 'line', $values)
                        ->color('orange');
        
        return $phone_chart;
    }
}