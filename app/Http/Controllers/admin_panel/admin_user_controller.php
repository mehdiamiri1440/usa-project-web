<?php

namespace App\Http\Controllers\admin_panel;


use \Illuminate\Http\Request;
use App\Models\admin_user;
use App\Http\Controllers\Controller;
use App\Models\myuser;
use App\Models\admin_note;
use DB;
use Carbon\carbon;
use App\Http\Library\date_convertor;
use Illuminate\Support\Facades\Cache;


class admin_user_controller extends Controller
{

    protected $admin_login_validation_rules = [
        'email' => "required|email",
        'password' => 'required'
    ];

    protected $user_validation_rules = [
        'first_name' => 'required|string',
        'last_name'  => 'required|string',
        'active_pakage_type' => 'required|integer|min:0|max:3',
        'extra_product_capacity' => 'required|integer|min:0',
        'extra_buyAd_reply_capacity' => 'required|integer|min:0',
        'wallet_balance' => 'required|integer|min:0',
        'user_id' => 'required|exists:myusers,id'
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

    public function load_user_list(Request $request)
    {
        $users = [];
        $date_convertor_object = new date_convertor();

        try{
            if($request->filled('search')){
                $search = $request->search;

                $search_array = explode(' ',$search);

                $search_expresion = '';
                foreach ($search_array as $text) {
                    $search_expresion .= "%$text%";
                }

                $users = DB::table('myusers')
                                ->where(DB::raw("concat(first_name,'',last_name)"),'like',$search_expresion)
                                ->orWhere('phone','like',$search_expresion)
                                ->orWhere('province','like',$search_expresion)
                                ->orWhere('city','like',$search_expresion)
                                ->orderBy('created_at','desc')
                                ->paginate(10);
            }
            else{
                $users = DB::table('myusers')->orderBy('created_at','desc')
                                ->paginate(10);
            }

            $users->each(function($user) use($date_convertor_object){
                // $user['note_count'] = admin_note::where('myuser_id',$user->id)
                //     ->get()
                //     ->count();
                $user->register_date = $date_convertor_object->get_persian_date($user->created_at);
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

    public function load_same_device_users($user_id)
    {
        $users = [];
        $date_convertor_object = new date_convertor();

        // try{
            $device_ids = DB::table('client_meta_datas')
                            ->where('myuser_id',$user_id)
                            ->whereNotNull('device_id')
                            ->distinct('device_id')
                            ->pluck('device_id');

            $users_ids = DB::table('myusers')
                            ->join('client_meta_datas','client_meta_datas.myuser_id','=','myusers.id')
                            ->where('myusers.id','<>',$user_id)
                            ->whereIn('client_meta_datas.device_id',$device_ids)
                            ->distinct('myusers.id')
                            ->pluck('myusers.id');

            $users = DB::table('myusers')->whereIn('id',$users_ids)
                            ->orderBy('created_at','desc')
                            ->paginate(10);


            $users->each(function($user) use($date_convertor_object){
                $user->register_date = $date_convertor_object->get_persian_date($user->created_at);
            });

        // }
        // catch(\Exception $e){
        //     //
        // }

        return view('admin_panel.userList',[
            'users' => $users
        ]);
    }

    public function clear_categories_cached_file()
    {
        Cache::forget(md5('categories'));
    }

    public function load_admin_users_list()
    {
        $users = DB::table('admin_users')->select([
            'id',
            'full_name',
            'email'
        ])->get();

        return view('admin_panel.adminUsersList',[
            'users' => $users
        ]);
    }

    public function add_new_admin_user(Request $request)
    {
        $this->validate($request,[
            'full_name' => 'required|string',
            'email' => 'required|string',
            'password' => 'required|string|min:8', 
        ]);

        $password = sha1($request->password);
        $now = Carbon::now();

        DB::table('admin_users')->insert([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'password' => $password,
            'created_at' => $now,
            'updated_at' => $now
        ]);

        return redirect()->route('load_admin_users_list');
    }

    public function load_admin_user_permission_setup_form($admin_user_id)
    {
        $permissions = DB::table('admin_routes')
                            ->leftJoin('admin_permissions',function($join) use($admin_user_id){
                                $join->on('admin_routes.id','=','admin_permissions.route_id')
                                            ->where('admin_permissions.admin_id',$admin_user_id);
                            })
                            ->selectRaw("admin_routes.*,admin_permissions.admin_id,admin_permissions.route_id,admin_permissions.confirmed")
                            // ->orderBy('admin_routes.id')
                            ->get();


        $permissions = $permissions->filter(function($item) use($admin_user_id){
            return ($item->admin_id == $admin_user_id && $item->confirmed == true) || is_null($item->admin_id);
        });

        return view('admin_panel.adminPermissionSetup',[
            'permissions' => $permissions,
            'admin_id' => $admin_user_id
        ]);
    }

    public function setup_admin_user_permissions(Request $request)
    {
        $this->validate($request,[
            'routes' => 'required|array',
            'admin_id' => 'required|exists:admin_users,id'
        ]);

        $routes_id_array = $request->routes;
        $admin_id = $request->admin_id;

        $admin_permissions = DB::table('admin_permissions')
                                    ->where('admin_id',$admin_id)
                                    ->where('confirmed',true)
                                    // ->whereNotIn('route_id',$routes_id_array)
                                    ->get();

        $removed_permissions = [];
        foreach($admin_permissions as $permission)
        {
            if(  in_array($permission->route_id,$routes_id_array) === false)
            {
                $removed_permissions[] = $permission->id;
            }
            
        }

        $new_granted_permission_records = [];
        $route_ids = $admin_permissions->pluck('route_id')->all();

        $now = Carbon::now();

        foreach($routes_id_array as $route_id)
        {
            if(in_array($route_id,$route_ids) === false)
            {
                $new_granted_permission_records[] = [
                    'created_at' => $now,
                    'updated_at' => $now,
                    'admin_id' => $admin_id,
                    'route_id' => $route_id,
                    'confirmed' => true
                ];  
            }
        }

        if($removed_permissions){
            DB::table('admin_permissions')
                    ->whereIn('id',$removed_permissions)
                    ->update([
                        'confirmed' => false
                    ]);
        }

        if($new_granted_permission_records){
            DB::table('admin_permissions')
                    ->insert($new_granted_permission_records);
        }
        

        return redirect()->route('load_admin_users_list');
    }

    public function get_admin_routes()
    {
        $route_collection = \Illuminate\Support\Facades\Route::getRoutes();

        $existing_routes = DB::table('admin_routes')
                                ->pluck('route')
                                ->all();

        $result = [];

        foreach ($route_collection as $value){
                $route = $value->getName();

                if(in_array($route,$existing_routes) == true){
                    continue;
                }

                $now = Carbon::now();

                $prefix = $value->getPrefix();
                $middlewares = $value->middleware();

                if($middlewares){
                    if(in_array('App\Http\Middleware\admin_login',$middlewares) == true && $prefix == '/admin'){
                        $action = $value->getAction();

                        if(isset($action['description'])){
                            $result[] = [
                                'route' => $route,
                                'description' => $action['description'],
                                'created_at' => $now,
                                'updated_at' => $now
                            ];
                        }
                    }
                }
        }


        if($result){
            DB::table('admin_routes')->insert($result);
        }
        
    }

    public function load_add_new_user_form()
    {
        return view('admin_panel.addNewAdminUser');
    }

    public function edit_user_info(Request $request)
    {
        $this->validate($request,$this->user_validation_rules);

        $tmp = [];
        foreach($this->user_validation_rules as $key => $value)
        {
            if($key != 'user_id'){
                $tmp[$key] = $request->$key;
            }
        }

        $user_id = $request->user_id;

        // DB::table('myusers')
        //     ->

    }

}