<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\province;
use Illuminate\Support\Facades\Cache;
use DB;

class location_controller extends Controller
{
    public function get_all_provinces_or_cities_in_the_province_in_iran(Request $request)
    {

        if (!$request->has('province_id')) {
            // $provinces = province::all();
            $provinces = Cache::remember(md5('provinces'),24 * 60 , function(){
                return DB::table('provinces')->get();
            });

            return response()->json([
                'status' => true,
                'provinces' => array_values($provinces->toArray()),
            ], 200);
        } else {
            $this->validate($request, [
                'province_id' => 'numeric|exists:cities,province_id',
            ]);

            $cities = Cache::remember(md5('cities'),24 * 60,function(){
                return DB::table('cities')->get();
            });

            $province_id = $request->province_id;

            // $province = province::find($province_id);

            // $province_related_cities = $province->city;
            $province_related_cities = $cities->filter(function($item) use($province_id){
                return $item->province_id == $province_id;
            });

            return response()->json([
                'status' => true,
                'cities' => array_values($province_related_cities->toArray()),
            ], 200);
        }
    }
}
