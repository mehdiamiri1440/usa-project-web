<?php

namespace App\Http\Controllers\Accounting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\myuser;
use App\Models\profile;
use App\Models\profile_media;
use App\Models\category;
use App\Models\product;
use App\Models\buyAd;
use App\Models\sell_offer;
use DB;
use App\Models\message;
use App\Http\Controllers\General\media_controller;
use App\Http\Controllers\Accounting\comment_controller;

class profile_controller extends Controller
{
    protected $user = null;
    protected $user_id = null;
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
        'extra_buyAd_reply_capacity',
        'pakage_start',
        'pakage_end',
        'credit',
        'created_at',
        'updated_at',
        'extra_product_capacity',
    ];

    protected $profile_fields_exclude_array = [
        'public_phone',
        'related_activity_history',
        'human_resource_count',
        'shaba_code',
        'created_at',
        'updated_at',
    ];

    public function profile_modification(Request $request)
    {
        $validation_rules = $this->set_user_profile_modification_rules($request);
        $this->validate($request, $validation_rules);

        $user_id = session('user_id');

        $last_unconfirmed_profile_record = $this->get_user_last_profile_record(false, $user_id);

        if ($last_unconfirmed_profile_record) {
            $action = 'Edit';
            $status = $this->change_user_profile_record($request, $last_unconfirmed_profile_record);
        } else {
            $last_confirmed_profile_record = $this->get_user_last_profile_record(true, $user_id);

            if ($last_confirmed_profile_record) {
                $action = 'Edit';
                $profile_object = new profile();

                $this->copy_profile_object_fields_listed_in_profile_fields_array($profile_object, $last_confirmed_profile_record);

                $profile_object->confirmed = false;

                $status = $this->change_user_profile_record($request, $profile_object, $last_confirmed_profile_record->id);
            } else {
                $action = 'Insert';
                $action = 'Insert';
                $profile_object = new profile();

                $status = $this->change_user_profile_record($request, $profile_object, null);
            }
        }
    }

    protected function change_user_profile_record(&$request, $profile_record_object, $last_confirmed_profile_record_id = null)
    {
        $company_flag = false;
        //checking for all fields except files
        foreach ($this->profile_fields_array as $field_name) {
            if ($request->has($field_name)) {
                if ($field_name == 'is_company' && $request->$field_name == 0) {
                    $profile_record_object->company_name = '';
                    $profile_record_object->company_register_code = '';

                    $profile_record_object->$field_name = $request->$field_name;

                    $company_flag = true;
                } else {
                    if ($field_name == 'company_name' || $field_name == 'company_register_code') {
                        if ($company_flag == false) {
                            $profile_record_object->$field_name = $request->$field_name;
                        }
                    } else {
                        $profile_record_object->$field_name = $request->$field_name;
                    }
                }
            }
        }

        //cheking for profile pic
        if ($request->hasFile('profile_photo')) {
            $file_path = $this->store_photo_file($request->profile_photo, $directory_to_save = 'profile_photos');

            $profile_record_object->profile_photo = $file_path;
        }

        if ($request->filled('photos_to_remove')) {
            $photos_file_path = json_decode($request->photos_to_remove);

            foreach ($photos_file_path as $photo_path) {
                $this->soft_delete_the_photo_from_profile_media($photo_path);
            }
        }

        try {
            $profile_record_object->myuser_id = session('user_id');
            $profile_record_object->save();

            if (!is_null($last_confirmed_profile_record_id)) {
                $this->copy_old_profile_record_related_media_if_exist_into_new_record($last_confirmed_profile_record_id, $profile_record_object);
            }

            $this->save_user_profile_other_images_beside_profile_image($request, 'certificate_image_count', 'certificates', $profile_record_object);
            $this->save_user_profile_other_images_beside_profile_image($request, 'related_image_count', 'relateds', $profile_record_object);

            return true;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    protected function set_user_profile_modification_rules($request)
    {
        $rules = [
            'description' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}\x{060C}\x{061B}\x{061F}\x{0640}\x{066A}\x{066B}\x{066C}_\.\-\:\(\)\A-Za-z0-9 ]+$/u|min:100|nullable',
            'activity_domain' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9 ]+$/u|nullable',
            'related_activity_history' => 'regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\-\0-9]+$/u|nullable',
            'human_resource_count' => 'regex:/^[0-9\x{06F0}-\x{06F9}]+$/u|nullable',
            'profile_photo' => 'image|mimes:png,jpg,jpeg|max:5000',
            'is_company' => 'required|boolean',
            'public_phone' => 'required|regex:/^[0-9\x{06F0}-\x{06F9}]+$/u|min:11',
            //'postal_code' => 'digits:10|nullable',
            //'shaba_code' => 'digits:24|nullable',
        ];

        if ($request->is_company) {
            $rules['company_name'] = 'required|regex:/^(?!.*[(@#!%$&*)])[\s\x{0600}-\x{06FF}_\.\- ]+$/u';
            $rules['company_register_code'] = 'required|numeric';
        }

        if (($photos_count = $request->certificate_image_count) > 0) {
            foreach (range(0, $photos_count - 1) as $index) {
                $rules['certificate_'.$index] = 'required|image|mimes:png,jpg,jpeg|max:5000';
            }
        }

        if (($photos_count = $request->related_image_count) > 0) {
            foreach (range(0, $photos_count - 1) as $index) {
                $rules['related_'.$index] = 'required|image|mimes:png,jpg,jpeg|max:5000';
            }
        }

        return $rules;
    }

    protected function store_photo_file($photo_data, $directory_to_save)
    {
        $file_path = $photo_data->store($directory_to_save);

        if($directory_to_save == 'profile_photos'){
            $media_controller_object = new media_controller();

            $thumbnail_path = storage_path('app/public/'.$file_path);
            $media_controller_object->create_thumbnail($thumbnail_path,150,150);
        }
        
        return $file_path;
    }

    protected function get_user_last_profile_record($confirm_status, $user_id)
    {
        if ($confirm_status !== null) {
            try {
                $last_profile_record = profile::where('myuser_id', $user_id)
                            ->where('confirmed', $confirm_status)
                            ->get()
                            ->last();
            } catch (\Exception $e) {
                return $e;
            }
        } else {
            try {
                $last_profile_record = profile::where('myuser_id', $user_id)
                ->get()
                ->last();
            } catch (\Exception $e) {
                return $e;
            }
        }

        return $last_profile_record;
    }

    protected function soft_delete_the_photo_from_profile_media($photo_path)
    {
        $photo_related_record = profile_media::where('file_path', $photo_path)
            ->delete();
    }

    protected function save_user_profile_other_images_beside_profile_image($request, $request_field_name, $directory_to_save, $profile_record_object)
    {
        list($image_prefix) = explode('_', $request_field_name); //example related_image_count, related is the image prefix in related_0 and so on

        if ($request->filled($request_field_name)) {
            $image_count = $request->$request_field_name;

            for ($index = 0; $index < $image_count; ++$index) {
                $image_name = "{$image_prefix}_{$index}";
                if ($request->hasFile($image_name)) {
                    $file_path = $this->store_photo_file($request->$image_name, $directory_to_save);

                    $photo = new profile_media();
                    $photo->file_path = $file_path;
                    $profile_record_object->profile_media()->save($photo);
                }
            }
        }
    }

    protected function copy_profile_object_fields_listed_in_profile_fields_array($profile_object_copy_to, $profile_object_copy_from)
    {
        foreach ($this->profile_fields_array as $field_name) {
            $profile_object_copy_to->$field_name = $profile_object_copy_from->$field_name;
        }
    }

    protected function copy_old_profile_record_related_media_if_exist_into_new_record($old_profile_record_id, $new_profile_record)
    {
        $old_media_photos_path = profile_media::where('profile_id', $old_profile_record_id)
                                            ->select('file_path')
                                            ->get();

        $old_media_count = $old_media_photos_path->count();

        foreach ($old_media_photos_path as $key => $value) {
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

        if ($confirmed_status == true) {
            $user_id = null;
            if ($request->filled('user_name')) {
                $user_id = $this->get_user_id_for_the_user_name($request->user_name);
                if (!$user_id) {
                    return response()->json([
                        'status' => false,
                        'msg' => "'{$request->user_name}' is not a valid user_name.",
                    ], 422);
                }
            }
            $user_id = $user_id ? $user_id : session('user_id');

            if (is_null($user_id)) {
                return redirect('/login');
            }

            $last_confirmed_profile_record = $this->get_user_last_profile_record(true, $user_id);

            $result = $this->fill_profile_related_data($last_confirmed_profile_record);

            $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);
        } elseif ($confirmed_status === false) {
            if (!session()->has('user_id')) {
                return redirect('/login');
            }
            $user_id = session('user_id');

            $last_unconfirmed_profile_record = $this->get_user_last_profile_record(false, $user_id);

            $result = $this->fill_profile_related_data($last_unconfirmed_profile_record);
            $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);
        } else {
            if (!session()->has('user_id')) {
                return redirect('/login');
            }
            $user_id = session('user_id');

            $last_profile_record = $this->get_user_last_profile_record(null, $user_id);

            $result = $this->fill_profile_related_data($last_profile_record);
            $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);
        }

        if ($request->isMethod('post')) {
            if ($result['user_info']['id'] == session('user_id')) {
                $request->session()->put('profile_photo', $result['profile_info']['profile_photo']);
            }

            return response()->json([
                'status' => true,
                'profile' => $result['profile_info'],
                'user_info' => $result['user_info'],
                'certificates' => $result['certificates'],
                'relateds' => $result['relateds'],
            ], 200);
        } elseif ($request->isMethod('get')) {
            return view('profile', [
                'profile' => $result['profile_info'],
                'user_info' => $result['user_info'],
                'certificates' => $result['certificates'],
                'relateds' => $result['relateds'],
            ]);
        }
    }

    protected function get_user_id_for_the_user_name($user_name)
    {
        $user_info = myuser::where('user_name', $user_name)
            ->get()
            ->first();

        if ($user_info) {
            return $user_info->id;
        } else {
            return null;
        }
    }

    protected function fill_profile_related_data(&$last_profile_record)
    {
        if ($last_profile_record) {
            $certificates = profile_media::where('profile_id', $last_profile_record->id)
                                    ->where('file_path', 'like', '%certificates%')
                                    ->select('file_path')
                                    ->get();
            $relateds = profile_media::where('profile_id', $last_profile_record->id)
                                    ->where('file_path', 'like', '%relateds%')
                                    ->select('file_path')
                                    ->get();

            $result['certificates'] = $this->get_file_path_array($certificates);
            $result['relateds'] = $this->get_file_path_array($relateds);

            if (session()->has('user_id')) {
                if (session('user_id') == $last_profile_record->myuser_id) {
                    $result['profile_info'] = collect($last_profile_record);
                } else {
                    $result['profile_info'] = collect($last_profile_record)
                                                ->except($this->profile_fields_exclude_array);
                }
            } else {
                $result['profile_info'] = collect($last_profile_record)
                                                ->except($this->profile_fields_exclude_array);
            }
        } else {
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

        foreach ($records as $record) {
            $result[] = $record->file_path;
        }

        return $result;
    }

    //public method
    public function get_last_profile_info_with_all_related_content_by_user_name(Request $request)
    {
        $result = array();
        $user_id = $this->get_user_id_for_the_user_name($request->user_name);

        if (is_null($user_id)) {
            return abort(404);
        }

        $last_confirmed_profile_record = $this->get_user_last_profile_record(true, $user_id);

        $result = $this->fill_profile_related_data($last_confirmed_profile_record);

        $result['user_info'] = collect(myuser::find($user_id))
                ->except($this->user_fields_exclude_array);

        if (isset($result['user_info']['category_id'])) {
            $activity_domain = category::find($result['user_info']['category_id'])->category_name;
        } else {
            $activity_domain = ' - ';
        }

        return response()->json([
            'profile' => $result['profile_info'],
            'user_info' => $result['user_info'],
            'certificates' => $result['certificates'],
            'relateds' => $result['relateds'],
            'activity_domain' => $activity_domain,
        ]);
    }

    //public method
    public function get_user_statistics_by_user_name(Request $request)
    {
        $this->validate($request, [
            'user_name' => 'required|alphadash',
        ]);

        $user_record = myuser::where('user_name', $request->user_name)
                            ->get()
                            ->first();

        if (!$user_record) {
            return abort(404);
        }

        $user_id = $user_record->id;

        if ($user_record->is_seller) {
            $user_statistics = $this->get_seller_statistics($user_id, $user_record->active_pakage_type);
        } elseif ($user_record->is_buyer) {
            $user_statistics = $this->get_buyer_statistics($user_id);
        } else {
            return response()->json([
                'status' => false,
                'msg' => 'user type is undefined!',
            ], 500);
        }

        return response()->json([
            'status' => true,
            'statistics' => $user_statistics,
        ], 200);
    }

    protected function get_buyer_statistics($user_id)
    {
        $buyAd_records = buyAd::where('myuser_id', $user_id)
                                ->where('confirmed', true)
                                ->select('id')
                                ->get();

        $buyAd_count = $buyAd_records->count();

        $transaction_count = sell_offer::wherein('buy_ad_id', $buyAd_records)
                                    ->where('transaction_status', '0000000011111111')
                                    ->get()
                                    ->count();

        $reputation_controller_object = new reputation_controller();

        $reputation_score = $reputation_controller_object->calculate_user_reputation_score($user_id);

        $response_rate = $this->get_user_response_rate($user_id);

        $user_comment_controller = new comment_controller();
        $rating_info = $user_comment_controller->get_user_avg_rating_score($user_id);

        $result_array = [
            'buyAd_count' => $buyAd_count,
            'transaction_count' => $transaction_count,
            'reputation_score' => $reputation_score,
            'response_rate' => $response_rate,
            'rating_info' => $rating_info,
        ];

        return $result_array;
    }

    protected function get_seller_statistics($user_id, $user_active_pakage_type)
    {
        $product_count = product::where('myuser_id', $user_id)
                                    ->where('confirmed', true)
                                    ->select('id')
                                    ->get()
                                    ->count();
        $transaction_count = sell_offer::where('myuser_id', $user_id)
                                            ->where('transaction_status', '0000000011111111')
                                            ->select('id')
                                            ->get()
                                            ->count();

        $reputation_controller_object = new reputation_controller();
        $reputation_score = $reputation_controller_object->calculate_user_reputation_score($user_id);

        $response_rate = $this->get_user_response_rate($user_id);

        $user_comment_controller = new comment_controller();
        $rating_info = $user_comment_controller->get_user_avg_rating_score($user_id);

        $result_array = [
            'product_count' => $product_count,
            'transaction_count' => $transaction_count,
            'reputation_score' => $reputation_score,
            'validated_seller' => config("subscriptionPakage.type-$user_active_pakage_type.validated-seller"),
            'response_rate' => $response_rate,
            'rating_info' => $rating_info
        ];

        return $result_array;
    }

    public function add_a_confirmed_profile_record_for_user($user)
    {
        $profile_record = new profile();

        $profile_record->public_phone = $user->phone;
        $profile_record->is_company = false;
        $profile_record->confirmed = true;
        $profile_record->myuser_id = $user->id;
        $profile_record->address = $user->province.' - '.$user->city;

        $user_role = $this->get_user_role_string($user);

        $profile_record->description = "من $user_role محصولات کشاورزی در سامانه ی باسکول هستم. برای ارتباط با من رو دکمه ی ارسال پیام کلیک کنید. خوشحال می شوم اگر پروفایل من را با دوستان خود به اشتراک بگذارید.";

        $profile_record->save();
    }

    protected function get_user_role_string(&$user)
    {
        if ($user->is_buyer) {
            return 'خریدار';
        } else {
            return 'فروشنده';
        }
    }

    //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    public function migrate_users()
    {
        $users = myuser::all();

        $users->each(function ($user) {
            $user_unconfirmed_profile_records = profile::where('myuser_id', $user->id)
                                            ->where('confirmed', false)
                                            ->get();

            if ($user_unconfirmed_profile_records->count() > 0) {
                $user_unconfirmed_profile_records->each(function ($profile_record) use ($user) {
                    $this->add_a_confirmed_profile_record_for_user_migration($user, $profile_record);
                });
            } else {
                $this->add_a_confirmed_profile_record_for_user_migration($user);
            }
        });
    }

    protected function add_a_confirmed_profile_record_for_user_migration($user, $profile_record = null)
    {
        if ($profile_record == null) {
            $profile_record = new profile();

            $profile_record->public_phone = $user->phone;
            $profile_record->is_company = false;
            $profile_record->confirmed = true;
            $profile_record->myuser_id = $user->id;
            $profile_record->address = $user->province.' - '.$user->city;

            $user_role = $this->get_user_role_string($user);

            $profile_record->description = "من $user_role محصولات کشاورزی در سامانه ی باسکول هستم. برای ارتباط با من رو دکمه ی ارسال پیام کلیک کنید. خوشحال می شوم اگر پروفایل من را با دوستان خود به اشتراک بگذارید.";

            $profile_record->save();
        } else {
            $profile_record->public_phone = $user->phone;
            $profile_record->is_company = false;
            $profile_record->confirmed = true;
            $profile_record->myuser_id = $user->id;
            $profile_record->address = $user->province.' - '.$user->city;

            $user_role = $this->get_user_role_string($user);

            $profile_record->description = "من $user_role محصولات کشاورزی در سامانه ی باسکول هستم. برای ارتباط با من رو دکمه ی ارسال پیام کلیک کنید. خوشحال می شوم اگر پروفایل من را با دوستان خود به اشتراک بگذارید.";

            $profile_record->save();

            $this->remove_related_profile_media_photos($profile_record->id);
        }
    }

    protected function remove_related_profile_media_photos($profile_id)
    {
        profile_media::where('profile_id', $profile_id)
                        ->delete();
    }

    //public method
    public function get_user_last_confirmed_profile_photo(Request $request)
    {
        $this->validate($request, [
            'user_id' => 'required|integer',
        ]);

        $profile_photo = profile::where('myuser_id', $request->user_id)
                            ->where('confirmed', true)
                            ->select('profile_photo')
                            ->get()
                            ->last()
                            ->profile_photo;

        return response()->json([
            'status' => true,
            'profile_photo' => $profile_photo,
        ], 200);
    }

    //public method
    public function increment_user_profile_visit_count(Request $request)
    {
        $this->validate($request, [
           'user_name' => 'required|string|exists:myusers,user_name',
        ]);

        $user_name = $request->user_name;

        print_r(session()->all());

        if (session()->has('visited_profiles')) {
            $user_names = session('visited_profiles');

            var_dump($user_names);

            if (!in_array($user_name, $user_names)) {
                DB::table('myusers')
                    ->where('user_name', $user_name)
                    ->increment('profile_visit');

                array_push($user_names, $user_name);
                var_dump($user_names);
//                \Session::forget('visited_profiles'); //can't be removed
                session(['visited_profiles' => $user_names]);
                var_dump(session('visited_profiles'));
            }
        } else {
            DB::table('myusers')
                ->where('user_name', $user_name)
                ->increment('profile_visit');
//            session(['visited_profiles' => [$user_name]]);
            session(['visited_profiles' => array($user_name)]);
            print_r(session('visited_profiles'));
        }
    }

    protected function get_user_response_rate($user_id)
    {
        $total_contacts_count = message::where('receiver_id', $user_id)
                                            ->select('sender_id')
                                            ->distinct()
                                            ->get()
                                            ->count();
        if ($total_contacts_count == 0) {
            return 0;
        }
        $seen_by_user_contacts_count = message::where('receiver_id', $user_id)
                                            ->where('is_read', true)
                                            ->select('sender_id')
                                            ->distinct()
                                            ->get()
                                            ->count();

        return round(($seen_by_user_contacts_count / $total_contacts_count) * 100, 2);
    }
}
