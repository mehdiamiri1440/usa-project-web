<?php

namespace App\Jobs\LeadHandler;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use Carbon\Carbon;

class LeadGenerator implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

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
        $leads = $this->generate_leads();

        DB::table('leads')->insert($leads);
    }

    protected function generate_leads()
    {
        $records = DB::table('user_products')
                                ->join('products','products.id','=','user_products.product_id')
                                ->join('myusers','myusers.id','=','user_products.myuser_id')
                                ->where('myusers.is_buyer',true)
                                ->where('myusers.is_blocked',false)
                                ->where('user_products.has_sent_msg',true)
                                ->whereBetween('user_products.updated_at',[Carbon::now()->subHours(4),Carbon::now()])
                                ->whereNotExists(function($q){
                                    $q->select(DB::raw(1))
                                        ->from('leads')
                                        ->whereRaw('leads.buyer_id = user_products.myuser_id')
                                        ->whereBetween('leads.created_at',[Carbon::now()->subDays(1),Carbon::now()]);
                                })
                                ->whereNotExists(function($q){
                                    $q->select(DB::raw(1))
                                        ->from('products')
                                        ->whereRaw('products.myuser_id = user_products.myuser_id and products.confirmed = true')
                                        ->whereBetween('products.updated_at',[Carbon::now()->subDays(7),Carbon::now()]);
                                })
                                ->select('user_products.*','products.category_id','products.product_name')
                                ->whereRaw("user_products.updated_at = (select max(updated_at) from user_products as tmp where tmp.has_sent_msg = true and tmp.myuser_id = user_products.myuser_id and tmp.product_id = user_products.product_id)")
                                ->groupBy('user_products.myuser_id')
                                ->get();


        $leads = [];
        $now = Carbon::now();
        $expiry_date = Carbon::now()->addDays(1);

        foreach($records as $record)
        {
            $buyer_avg_rating_score = $this->get_user_rating_score($record->myuser_id);

            $leads_count = (integer) ($buyer_avg_rating_score * 2);

            for($i = 0; $i < $leads_count ; $i++){
                $tmp = [
                    'created_at' => $now,
                    'updated_at' => $now,
                    'buyer_id' => $record->myuser_id,
                    'expiry_date' => $expiry_date,
                    'lead_class_id' => 2,
                    'keywords' => $record->product_name,
                    'category_id' => $record->category_id
                ];

                $leads[] = $tmp;
            }
            
        }

        
        return $leads;
    }

    protected function get_user_rating_score($user_id)
    {
        $avg_rating_score_record = DB::table('user_comments')->where('myuser_id',$user_id)
                                    ->selectRaw("avg(rating_score) as score")
                                    ->groupBy('user_comments.myuser_id')
                                    ->get()
                                    ->first();
        
        if(! $avg_rating_score_record){
            return 5;
        }

        
        $avg_rating_score = $avg_rating_score_record->score;

        return $avg_rating_score;
    }
}
