<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Carbon\Carbon;

class admin_payment_controller extends Controller
{
    public function get_payment_logs(Request $request)
    {
        if($request->filled('search')){

            $search = $request->search;

            $search_array = explode(' ',$search);

            $search_expresion = '';
            foreach ($search_array as $text) {
                $search_expresion .= "%$text%";
            }
            
            $logs = DB::table('payment_logs')
                    ->join('myusers','myusers.id','=','payment_logs.myuser_id')
                    ->join('gateway_transactions','gateway_transactions.id','=','payment_logs.transaction_id')
                    ->where(function($q) use($search_expresion){
                        $q = $q->where(DB::raw("CONCAT(myusers.first_name,' ',myusers.last_name)"),'like',$search_expresion);

                        return $q;
                    })
                    ->select([
                        'payment_logs.pay_for',
                        'payment_logs.client',
                        'myusers.first_name',
                        'myusers.last_name',
                        'myusers.created_at',
                        'myusers.phone as phone',
                        'gateway_transactions.status',
                        'gateway_transactions.price',
                        'gateway_transactions.created_at'
                    ])
                    ->orderBy('gateway_transactions.created_at','desc')
                    ->paginate(10);
        }
        else{
            $logs = DB::table('payment_logs')
                    ->join('myusers','myusers.id','=','payment_logs.myuser_id')
                    ->join('gateway_transactions','gateway_transactions.id','=','payment_logs.transaction_id')
                    ->select([
                        'payment_logs.pay_for',
                        'payment_logs.client',
                        'myusers.first_name',
                        'myusers.last_name',
                        'myusers.created_at',
                        'myusers.phone as phone',
                        'gateway_transactions.status',
                        'gateway_transactions.price',
                        'gateway_transactions.created_at'
                    ])
                    ->orderBy('gateway_transactions.created_at','desc')
                    ->paginate(10);
        }
        
        
        return view('admin_panel.paymentLogs',[
            'payments' => $logs
        ]);
    }

    public function get_potential_paying_users_list()
    {
        $unpayed_records = DB::table('payment_logs')
                    ->join('myusers','myusers.id','=','payment_logs.myuser_id')
                    ->join('gateway_transactions','gateway_transactions.id','=','payment_logs.transaction_id')
                    ->whereBetween('gateway_transactions.created_at',[Carbon::now()->subDays(60),Carbon::now()])
                    ->where('payment_logs.pay_for','like','%package%')
                    ->where('gateway_transactions.status','<>','SUCCEED')
                    ->selectRaw("count(payment_logs.id) as cnt,payment_logs.client,myusers.first_name,myusers.last_name,myusers.created_at as register_date,myusers.phone,gateway_transactions.created_at")
                    ->groupBy('payment_logs.myuser_id')
                    ->havingRaw("cnt >= 2")
                    ->orderByRaw('gateway_transactions.created_at desc,cnt')
                    ->get();
        
        return view('admin_panel.potentialPayingUsersList',[
            'payments' => $unpayed_records
        ]);
    }

    public function get_package_expiring_customers_list()
    {
        $records = DB::table('myusers')
                    ->where('active_pakage_type','>',0)
                    ->whereBetween('pakage_end',[Carbon::now()->subDays(7),Carbon::now()])
                    ->select([
                        'id',
                        'first_name',
                        'last_name',
                        'active_pakage_type',
                        'pakage_end',
                        'created_at',
                        'phone'
                    ])
                    ->paginate(10);

        return view('admin_panel.packageExpiringUsers',[
            'payments' => $records
        ]);
    }
}
