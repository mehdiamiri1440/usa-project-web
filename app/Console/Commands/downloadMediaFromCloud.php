<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class downloadMediaFromCloud extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch:media';

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
        foreach($this->buckets as $bucket_name => $path_to_save)
        {
            $this->download_media_files_from_bucket($bucket_name,$path_to_save);
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
}
