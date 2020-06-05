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
        'detect_copy_paste',
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
        $abnormal_users = $this->get_abnormal_user_ids();
        
        if(count($abnormal_users) > 0){
            //Deli
            sendSMS::dispatch('09118413054', 27257);
            sendSMS::dispatch('09172021943', 27257);
            //Ghasem
            sendSMS::dispatch('09217985653', 27257);
            sendSMS::dispatch('09178928266', 27257);
        }
    }

    protected function get_abnormal_message_info()
    {
        $messages = DB::table('messages')
                        ->whereBetween('created_at',[Carbon::now()->subMonths(1),Carbon::now()])
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
        $msgs = [];
        foreach($messages as $msg)
        {
            preg_match_all('/[-A-Z0-9+&@#\/%=~_|$?!:,.]*[A-Z0-9+&@#\/%=~_|$]/i', $msg->text, $result, PREG_PATTERN_ORDER);
            foreach($result[0] as $possible_link)
            {
                if(stripos($possible_link,'.com') !== false || stripos($possible_link,'.ir') !== false || stripos($possible_link,'.market') !== false)
                {
                    $msgs[] = $msg->id;
                }
            }
        }

        return $msgs;
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

    protected function get_abnormal_user_ids()
    {
        $userIds = [];

        $messages = DB::table('messages')
                        ->whereBetween('created_at',[Carbon::now()->subDays(1),Carbon::now()])
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


}
