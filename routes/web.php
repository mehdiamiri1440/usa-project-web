<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Http\Request;





Route::post('/store-photo','Accounting\user_controller@store_photo');


// Download Route
Route::get('download/app', function () {
    // Check if file exists in app/storage/file folder
    return redirect(asset('storage/download/buskool.apk'));
})->name('download-app');




Route::get('download-media','General\media_controller@download_media');
