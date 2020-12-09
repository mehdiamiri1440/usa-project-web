<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Carbon\Carbon;

class syncMedia extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'media:sync {--days=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'syncs current node data with backed up data on cloud';

    protected $buckets = [
        'product-photos' => 'storage/products',
        'product-thumbnails' =>  'storage/thumbnails/products',
        'profile-photos' =>  'storage/profile_photos', 
        'certificate-photos' =>  'storage/certificates',
        'related-photos' =>  'storage/relateds',
        'verification-photos' =>  'storage/verification_photos'
    ];

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
        $days = $this->option('days');

        foreach($this->buckets as $bucket_name => $path)
        {
            switch($bucket_name){
                case 'product-photos':
                    $files = $this->get_products_photos($days);
                    $this->sync_media_with_cloud($bucket_name,$files,$days);
                    break;
                case 'product-thumbnails':
                    $files = $this->get_thumbnail_products_photos($days);
                    $this->sync_media_with_cloud($bucket_name,$files,$days);
                    break;
                case 'profile-photos':
                    $files = $this->get_profile_photos($days);
                    $this->sync_media_with_cloud($bucket_name,$files,$days);
                    break;
                case 'certificate-photos':
                    $files = $this->get_certificate_photos($days);
                    $this->sync_media_with_cloud($bucket_name,$files,$days);
                    break;
                case 'related-photos':
                    $files = $this->get_related_photos($days);
                    $this->sync_media_with_cloud($bucket_name,$files,$days);
                    break;
                case 'verification-photos':
                    $files = $this->get_verification_photos($days);
                    $this->sync_media_with_cloud($bucket_name,$files,$days);
                    break;
            }
        }
    }

    protected function sync_media_with_cloud($bucket_name,$files,$days)
    {
        $client = \AWS::createClient('s3');
            
        $results = $client->getPaginator('ListObjects', [
            'Bucket' => $bucket_name
        ]);

        $cloud_existing_files = [];

        $from_date = Carbon::now()->subDays($days);
        $until_date = Carbon::now();

        foreach($results as $result)
        {
            $objects = $result['Contents'] ?? [];

            $this->info("\n collecting $bucket_name file names from cloud ...");
            $bar = $this->output->createProgressBar(count($objects));

            foreach($objects as $object)
            {
                if($days == 0)
                {
                    $cloud_existing_files[] = $object['Key'];
                }
                else if( (strtotime($object['LastModified']) >= strtotime($from_date) ) && (strtotime($object['LastModified']) <= strtotime($until_date))  )
                {
                    $cloud_existing_files[] = $object['Key'];
                }
                
                $bar->advance();
            }
                    
        }

        $bar->finish();


        $this->info("\n \n syncing $bucket_name files ...");
        $bar = $this->output->createProgressBar(count($files));

        var_dump($cloud_existing_files);

        foreach($files as $file_path)
        {
            $tmp = explode('/',$file_path);
            $file_name = end($tmp);
            
            if( ! in_array($file_name,$cloud_existing_files) )
            {
                $this->save_photo_on_cloud($file_path,$bucket_name);
            }

            $bar->advance();
        }

        $bar->finish();

        $this->info("\n \n syncing $bucket_name files finished");
    }

    protected function get_products_photos($days)
    {
        $photos = DB::table('product_media')
                            ->join('products','products.id','=','product_media.product_id')
                            ->where('confirmed',true)
                            ->whereNull('products.deleted_at')
                            ->select('product_media.file_path');

        $from_date = Carbon::now()->subDays($days);
        $until_date = Carbon::now();

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('product_media.created_at',[$from_date,$until_date])->get();
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

        $from_date = Carbon::now()->subDays($days);
        $until_date = Carbon::now();

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('products.created_at',[$from_date,$until_date])->get();
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
                            ->whereNotNull('profile_photo')
                            ->select('profile_photo');

        $from_date = Carbon::now()->subDays($days);
        $until_date = Carbon::now();

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('profiles.created_at',[$from_date,$until_date])->get();
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

        $from_date = Carbon::now()->subDays($days);
        $until_date = Carbon::now();                    

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('verification_photos.created_at',[$from_date,$until_date])->get();
        }

        $result = [];
        foreach($photos as $photo)
        {
            $tmp = "/storage". "/" . $photo->file_path;
            $result[] = public_path($tmp);
        }

        return $result;
    }

    protected function get_certificate_photos($days)
    {
        $photos = DB::table('profile_media')
                            ->select('file_path');

        $from_date = Carbon::now()->subDays($days);
        $until_date = Carbon::now();

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('created_at',[$from_date,$until_date])->get();
        }

        $result = [];
        foreach($photos as $photo)
        {
            if(explode('/',$photo->file_path)[0] == 'certificates'){
                $tmp = "/storage". "/" . $photo->file_path;
                $result[] = public_path($tmp);
            }
        }

        return $result;
    }

    protected function get_related_photos($days)
    {
        $photos = DB::table('profile_media')
                            ->select('file_path');

        $from_date = Carbon::now()->subDays($days);
        $until_date = Carbon::now();

        if($days == 0){
            $photos = $photos->get();
        }
        else{
            $photos = $photos->whereBetween('created_at',[$from_date,$until_date])->get();
        }

        $result = [];
        foreach($photos as $photo)
        {
            if(explode('/',$photo->file_path)[0] == 'relateds'){
                $tmp = "/storage". "/" . $photo->file_path;
                $result[] = public_path($tmp);
            } 
        }

        return $result;
    }


    protected function save_photo_on_cloud($path,$bucket_name)
    {
        $tmp = explode('/',$path);
        $file_name = end($tmp);

        try{
            if(file_exists($path)){
                $client = \AWS::createClient('s3');
                $client->putObject(array(
                    'Bucket'     => $bucket_name,
                    'Key'        => $file_name,
                    'SourceFile' => $path,
                ));
            }
        }
        catch(\Exception $e){
            echo $e->getMessage() . "\n";
        }
        
    }
}
