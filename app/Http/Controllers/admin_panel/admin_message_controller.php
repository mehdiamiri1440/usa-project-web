<?php

namespace App\Http\Controllers\admin_panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\myuser;
use App\Models\message;
use App\Models\profile_info;
use DB;

class admin_message_controller extends Controller
{
    public function get_all_user_contacts_with_related_messages(Request $request)
    {
        $this->validate($request,[
            'phone' => 'required|string'
        ]);

        $user_record = myuser::where('phone',$request->phone)
                            ->first();

        if(is_null($user_record)){
            return redirect('/admin/messages')->withErrors([
                'phone' => 'شماره اشتباهه'
            ]);
        }

        $user_id = $user_record->id;

        $contact_list = $this->get_user_contact_list($user_id);
        
        $all_messages = [];

        foreach($contact_list as $contact)
        {
            $temp['contact_info'] = $contact;
            $temp['messages'] = $this->get_user_chat_history($user_id,$contact->contact_id);

            $all_messages[] = $temp;
        }

        // dd($all_messages);

        return view('admin_panel.message',[
            'messages' => $all_messages,
            'user_record' => $user_record 
        ]);
    }

    protected function get_user_contact_list($user_id)
    {   
        $contacts_id = $this->get_contacts_id_array($user_id);
    
        $contact_list = [];
        
        foreach($contacts_id as $contact_id){
            $temp = $this->get_contact_info($contact_id);
            $msgs_info = $this->get_user_contact_unread_messages_count($user_id, $contact_id);
            $temp->unread_msgs_count = $msgs_info['unread_msgs_count'];
            $temp->last_msg_time_date = $msgs_info['last_msg_time_date'];            
            
            $contact_list[] = $temp;
        }        
        
        if(sizeof($contact_list) > 0){
            usort($contact_list, function($a, $b) {
                return (strtotime($b->last_msg_time_date) - strtotime($a->last_msg_time_date));
            });
        }

        return $contact_list;
    }

    protected function get_contacts_id_array($user_id)
    {
        $related_records = message::where('sender_id',$user_id)
                                ->orWhere('receiver_id',$user_id)
                                ->select('sender_id','receiver_id')
                                ->distinct()
                                ->orderBy('created_at')
                                ->get();
        $contact_id_array = [];
        
        $related_records->each(function($record) use(&$contact_id_array,$user_id){
            if($record->sender_id != $user_id){
                $contact_id_array[] = $record->sender_id;
            }
            else{
                $contact_id_array[] = $record->receiver_id;
            }
        });
        
        return array_unique($contact_id_array);                               
    }

    protected function get_contact_info($contact_id)
    {
        $contact_info = DB::table('myusers')
                            ->Join('profiles','myusers.id','=','profiles.myuser_id')
                            ->where('profiles.confirmed',true)
                            ->where('myusers.id',$contact_id)
                            ->select(['myusers.id as contact_id','first_name', 'last_name', 'profile_photo','user_name'])
                            ->get()
                            ->last();
        
        return $contact_info;
    }

    protected function get_user_contact_unread_messages_count($user_id, $contact_id)
    {
        $msgs = message::where('sender_id',$contact_id)
                                ->where('receiver_id', $user_id)
//                                ->where('is_read',false)
                                ->get();
        $unread_msgs = [];
        
        $msgs->each(function($msg) use(&$unread_msgs,&$last_msg_time_date){
            if($msg->is_read == false){
                $unread_msgs [] = $msg;
            }
        });
        
        $unread_msgs_count = sizeof($unread_msgs);
    
        if($msgs->count() > 0){
            $last_msg_time_date = $msgs->last()
                ->created_at
                ->format('Y-m-d H:i:s');
        }   
        //get the last msg time here in order to arrange contact list(regardless of read or not)
        return [
            "unread_msgs_count" => $unread_msgs_count,
            "last_msg_time_date" => $last_msg_time_date
        ];
    }

    protected function get_user_chat_history($user_id,$receiver_id)
    {   
        $sent_msg_records = message::where('sender_id',$user_id)
                            ->where('receiver_id',$receiver_id)
                            ->get();
        
        $received_msg_records = message::where('sender_id',$receiver_id)
                            ->where('receiver_id',$user_id)
                            ->get();
        
        $messages = $received_msg_records->merge($sent_msg_records)
            ->sortBy('created_at')
            ->values()
            ->all();
        
        return $messages;
    }

    public function load_messages_form()
    {
        return view('admin_panel.message');
    }
}