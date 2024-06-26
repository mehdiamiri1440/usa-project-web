<?php

namespace App\Http\Controllers\admin_panel;

use \Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\profile;
use App\Models\profile_media;
use App\Http\Controllers\Notification\sms_controller;
use App\Models\myuser;
use App\Http\Library\date_convertor;
use DB;

class admin_profile_controller extends Controller
{
    protected $profile_list_neccessary_fields = [
        'profiles.id',
        'profiles.created_at',
        'profiles.updated_at',
        'profiles.confirmed',
        'profiles.activity_domain',
        'profiles.myuser_id',
        'myusers.id as user_id',
        'first_name',
        'last_name',
        'is_buyer',
        'is_seller',
    ];
    
    protected $neccessary_user_fields_for_profile_list = [
        'myusers.id as user_id',
        'first_name',
        'last_name',
        'is_buyer',
        'is_seller',
    ];
    
    protected $media_neccessary_fields_array = [
      'id',
      'file_path',  
    ];
    
    protected $profile_confirmation_text = 'پروفایل کاربری شما در سامانه ی باسکول تایید شد.در صورت تمایل می توانید آگهی های خود را در سامانه ثبت کنید.';
    
    public function load_unconfirmed_profile_records(Request $request)
    {
        $unconfirmed_profile_records = $this->get_profile_records($request,false);
        
        return view('admin_panel.profile',[
           'profiles' => $unconfirmed_profile_records, 
           'confirmed' => false,
        ]);        
    }
    
    public function load_confirmed_profile_records(Request $request)
    {
        $confirmed_profile_records = $this->get_profile_records($request,true);
        
        return view('admin_panel.profile',[
           'profiles' => $confirmed_profile_records, 
           'confirmed' => true,
        ]); 
    }
    
    protected function get_profile_records($request,$confirm_status)
    {
        try{
            if($request->filled('search')){
                $search = $request->search;

                $search_array = explode(' ',$search);

                $search_expresion = '';
                foreach ($search_array as $text) {
                    $search_expresion .= "%$text%";
                }
            

            $profile_records = DB::table('profiles')
                                    ->join('myusers','myusers.id','=','profiles.myuser_id')
                                    ->where('profiles.confirmed',$confirm_status)
                                    ->where(function($q) use($search_expresion){
                                        $q = $q->where(DB::raw("CONCAT(myusers.first_name,' ',myusers.last_name)"),'like',$search_expresion);

                                        return $q;
                                    })
                                    ->orderBy('updated_at','desc')
                                    ->select($this->profile_list_neccessary_fields)
                                    ->paginate(10);

            }
            else{
                $profile_records = DB::table('profiles')
                    ->join('myusers','myusers.id','=','profiles.myuser_id')
                    ->where('profiles.confirmed',$confirm_status)
                    ->select($this->profile_list_neccessary_fields)
                    ->orderBy('updated_at','desc')
                    ->paginate(10);

            }

           
            
            $this->add_user_info_to_each_profile_record($profile_records);
            
            return $profile_records;
        }
        catch(\Exception $e) 
        {
            //
        }
    }
    
    protected function add_profile_related_media_to_each_record(&$profile_records)
    {
        $profile_records->each(function($profile_record){
           $related_media = profile_media::where('profile_id',$profile_record->id)
                                            ->select($this->media_neccessary_fields_array)
                                            ->get();
            
            $profile_record['media'] = $related_media; 
            
        });
    }
    
    protected function add_user_info_to_each_profile_record(&$profile_records)
    {
        $date_convertor_object = new date_convertor();
        
        $profile_records->each(function($profile_record) use($date_convertor_object){
            // $user_info =  myuser::where('id',$profile_record->myuser_id)
            //                         ->select($user_neccessary_fields_array)
            //                         ->get()
            //                         ->first();
            
            // $profile_record['user_info'] = $user_info;
            
            $profile_record->register_date = $date_convertor_object->get_persian_date($profile_record->created_at);
        });
    }
    
    //public
    public function load_profile_by_id($profile_id = null)
    {
        if($profile_id ==  null)
        {
            return redirect()->back();
        }
        
        $profile_record = profile::find($profile_id);
        
        $user_info = $this->add_user_info_to_profile_record($profile_record->myuser_id);
        
        $related_media = $this->add_related_media_to_profile_record($profile_record->id);
        
        return view('admin_panel.profileDetail',[
            'profile' => $profile_record,
            'user_info' => $user_info,
            'related_media' => $related_media,
        ]);
    }
    
    protected function add_user_info_to_profile_record($user_id)
    {
        $user_info = myuser::find($user_id);
        
        $date_convertor_object = new date_convertor();
        
        $user_info->register_date = $date_convertor_object->get_persian_date($user_info->created_at);
        
        return collect($user_info)->except('password');
    }
    
    protected function add_related_media_to_profile_record($profile_id)
    {
        $related_media = profile_media::where('profile_id',$profile_id)
                                ->select($this->media_neccessary_fields_array)
                                ->get();
        
        return $related_media;
    }
    
    public function admin_profile_confirmation(Request $request)
    {
        if($request->type == 'accept'){
            $user_id = $request->user_id;
            $profile_id = $request->profile_id;
            
            //confirm profile
            $profile_record = profile::find($profile_id);

            if($request->has('description')){
                $profile_record->description = strip_tags($request->description);
            }
            
            $profile_record->confirmed  = true;
            $profile_record->save();
            
            //send sms
            // $sms_controller_object = new sms_controller();
            // $sms_controller_object->send_status_sms_message($profile_record,$this->profile_confirmation_text);
            
            return redirect()->route('admin_panel_profile');
        }
        else if($request->type == 'reject')
        {
            //send sms
            //
            
            return redirect()->route('admin_panel_profile');
        }
    }
    
    public function admin_profile_related_photo_delete_by_id(Request $request)
    {
        $this->validate($request,[
           'photo_id' => 'required|numeric' 
        ]);
        
        $photo_id = $request->photo_id;
        
        try{
            $profile_media_record = profile_media::findOrFail($photo_id);
        }
        catch(\Exception $e)
        {
            return response()->json([
               'status' => false,
               'msg' => 'Delete Failed' 
            ]);
        }
        
        $profile_media_record->delete();
        
        return response()->json([
            'status' => true,
           'msg' => 'photo Deleted', 
        ]);
    }
    
}
