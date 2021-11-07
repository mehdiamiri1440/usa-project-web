<?php

namespace App\Jobs\LeadHandler;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Cache;
use App\Models\category;
use App\Jobs\LeadHandler\DistributeCategoryLeads;

class LeadDistributorBot implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $upper_lead_limit;
    protected $lower_lead_limit;
    protected $upper_time_limit;
    protected $lower_time_limit;
    protected $category_id;
    protected $time_frame;

    protected $words_blacklist = [
        'در', 'به', 'را', 'از', 'و', 'برای', 'تا', 'که', 'بر', 'بی', 'مگر','درجه','یک'
    ];

    protected $selected_products = [];

    protected $lead_seller_class_matches_with_priority = [
        ['first_class_leads' => 'package_owner_sellers_products'],
        ['second_class_leads' => 'package_owner_sellers_products'],
        ['third_class_leads' => 'package_owner_sellers_products'],
        ['first_class_leads' => 'new_sellers_products'],
        ['second_class_leads' => 'new_sellers_products'],
        ['third_class_leads' => 'new_sellers_products'],
        ['first_class_leads' => 'verified_sellers_products'],
        ['second_class_leads' => 'verified_sellers_products'],
        ['third_class_leads' => 'verified_sellers_products'],
        ['first_class_leads' => 'other_sellers_products'],
        ['second_class_leads' => 'other_sellers_products'],
        ['third_class_leads' => 'other_sellers_products'], 
    ];

    protected $sellers_class_name_and_id_map = [
        'package_owner_sellers_products' => 1,
        'new_sellers_products' => 2,
        'verified_sellers_products' => 3,
        'other_sellers_products' => 4,
    ];


    protected $greeting_lines = [
        'سلام، وقت بخیر',
        'سلام',
        'درود بر شما',
        'سلام، وقت بخیر',
        'درود، وقت شما بخیر باشه',
        '',
        'درود',
        'با عرض سلام و خسته نباشید،',
        'ارادت',
        '',
        '',
    ];

    protected $description_lines = [
        '{NAME} هستم فروشنده عمده {CATEGORY} از نوع {PRODUCT}',
        'چه نوع {CATEGORY} نیاز دارید؟ بنده {NAME} هستم فروشنده ی عمده {CATEGORY}',
        '{CATEGORY} از نوع {PRODUCT} موجود داریم. {NAME} هستم فروشنده ی عمده',
        '{NAME} هستم. شما دنبال خرید عمده ی {CATEGORY} از نوع {PRODUCT} هستید؟',
    ];

    protected $call_to_action_lines = [
        'تصاویر محصول رو میتونید با زدن روی دکمه ی انتهای پیام ببینید.',
        'اگر قصد خرید دارید هم اینجا برای من پیام بذارید.',
        'برای انجام هماهنگی ها، هم اینجا پیام بذارید لطفا',
        'توضیح کامل و تصاویر محصول رو میتونید با زدن روی دکمه ی انتهای این پیام مشاهده کنید.',
        'لطفا بفرمایید چه مقداری نیاز دارید تا بتونم بهتر  شما رو راهنمایی کنم.',
        'چه تناژی قصد خرید دارید؟',
        'محصول با چه کیفیتی مورد نظرتون هست و در چه تناژی قصد خرید دارید؟',
        'تصاویر محصول و سایر توضیحات رو با زدن روی دکمه ی انتهای پیام می تونید مشاهده کنید.',
    ];

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
        $now = Carbon::now()->format('Y-m-d H:i:s');

        $all_category_ids = DB::table('categories')
                            ->whereNotNull('parent_id')
                            ->whereExists(function($q) use($now){
                                $q->select(DB::raw(1))
                                    ->from('leads')
                                    ->whereRaw("categories.id = leads.category_id and expiry_date > " ."'" . $now . "'");
                            })
                            ->select('id')
                            ->distinct()
                            ->get();

        foreach($all_category_ids as $item)
        {
            list($this->upper_lead_limit,$this->lower_lead_limit,$this->upper_time_limit,$this->lower_time_limit) = $this->get_category_lead_share_limits($item->id);
            $this->selected_products = [];

            if($this->upper_lead_limit == -1){
                continue;
            }

            DistributeCategoryLeads::dispatch($item->id,$this->upper_lead_limit,$this->lower_lead_limit,$this->upper_time_limit,$this->lower_time_limit,$this->time_frame);

            // $this->distribute_all_valid_leads($item->id);
        }  
        
    }

   

    protected function get_category_lead_share_limits($category_id)
    {
        $share_data = DB::table('lead_balancer_meta_datas')
                    ->where('category_id',$category_id)
                    ->where('is_base',false)
                    ->orderBy('updated_at')
                    ->get()
                    ->last();

        if(is_null($share_data))
        {
            return [-1,-1,-1,-1];
        }

        $first_category_time_limit = (integer)(($share_data->time_period * 24) / ($share_data->upper_limit));
        $second_category_time_limit = (integer)(($share_data->time_period * 24) / ($share_data->lower_limit));

        $this->time_frame = $share_data->time_period;

        $result = array(
            $share_data->upper_limit,
            $share_data->lower_limit,
            $first_category_time_limit,
            $second_category_time_limit
        );

        return $result;
    }

   
}
