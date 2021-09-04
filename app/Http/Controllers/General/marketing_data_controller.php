<?php

namespace App\Http\Controllers\General;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class marketing_data_controller extends Controller
{
    ///////////////////////
    public function get_special_users_info()
    {
        $users = DB::table('myusers')
                    ->where('active_pakage_type',3)
                    ->select([
                        'first_name',
                        'last_name',
                        'province',
                        'city',
                        'id'
                    ])
                    ->inRandomOrder()
                    ->take(10)
                    ->get();

        $users->each(function($user){
            $user->profile_photo = DB::table('profiles')
                                        ->where('myuser_id',$user->id)
                                        ->where('confirmed',true)
                                        ->get()
                                        ->last()
                                        ->profile_photo;
            unset($user->id);
        });

        return response()->json([
            'status' => true,
            'users' => $users
        ],200);
    }
}
