<?php

namespace App\Jobs\PhoneNumberAutoSend;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use Carbon\Carbon;
use App\Jobs\sendSMS;
use App\Models\myuser;

class SendNotificationForPhoneNumberAutoSending implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $seller_id;
    protected $buyer_id;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($item)
    {
        $this->seller_id = $item['seller_id'];
        $this->buyer_id = $item['buyer_id'];
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $last_activity_date = $this->get_user_last_activity_date($this->seller_id);

        $sent_phone_numbers_count_since_last_activity = DB::table('auto_sent_phone_numbers_meta_datas')
                                                                ->join('myusers','myusers.id','=','auto_sent_phone_numbers_meta_datas.sender_id')
                                                                ->where('sender_id',$this->seller_id)
                                                                ->whereBetween('auto_sent_phone_numbers_meta_datas.created_at',[$last_activity_date,Carbon::now()])
                                                                ->get()
                                                                ->count();

        $buyer_record = myuser::find($this->buyer_id);
        $seller_phone_number = myuser::find($this->seller_id)->phone;

        $data = [
            'buyername' => $buyer_record->first_name . ' ' . $buyer_record->last_name
        ];

        if($sent_phone_numbers_count_since_last_activity  <  4){
            sendSMS::dispatch($seller_phone_number, 37553,$data);
        }
        else{
            sendSMS::dispatch($seller_phone_number, 37551,$data);
        }
    }

    protected function get_user_last_activity_date($user_id)
    {
        $sending_message_records = DB::table('messages')
                                ->where('sender_id',$user_id)
                                ->whereNotExists(function($q) use($user_id){ //prevent duplication
                                    $q->select(DB::raw(1))
                                            ->from('auto_sent_phone_numbers_meta_datas as tmp')
                                            ->whereRaw("tmp.sender_id = $user_id")
                                            ->whereRaw('messages.receiver_id <> tmp.receiver_id');
                                })
                                ->select(DB::raw("distinct(created_at) as date"));

        $seen_message_records = DB::table('messages')->where('receiver_id',$user_id)
                                        ->where('is_read',true)
                                        ->select(DB::raw("distinct(updated_at) as date"));

        $profile_records = DB::table('profiles')->where('myuser_id',$user_id)
                                            ->select(DB::raw("distinct(created_at) as date"));

        $product_records = DB::table('products')->where('products.myuser_id',$user_id)
                                            ->select(DB::raw("distinct(updated_at) as date"));

        $user_record = DB::table('myusers')->where('id',$user_id)
                                            ->select(DB::raw("updated_at as date"));

        $last_activity_date = DB::table('buy_ads')->where('buy_ads.myuser_id',$user_id)
                                            ->select(DB::raw("distinct(updated_at) as date"))
                                            ->union($sending_message_records)
                                            ->union($profile_records)
                                            ->union($product_records)
                                            ->union($sending_message_records)
                                            ->union($user_record)
                                            ->orderBy('date','desc')
                                            ->get()
                                            ->first()
                                            ->date;


        return $last_activity_date;
    }
}
