<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\message;
use App\myuser;
use DB;

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
        $this->validate_input($request,$this->sendig_msg_validation_rules);
        
        $users_are_valid = $this->are_users_valid($request->sender_id,$request->receiver_id);
        
        if($users_are_valid){
            $this->save_msg_in_database($request);
            
            $this->notify_msg_receiver('you have new messages',$request->receiver_id);
            
            return response()->json([
                'status' => true,
                'msg' => 'msg sent.'
            ],201);
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'msg sending failed.'
            ],500);
        }
    }
    
    protected function are_users_valid($sender_user_id, $receiver_user_id)
    {
        if($sender_user_id == session('user_id')){
            $reciver_record = myuser::find($receiver_user_id);
            
            if($reciver_record){
                return true;
            }
            return false;
        }
        return false;
    }
    
    protected function validate_input(&$request,$validation_rules)
    {
        $this->validate($request,$validation_rules);
    }
    
    
    protected function save_msg_in_database($request)
    {
        //
        $msg_object = new message();
        
        try{
            $msg_object->sender_id = $request->sender_id;
            $msg_object->receiver_id = $request->receiver_id;
            $msg_object->text = $request->text;

            $msg_object->save();
        }
        catch(\Exception $e){
            //
        }
        
    }
    
    protected function notify_msg_receiver($msg,$user_id)
    {
        return true;
        //notification code
    }
    
    //public method
    public function get_current_user_contact_list()
    {
        $user_id = session('user_id');
        
        $contacts_id = $this->get_contacts_id_array($user_id);
        
        $contact_list = [];
        
        foreach($contacts_id as $contact_id){
            $temp = $this->get_contact_info($contact_id);
            $temp->unread_msgs_count = $this->get_user_contact_unread_messages_count($user_id, $contact_id);
            
            $contact_list[] = $temp;
        }        

        return response()->json([
            'status' => true,
            'contact_list' => $contact_list,
            'user_id' => $user_id,
        ],200);
    }
    
    protected function get_contacts_id_array($user_id)
    {
        $related_records = message::where('sender_id',$user_id)
                                ->orWhere('receiver_id',$user_id)
                                ->select('sender_id','receiver_id')
                                ->distinct()
                                ->orderBy('created_at','desc')
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
                            ->select(['myusers.id as contact_id','first_name', 'last_name', 'profile_photo'])
                            ->get()
                            ->last();
        
        return $contact_info;
    }
    
    protected function get_user_contact_unread_messages_count($user_id, $contact_id)
    {
        $unread_msgs_count = message::where('sender_id',$contact_id)
                                ->where('receiver_id', $user_id)
                                ->where('is_read',false)
                                ->get()
                                ->count();
        return $unread_msgs_count;
    }
    
    //public method
    public function get_total_unread_messages_for_current_user()
    {
        $user_id = session('user_id');
        
        $unread_msgs_count = message::where('receiver_id',$user_id)
                                ->where('is_read',false)
                                ->get()
                                ->count();
        
        return response()->json([
            'status' => true,
            'msg_count' => $unread_msgs_count,
        ],200);
    }
    
    public function get_user_chat_history(Request $request)
    {
        $this->validate($request,[
            'user_id' => 'required|integer'
        ]);
        
        $user_id = session('user_id');
        
        $sent_msg_records = message::where('sender_id',$user_id)
                            ->where('receiver_id',$request->user_id)
                            ->get();
        
        $received_msg_records = message::where('sender_id',$request->user_id)
                            ->where('receiver_id',$user_id)
                            ->get();
        
        $messages = $received_msg_records->merge($sent_msg_records)
            ->sortBy('created_at')
            ->values()
            ->all();
        
        $this->mark_all_messages_as_read($user_id,$request->user_id);
        
        return response()->json([
            'status' => true,
            'messages' => $messages,
            'current_user_id' => $user_id,
        ],200);
    }
    
    protected function mark_all_messages_as_read($reciver_id,$sender_id)
    {
        DB::table('messages')
                ->where('sender_id',$sender_id)
                ->where('receiver_id',$reciver_id)
                ->update(['is_read' => true]);
    }
}