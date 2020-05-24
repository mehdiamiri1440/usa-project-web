<?php

namespace App\Jobs\Backups;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use DB;

class SaveProductPhotosInCloud implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    protected $product_id;
    protected $client;

    public function __construct($product_id)
    {
        $this->product_id = $product_id;
        // $this->client = \AWS::createClient('s3');
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $product_photos_path_array = $this->get_product_photos($this->product_id);

        foreach($product_photos_path_array as $path)
        {
            $this->save_photo_on_cloud($path);
        }
    }

    protected function get_product_photos($product_id)
    {
        $photos = DB::table('product_media')
                            ->where('product_id',$product_id)
                            ->select('file_path')
                            ->get();

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage". "/" . $photo->file_path;
            $result[] = public_path($tmp);
        }

        return $result;
    }

    protected function save_photo_on_cloud($path)
    {
        $tmp = explode('/',$path);
        $file_name = end($tmp);

        $client = \AWS::createClient('s3');
        $client->putObject(array(
            'Bucket'     => 'bus-product-photos',
            'Key'        => $file_name,
            'SourceFile' => $path,
        ));
    }
}
