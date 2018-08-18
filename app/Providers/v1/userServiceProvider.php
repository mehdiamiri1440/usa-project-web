<?php

namespace App\Providers\v1;

use Illuminate\Support\ServiceProvider;

use App\services\v1;

class userServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(userService::class,function($app){
			return new userService();
		});
    }
}
