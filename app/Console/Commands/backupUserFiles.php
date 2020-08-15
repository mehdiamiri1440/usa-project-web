<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;

class backupUserFiles extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:backup {--bucket=} {--days=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'bucket is the bucket name, 0 days means all photos 1 day means uploaded photos in last day 2 means uploaded photos in last 2 days';

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
        $days = $this->option('days');

        switch($bucket_name){
            case 'product-photos':
                $this->upload_orginal_products_photos($bucket_name,$days);
                break;
            case 'product-thumbnails':
                $this->upload_thumbnail_product_photos($bucket_name,$days);
                break;
            case 'profile-photos':
                $this->upload_original_profile_photos($bucket_name,$days);
                break;
            // case 'certificate-photos':
            //     $this->upload_original_certificate_photos($bucket_name,$days);
            //     break;
            // case 'related-photos':
            //     $this->upload_original_related_photos($bucket_name,$days);
            //     break;
            case 'verification-photos':
                $this->upload_original_verification_photos($bucket_name,$days);
                break;
            default:
                break;
        }
        


    }

    protected function upload_orginal_products_photos($bucket_name,$days)
    {
        $photos = $this->get_products_photos($days);

        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $path)
        {
            $this->save_photo_on_cloud($path,$bucket_name);

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }

    protected function upload_thumbnail_product_photos($bucket_name,$days)
    {
        $photos = $this->get_thumbnail_products_photos($days);

        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $path)
        {
            $this->save_photo_on_cloud($path,$bucket_name);

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }

    protected function upload_original_profile_photos($bucket_name,$days)
    {
        $photos = $this->get_profile_photos($days);

        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $path)
        {
            $this->save_photo_on_cloud($path,$bucket_name);

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }

    protected function upload_original_certificate_photos($bucket_name,$days)
    {
        $photos = $this->get_certificate_photos($days);

        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $path)
        {
            $this->save_photo_on_cloud($path,$bucket_name);

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }

    protected function upload_original_related_photos($bucket_name,$days)
    {

    }

    protected function upload_original_verification_photos($bucket_name,$days)
    {
        $photos = $this->get_verification_photos($days);

        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $path)
        {
            $this->save_photo_on_cloud($path,$bucket_name);

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }



    protected function get_products_photos($days)
    {
        $photos = DB::table('product_media')
                            ->join('products','products.id','=','product_media.product_id')
                            ->whereNull('products.deleted_at')
                            ->select('product_media.file_path');

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('products.created_at',[Carbon::today(),Carbon::yesterday()])->get();
        }

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage". "/" . $photo->file_path;
            $result[] = public_path($tmp);
        }

        return $result;
    }

    protected function get_thumbnail_products_photos($days)
    {
        $photos = DB::table('product_media')
                            ->join('products','products.id','=','product_media.product_id')
                            ->whereNull('products.deleted_at')
                            ->select('product_media.file_path');

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('products.created_at',[Carbon::today(),Carbon::yesterday()])->get();
        }

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage/thumbnails". "/" . $photo->file_path;
            $result[] = public_path($tmp);
        }

        return $result;
    }

    protected function get_profile_photos($days)
    {
        $photos = DB::table('profiles')
                            ->select('profile_photo');

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('profiles.created_at',[Carbon::today(),Carbon::yesterday()])->get();
        }

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage". "/" . $photo->profile_photo;
            $result[] = public_path($tmp);
        }

        return $result;
    }

    protected function get_verification_photos($days)
    {
        $photos = DB::table('verification_photos')
                            ->select('file_path');

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('verification_photos.created_at',[Carbon::today(),Carbon::yesterday()])->get();
        }

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage". "/" . $photo->file_path;
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
