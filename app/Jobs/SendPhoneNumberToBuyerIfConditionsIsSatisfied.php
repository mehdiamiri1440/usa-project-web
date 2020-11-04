<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use Carbon\Carbon;
use App\Models\myuser;
use App\Jobs\AutoSendPhoneNumber;

class SendPhoneNumberToBuyerIfConditionsIsSatisfied implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $max_daily_auto_sent_phone_numbers_to_buyer = 2;

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
        $array_of_arrays_for_phone_number_sending_from_sellers_to_buyers = $this->get_array_of_arrays_for_phone_number_sending_from_sellers_to_buyers();

        $filtered_items = array_filter($array_of_arrays_for_phone_number_sending_from_sellers_to_buyers,function($item){
            return $this->are_conditions_satisfied_for_phone_number_auto_sending($item);
        });
        
        $this->send_phone_number_from_sellers_to_associated_buyers($filtered_items);
    }

    protected function get_array_of_arrays_for_phone_number_sending_from_sellers_to_buyers()
    {
        $from_time = Carbon::now()->subMinutes(60); //last hour
        $to_time = Carbon::now();

        $data = DB::table('messages')
                        ->join('myusers','messages.sender_id','=','myusers.id')
                        ->where([
                            ['myusers.is_buyer','=',true],
                            ['messages.is_read','=',false],
                        ])->whereBetween('messages.created_at',[$from_time,$to_time])
                        ->whereNotExists(function($q) use($from_time,$to_time){
                            $q->select(DB::raw(1))
                                    ->from('messages as m2')
                                    ->whereRaw('messages.sender_id = m2.sender_id')
                                    ->whereRaw('messages.receiver_id = m2.receiver_id')
                                    ->where("m2.created_at", "<", $from_time);
                        })->whereNotExists(function($q){
                            $q->select(DB::raw(1))
                                    ->from('auto_sent_phone_numbers_meta_datas as tmp')
                                    ->whereRaw('messages.sender_id = tmp.receiver_id')
                                    ->whereRaw('messages.receiver_id = tmp.sender_id');
                        })->select("messages.sender_id as buyer_id","messages.receiver_id as seller_id")
                        ->get();

        $result = [];
        foreach($data as $item)
        {
            $result[] = [
                'buyer_id' => $item->buyer_id,
                'seller_id' => $item->seller_id
            ];
        }


        $result = array_unique($result,SORT_REGULAR);

        return $result;
    }

    protected function are_conditions_satisfied_for_phone_number_auto_sending($item)
    {
        $is_seller_qualified = $this->is_seller_have_required_response_rate($item['seller_id']);
        $is_buyer_allowed = $this->is_buyer_allowed_to_receive_phone_number($item['buyer_id']);

        return $is_buyer_allowed && $is_seller_qualified;
    }

    protected function is_buyer_allowed_to_receive_phone_number($buyer_id)
    {
        $today_auto_sent_phone_numbers_to_the_buyer = DB::table('auto_sent_phone_numbers_meta_datas')
                                                            ->where('receiver_id',$buyer_id)
                                                            ->whereBetween('created_at',[Carbon::today(),Carbon::tomorrow()])
                                                            ->get()
                                                            ->count();

        if($today_auto_sent_phone_numbers_to_the_buyer < $this->max_daily_auto_sent_phone_numbers_to_buyer){
            return true;
        }

        return false;
    }

    protected function is_seller_have_required_response_rate($seller_id)
    {
        $response_info = $this->get_user_response_info($seller_id);

        if($response_info['response_rate'] >= 70 || $response_info['response_rate'] == 0)
        {
            return true;
        }

        return false;
    }

    protected function send_phone_number_from_sellers_to_associated_buyers($items)
    {
        foreach($items as $item)
        {
            $seller_phone_number = $this->get_user_phone_number($item['seller_id']);

            if( ! is_null($seller_phone_number)){
                $msg = [
                    'sender_id' => $item['seller_id'],
                    'receiver_id' => $item['buyer_id'],
                    'text' => $seller_phone_number
                ];

                AutoSendPhoneNumber::dispatch($msg);
            }
            
        }
    }

    protected function get_user_response_info($user_id,$product_last_uptade_date = null,$viewer_response_time = 0)
    {
        $contacts = DB::table('messages')
                                    ->where('receiver_id',$user_id)
                                    ->select(DB::raw("DISTINCT(sender_id) as sender_id,sum(TIMESTAMPDIFF(SECOND,created_at,updated_at)) as delay"))
                                    ->whereBetween('created_at',[Carbon::now()->subMonths(3),Carbon::now()])
                                    ->groupBy('sender_id')
                                    ->get();
        
        $total_contacts_count = $contacts->count();
        if ($total_contacts_count == 0) {
            if(is_null($product_last_uptade_date)){
                return [
                    'response_rate' => 100,
                    'response_time' => 0,
                    'ums' => 0
                ];
            }
            else{
                return [
                    'response_rate' => 100,
                    'response_time' => pow(Carbon::now()->diffInDays($product_last_uptade_date),2),
                    'ums' => 0
                ];
            }
            
        }

        $seen_by_user_contacts_count = $contacts->filter(function($msg){
            return $msg->delay != 0;
        })->count();

        $response_rate = round(($seen_by_user_contacts_count / $total_contacts_count) * 100, 2);

        $total_delay = (integer) ($contacts->sum('delay')/3600); //converting to hours

        if($total_delay == 0){ // it means user have messages but did not read any of them
            $response_time = -1;
        }
        else{
            $response_time =  round($total_delay/$total_contacts_count);
        }

        $ums = $total_contacts_count;

        return compact('response_rate','response_time','ums'); // UMS stands for unique message senders to this user
    }

    protected function get_user_phone_number($user_id)
    {
        $phone = myuser::find($user_id)->phone;

        return $phone;
    }

}