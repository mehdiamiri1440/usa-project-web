<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Image;
use DB;
use Illuminate\Support\Facades\Storage;

class media_controller extends Controller
{
    public function create_thumbnail($path, $width, $height,$photo)
    {
        $img = Image::make($photo)->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
        $img->save($path);
        // Storage::disk('sftp')->put($path,$img->encode());
    }

    public function put_water_mark_on_photo($path,$position)
    {
        $water_mark_img = Image::make(public_path('assets/img/watermark.png'))->opacity(40);

        $img = Image::make($path)->insert($water_mark_img,$position);
        $img->save($path);
    }
}
