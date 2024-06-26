<?php

namespace App\Http\Controllers\admin_panel;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\buyAd;
use App\Models\buyAd_media;
use App\Models\category;
use DB;
use App\Http\Controllers\Notification\sms_controller;
use App\Http\Library\date_convertor;
use App\Jobs\NotifySellersIfANewRelatedBuyAdRegistered;
use Carbon\Carbon;

class admin_buyAd_controller extends Controller
{
    protected $buyAd_list_neccessary_fields_array = [
        'buy_ads.id',
        'buy_ads.name',
        'buy_ads.confirmed',
        'buy_ads.created_at',
        'buy_ads.category_id',
        'myusers.first_name',
        'myusers.last_name',
    ];

    protected $buyAd_detail_fields_array = [
        'buy_ads.id',
        'buy_ads.created_at',
        'buy_ads.name',
        'buy_ads.requirement_amount',
        'buy_ads.price',
        'buy_ads.description',
        'buy_ads.address',
        'buy_ads.confirmed',
        'buy_ads.pack_type',
        'categories.category_name as subcategory_name',
        'categories.parent_id',
        'cities.city_name',
        'provinces.province_name',
    ];

    protected $buyAd_validation_rules = [
        'requirement_amount' => 'numeric',
        'price' => 'numeric',
    ];

    protected $buyAd_editable_fields = [
        'name',
        'requirement_amount',
        'price',
        'address',
        'pack_type',
        'description',
        'category_id',
    ];

    protected $buyAd_confirmation_sms_text = 'آگهی خرید شما در سامانه ی باسکول تایید گردید.';

    public function load_unconfirmed_buyAd_list(Request $request)
    {
        $unconfirmed_buyAd_list = $this->get_buyAd_list($confirm_status = 0,$request);

        $this->add_categories_to_buyAd_list($unconfirmed_buyAd_list);

        return view('admin_panel.buyAd', [
            'buyAds' => $unconfirmed_buyAd_list,
            'confirmed' => false,
        ]);
    }

    public function load_confirmed_buyAd_list(Request $request)
    {
        $confirmed_buyAd_list = $this->get_buyAd_list($confirm_status = 1,$request);

        $this->add_categories_to_buyAd_list($confirmed_buyAd_list);

        return view('admin_panel.buyAd', [
             'buyAds' => $confirmed_buyAd_list,
             'confirmed' => true,
        ]);
    }

    protected function get_buyAd_list($confirm_status,&$request)
    {
        if($request->filled('search')){
            $search = $request->search;

            $search_array = explode(' ',$search);

            $search_expresion = '';
            foreach ($search_array as $text) {
                $search_expresion .= "%$text%";
            }

            $list = DB::table('buy_ads')
                        ->join('myusers', 'buy_ads.myuser_id', '=', 'myusers.id')
                        ->where('buy_ads.confirmed', $confirm_status)
                        ->where(function($q) use($search_expresion){
                            return $q = $q->where('name','like',$search_expresion)
                                            ->orWhere(DB::raw("CONCAT(myusers.first_name,' ',myusers.last_name)"),'like',$search_expresion);
                        })
                        ->select($this->buyAd_list_neccessary_fields_array)
                        ->orderBy('buy_ads.created_at', 'desc')
                        ->paginate(10);

        }
        else{
            $list = DB::table('buy_ads')
                        ->join('myusers', 'buy_ads.myuser_id', '=', 'myusers.id')
                        ->where('buy_ads.confirmed', $confirm_status)
                        ->select($this->buyAd_list_neccessary_fields_array)
                        ->orderBy('buy_ads.created_at', 'desc')
                        ->paginate(10);
        }

        return $list;
    }

    protected function add_categories_to_buyAd_list(&$buyAd_list)
    {
        $date_convertor_object = new date_convertor();

        $buyAd_list->each(function ($buyAd) use ($date_convertor_object) {
            $sub_category_record = category::find($buyAd->category_id);
            $category_record = category::find($sub_category_record->parent_id);

            $buyAd->created_at = $date_convertor_object->get_persian_date($buyAd->created_at);

            $buyAd->sub_category_name = $sub_category_record->category_name;
            $buyAd->category_name = $category_record->category_name;
        });
    }

    public function load_unconfirmed_buyAd_by_id($buyAd_id)
    {
        if (!is_numeric($buyAd_id)) {
            return redirect()->route()->back();
        }

        $buyAd_record_with_related_data = $this->get_buyAd_by_id_with_related_data($buyAd_id, 0);

        $buyAd_media_records = buyAd_media::where('buy_ad_id', $buyAd_id)
            ->select(['id', 'file_path'])
            ->get();

        $category_record = category::find($buyAd_record_with_related_data->parent_id);
        $super_category_record = category::find($category_record->parent_id);

        return view('admin_panel.buyAdDetail', [
           'buyAd' => $buyAd_record_with_related_data,
           'related_media' => $buyAd_media_records,
           'category_record' => $category_record,
           'super_category_record' => $super_category_record
        ]);
    }

    public function load_confirmed_buyAd_by_id($buyAd_id)
    {
        if (!is_numeric($buyAd_id)) {
            return redirect()->route()->back();
        }

        $buyAd_record_with_related_data = $this->get_buyAd_by_id_with_related_data($buyAd_id, 1);

        $buyAd_media_records = buyAd_media::where('buy_ad_id', $buyAd_id)
            ->select(['id', 'file_path'])
            ->get();

        $category_record = category::find($buyAd_record_with_related_data->parent_id);
        $super_category_record = category::find($category_record->parent_id);

        return view('admin_panel.buyAdDetail', [
           'buyAd' => $buyAd_record_with_related_data,
           'related_media' => $buyAd_media_records,
           'category_record' => $category_record,
           'super_category_record' => $super_category_record
        ]);
    }

    protected function get_buyAd_by_id_with_related_data($buyAd_id, $confirm_status)
    {
        $buyAd_with_related_data = DB::table('buy_ads')
                                                    ->join('categories', 'buy_ads.category_id', '=', 'categories.id')
                                                    ->leftJoin('cities', 'cities.id', '=', 'buy_ads.city_id')
                                                    ->leftJoin('provinces', 'provinces.id', '=', 'cities.province_id')
                                                    ->select($this->buyAd_detail_fields_array)
                                                    ->where('buy_ads.id', $buyAd_id)
                                                    ->where('confirmed', $confirm_status)
                                                    ->get()
                                                    ->first();

        return $buyAd_with_related_data;
    }

    public function admin_buyAd_confirmation(Request $request)
    {
        if ($request->type == 'accept') {
            $buyAd_id = $request->buyAd_id;

            $buyAd_record = buyAd::find($buyAd_id);

            $user_id = $buyAd_record->myuser_id;

            foreach ($this->buyAd_editable_fields as $field_name) {
                if (!is_null($request->$field_name)) {
                    $buyAd_record->$field_name = $request->$field_name;
                }
            }

            $buyAd_record->confirmed = true;

            $buyAd_record->save();

            //send SMS
            // $sms_controller_object = new sms_controller();
            // $sms_controller_object->send_status_sms_message($buyAd_record,$this->buyAd_confirmation_sms_text);
            NotifySellersIfANewRelatedBuyAdRegistered::dispatch($buyAd_record);

            $this->register_lead_info($buyAd_record);

            return redirect()->route('admin_panel_buyAd');
        } elseif ($request->type == 'reject') {
            //send SMS
            return redirect()->route('admin_panel_buyAd');
        }
    }

    public function admin_buyAd_edit(Request $request)
    {
        $buyAd_id = $request->buyAd_id;

        $buyAd_record = buyAd::find($buyAd_id);

        foreach ($this->buyAd_editable_fields as $field_name) {
            if (!is_null($request->$field_name)) {
                $buyAd_record->$field_name = $request->$field_name;
            }
        }

        $buyAd_record->save();

        return redirect()->route('admin_panel_buyAd_list');
    }

    protected function send_sms($msg, $link, $phone_number)
    {
        $msg = $msg."\n $link\n";

        try {
            Smsir::sendToCustomerClub($msg, $phone_number);
        } catch (\Exception $e) {
        }
    }

    public function admin_buyAd_photo_delete_by_id(Request $request)
    {
        $this->validate($request, [
           'photo_id' => 'required|numeric',
        ]);

        $photo_id = $request->photo_id;

        try {
            $buyAd_media_record = buyAd_media::findOrFail($photo_id);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
               'msg' => 'Failde',
            ]);
        }

        $buyAd_media_record->delete();

        return response()->json([
            'status' => true,
           'msg' => 'photo deleted',
        ]);
    }

    protected function register_lead_info($buyAd)
    {
        $recent_leads_count_in_this_category = DB::table('leads')
                                        ->whereBetween('created_at',[Carbon::now()->subDays(1),Carbon::now()])
                                        ->where('category_id',$buyAd->category_id)
                                        ->where('buyer_id',$buyAd->myuser_id)
                                        ->get()
                                        ->count();

        if($recent_leads_count_in_this_category > 0){
            return null;
        }

        $leads = [];
        $expiry_date = Carbon::now()->addDays(2); // 2 days after buyAd register
    
        for($i = 0 ; $i < $buyAd->reply_capacity ; $i++)
        {
            $lead = [];

            $lead['buyer_id'] = $buyAd->myuser_id;
            $lead['lead_class_id'] = 1;
            $lead['expiry_date'] = $expiry_date;
            $lead['category_id'] = $buyAd->category_id;
            $lead['keywords'] = $buyAd->name;
            $lead['created_at'] = $buyAd->created_at;
            $lead['updated_at'] = $buyAd->created_at;

            $leads[] = $lead;
        }

        DB::table('leads')->insert($leads);
    }
}
