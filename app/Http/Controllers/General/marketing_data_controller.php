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
        $users = $this->get_ten_users_with_active_package_type_three_in_random_order();

        $users->each(function($user){

            $user->profile_photo = $this->get_user_profile_photo_if_confirmed($user->id);

            unset($user->id);
        });

        return response()->json([
            'status' => true,
            'users' => $users
        ],200);
    }

    protected function get_ten_users_with_active_package_type_three_in_random_order()
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

        return $users;
    }

    protected function get_user_profile_photo_if_confirmed($user_id)
    {
        $profile_photo = DB::table('profiles')
                                        ->where('myuser_id',$user_id)
                                        ->where('confirmed',true)
                                        ->get()
                                        ->last()
                                        ->profile_photo;

        return $profile_photo;
    }
}
