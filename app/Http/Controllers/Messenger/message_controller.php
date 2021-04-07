<?php

namespace App\Http\Controllers\Messenger;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\message;
use App\Models\myuser;
use DB;
use App\Jobs\SendNewMessageNotification;
use Carbon\Carbon;
use App\Models\daily_sms_blacklist;
use App\Models\buyAd;
use App\Http\Controllers\Messenger\channel_controller;

class message_controller extends Controller
{
    //properties
    //
    protected $sendig_msg_validation_rules = [
        'sender_id' => 'required|integer|min:1',
        'receiver_id' => 'required|exists:myusers,id',
        'text' => 'required|string',
    ];

    protected $buyAd_reply_validation_rules = [
        'buy_ad_id' => 'required|exists:buy_ads,id',
        'text' => 'required|string'
    ];

    //methods
    public function send_message(Request $request)
    {
        $this->validate_input($request, $this->sendig_msg_validation_rules);

        $is_sender_valid = $this->is_sender_valid($request->sender_id);

        if ($is_sender_valid) {
            $msg = $this->save_msg_in_database($request);

            $this->notify_msg_receiver($msg);

            return response()->json([
                'status' => true,
                'message' => $msg,
                'msg' => 'msg sent.',
            ], 201);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'msg sending failed.',
            ], 500);
        }
    }

    protected function is_sender_valid($sender_user_id)
    {
        if ($sender_user_id == session('user_id')) {
            $is_blocked = myuser::find($sender_user_id)->is_blocked;

            if($is_blocked == true){
                session()->flush();

                return false;
            }

            return true;
        }

        return false;
    }

    protected function validate_input(&$request, $validation_rules)
    {
        $this->validate($request, $validation_rules);
    }

    protected function save_msg_in_database($request)
    {
        $msg_object = new message();

        try {
            $msg_object->sender_id = $request->sender_id;
            $msg_object->receiver_id = $request->receiver_id;
            $msg_object->text = $request->text;

            $msg_object->save();

            return $msg_object;
        } catch (\Exception $e) {
        }
    }

    protected function notify_msg_receiver($msg)
    {
        SendNewMessageNotification::dispatch($msg);
    }

    //public method
    public function send_reply_message_to_the_buyAd(Request $request)
    {
        $this->validate($request,$this->buyAd_reply_validation_rules);

        $sender_id = session('user_id');

        $false_or_receiver_id = $this->is_user_allowed_to_reply_the_buyAd($sender_id,$request->buy_ad_id);

        if($false_or_receiver_id !== false){
            $req = Request::create('/messanger/send_message', 'POST',[
                'sender_id' => $sender_id,
                'receiver_id' => $false_or_receiver_id,
                'text' => $request->text
            ]);

            return $this->send_message($req);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'access denied!'
            ],500);
        }
        
    }

    protected function is_user_allowed_to_reply_the_buyAd($sender_id,$buyAd_id)
    {
        $today = Carbon::today();
        $tomorrow = Carbon::tomorrow();

        $already_replied_to_the_buyAd = DB::table('buy_ad_reply_meta_datas')
                                                ->where([
                                                    ['buy_ad_id','=',$buyAd_id],
                                                    ['replier_id','=',$sender_id],
                                                ])->get()->count();

        if($already_replied_to_the_buyAd > 0){
            $buyAd_record = buyAd::find($buyAd_id);

            return $buyAd_record->myuser_id;
        }

        $user_reply_records = DB::table('buy_ad_reply_meta_datas')
                                    ->join('myusers','myusers.id','=','buy_ad_reply_meta_datas.replier_id')
                                    ->where('replier_id',$sender_id)
                                    ->whereBetween('buy_ad_reply_meta_datas.created_at',[$today, $tomorrow])
                                    ->get();
        
        $today_replies_count = $user_reply_records->count();
        if($today_replies_count > 0){
            $user_daily_reply_capacity = config("subscriptionPakage.type-{$user_reply_records->first()->active_pakage_type}.buyAd-reply-count");
            
            if($today_replies_count > $user_daily_reply_capacity + $user_reply_records->first()->extra_buyAd_reply_capacity){
                return false;
            }
        }

        $buyAd_record = buyAd::find($buyAd_id);

        if($already_replied_to_the_buyAd == true)
        {
            return $buyAd_record->myuser_id;
        }
        
        $now = Carbon::now();

        DB::table('buy_ad_reply_meta_datas')->insert([
            'created_at' => $now,
            'updated_at' => $now,
            'replier_id' => $sender_id,
            'buy_ad_id'  => $buyAd_record->id
        ]);

        DB::table('buy_ads')->where('id',$buyAd_record->id)->decrement('reply_capacity', 1);

        return $buyAd_record->myuser_id;
    }

    //public method
    public function get_current_user_contact_list(Request $request)
    {
        $this->validate($request,[
            'from' => 'integer|min:0',
            'to'   => 'required_with:from|integer|min:15'
        ]);

        $user_id = session('user_id');

        //check block status
        $user_record = DB::table('myusers')
                        ->where('id',$user_id)
                        ->first();

        if($user_record->is_blocked == true){
            return redirect('/logout');
        }

        $contacts_id = $this->get_contacts_id_array($user_id);

        if($request->filled('from')){
            $contacts_id = array_splice($contacts_id,$request->from,$request->to);
        }

        $contact_list = [];

        foreach ($contacts_id as $contact_id) {
            $temp = $this->get_contact_info($contact_id);
            $msgs_info = $this->get_user_contact_unread_messages_count($user_id, $contact_id);
            if ($temp) {
                $temp->unread_msgs_count = $msgs_info['unread_msgs_count'];
                $temp->last_msg_time_date = $msgs_info['last_msg_time_date'];
                $temp->last_msg = $msgs_info;
                $contact_list[] = $temp;
            }
        }

        if (sizeof($contact_list) > 0) {
            usort($contact_list, function ($a, $b) {
                return $b->last_msg_time_date > $a->last_msg_time_date;
            });
        }

        $channel_controller_object = new channel_controller();
        $channel_info = $channel_controller_object->get_channel_info_for_this_user($user_record);

        return response()->json([
            'status' => true,
            'contact_list' => $contact_list,
            'user_id' => $user_id,
            'is_verified' => $user_record->is_verified,
            'channel_info' => $channel_info
        ], 200);
    }

    protected function get_contacts_id_array($user_id)
    {
        $related_records = message::where('sender_id', $user_id)
                                ->orWhere('receiver_id', $user_id)
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

        return array_unique($contact_id_array);
    }

    protected function get_contact_info($contact_id)
    {
        $contact_info = DB::table('myusers')
                            ->Join('profiles', 'myusers.id', '=', 'profiles.myuser_id')
                            ->where('profiles.confirmed', true)
                            ->where('myusers.id', $contact_id)
                            ->select(['myusers.id as contact_id', 'first_name', 'last_name', 'profile_photo', 'user_name','is_verified'])
                            ->get()
                            ->last();

        return $contact_info;
    }

    protected function get_user_contact_unread_messages_count($user_id, $contact_id)
    {
        $msgs = message::where([
                ['sender_id', '=', $contact_id],
                ['receiver_id', '=', $user_id],
            ])
            ->orWhere([
                ['sender_id', '=', $user_id],
                ['receiver_id', '=', $contact_id],
            ])->get();
            
        $unread_msgs = [];

        $msgs->each(function ($msg) use (&$unread_msgs,$contact_id) {
            if ($msg->sender_id == $contact_id && $msg->is_read == false) {
                $unread_msgs[] = $msg;
            }
        });

        $unread_msgs_count = sizeof($unread_msgs);

        $last_msg_time_date = null;

        if ($msgs->count() > 0) {
            $last_msg_record = $msgs->sortBy('created_at')->last();
            $last_msg_time_date = $msgs->max('created_at')
                ->format('Y-m-d H:i:s');
        }
        //get the last msg time here in order to arrange contact list(regardless of read or not)
        return [
            'last_msg_text' => $last_msg_record->text, 
            'unread_msgs_count' => $unread_msgs_count,
            'last_msg_time_date' => $last_msg_time_date,
        ];
    }

    //public method
    public function get_total_unread_messages_for_current_user()
    {
        $user_id = session('user_id');

        $unread_msgs_count = message::where('receiver_id', $user_id)
                                ->where('is_read', false)
                                ->get()
                                ->count();

        return response()->json([
            'status' => true,
            'msg_count' => $unread_msgs_count,
        ], 200);
    }

    public function get_user_chat_history(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required|integer|exists:myusers,id',
        ]);

        $user_id = session('user_id');

        $sent_msg_records = message::where('sender_id', $user_id)
                            ->where('receiver_id', $request->user_id)
                            ->get();

        $received_msg_records = message::where('sender_id', $request->user_id)
                            ->where('receiver_id', $user_id)
                            ->get();

        $messages = $received_msg_records->merge($sent_msg_records)
            ->sortBy('created_at')
            ->values()
            ->all();

        $this->mark_all_messages_as_read($user_id, $request->user_id);

        $messages = $this->tag_phone_number_messages($messages);

        $is_verified = myuser::find($request->user_id)->is_verified;

        return response()->json([
            'status' => true,
            'messages' => $messages,
            'is_verified' => $is_verified,
            'current_user_id' => $user_id,
        ], 200);
    }

    protected function tag_phone_number_messages(&$messages)
    {
        foreach($messages as $msg){
            if($this->is_this_string_a_valid_phone_number($msg->text)){
                $msg->is_phone = true;
            }
            else{
                $msg->is_phone = false;
            }
        }

        return $messages;
    }

    protected function is_this_string_a_valid_phone_number($string)
    {
        return preg_match("/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u",$string) === 1;
    }

    protected function mark_all_messages_as_read($reciver_id, $sender_id)
    {
        DB::table('messages')
                ->where('sender_id', $sender_id)
                ->where('receiver_id', $reciver_id)
                ->update([
                    'is_read' => true,
                    'updated_at' => Carbon::now(),
                    ]);
    }

    //public method
    public function set_last_chat_contact(Request $request)
    {
        $this->validate($request, [
            'contact_id' => 'required|integer',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'user_name' => 'required|string',
        ]);

        $user_id = session('user_id');

        $unread_msgs_count = $this->get_user_contact_unread_messages_count($user_id, $request->contact_id);

        $contact = [
                'contact_id' => $request->contact_id,
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'profile_photo' => $request->profile_photo,
                'user_name' => $request->user_name,
                'unread_msgs_count' => $unread_msgs_count,
        ];

        session(['last_contact' => collect($contact)]);
    }

    public function get_last_chat_contact_info_from_session(Request $request)
    {
        $contact = session('last_contact');

        return response()->json([
            'status' => true,
            'contact' => $contact,
        ]);
    }

    public function get_users_who_have_unread_messages($exclude_users_from_sms_daily_black_list = true)
    {
        $to = Carbon::now();
        $from = Carbon::now()->subDays(2);

        $users_info = DB::table('myusers')
                            ->join('messages', 'messages.receiver_id', '=', 'myusers.id')
                            ->where('messages.is_read', false)
                            ->whereBetween('messages.created_at', [$from, $to])
                            ->select('myusers.id as user_id', 'myusers.phone')
                            ->distinct()
                            ->get();

        if ($exclude_users_from_sms_daily_black_list == false) {
            return $user_info;
        } else {
            $black_list_users = daily_sms_blacklist::all();

            $user_info = $users_info->filter(function ($user) use ($black_list_users) {
                $black_list_insertion_date_time = null;

                $is_user_in_black_list = $black_list_users
                    ->filter(function ($black_list_user) use ($user,&$black_list_insertion_date_time) {
                        if ($user->user_id == $black_list_user->myuser_id) {
                            $black_list_insertion_date_time = $black_list_user->updated_at;

                            return true;
                        } else {
                            return false;
                        }
                    })->count() > 0;

                if ($is_user_in_black_list) {
                    $last_unread_msg_date_time = $this->get_user_last_unread_msg_date_time($user->user_id);

                    if ($last_unread_msg_date_time) {
                        return $last_unread_msg_date_time > $black_list_insertion_date_time;
                    } else {
                        return true;
                    }
                } else {
                    return true;
                }
            });

            return $user_info;
        }
    }

    protected function get_user_last_unread_msg_date_time($user_id)
    {
        $last_unread_message_recored = message::where('receiver_id', $user_id)
                                                ->where('is_read', false)
                                                ->orderBy('created_at')
                                                ->get()
                                                ->last();
        if ($last_unread_message_recored) {
            return $last_unread_message_recored->created_at;
        } else {
            return null;
        }
    }

    public function update_daily_sms_black_list($user_list)
    {
        if ($user_list->count() > 0) {
            $user_list_array = $this->get_user_id_array_from_user_list_collection($user_list);

            if (count($user_list_array) > 0) {
                DB::table('daily_sms_blacklists')
                    ->insert($user_list_array);
            }
        }
    }

    protected function get_user_id_array_from_user_list_collection(&$user_list, $with_time_stamps = true)
    {
        $user_array = [];

        if ($with_time_stamps) {
            $now = Carbon::now();

            foreach ($user_list as $user) {
                $user_black_list_record = daily_sms_blacklist::where('myuser_id', $user->user_id)
                                                ->get()
                                                ->last();

                if ($user_black_list_record) {
                    $user_black_list_record->updated_at = $now;
                    $user_black_list_record->save();
                } else {
                    $user_array[] = [
                        'myuser_id' => $user->user_id,
                        'created_at' => $now,
                        'updated_at' => $now,
                    ];
                }
            }
        } else {
            $user_list->each(function ($user) use (&$user_array) {
                $user_array[] = ['myuser_id' => $user->user_id];
            });
        }

        return $user_array;
    }
}
