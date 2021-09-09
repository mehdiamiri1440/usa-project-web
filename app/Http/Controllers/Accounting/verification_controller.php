<?php

namespace App\Http\Controllers\Accounting;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Carbon\Carbon;

class verification_controller extends Controller
{
    public function upload_verification_photos(Request $request)
    {
        $rules = $this->set_validation_rules($request);

        $this->validate($request,$rules);

        $files_path_array = $this->save_verification_photos($request, $request->images_count);
        
        $this->register_verifivation_photos_path_in_DB($files_path_array);

        return response()->json([
            'status' => true,
            'msg' => 'pohtos uploaded!'
        ],201);
    }

    protected function set_validation_rules($request)
    {
        $rules = [
            'images_count' => 'required|integer|min:3|max:6',
        ];

        $photos_count = $request->images_count;
        foreach (range(0, $photos_count - 1) as $index) {
            $rules['image_'.$index] = 'required|image|mimes:png,jpg,jpeg|min:2|max:5000';
        }

        return $rules;
    }

    protected function save_verification_photos($request,$images_count)
    {
        $files_path = [];

        for ($i = 0; $i < $images_count ; ++$i) {
            $image_name = 'image_'.$i;
            $img = $request->$image_name;

            $path = $img->store('verification_photos');

            $files_path[] = $path;
        }

        return $files_path;
    }
 
    protected function register_verifivation_photos_path_in_DB($files_path_array)
    {
        $user_id = session('user_id');

        $now = Carbon::now();

        $photos = [];
        foreach($files_path_array as $file_path)
        {
            $photos[] = [
                'created_at' => $now,
                'updated_at' => $now,
                'file_path'  => $file_path,
                'myuser_id' => $user_id
            ];
        }

        DB::table('verification_photos')
                ->insert($photos);
    }
}
