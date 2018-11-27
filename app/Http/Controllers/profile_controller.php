<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\myuser;
use App\profile;
use App\profile_media;
use App\category;

class profile_controller extends Controller
{
    protected $user = NULL;
    protected $user_id = NULL;
    protected $profile_fields_array = array(
        'description',
        'activity_domain',
        'related_activity_history',
        'human_resource_count',
        'profile_photo',
        'is_company',
        'company_name',
        'company_register_code',
        'public_phone',
        'address',
        'postal_code',
        'shaba_code',
    );
    
    protected $user_fields_exclude_array = [
        'phone',
        'password',
        'national_code',
        'interview_request',
    ];
    
    
    public function profile_modification(Request $request)
    {
        $validation_rules = $this->set_user_profile_modification_rules($request);
        $this->validate($request,$validation_rules);
        
        $user_id = session('user_id');
        
        $last_unconfirmed_profile_record = $this->get_user_last_profile_record(FALSE,$user_id); 
        
        if($last_unconfirmed_profile_record){
            $action = "Edit";
            $status = $this->change_user_profile_record($request,$last_unconfirmed_profile_record);
        }
        else{
            $last_confirmed_profile_record = $this->get_user_last_profile_record(TRUE,$user_id);
            
            if($last_confirmed_profile_record)
            {
                $action = "Edit";
                $profile_object = new profile();
                
                $this->copy_profile_object_fields_listed_in_profile_fields_array($profile_object,$last_confirmed_profile_record);
    
                $profile_object->confirmed = FALSE;
                
                $status = $this->change_user_profile_record($request,$profile_object,$last_confirmed_profile_record->id);
            }
            else{
                $action = "Insert";
                $action = "Insert";
                $profile_object = new profile();
                
                $status = $this->change_user_profile_record($request,$profile_object,NULL);
            }            
        }
             
    }
    
    protected function change_user_profile_record(&$request,$profile_record_object,$last_confirmed_profile_record_id = NULL)
    {
        $company_flag = false;
        //checking for all fields except files
        foreach($this->profile_fields_array as $field_name)
        {
            if($request->has($field_name)){
                
                if($field_name == 'is_company' && $request->$field_name == 0){
                    
                    $profile_record_object->company_name = '';
                    $profile_record_object->company_register_code = '';
                    
                    $profile_record_object->$field_name = $request->$field_name;
                    
                    $company_flag = true;
                }
                else{
                    if($field_name == 'company_name' || $field_name == 'company_register_code'){
                        if($company_flag == false){
                            $profile_record_object->$field_name = $request->$field_name;
                        }
                    }
                    else{
                        $profile_record_object->$field_name = $request->$field_name;
                    }
                    
                }
            }
        }
        
        //cheking for profile pic
        if($request->hasFile('profile_photo'))
        {
            $file_path = $this->store_photo_file($request->profile_photo,$directory_to_save = "profile_photos");
            
            $profile_record_object->profile_photo = $file_path;
        }
        
        if($request->filled('photos_to_remove'))
        {
            $photos_file_path = json_decode($request->photos_to_remove);
            
            foreach($photos_file_path as $photo_path)
            {
                $this->soft_delete_the_photo_from_profile_media($photo_path);
            }
        }
        
        try{
            $profile_record_object->myuser_id = session('user_id');
            $profile_record_object->save();
            
            if(!is_null($last_confirmed_profile_record_id))
            {
                $this->copy_old_profile_record_related_media_if_exist_into_new_record($last_confirmed_profile_record_id,$profile_record_object);   
            }
            
            $this->save_user_profile_other_images_beside_profile_image($request,'certificate_image_count','certificates',$profile_record_object);
            $this->save_user_profile_other_images_beside_profile_image($request,'related_image_count','relateds',$profile_record_object);
            
            return TRUE;
        }
        catch(\Exception $e)
        {
            return $e->getMessage();
        }
    }
    
    protected function set_user_profile_modification_rules($request)
    {
        $rules = [
            'description' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u|min:100|nullable',
            'activity_domain' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u|nullable',
            'related_activity_history' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9]+$/u|nullable',
            'human_resource_count' => 'regex:/^[0-9\x{06F0}-\x{06F9}]+$/u|nullable',
            'profile_photo' => 'image|mimes:png,jpg,jpeg|max:5000',
            'is_company' => 'required|boolean',
            'public_phone' => 'required|regex:/^[0-9\x{06F0}-\x{06F9}]+$/u|min:11',
            'postal_code' => 'digits:10|nullable',
            'shaba_code' => 'digits:24|nullable',
        ];
        
        if($request->is_company)
        {
            $rules['company_name'] =  'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\- ]+$/u';
            $rules['company_register_code'] = 'required|numeric';
        }
        
        if(($photos_count = $request->certificate_image_count) > 0){
            foreach(range(0, $photos_count - 1) as $index) {
                $rules['certificate_' . $index] = 'required|image|mimes:png,jpg,jpeg|max:5000';
            }
        }
        
        
        if(($photos_count = $request->related_image_count) > 0 ){
            foreach(range(0, $photos_count - 1) as $index) {
                $rules['related_' . $index] = 'required|image|mimes:png,jpg,jpeg|max:5000';
            }
        }
        
        return $rules;
    }
    
    protected function store_photo_file($photo_data,$directory_to_save)
    {
        $file_path = $photo_data->store($directory_to_save);
        
        return $file_path;
    }
    
    protected function get_user_last_profile_record($confirm_status ,$user_id)
    {   
        if($confirm_status !== null)
        {
              try{
                  $last_profile_record = profile::where('myuser_id',$user_id)
                            ->where('confirmed',$confirm_status)
                            ->get()
                            ->last(); 
              }
              catch(\Exception $e)
              {
                  return $e ;
              }
        }
        else{
            try{
                $last_profile_record = profile::where('myuser_id',$user_id)
                ->get()
                ->last();
            }
            catch(\Exception $e)
            {
                return $e;
            }            
        }
        
        return $last_profile_record;
    }
    
    protected function soft_delete_the_photo_from_profile_media($photo_path)
    {
        $photo_related_record = profile_media::where('file_path',$photo_path)
            ->delete();
    }
   
    protected function save_user_profile_other_images_beside_profile_image($request,$request_field_name,$directory_to_save,$profile_record_object)
    {
        list($image_prefix) = explode('_',$request_field_name); //example related_image_count, related is the image prefix in related_0 and so on
        
        if($request->filled($request_field_name))
        {
            $image_count = $request->$request_field_name ;

            for($index = 0 ; $index < $image_count ; $index++)
            {
                $image_name = "{$image_prefix}_{$index}";
                if($request->hasFile($image_name)){

                    $file_path = $this->store_photo_file($request->$image_name,$directory_to_save);

                    $photo  = new profile_media();
                    $photo->file_path = $file_path;
                    $profile_record_object->profile_media()->save($photo);
                } 
            }
        }
    }
    
    protected function copy_profile_object_fields_listed_in_profile_fields_array($profile_object_copy_to,$profile_object_copy_from)
    {
            foreach($this->profile_fields_array as $field_name)
            {
                $profile_object_copy_to->$field_name = $profile_object_copy_from->$field_name;
            }
    }
    
    protected function copy_old_profile_record_related_media_if_exist_into_new_record($old_profile_record_id,$new_profile_record)
    {
        $old_media_photos_path =  profile_media::where('profile_id',$old_profile_record_id)
                                            ->select('file_path')
                                            ->get();
        
        $old_media_count = $old_media_photos_path->count();
        
        foreach($old_media_photos_path as $key => $value)
        {
            $photo = new profile_media();
            $photo->file_path = $value->file_path;
            
            $new_profile_record->profile_media()->save($photo);
        }
    }
    
    //public method
    public function get_last_profile_info_with_all_related_content(Request $request)
    {   
        $confirmed_status = $request->confirmed;
        $result = array();
        
        if($confirmed_status == TRUE)
        {
            $user_id = null;
            if($request->filled('user_name')){ 
                $user_id = $this->get_user_id_for_the_user_name($request->user_name);
                if(!$user_id){
                    return response()->json([
                        'status' => false,
                        'msg' => "'{$request->user_name}' is not a valid user_name."
                    ],422);
                }
            }
            $user_id = $user_id ? $user_id : session('user_id');
            
            if(is_null($user_id)){
                return redirect()->route('login_page');
            }
            
            $last_confirmed_profile_record = $this->get_user_last_profile_record(TRUE,$user_id);
            
            $result = $this->fill_profile_related_data($last_confirmed_profile_record);
            
             $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);
        }
        else if($confirmed_status === FALSE){
            
            if(!session()->has('user_id'))
            {
                return redirect()->route('login_page');
            }
            $user_id = session('user_id');
            
            $last_unconfirmed_profile_record = $this->get_user_last_profile_record(FALSE,$user_id);
    
            $result = $this->fill_profile_related_data($last_unconfirmed_profile_record);
            $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);
        }
        else{
            if(!session()->has('user_id'))
            {
                return redirect()->route('login_page');
            }
            $user_id = session('user_id');
            
            $last_profile_record = $this->get_user_last_profile_record(null,$user_id);
            
            $result = $this->fill_profile_related_data($last_profile_record);            
            $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);
        }
        
        if($request->isMethod('post')){
            
            if($result['user_info']['id'] == session('user_id')){
                $request->session()->put('profile_photo',$result['profile_info']['profile_photo']);  
            }
            
            return response()->json([
                'status' => true,
                'profile' => $result['profile_info'],
                'user_info' => $result['user_info'],
                'certificates' => $result['certificates'],
                'relateds' => $result['relateds'],
            ],200);
        }
        else if($request->isMethod('get')){
            return view('profile',[
                'profile' => $result['profile_info'],
                'user_info' => $result['user_info'],
                'certificates' => $result['certificates'],
                'relateds' => $result['relateds'],
            ]);
        }
        
    }
    
    protected function get_user_id_for_the_user_name($user_name)
    {
        $user_info = myuser::where('user_name',$user_name)
            ->get()
            ->first();
        
        if($user_info)
        {
           return $user_info->id ; 
        }
        else return null;
        
    }
    
    protected function fill_profile_related_data(&$last_profile_record)
    {
        if($last_profile_record)
        {
            $certificates = profile_media::where('profile_id',$last_profile_record->id)
                                    ->where('file_path','like','%certificates%')
                                    ->select('file_path')
                                    ->get();
            $relateds    = profile_media::where('profile_id',$last_profile_record->id)
                                    ->where('file_path','like','%relateds%')
                                    ->select('file_path')
                                    ->get();
            
            $result['certificates'] = $this->get_file_path_array($certificates);
            $result['relateds'] = $this->get_file_path_array($relateds);
            
            if(session()->has('user_id'))
            {
                if(session('user_id') == $last_profile_record->myuser_id){
                    $result['profile_info'] = collect($last_profile_record); 
                }
                else{
                    $result['profile_info'] = collect($last_profile_record)->except('public_phone');     
                }
                  
            }
            else{
                //print_r(collect($last_profile_record)->except('public_phone'));
                $result['profile_info'] = collect($last_profile_record)->except('public_phone');
            }
        }
        else{
            $result['profile_info'] = [
                'company_name' => '',
                'company_register_code' => '',
                'address' => '',
                'public_phone' => '',
                'description' => '',
                'profile_photo' => '',
                'confirmed' => false,
            ];
            $result['certificates'] = null;
            $result['relateds'] = null;
        }
        
        return $result;
    }
    
    
    protected function get_file_path_array(&$records)
    {
        $result = array();
        
        foreach($records as $record){
            $result[] = $record->file_path;
        }
        
        return $result;
    }
    
    
    //public method
    public function get_last_profile_info_with_all_related_content_by_user_name(Request $request)
    {   
        $result = array();
        $user_id = $this->get_user_id_for_the_user_name($request->user_name);
        
        if(is_null($user_id)){
            return abort(404);
         }
        
        $last_confirmed_profile_record = $this->get_user_last_profile_record(TRUE,$user_id);
            
        $result = $this->fill_profile_related_data($last_confirmed_profile_record);
            
        $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);
        
        if(isset($result['user_info']['category_id'])){
            $activity_domain = category::find($result['user_info']['category_id'])->category_name;
        }
        else {
            $activity_domain = ' - ';
        }
        
        //add line break to description
        //$result['profile_info']['description'] = nl2br($result['profile_info']['description']);
        
        return response()->json([
            'profile' => $result['profile_info'],
            'user_info' => $result['user_info'],
            'certificates' => $result['certificates'],
            'relateds' => $result['relateds'],
            'activity_domain' => $activity_domain,
        ]);
        
    }
    
    
    
    
}