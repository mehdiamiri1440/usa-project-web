<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use App\Models\verification_photo;
use App\Http\Library\date_convertor;

class admin_verification_controller extends Controller
{
    public function load_unverified_documents()
    {
        $user_ids = verification_photo::whereNull('deleted_at')
                        ->orderBy('created_at','desc')
                        ->select('myuser_id as id')
                        ->distinct()
                        ->get();

        // dd(array_values($user_ids->toArray()[0]));

        $users = DB::table('myusers')
                        ->join('verification_photos','verification_photos.myuser_id','=','myusers.id')
                        ->whereIn('myusers.id',array_values($user_ids->toArray()))
                        ->where('is_verified',false)
                        ->select([
                            'myusers.id',
                            'myusers.first_name',
                            'myusers.last_name',
                            'verification_photos.created_at as created_at',
                            'myusers.phone',
                            'myusers.active_pakage_type'
                        ])->distinct('myusers.id')
                        ->orderBy('verification_photos.created_at','desc')
                        ->get();
        
        $date_convertor_object = new date_convertor();

        $users->each(function($user) use($date_convertor_object){
            $user->register_date = $date_convertor_object->get_persian_date($user->created_at);
        });

        return view('admin_panel.unverifiedUserList',[
            'users' => $users
        ]);
    }

    public function load_user_documents_by_id($id)
    {
        $user = DB::table('myusers')
                        ->join('profiles','myusers.id','=','profiles.myuser_id')
                        ->where('myusers.id',$id)
                        ->where('profiles.confirmed',true)
                        ->select([
                            'myusers.*',
                            'profiles.company_name',
                            'profiles.company_register_code',
                            'profiles.description'
                        ])
                        ->get()
                        ->last();

        $photos = verification_photo::where('myuser_id',$id)
                        ->get();

        return view('admin_panel.unverifiedUserDetails',[
            'user' => $user,
            'photos' => $photos
        ]);
    }

    public function delete_verification_photo_by_id(Request $request)
    {
        $this->validate($request,[
            'photo_id' => 'required|exists:verification_photos,id'
        ]);

        verification_photo::find($request->photo_id)->delete();

        return response()->json([
            'status' => true,
            'msg' => 'photo deleted!'
        ]);
    }

    public function verify_user_account(Request $request)
    {
        $this->validate($request,[
            'user_id' => 'required|exists:myusers,id'
        ]);

        $user_id = $request->user_id;

        try{
            DB::table('myusers')
                ->where('id',$user_id)
                ->update([
                    'is_verified' => 1
                ]);

            return response()->json([
                'status' => $user_id,
                'msg' => 'user verified!'
            ]);
        }
        catch(\Exception $e){
            return response()->json([
                'status' => false
            ],500);
        }
        
    }
}
