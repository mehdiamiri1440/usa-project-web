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
        
        $receiver_contacts = DB::table('messages')
                    ->join('myusers','myusers.id','=','messages.receiver_id')
                    ->where('sender_id',$user_id)
                    ->select(['receiver_id as contact_id', 'first_name', 'last_name'])
                    ->get();
        
        $sender_contacts = DB::table('messages')
                    ->join('myusers','myusers.id','=','messages.receiver_id')
                    ->where('receiver_id',$user_id)
                    ->select(['sender_id as contact_id', 'first_name', 'last_name'])
                    ->get();
        
        print_r($receiver_contacts->merge($sender_contacts));
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
        
        return response()->json([
            'status' => true,
            'messages' => $messages,
        ],200);
    }
}