<?php

namespace App\Http\Controllers\admin_panel\AnomalyDetector;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Carbon\Carbon;
use App\Models\message;

class messaging_anomaly_controller extends Controller
{
    protected $anomaly_detectors = [
        'detect_links_anomaly',
        'detect_copy_paste',
    ];
    protected $contacts_max = 10;

    public function load_messaging_anomaly(Request $request)
    {
        $abnormal_info = $this->get_abnormal_info();
        // $abnormal_user_ids = $this->get_abnormal_user_ids($messages);

        $messages = DB::table('myusers')
                        ->join('messages','myusers.id','=','messages.sender_id')
                        ->join('myusers as users','users.id','=','messages.receiver_id')
                        ->whereIn('messages.id',$abnormal_info['messages'])
                        ->select([
                            'myusers.id as sender_id',
                            'myusers.phone as sender_phone',
                            'myusers.first_name as sender_first_name',
                            'myusers.last_name as sender_last_name',
                            'myusers.created_at as sender_created_at',
                            'myusers.is_blocked as sender_blocked',
                            'users.id as receiver_id',
                            'users.phone as receiver_phone',
                            'users.first_name as receiver_first_name',
                            'users.last_name as receiver_last_name',
                            'users.created_at as reciever_created_at',
                            'messages.*'
                        ])
                        ->orderBy('messages.created_at')
                        ->get();

        $users = DB::table('myusers')
                            ->whereIn('id',$abnormal_info['users'])
                            ->get();

        return view('admin_panel.messageAnomaly',[
            'abnormal_messages' => $messages,
            'abnormal_users'    => $users
        ]);
    }

    protected function get_abnormal_info()
    {
        $messages = DB::table('messages')
                        ->whereBetween('created_at',[Carbon::now()->subDays(3),Carbon::now()])
                        ->get();
        
        $abnormal_user_ids = $this->get_abnormal_user_ids($messages);
        
        $abnormal_message_ids = [];
        // foreach($this->anomaly_detectors as $method_name)
        // {
        //     array_merge($abnormal_message_ids,$this->$method_name($messages));
        // }
        $abnormal_message_ids = $this->detect_links_anomaly($messages);
        $abnormal_message_ids = array_merge($abnormal_message_ids,$this->detect_copy_paste($messages));
        
        $abnormal_message_ids = array_unique($abnormal_message_ids);

        return [
            'messages' => $abnormal_message_ids,
            'users' => $abnormal_user_ids
        ];
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
                if( ! in_array($msg1->id,$msgs)){
                    $msgs[] = $msg1->id;
                }
            }
        });

        return $msgs;
    }

    protected function get_abnormal_user_ids(&$messages)
    {
        $userIds = [];

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

    public function block_operator(Request $request)
    {
        $this->validate($request,[
            'block' => 'required|boolean',
            'user_id' => 'required|exists:myusers,id'
        ]);

        $block_status = $request->block;
        $user_id = $request->user_id;

        DB::table('myusers')
            ->where('id',$user_id)
            ->update([
                'is_blocked' => $block_status
            ]);

        return response()->json([
            'status' => true,
            'msg' => $block_status == true ? 'حساب کاربری معلق شد' : 'حساب کاربری باز یابی شد'
        ],200);
    }
}
