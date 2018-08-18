<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class payment_controller extends Controller
{
    public function do_payment(Request $request)
    {
        $this->validate($request,[
           'amount' => 'required|integer|min:1000', 
        ]);
        
        //do payment stuff
        return redirect()->back();
    }
    
    public function payment_callback()
    {
        //code here
        return redirect()->back();
    }
}