<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Models\group_message_receiver;
use App\Models\messenger_group_subscriber;
use Carbon\Carbon;
use DB;

class InsertGroupMessagesToReceiversTable implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $msg;
    protected $group_id;

    public function __construct($msg,$group_id)
    {
        $this->msg = $msg;
        $this->group_id = $group_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $group_subscription_ids = $this->get_group_subscription_ids($this->group_id);

        $data_to_be_inserted = $this->get_data_to_be_inserted_in_receivers_table_as_array($group_subscription_ids);

        DB::insert('group_message_receivers',$data_to_be_inserted);
        
    }

    protected function get_group_subscription_ids($group_id)
    {
        $group_subscibers_ids = messenger_group_subscriber::where('group_id',$this->group_id)
                                                            ->select('id')
                                                            ->distinct()
                                                            ->get();
        return $group_subscibers_ids;
    }

    protected function get_data_to_be_inserted_in_receivers_table_as_array($group_subscription_ids)
    {
        $result = [];
        $now = Carbon::now();

        $group_subscription_ids->each(function($subscription_record) use($result,$now){
            $temp = [
                'created_at' => $now,
                'updated_at' => $now,
                'subscription_id' => $subscription_record->id,
                'message_id' => $this->msg->id
            ];

            $result[] = $temp;
        });

        return $result;
    }
}
