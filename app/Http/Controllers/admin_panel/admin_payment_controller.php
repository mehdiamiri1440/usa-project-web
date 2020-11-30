<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

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
                    ->paginate(10);
        }
        
        
        return view('admin_panel.paymentLogs',[
            'payments' => $logs
        ]);
    }
}
