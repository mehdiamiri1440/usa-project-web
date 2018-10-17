<?php

namespace App\Http\Controllers\admin_panel;


use \Illuminate\Http\Request;
use App\admin_user;
use App\Http\Controllers\Controller;
use App\myuser;
use App\admin_note;
use DB;
use Carbon\carbon;
use App\Http\Library\date_convertor;


class admin_user_controller extends Controller
{

    protected $admin_login_validation_rules = [
        'email' => "required|email",
        'password' => 'required'
    ];

    public function login(Request $request)
    {
//        $login_try_count = session('login_try_count') + 1;
//        
//        if($this->is_user_ip_blocked()){
//            
//        }
        $this->validate($request,$this->admin_login_validation_rules);

        $email = $request->email;
        $hashed_password = sha1($request->password);

        $user_info = admin_user::where('email',$email)
            ->where('password',$hashed_password)
            ->get()
            ->first();

        if($user_info)
        {
            $this->create_user_session($user_info);

            return redirect()->route('admin_panel_profile');
        }
        else{
            return redirect()->back()->withErrors([
                'error' => 'The Username or Password is not valid!',
            ]);
        }
    }

    protected function create_user_session($user_info)
    {
        session([
            'admin_user_id' => $user_info->id,
            'admin_email' => $user_info->email,
            'admin_full_name' => $user_info->full_name,
        ]);
    }

    public function load_user_list()
    {
        $users = [];
        $date_convertor_object = new date_convertor();

        try{
            $users = myuser::all();

            $users->each(function($user) use($date_convertor_object){
                $user['note_count'] = admin_note::where('myuser_id',$user->id)
                    ->get()
                    ->count();
                $user['register_date'] = $date_convertor_object->get_persian_date_with_month_name($user->created_at);
            });
        }
        catch(\Exception $e){
            //
        }

        return view('admin_panel.userList',[
            'users' => $users
        ]);
    }

    public function load_user_notes_by_id($user_id)
    {
        $user_info = myuser::find($user_id);

        if($user_info){
            $notes = admin_note::where('myuser_id',$user_id)
                ->orderBy('created_at','desc')
                ->get();
            $date_convertor_object = new date_convertor();

            $notes->each(function($note) use($date_convertor_object){
                $note['date'] = $date_convertor_object->get_persian_date_with_month_name($note->created_at);
            });

            return view('admin_panel.userListDetail',[
                'user' => $user_info,
                'notes' => $notes,
            ]);
        }
        else{
            return abort(404);
        }

    }

    public function register_note_for_user(Request $request)
    {
        $this->validate($request,[
            'note' => 'required',
            'user_id' => 'required|integer|min:1'
        ]);

        $user_id = $request->user_id ;

        DB::table('admin_notes')->insert([
            'note' => $request->note,
            'created_at' => carbon::now(),
            'myuser_id' => $request->user_id,
        ]);

        return redirect()->route('admin_panel_load_user_notes_by_id',[
            'user_id' => $user_id
        ]);
    }

}