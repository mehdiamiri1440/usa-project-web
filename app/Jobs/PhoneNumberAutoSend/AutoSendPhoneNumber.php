<?php

namespace App\Jobs\PhoneNumberAutoSend;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Http\Request;
use App\Http\Controllers\Messenger\message_controller;
use App\Models\message;
use Carbon\Carbon;
use DB;
use App\Jobs\SendNewMessageNotification;

class AutoSendPhoneNumber implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $msg;

    public function __construct($msg)
    {
        $this->msg = $msg;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $msg = $this->save_msg_in_database($this->msg);

        $this->notify_msg_receiver($msg);

        $this->update_phone_number_auto_sending_data($msg);
    }

    protected function notify_msg_receiver($msg)
    {
        SendNewMessageNotification::dispatch($msg);
    }

    protected function save_msg_in_database($msg)
    {
        $msg_object = new message();

        try {
            $msg_object->sender_id = $msg['sender_id'];
            $msg_object->receiver_id = $msg['receiver_id'];
            $msg_object->text = $msg['text'];

            $msg_object->save();

            return $msg_object;
        } catch (\Exception $e) {
        }
    }

    protected function update_phone_number_auto_sending_data($msg)
    {
        $now = Carbon::now();

        $tmp = [
            'sender_id' => $msg->sender_id,
            'receiver_id' => $msg->receiver_id,
            'created_at' => $now,
            'updated_at' => $now
        ];

        DB::table('auto_sent_phone_numbers_meta_datas')
                ->insert($tmp);
    }
}
