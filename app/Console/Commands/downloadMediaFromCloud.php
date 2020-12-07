<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;
use DB;

class downloadMediaFromCloud extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:media {--from=} {--until=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    protected $buckets = [
        'product-photos' => 'storage/products',
        'product-thumbnails' =>  'storage/thumbnails/products',
        'profile-photos' =>  'storage/profile_photos', 
        'certificate-photos' =>  'storage/certificates',
        'related-photos' =>  'storage/relateds',
        'verification-photos' =>  'storage/verification_photos'
    ];
    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $now = Carbon::now()->timestamp;
        foreach($this->buckets as $bucket_name => $path_to_save)
        {
            $client = \AWS::createClient('s3');
            
            $results = $client->getPaginator('ListObjects', [
                'Bucket' => $bucket_name
            ]);

            $required_files_list = $this->get_required_files_list($bucket_name);

            foreach($results as $result)
            {
                $objects = $result['Contents'] ?? [];

                $this->info("\n downloading $bucket_name files ...");
                $bar = $this->output->createProgressBar(count($objects));

                foreach ($objects as $object) 
                {
                    $file_path = public_path( $path_to_save . '/' . $object['Key']);
                    
                    if(in_array($object['Key'],$required_files_list))
                    {
                        if(! file_exists($file_path))
                        {
                            if(($from_date = $this->option('from')) && ($until_date = $this->option('until')))
                            {
                                if( (strtotime($object['LastModified']) >= strtotime($from_date) ) && (strtotime($object['LastModified']) <= strtotime($until_date))  )
                                {
                                    $object_content = $client->getObject(['Bucket' => $bucket_name, 'Key' => $object['Key']]);
                            
                                    file_put_contents($file_path, $object_content['Body']->getContents());
                                }
                            }
                            else{
                                $object_content = $client->getObject(['Bucket' => $bucket_name, 'Key' => $object['Key']]);
                            
                                file_put_contents($file_path, $object_content['Body']->getContents());
                            }

                        }
                    }
                    
                    
                    $bar->advance();
                }

                $bar->finish();
            }

            $this->info("\n downloading from $bucket_name finished.");
        }
    }

    protected function download_media_files_from_bucket($bucket_name,$path_to_save)
    {
        $client = \AWS::createClient('s3');
        
        $objectsListResponse = $client->listObjects(['Bucket' => $bucket_name]);
        $objects = $objectsListResponse['Contents'] ?? [];
        foreach ($objects as $object) {
            $object_content = $client->getObject(['Bucket' => $bucket_name, 'Key' => $object['Key']]);
            
            file_put_contents(public_path( $path_to_save . '/' . $object['Key']), $object_content['Body']->getContents());
        }
    }

    protected function get_required_files_list($bucket_name)
    {
        $required_files_list = [];

        switch($bucket_name){
            case 'product-photos':
                $required_files_list = $this->get_product_required_files();
                break;
            case 'product-thumbnails':
                $required_files_list = $this->get_product_required_files();
                break;
            case 'profile-photos':
                $required_files_list = $this->get_profile_photos_required_files();
                break;
            case 'certificate-photos':
                $required_files_list = $this->get_certificate_photos_required_files();
                break;
            case 'related-photos':
                $required_files_list = $this->get_related_photos_required_files();
                break;
            case 'verification-photos':
                $required_files_list = $this->get_verification_photos_required_files();
                break;
            default:
                break;
        }

        return $required_files_list;
    }
    protected function get_product_required_files()
    {
        $files_path = DB::table('products')
                ->join('product_media','products.id','=','product_media.product_id')
                ->where('products.confirmed',true)
                ->whereNull('products.deleted_at')
                ->select('product_media.file_path')
                ->get();

        return $this->extract_file_names($files_path); 
    }

    protected function get_profile_photos_required_files()
    {
        $files_path = DB::table('profiles')
                ->where('profiles.confirmed',true)
                ->whereNotNull('profile_photo')
                ->select('profile_photo as file_path')
                ->distinct()
                ->get();

        return $this->extract_file_names($files_path); 
    }

    protected function get_certificate_photos_required_files()
    {
        $files_path = DB::table('profiles')
                ->join('profile_media','profiles.id','=','profile_media.profile_id')
                ->where('profiles.confirmed',true)
                ->where('file_path','like','%certificates%')
                ->select('profile_media.file_path')
                ->get();

        return $this->extract_file_names($files_path); 
    }

    protected function get_related_photos_required_files()
    {
        $files_path = DB::table('profiles')
                ->join('profile_media','profiles.id','=','profile_media.profile_id')
                ->where('profiles.confirmed',true)
                ->where('file_path','like','%relateds%')
                ->select('file_path')
                ->get();

        return $this->extract_file_names($files_path); 
    }

    protected function get_verification_photos_required_files()
    {
        $files_path = DB::table('verification_photos')
                ->select('file_path')
                ->get();

        return $this->extract_file_names($files_path); 
    }

    protected function extract_file_names($files_path)
    {
        $result = [];
        foreach($files_path as $path)
        {
            $tmp = explode('/',$path->file_path);
            $result[] = end($tmp);
        }

        return $result;
    }
}
