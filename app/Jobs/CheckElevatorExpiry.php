<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Models\product;
use Carbon\Carbon;
use DB;

class CheckElevatorExpiry implements ShouldQueue
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
        $now = Carbon::now();
        
        // $product_records = product::where('is_elevated',true)
        //                         ->whereDate('elevator_expiry','<',$now)
        //                         ->where('confirmed',true) // to be sure
        //                         ->get();

        DB::table('products')->where('is_elevated',true)
                            ->whereDate('elevator_expiry','<',$now)
                            ->where('confirmed',true) // to be sure
                            ->update([
                                'is_elevated' => false
                            ]);
        
        // $product_records->each(function($product){
        //     DB::table('products') // in order to prevent from updating updated_at otherwise
        //         ->where('id',$product->id)//it will cause major problems in listing
        //         ->update([
        //             // 'updated_at' => $now,
        //             // 'elevator_expiry' => NULL,
        //             'is_elevated' => false
        //         ]);
        // });

        DB::table('products')->whereDate('elevator_expiry','<',Carbon::now()->subDays(1))
                                ->update([
                                    'elevator_expiry' => NULL, 
                                ]);
    }
}
