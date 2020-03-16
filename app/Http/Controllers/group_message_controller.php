<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\messenger_group_subscriber;
use App\messenger_group;
use App\group_message;
use App\group_message_receiver;
use App\Jobs\InsertGroupMessagesToReceiversTable;
use Carbon\Carbon;
use DB;

class group_message_controller extends Controller
{
    public function send_message(Request $request)
    {
        $this->validate_rules($request,[
            'text' => 'required',
            'group_id' => 'required|exists:messenger_groups,id',
            'replied_msg_id' => 'exists:group_messages,id'
        ]);

        $user_id = session('user_id');
        $group_id = $request->group_id;

        if(!$this->is_user_allowed_to_send_message_in_this_group($user_id,$group_id)){
            return response()->json([
                'status' => false,
                'msg' => 'user is not allowed to send message in this group'
            ],200);
        }

        $text_processing_result = $this->do_the_text_processing($request->text);

        if($text_processing_result['is_allowed_to_send'] == false){
            return response()->json([
                'status' => false,
                'errors' => $text_processing_result['errors']
            ],200);
        }

        try{ 
            $message_record = new group_message([],$group_id);
            $message_record->sender_id = $user_id;
            $message_record->text = $text_processing_result['text'];
            if($request->has('replied_msg_id')){
                $message_record->parent_id = $request->replied_msg_id;
            }
            // if($text_processing_result['has_link'] == true){
            //     $message_record->is_link = true;
            // }
            $message_record->save();

            return response()->json([
                'status' => true,
                'msg' => 'message sent'
            ],201);

        }
        catch(\Exception $e){
            return response()->json([
                'status' => false,
                'msg' => 'send message failed'
            ],500);
        }
    }

    protected function is_user_allowed_to_send_message_in_this_group($user_id,$group_id)
    {
        //other conditions can be added in this method
        return $this->is_user_already_subscribed($user_id,$group_id);
    }

    protected function do_the_text_processing($text)
    {
        $has_phone = $has_link = $has_taboo_words = false;

        $has_phone = $this->does_text_contain_phone_number($text);
        
        $result['errors'] = [];

        if($has_phone){
            $result['errors'][] = 'ارسال شماره تماس در گروه مجاز نیست';
        }
        else{
            $has_link = $this->does_text_contain_external_link($text);
        }

        if($has_link){
            $result['errors'][] = 'ارسال لینک های خارج از وبسایت باسکول ممنوع است';
        }
        else{
            $has_taboo_words = $this->does_text_contain_taboo_words($text);
        }

        if($has_taboo_words){
            $result['errors'][] = 'استفاده از کلمات نامتعارف ممنوع است';
        }

        if($result['errors']){
            $result['is_allowed_to_send'] = false;
        }
        else{
            $result['is_allowed_to_send'] = true;
            $result['text'] = $text;
        }

        return $result;
    }

    protected function does_text_contain_phone_number($text)
    {
        $status = preg_match('/^((09[0-9]{9})|(\x{06F0}\x{06F9}[\x{06F0}-\x{06F9}]{9}))$/u',$text);

        return false;
    }

    protected function does_text_contain_external_link($text)
    {
        return false;
    }

    protected function does_text_contain_taboo_words($text)
    {
        return false;
    }

    public function make_message_accessible_for_group_subscribers($msg,$group_id)
    {
        $group_subscription_ids = $this->get_group_subscription_ids($group_id);

        $data_to_be_inserted = $this->get_data_to_be_inserted_in_receivers_table_as_array($msg,$group_subscription_ids);
        
        DB::table('group_message_receivers')->insert($data_to_be_inserted);
    }

    protected function get_group_subscription_ids($group_id)
    {
        $group_subscibers_ids = messenger_group_subscriber::where('group_id',$group_id)
                                                            ->select('id')
                                                            ->distinct()
                                                            ->get();
        return $group_subscibers_ids;
    }

    protected function get_data_to_be_inserted_in_receivers_table_as_array($msg,$group_subscription_ids)
    {
        $result = [];
        $now = Carbon::now();

        $user_id = session('user_id');

        $group_subscription_ids->each(function($subscription_record) use(&$result,$now,$msg,$user_id){
            $temp = [
                'created_at' => $now,
                'updated_at' => $now,
                'subscription_id' => $subscription_record->id,
                'message_id' => $msg->id
            ];

            if($user_id == $msg->sender_id){
                $temp['is_read'] = true;
            }

            $result[] = $temp;
        });

        return $result;
    }

    public function get_user_groups_list(Request $request)
    {
        $user_id = session('user_id');

        

        $subscribed_groups = DB::table('messenger_group_subscribers')
                                    ->join('messenger_groups','messenger_groups.id','=','messenger_group_subscribers.group_id')
                                    ->where([
                                        ['messenger_group_subscribers.myuser_id','=',$user_id],
                                        ['messenger_group_subscribers.is_active','=',true],
                                        ['messenger_groups.is_active','=',true],
                                    ])
                                    ->select('messenger_groups.id','messenger_groups.name','messenger_groups.photo')
                                    ->get();
       
        $subscribed_groups->each(function($group_info) use($user_id){
            $group_info->unread_messages = $this->get_user_unread_messages_count_in_group($group_info->id,$user_id);
        });

                                    
        return response()->json([
            'status' => true,
            'groups' => $subscribed_groups
        ],200);
    }

    protected function get_user_unread_messages_count_in_group($group_id,$user_id)
    {
        $unread_msgs_count_column = DB::table('messenger_group_subscribers')
                                    ->join('group_message_receivers','group_message_receivers.subscription_id','=','messenger_group_subscribers.id')
                                    ->where('messenger_group_subscribers.group_id',$group_id)
                                    ->where('messenger_group_subscribers.myuser_id',$user_id)
                                    ->where('group_message_receivers.is_read',false)
                                    ->select(DB::raw('count(group_message_receivers.subscription_id) as cnt'))
                                    ->groupBy('group_message_receivers.subscription_id')
                                    ->first();
        if($unread_msgs_count_column){
            return $unread_msgs_count_column->cnt;
        }
        else{
            return 0;
        }
        
        
        
    }

    public function get_group_chats(Request $request)
    {
        $this->validate_rules($request,[
            'group_id' => 'required|exists:messenger_groups,id',
            'message_count' => 'required|integer|min:50|max:2000'
        ]);

        $group_id = $request->group_id;
        $user_id = session('user_id');
        $msg_count = $request->message_count;

        $messages = DB::table('messenger_group_subscribers')
                            ->join('group_message_receivers','group_message_receivers.subscription_id','=','messenger_group_subscribers.id')
                            ->join('group_messages','group_messages.id','=','group_message_receivers.message_id')
                            ->join('myusers','myusers.id','=','group_messages.sender_id')
                            ->where('messenger_group_subscribers.group_id',$group_id)
                            ->where('messenger_group_subscribers.myuser_id',$user_id)
                            ->select('group_messages.id','group_messages.created_at','group_messages.text','group_messages.parent_id','group_messages.is_link','myusers.first_name','myusers.last_name','myusers.user_name','myusers.active_pakage_type','myusers.id as user_id')
                            ->orderBy('group_messages.created_at')
                            ->take($msg_count)
                            ->get();
        
        return response()->json([
            'status' => true,
            'messages' => $messages
        ],200);
    }

    public function subscribe_user_in_group(Request $request)
    {
        $this->validate_rules($request,[
            'group_id' => 'required|exists:messenger_groups,id'
        ]);

        $user_id = session('user_id');
        $group_id = $request->group_id;

        $group_record = messenger_group::find($group_id);

        if(!$group_record->is_active){
            return response()->json([
                'status' => false,
                'message' => 'Group is not active!'
            ],404);
        }

        $is_user_already_subscribed = $this->is_user_already_subscribed($user_id,$group_id);

        if($is_user_already_subscribed){
            return response()->json([
                'status' => false,
                'msg' => 'user already had subscribed in this group.'
            ],200);
        }

        $subsciption_record = new messenger_group_subscriber();
        $subsciption_record->myuser_id = $user_id;
        $subsciption_record->group_id = $group_record->id;
        $subsciption_record->save();

        return response()->json([
            'status' => true,
            'msg' => 'user subscibed in the group successfully.'
        ],201);
    }

    protected function is_user_already_subscribed($user_id,$group_id)
    {
        $status = messenger_group_subscriber::where('myuser_id',$user_id)
                                            ->where('group_id',$group_id)
                                            ->get()
                                            ->count();
        
        return $status;
    }

    public function unsubscribe_user_from_group(Request $request)
    {
        $this->validate_rules($request,[
            'group_id' => 'required|exists:messenger_groups,id'
        ]);
        
        $group_id = $request->group_id;
        $user_id = session('user_id');

        messenger_group_subscriber::where('myuser_id',$user_id)
                                        ->where('group_id',$group_id)
                                        ->delete();
    }

    public function make_latest_group_messages_accessible_for_new_subscriber($subscription_record)
    {
        $subscription_id = messenger_group_subscriber::where('group_id',$subscription_record->group_id)
                                                        ->orderBy('created_at')
                                                        ->first()
                                                        ->id;

        $latest_group_messages_ids = group_message_receiver::where('subscription_id',$subscription_id)
                                                                ->select('message_id','created_at')
                                                                ->orderBy('created_at')
                                                                ->take(50)
                                                                ->get();
        
        $result = [];

        $latest_group_messages_ids->each(function($msg) use(&$result,$subscription_record){
            $temp = [
                'created_at' => $msg->created_at,
                'updated_at' => $msg->created_at,
                'subscription_id' => $subscription_record->id,
                'message_id' => $msg->message_id,
                'is_read' => true,
            ];

            $result[] = $temp;
        });

        DB::table('group_message_receivers')->insert($result);

    }

    public function get_all_groups()
    {
        $groups = messenger_group::select('id','name','photo')
                            ->get();

        return response()->json([
            'status' => true,
            'all_groups' => $groups
        ],200);
    }

    protected function validate_rules($request,$rules)
    {
        $this->validate($request,$rules);
    }
}
