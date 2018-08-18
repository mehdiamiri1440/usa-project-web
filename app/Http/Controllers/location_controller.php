<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Response;
use \Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\province;
use App\cities;


class location_controller extends Controller
{
	public function get_all_provinces_or_cities_in_the_province_in_iran(Request $request)
	{	
		if(!$request->has('province_id'))
		{
			$provinces = province::all();
			
			return response()->json([
				'status' => TRUE,
				'provinces' => $provinces
			],200);
		}
		else{
			$this->validate($request,[
				'province_id' => 'numeric|max:31'
			]);
			
			$province_id = $request->province_id;
			
			$province = province::find($province_id);
			
			$province_related_cities = $province->city;
			
			return response()->json([
				'status' => TRUE,
				'cities' => $province_related_cities
			],200);				
		}
	}
}
	
