<?php

namespace App\Jobs\LeadHandler;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;

class ShareCalculator implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    protected $time_period_in_days = 7;
    protected $last_base_limit_records = [];

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
        $this->last_base_limit_records = DB::table('lead_balancer_meta_datas')
                                                ->whereRaw('is_base = true and updated_at = (select max(updated_at) from lead_balancer_meta_datas as tmp where tmp.is_base = true and tmp.category_id = lead_balancer_meta_datas.category_id)')
                                                ->groupBy('category_id')
                                                ->get();


        $total_leads = DB::table('leads')
                            ->selectRaw("count(distinct(id)) as cnt,category_id")
                            ->whereBetween('created_at',[Carbon::now()->subDays($this->time_period_in_days),Carbon::now()])
                            ->groupBy('category_id')
                            ->get();

        $result = [];
        $now = Carbon::now();
        foreach($total_leads as $category_lead)
        {
            list($upper_lead_limit,$lower_lead_limit) = $this->calculate_category_new_limits($category_lead);

            if($upper_lead_limit < 0 || $lower_lead_limit < 0){
                continue;
            }

            $result[] = [
                'category_id' => $category_lead->category_id,
                'created_at' => $now,
                'updated_at' => $now,
                'upper_limit' => $upper_lead_limit,
                'lower_limit' => $lower_lead_limit,
                'time_period' => $this->time_period_in_days,
                'is_base' => false,
            ];
        }

        DB::table('lead_balancer_meta_datas')
                    ->insert($result);
    }

    protected function calculate_category_new_limits($category_lead_info)
    {
        $base_record = null;

        foreach($this->last_base_limit_records as $record)
        {
            if($category_lead_info->category_id == $record->category_id)
            {
                $base_record = $record;

                break;
            }
        }

        if(is_null($base_record)) return [-1,-1];

        $sellers_count_in_classes = $this->get_sellers_count_in_each_class($category_lead_info->category_id);

        if(is_null($sellers_count_in_classes)) return [-1,-1];
        //EQ #1
        $x_coef_in_eq_1 = $sellers_count_in_classes['class_1'] + $sellers_count_in_classes['class_2'] + $sellers_count_in_classes['class_3'];
        $x_coef_in_eq_2 = 1;
        $y_coef_in_eq_1 = $sellers_count_in_classes['class_4'];
        $y_coef_in_eq_2 = -1;

        if(($x_coef_in_eq_1 + $x_coef_in_eq_2 * $sellers_count_in_classes['class_4']) == 0){
            return [-1,-1];
        }

        $x = ( ( (abs($base_record->upper_limit - $base_record->lower_limit) * $sellers_count_in_classes['class_4']) + $category_lead_info->cnt) - ($sellers_count_in_classes['class_1'] * config("subscriptionPakage.sellers-share-plus-count.1") + $sellers_count_in_classes['class_2'] * config("subscriptionPakage.sellers-share-plus-count.2") + $sellers_count_in_classes['class_3'] * config("subscriptionPakage.sellers-share-plus-count.3") ) ) / ($x_coef_in_eq_1 + $x_coef_in_eq_2 * $sellers_count_in_classes['class_4']);
        $y = $x - abs($base_record->upper_limit - $base_record->lower_limit);

        if( ($x <= $base_record->upper_limit) || ($y <= $base_record->lower_limit) )
        {
            $upper_limit = $base_record->upper_limit;
            $lower_limit = $base_record->lower_limit;
        }
        else{
            $upper_limit = round($x);
            $lower_limit = round($y);
        }

        return array($upper_limit,$lower_limit);

    }

    protected function get_sellers_count_in_each_class($category_id)
    {
        $cache_key = md5('AllProducts');

        $products = null;
        if(Cache::has($cache_key)){
            $products = Cache::get($cache_key);
        }

        if(is_null($products)){
            return null;
        }

        //OVERALL conditions
        $products = array_filter($products,function($product) use($category_id){
            return $product['main']->sub_category_id == $category_id;
        });
        //END

        $result = [
            'class_1' => [],
            'class_2' => [],
            'class_3' => [],
            'class_4' => [],
        ];

        $last_acceptable_date = Carbon::now()->subDays(7);
        foreach($products as $product)
        {
            if($product['user_info']->active_pakage_type > 0){
                $result['class_1'][] = $product['user_info']->id;
            }
            else if($product['user_info']->is_verified == true){
                $result['class_2'][] = $product['user_info']->id;
            }
            else if($product['user_info']->created_at > $last_acceptable_date){
                $result['class_3'][] = $product['user_info']->id;
            }
            else{
                $result['class_4'][] = $product['user_info']->id;
            }
        }


        return [
            'class_1' => sizeof(array_unique($result['class_1'])),
            'class_2' => sizeof(array_unique($result['class_2'])),
            'class_3' => sizeof(array_unique($result['class_3'])),
            'class_4' => sizeof(array_unique($result['class_4'])),
        ];
    }
}
