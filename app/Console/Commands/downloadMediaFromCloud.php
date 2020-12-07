<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;

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

            foreach($results as $result)
            {
                $objects = $result['Contents'] ?? [];

                $this->info("\n downloading $bucket_name files ...");
                $bar = $this->output->createProgressBar(count($objects));

                foreach ($objects as $object) {
                    $file_path = public_path( $path_to_save . '/' . $object['Key']);
                    if($object['Key'] == 'tQyCH3A7QyHvlR9kY6W7wCdUhkz93qYCypRgLssX.jpeg'){
                        echo "\n this is the case .............................. \n";
                        var_dump($object);
                    }
                    if(! file_exists($file_path)){
                        // echo 'downloading' . "\n";
                        if(($from_date = $this->option('from')) && ($until_date = $this->option('until')))
                        {
                            if( (strtotime($object['LastModified']) >= strtotime($from_date) ) && (strtotime($object['LastModified']) <= strtotime($until_date))  )
                            {
                                if($object['Key'] == 'tQyCH3A7QyHvlR9kY6W7wCdUhkz93qYCypRgLssX.jpeg'){
                                    echo "\n Ready to download.......................... .............................. \n";
                                }
                                $object_content = $client->getObject(['Bucket' => $bucket_name, 'Key' => $object['Key']]);
                        
                                file_put_contents($file_path, $object_content['Body']->getContents());
                            }
                        }
                        else{
                            $object_content = $client->getObject(['Bucket' => $bucket_name, 'Key' => $object['Key']]);
                        
                            file_put_contents($file_path, $object_content['Body']->getContents());
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
}
