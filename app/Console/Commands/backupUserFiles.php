<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;

class backupUserFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:backup {--bucket=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'backup all user generated photos';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $bucket_name = $this->option('bucket');

        switch($bucket_name){
            case 'product-photos':
                $this->upload_orginal_products_photos($bucket_name);
                break;
            case 'product-thumbnails':
                $this->upload_thumbnail_product_photos($bucket_name);
                break;
            default:
                break;
        }
        


    }

    protected function upload_orginal_products_photos($bucket_name)
    {
        $photos = $this->get_products_photos();

        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $path)
        {
            $this->save_photo_on_cloud($path,$bucket_name);

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }

    protected function upload_thumbnail_product_photos($bucket_name)
    {
        $photos = $this->get_thumbnail_products_photos();

        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $path)
        {
            $this->save_photo_on_cloud($path,$bucket_name);

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }

    protected function get_products_photos()
    {
        $photos = DB::table('product_media')
                            ->join('products','products.id','=','product_media.product_id')
                            ->whereNull('products.deleted_at')
                            ->select('product_media.file_path')
                            ->get();

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage". "/" . $photo->file_path;
            $result[] = public_path($tmp);
        }

        return $result;
    }

    protected function get_thumbnail_products_photos()
    {
        $photos = DB::table('product_media')
                            ->join('products','products.id','=','product_media.product_id')
                            ->whereNull('products.deleted_at')
                            ->select('product_media.file_path')
                            ->get();

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage/thumbnails". "/" . $photo->file_path;
            $result[] = public_path($tmp);
        }

        return $result;
    }

    protected function save_photo_on_cloud($path,$bucket_name)
    {
        $tmp = explode('/',$path);
        $file_name = end($tmp);

        try{
            $client = \AWS::createClient('s3');
            $client->putObject(array(
                'Bucket'     => $bucket_name,
                'Key'        => $file_name,
                'SourceFile' => $path,
            ));
        }
        catch(\Exception $e){
            echo $e->getMessage() . "\n";
        }
        
    }
}
