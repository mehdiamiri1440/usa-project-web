<?php

namespace App\Jobs\AnomalyDetectors;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

use DB;
use Carbon\Carbon;
use App\Models\message;
use App\Jobs\sendSMS;

class MessagingAnomalyDetection implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $anomaly_detectors = [
        'detect_links_anomaly',
        'detect_length_anomaly',
        // 'detect_already_blocked_phone_numbers',
    ];
    protected $contacts_max = 10;

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
        $block_candidate_users = $this->get_block_candidate_user_ids();

        $block_candidate_user_ids = [];
        $admin_notes = [];
        $now = Carbon::now();

        foreach($block_candidate_users as $item)
        {
            $block_candidate_user_ids[] = $item['id'];

            $tmp = [
                'created_at' => $now,
                'updated_at' => $now,
                'note' => $item['reason'],
                'myuser_id' => $item['id']
            ];

            $admin_notes = $tmp;
        }

        $same_device_user_ids = $this->get_same_device_users($block_candidate_user_ids);


        foreach($same_device_user_ids as $user_id)
        {
            $tmp = [
                'created_at' => $now,
                'updated_at' => $now,
                'note' => 'مسدود شده به دلیل استفاده از دستگاه یکسان با کسی که قبلا مسدود شده.',
                'myuser_id' => $user_id
            ];

            $admin_notes[] = $tmp;
        }

        $final_block_candidate_user_ids = array_unique(array_merge($block_candidate_user_ids,$same_device_user_ids));

        DB::table('myusers')->whereIn('id',$final_block_candidate_user_ids)
                                ->update(['is_blocked' => true]);


        $admin_notes = array_unique($admin_notes,SORT_REGULAR);
        
        DB::table('admin_notes')->insert($admin_notes);

    }

    protected function get_abnormal_message_info()
    {
        $messages = DB::table('messages')
                        ->whereBetween('created_at',[Carbon::now()->subDays(30),Carbon::now()])
                        ->get();

        $abnormal_messages = [];
        foreach($this->anomaly_detectors as $method_name)
        {
            array_push($abnormal_messages,$this->$method_name($messages));
        }

        $abnormal_messages = array_unique($abnormal_messages);

        return $abnormal_messages;
    }

    protected function detect_links_anomaly(&$messages)
    {
        $users = [];
        $already_blocked_phone_numbers = DB::table('myusers')
            ->where('is_blocked',true)
            ->pluck('phone')
            ->toArray();

        foreach($messages as $msg)
        {
            $phones = null;
            preg_match_all('/((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))/u',$msg->text,$phones);

            if(count($phones) > 0)
            {
                foreach($phones[0] as $phone){
                    $phone = $this->convert_persian_numbers_to_latin_numbers($phone);
                    
                    if(in_array($phone,$already_blocked_phone_numbers)){
                        $tmp = [
                            'id' => $msg->sender_id,
                            'reason' => "ارسال شماره تماس $phone که قبلا مسدود شده است"
                        ];

                        $users[] = $tmp;

                        continue 2;
                    }
                }
            }

            preg_match_all('/[-A-Z0-9+&@#\/%=~_|$?!:,.]*[A-Z0-9+&@#\/%=~_|$]/i', $msg->text, $result, PREG_PATTERN_ORDER);
            foreach($result[0] as $possible_link)
            {
                if(stripos($possible_link,'.com') !== false || stripos($possible_link,'.ir') !== false || stripos($possible_link,'.market') !== false)
                {
                    if(stripos($possible_link,'buskool.com') !== false || stripos($possible_link,'@') !== false){
                        continue;
                    }

                    $tmp = [
                        'id' => $msg->sender_id,
                        'reason' => "ارسال لینک $possible_link در متن پیام."
                    ];

                    $users[] = $tmp;
                }
            }
        }

        return array_unique($users);
    }

    protected function detect_copy_paste(&$messages)
    {
        $msgs = [];
        $temp_msgs = $messages->toArray();

        usort($temp_msgs,function($msg1,$msg2) use(&$msgs){
            if(strcmp($msg1->text,$msg2->text) == 0){
                if( ! in_array($msg1,$msgs)){
                    $msgs[] = $msg1->id;
                }
            }
        });

        return $msgs;
    }

    protected function detect_length_anomaly(&$messages)
    {
        $from = Carbon::now()->subMinutes(20);
        $until = Carbon::now();

        $long_messages = DB::table('messages')
                                ->whereRaw("CHAR_LENGTH(text) >= 250 and created_at between '$from' and '$until'")
                                ->get();



        $users = [];
        foreach($long_messages as $msg)
        {
            if(stripos($msg->text,':p=') !== false || stripos($msg->text,':wlt=') !== false){
                continue;
            }

            $phone = null;
            $match_result = preg_match_all('/((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))/u',$msg->text,$phone);
            
            if($match_result != false){ // it's tricky. it means when function has failed or match count is zero, dont process the IF body
                $repeat_count = 0;

                foreach($long_messages as $tmp_msg){
                    if(strcmp($msg->text,$tmp_msg->text) == 0 && $msg->id != $tmp_msg->id && $msg->sender_id == $tmp_msg->sender_id){
                        $repeat_count++;
                        
                        if($repeat_count >= 3){
                            $tmp = [
                                'id' => $msg->sender_id,
                                'reason' => 'مسدود شده به دلیل ارسال پیام های تکراری بالای ۲۵۰ کاراکتر که شامل شماره تماس است.'
                            ];
                            
                            $users[] = $tmp;
                            break;
                        }   
                    }
                }
            }
        }

        return $users;
    }

    protected function get_block_candidate_user_ids()
    {
        $messages = DB::table('messages')
                        ->whereBetween('created_at',[Carbon::now()->subMinutes(20),Carbon::now()])
                        ->get();

        $abnormal_user_ids = [];
        foreach($this->anomaly_detectors as $method_name)
        {
            $tmp = $this->$method_name($messages);
        
            $abnormal_user_ids = array_merge($abnormal_user_ids,$tmp);
        }

        $abnormal_user_ids = array_unique($abnormal_user_ids,SORT_REGULAR);

        return $abnormal_user_ids;
    }

    protected function get_abnormal_user_ids()
    {
        $userIds = [];

        $messages = DB::table('messages')
                        ->whereBetween('created_at',[Carbon::now()->subDays(60),Carbon::now()])
                        ->get();

        $msg_senders = array_unique(array_column($messages->toArray(),'sender_id'));

        foreach($msg_senders as $user_id){
            $reciever_contacts_count = $this->get_receiver_contacts_count($user_id);
            
            if($reciever_contacts_count >= $this->contacts_max)
            {
                $userIds[] = $user_id;
            }
        }

        return $userIds;

    }

    protected function get_receiver_contacts_count($user_id)
    {
        $related_records = message::where('sender_id', $user_id)
                                // ->orWhere('receiver_id', $user_id)
                                ->whereBetween('created_at',[Carbon::now()->subDays(1),Carbon::now()])
                                ->select(DB::raw('MAX(created_at) as created_at,sender_id,receiver_id'))
                                ->distinct()
                                ->groupBy('created_at','sender_id','receiver_id')
                                ->orderBy('created_at','desc')
                                ->get();
                                
        $contact_id_array = [];

        $related_records->each(function ($record) use (&$contact_id_array,$user_id) {
            if ($record->sender_id != $user_id) {
                $contact_id_array[] = $record->sender_id;
            } else {
                $contact_id_array[] = $record->receiver_id;
            }
        });

        return count(array_unique($contact_id_array));
    }

    protected function get_same_device_users($user_ids)
    {
        $device_ids = DB::table('client_meta_datas')
                            ->whereIn('myuser_id',$user_ids)
                            ->whereNotNull('device_id')
                            ->distinct('device_id')
                            ->pluck('device_id');

        $same_device_user_ids = DB::table('client_meta_datas')
                                    ->join('myusers','myusers.id','=','client_meta_datas.myuser_id')
                                    ->where('myusers.is_blocked',false)
                                    ->whereNotIn('myusers.id',$user_ids)
                                    ->whereIn('client_meta_datas.device_id',$device_ids)
                                    ->distinct('client_meta_datas.myuser_id')
                                    ->pluck('client_meta_datas.myuser_id')
                                    ->toArray();

        return $same_device_user_ids;
    }

    function convert_persian_numbers_to_latin_numbers($string) {
        $persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        $arabic = ['٩', '٨', '٧', '٦', '٥', '٤', '٣', '٢', '١','٠'];
    
        $num = range(0, 9);
        $convertedPersianNums = str_replace($persian, $num, $string);
        $englishNumbersOnly = str_replace($arabic, $num, $convertedPersianNums);
    
        return $englishNumbersOnly;
    }



}
