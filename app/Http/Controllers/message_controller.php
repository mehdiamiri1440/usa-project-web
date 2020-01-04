<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\message;
use App\myuser;
use DB;
use App\Jobs\SendNewMessageNotification;
use Carbon\Carbon;
use App\daily_sms_blacklist;

class message_controller extends Controller
{
    //properties
    //
    protected $sendig_msg_validation_rules = [
        'sender_id' => 'required|integer',
        'receiver_id' => 'required|integer',
        'text' => 'required|string',
    ];

    //methods
    public function send_message(Request $request)
    {
        $this->validate_input($request, $this->sendig_msg_validation_rules);

        $users_are_valid = $this->are_users_valid($request->sender_id, $request->receiver_id);

        if ($users_are_valid) {
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

    protected function are_users_valid($sender_user_id, $receiver_user_id)
    {
        if ($sender_user_id == session('user_id')) {
            $reciver_record = myuser::find($receiver_user_id);

            if ($reciver_record) {
                return true;
            }

            return false;
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
    public function get_current_user_contact_list()
    {
        $user_id = session('user_id');

        $contacts_id = $this->get_contacts_id_array($user_id);

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

        return response()->json([
            'status' => true,
            'contact_list' => $contact_list,
            'user_id' => $user_id,
        ], 200);
    }

    protected function get_contacts_id_array($user_id)
    {
        $related_records = message::where('sender_id', $user_id)
                                ->orWhere('receiver_id', $user_id)
                                ->select('sender_id', 'receiver_id')
                                ->distinct()
                                ->orderBy('created_at')
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
                            ->select(['myusers.id as contact_id', 'first_name', 'last_name', 'profile_photo', 'user_name'])
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
            $last_msg_time_date = $msgs->last()
                ->created_at
                ->format('Y-m-d H:i:s');
        }
        //get the last msg time here in order to arrange contact list(regardless of read or not)
        return [
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
            'user_id' => 'required|integer',
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

        return response()->json([
            'status' => true,
            'messages' => $messages,
            'current_user_id' => $user_id,
        ], 200);
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
                $is_user_in_black_list = $black_list_users
                    ->filter(function ($black_list_user) use ($user) {
                        return $user->user_id == $black_list_user->myuser_id;
                    })->count() > 0;

                return !$is_user_in_black_list;
            });

            return $user_info;
        }
    }

    public function update_daily_sms_black_list($user_list)
    {
        if ($user_list->count() > 0) {
            $user_list_array = $this->get_user_id_array_from_user_list_collection($user_list);

            DB::table('daily_sms_blacklists')
                    ->insert($user_list_array);
        }
    }

    protected function get_user_id_array_from_user_list_collection(&$user_list)
    {
        $user_array = [];

        $user_list->each(function ($user) use (&$user_array) {
            $user_array[] = ['myuser_id' => $user->user_id];
        });

        return $user_array;
    }
}
