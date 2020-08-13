<?php

namespace App\Http\Controllers\General;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Image;
use DB;

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

    public function download_media()
    {
        // $client = \AWS::createClient('s3');
        ini_set('memory_limit', '-1');

        DB::unprepared(file_get_contents('/Users/deli/Downloads/2020_07_22.sql'));

        // $bucket_name = 'product-photos';
        
        // $objectsListResponse = $client->listObjects(['Bucket' => $bucket_name]);
        // $objects = $objectsListResponse['Contents'] ?? [];
        // foreach ($objects as $object) {
        //     $object_content = $client->getObject(['Bucket' => $bucket_name, 'Key' => $object['Key']]);
            
        //     file_put_contents(public_path('storage/products' . '/' . $object['Key']), $object_content['Body']->getContents());
        // }

    }
}
