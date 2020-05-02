<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Image;

class media_controller extends Controller
{
    public function create_thumbnail($path, $width, $height)
    {
        $img = Image::make($path)->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
        });
        $img->save($path);
    }

    public function put_water_mark_on_photo($path,$position)
    {
        $water_mark_img = Image::make(public_path('assets/img/watermark.png'))->opacity(40);

        $img = Image::make($path)->insert($water_mark_img,$position);
        $img->save($path);
    }
}
