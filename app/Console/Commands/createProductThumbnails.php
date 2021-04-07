<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;
use Image;

class createProductThumbnails extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:thumbnail {--chunk=}';

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

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $skip = $this->option('chunk') * 100;
        $take = 100;
        $photos = DB::table('products')
                        ->join('product_media','products.id','=','product_media.product_id')
                        ->where('products.confirmed',true)
                        ->whereNull('products.deleted_at')
                        ->select('product_media.file_path','product_media.id')
                        ->orderBy('product_media.id')
                        ->skip($skip)
                        ->take($take)
                        ->get();
        
        $bar = $this->output->createProgressBar(count($photos));

        foreach($photos as $photo)
        {
            $this->info($photo->id .' is doing........');
            $file_path = storage_path('app/public/'.$photo->file_path);//should be changed for production run
            $thumbnail_path = storage_path('app/public/thumbnails/'.$photo->file_path);

            if(file_exists($file_path)){
                $img = Image::make($file_path);
                $tmp_img = clone $img;

                $img_orginal = $img->resize(700, 700, function ($constraint) {
                    $constraint->aspectRatio();
                });

                $img_thumb = $tmp_img->resize(230, 335, function ($constraint) {
                    $constraint->aspectRatio();
                });

                $img_orginal->save($file_path);
                $img_thumb->save($thumbnail_path);

                $this->info($photo->id .' is done.');
            }
            else{
                // $this->line('skipping....');
            }

            $bar->advance();
        }

        $bar->finish();

        echo "\n";
    }
}
