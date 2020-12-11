<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;

class takeBlogBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'blog:backup {--fullpath=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'usage: php artisan blog:backup --fullpath=blog/full/real/path';

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
        $real_path = $this->option('fullpath');
        $this->info('taking backup from files...');
        $backup_file_name = $this->take_backup_form_blog($real_path);

        $this->info('saving zip file on s3 disk...');
        $this->save_backup_on_cloud($backup_file_name);

        $this->info('backup done.');

    }

    protected function take_backup_form_blog($real_path)
    {
        // Get real path for our folder
        $rootPath = realpath($real_path);

        $date_time = date("Y-m-d-h-i-s");
        // Initialize archive object
        $zip = new \ZipArchive();

        $backup_file_name = "../blog-backups/blog-{$date_time}.zip";
        $zip->open($backup_file_name, \ZipArchive::CREATE | \ZipArchive::OVERWRITE);

        // Create recursive directory iterator
        /** @var SplFileInfo[] $files */
        $files = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($rootPath),
            \RecursiveIteratorIterator::LEAVES_ONLY
        );

        foreach ($files as $name => $file)
        {
            // Skip directories (they would be added automatically)
            if (!$file->isDir())
            {
                // Get real and relative path for current file
                $filePath = $file->getRealPath();
                $relativePath = substr($filePath, strlen($rootPath) + 1);

                // Add current file to archive
                $zip->addFile($filePath, $relativePath);
            }
        }

        // Zip archive will be created only after closing object
        $zip->close();

        $tmp = explode('/',$backup_file_name);
        return end($tmp);
    }

    protected function save_backup_on_cloud($file_name)
    {
        $path = base_path('../blog-backups/' . $file_name);

        try{
            $client = \AWS::createClient('s3');
            $client->putObject(array(
                'Bucket'     => 'daily-backup',
                'Key'        => $file_name,
                'SourceFile' => $path,
            ));
        }
        catch(\Exception $e){
            echo $e->getMessage() . "\n";
        }
        
    }
}
