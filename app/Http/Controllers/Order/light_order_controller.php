<?php

namespace App\Http\Controllers\Order;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\light_order;
use DB;
use App\Models\product;

class light_order_controller extends Controller
{
    protected $order_validation_rules = [
        'quantity' => 'required|integer|min:1000',
        'unit_price' => 'required|integer|min:1000',
        'total_price' => 'required|integer|min:5000000',
        'delivery_address' => 'required|string',
        'postal_code' => 'string|min:10',
        'product_id' => 'required|exists:products,id',
        'seller_id' => 'required|exists:myusers,id',
        'buyer_id' => 'required|exists:myusers,id'
    ];

    public function create_new_order(Request $request)
    {
        $this->validate($request,$this->order_validation_rules);
        
        if($request->seller_id == $request->buyer_id){
            return response()->json([
                'status' => false,
                'msg' => 'invalid order'
            ],500);
        }

        $product = product::where('id',$request->product_id)
            ->where('confirmed',true)
            ->first();

        
        if($product){
            if(
                $product->myuser_id != $request->seller_id ||
                $product->direct_sell_permission == false ||
                $product->unit_price == null
                 ){
                return response()->json([
                    'status' => false,
                    'msg' => 'invalid order'
                ],500);
            }
        }
        else{
            return response()->json([
                'status' => false,
                'msg' => 'invalid order'
            ],500);
        }

        $order = new light_order();

        foreach(array_keys($this->order_validation_rules) as $filed_name)
        {
            if($request->filled($filed_name))
            {
                $order->$filed_name = $request->$filed_name;
            }
        }

        $order->status = '00000000'; // just started

        $order->save();

        return response()->json([
            'status' => true,
            'order_id' => $order->id,
            'msg' => 'order registered'
        ],201);
    }
}
