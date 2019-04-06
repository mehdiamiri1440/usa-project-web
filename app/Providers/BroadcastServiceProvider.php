<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Broadcast;
use App\Http\Middleware\login;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Broadcast::routes();
        //Broadcast::routes(['middleware' => ['broadcastAuth']]);

        require base_path('routes/channels.php');
    }
}
