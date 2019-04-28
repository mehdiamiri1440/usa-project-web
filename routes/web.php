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
use App\Http\Middleware\login;
use App\Http\Middleware\admin_login;
use App\Http\Middleware\profile_confirmation;
use App\Http\Middleware\profile_and_contract_confirmation;
use App\Http\Middleware\cors;
use Illuminate\Cookie\CookieJar;
use App\myuser;
use App\profile;

use App\Events\newMessage;

use App\Jobs\sendNewMessageSMSNotification;
use App\Jobs\sendSMS;


/*Route::get('/pv', function(){
    return view('layout.master');
});*/

/*Route::get('/test', function(){
    return view('payment.external_url_payment_callback');
});*/

/*Route::get('/help', function(){
    return view('index_pages.help');
});*/
/*
Route::get('/p', function(){
    return view('index_pages.projects');
});*/
Route::group(['prefix' => 'master'],function (){
    Route::get('/', function () {
        return view('layout.master');
    });
    Route::get('product-list/{searchText?}',function($searchText = null){
        return view('layout.master',[
            'searchText' => $searchText,
        ]);
    })->name('product-list');
});

Route::get('/', function(){
    return redirect('/master/product-list');
//    return view('index_pages.index_main');
});

//Route::get('/', function(){
//    return view('index');
//});

// Download Route
Route::get('download/app', function()
{
    // Check if file exists in app/storage/file folder
    $file_path = storage_path() .'/app/public/download/incobac.apk' ;
    echo $file_path;
    if (file_exists($file_path))
    {
        // Send Download
        return Response::download($file_path,'incobac.apk', [
            'Content-Length: '. filesize($file_path)
        ]);
    }
    else
    {
        // Error
        exit('خطایی رخ داده است.د.باره تلاش کنید...');
    }
})->name('download-app');


Route::get('/about-us',function(){
    return view('index_pages.about_us');
});

Route::get('/privacy-and-policy',function(){
    return view('index_pages.privacy_policy');
});

Route::get('/contact-us',function(){
    return view('index_pages.contact_us');
});


Route::post('/dologin',[
    'uses' => 'user_controller@login',
    'as' => "login"
]);

Route::get('/login',function(){
    return view('login');
})->name('login_page');

Route::get('/register',function(){
    return view('register');
})->name('register_page');

Route::post('/user/is_user_name_unique',[
    'uses' => 'user_controller@does_user_name_already_exists',
    'as' => 'does_user_name_already_exists'
]);

Route::post('/user/is_national_code_unique',[
    'uses' => 'user_controller@does_national_code_already_exists',
    'as' => 'does_national_code_already_exists'
]);

Route::post('send_verification_code',[
    'uses' => 'sms_controller@send_phone_verification_code',
    'as' => 'send_verification_code'
]);

Route::post('/verify_code',[
    'uses' => 'sms_controller@verify_code',
    'as' => 'verify_code'
]);

Route::post('/get_category_list',[
    'uses' => 'category_controller@get_all_categories',
    'as' => 'get_category_list'
]);

Route::post('/user/get_product_list',[
    'uses' => 'product_controller@get_product_list',
    'as' => 'get_product_list'
]);

Route::post('/user/get_buyAd_list',[
    'uses' => 'buyAd_controller@get_buyAd_list',
    'as' => 'get_buyAd_list'
]);

Route::post('/location/get_location_info',[
    'uses' => 'location_controller@get_all_provinces_or_cities_in_the_province_in_iran',
    'as' => 'get_location_info'
]);

Route::post('/get_product_by_id',[
    'uses' => 'product_controller@get_product_by_id',
    'as' => 'get_product_by_id'
]);

Route::post('/get_buy_ad_by_id',[
    'uses' => 'buyAd_controller@get_buy_ad_by_id',
    'as' => 'get_buy_ad_by_id'
]);


Route::get('/product/{id?}',function(){

    if(session()->has('user_id'))
    {
        $user = myuser::findOrFail(session('user_id'));
    }
    else{
        $user = " ";
    }

    return view('product',[
        'user_info' => is_string($user) ? $user : $user->toArray(),
    ]);
})->where('id', '[0-9]+');


Route::get('/buyAd/{id?}',function(){

    if(session()->has('user_id'))
    {
        $user = myuser::findOrFail(session('user_id'));
    }
    else{
        $user = " ";
    }

    return view('buyad',[
        'user_info' => is_string($user) ? $user : $user->toArray(),
    ]);
})->where('id', '[0-9]+');

Route::post('/application_trace/increment_product_phone_view_count',[
    'uses' => 'product_controller@increment_product_phone_view_count',
    'as' => 'increment_product_phone_view_count'
]);

Route::post('/application_trace/increment_buy_ad_phone_view_count',[
    'uses' => 'buyAd_controller@increment_buy_ad_phone_view_count',
    'as' => 'increment_buy_ad_phone_view_count'
]);
/*
Route::get('/profile/{user_name}',function($user_name){
    $user_record = myuser::where('user_name',$user_name)
        ->select('id','first_name','last_name')
        ->get()
        ->first();

    $profile_record = profile::where('myuser_id',$user_record->id)
            ->where('confirmed',true)
            ->select('profile_photo')
            ->get()
            ->last();

    $full_name = $user_record->first_name . ' ' . $user_record->last_name;

    return view('profile.profile',[
        'user_name' => $user_name,
        'full_name' => $full_name,
        'profile_photo' => $profile_record ? $profile_record->profile_photo : '',
    ]);
});*/

Route::post('/load_profile_by_user_name',[
    'uses' => 'profile_controller@get_last_profile_info_with_all_related_content_by_user_name',
    'as' => 'load_profile_by_user_name',
]);

Route::post('/get_product_list_by_user_name',[
    'uses' => 'product_controller@get_product_list_by_user_name',
    'as' => 'get_product_list_by_user_name'
]);

Route::post('/get_user_statistics_by_user_name',[
    'uses' => 'profile_controller@get_user_statistics_by_user_name',
    'as' => 'get_user_statistics_by_user_name',
]);

Route::get('/product-view/{product_id}/{city}-{province}-{product_name}-{sub_category_name}-{category_name}',function($product_id){
    return view('dashboard.buyer.product-list');
});

Route::get('master/{any}',function(){
        return view('layout.master');
    })->where('any','.*');


Route::group(['middleware' => [login::class]],function(){

    Route::post('/user/add_product',[
        'uses' => 'product_controller@add_product',
        'as' => 'add_product'
    ]);

    Route::post('/user/add_buyAd',[
        'uses' => 'buyAd_controller@add_buyAd',
        'as' => 'add_buyAd'
    ]);

    Route::get('back-to-basic/{transaction_id}',function($transaction_id){
        return view('back-to-basic',[
            'transaction_id' => $transaction_id
        ]);
    })->name('back-to-basic');

    Route::get('instant-back-to-basic/{transaction_id}',function($transaction_id){
        return view('instant-back-to-basic',[
            'transaction_id' => $transaction_id
        ]);
    })->name('instant-back-to-basic');

    Route::get('/dashboard/{any}',function(){
        if(session('is_seller')){
            return view('layout.seller-dashboard');
        }
        else if(session('is_buyer')){
            return view('layout.buyer-dashboard');
        }
    })->where('any','.*');

    Route::group(['prefix' => 'dashboard'],function(){
        Route::get('/',function(){
            if(session('is_seller')){
                return view('layout.seller-dashboard');
            }
            /*     if(session('is_seller')){
                     return view('dashboard.seller.profile.profile_basic');
                 }*/
            else if(session('is_buyer')){
                return view('layout.buyer-dashboard');
            }
        })->name('profile_basic');
        Route::get('/profile/complementary',function(){
            if(session('is_seller')){
                return view('dashboard.seller.profile.profile_complete');
            }
            else if(session('is_buyer')){
                return view('dashboard.buyer.profile.profile_complete');
            }
        })->name('profile_complementary');

        Route::group(['middleware' => [profile_confirmation::class]],function(){
            Route::get('register-product',function(){
                if(session('is_seller')){
                    return view('dashboard.seller.product.product_basic');
                }
                else return abort(404);
            })->name('seller-register-product');

            Route::get('buyAd-requests',function(){
                if(session('is_seller')){
                    return view('dashboard.seller.request.buyAd-requests');
                }
                else return abort(404);
            })->name('seller-buyAd-requests');

            Route::post('buyAd-request-detail/{id}',[
                'uses' => 'buyAd_controller@get_seller_related_buyAd_by_id',
                'as' => 'get_seller_related_buyAd_by_id',
            ])->where('id', '[0-9]+');

            Route::get('/my-sell-offers',function(){
                if(session('is_seller')){
                    return view('dashboard.seller.request.my-sell-offer-list');
                }
                else return abort(404);
            })->name('my-sell-offers');


            //buyer panel
            Route::get('/my-buyAds',function(){
                if(session('is_buyer')){
                    return view('dashboard.buyer.request.my-buyAd');
                }
                else return abort(404);
            })->name('buyer-my-buyAds');

            Route::post('sell-offer-detail',[
                'uses' => 'sell_offer_controller@get_sell_offer_by_id',
                'as' => 'get_sell_offer_by_id'
            ])->where('id', '[0-9]+');

//            Route::get('/register-request',function(){
//                if(session('is_buyer')){
//                    return view('dashboard.buyer.request.register-request');
//                }
//                else return abort(404);
//            })->name('register_buyer_request');

            Route::post('/get_transaction_info',[
                'uses' => 'transaction_controller@get_transaction_info',
                'as' => 'get-transaction-info'
            ]);

            Route::post('/get_instant_transaction_info',[
                'uses' => 'instant_transaction_controller@get_transaction_info',
                'as' => 'get-instant-transaction-info'
            ]);

            Route::get('/transaction-detail/{id}',function($id){
                if(session('is_buyer')){
                    return redirect()->route('');
                }
                else if(session('is_seller')){
                    return view('dashboard.seller.transaction.transaction',[
                        'transaction_id' => $id,
                    ]);
                }
            })->name('show-transaction-detail');

            Route::get('/transaction-list',function(){
                if(session('is_buyer')){
                    return view('dashboard.buyer.transaction.my-transactions');
                }
                else if(session('is_seller')){
                    return view('dashboard.seller.transaction.my-transactions');
                }
                else return abort(404);
            })->name('my-transaction-list');

            Route::get('/terminated-transaction-list',function(){
                if(session('is_buyer')){
                    return view('dashboard.buyer.transaction.my-terminated-transactions');
                }
                else if(session('is_seller')){
                    return view('dashboard.seller.transaction.my-terminated-transactions');
                }
                else return abort(404);
            })->name('my-terminated-transaction-list');

            Route::get('/transaction-report/{id}',function($id){
                if(session('is_buyer')){
                    return view('dashboard.buyer.transaction.transaction-report-detail',[
                        'transaction_id' => $id,
                    ]);
                }
                else if(session('is_seller')){
                    return view('dashboard.seller.transaction.transaction-report-detail',[
                        'transaction_id' => $id,
                    ]);
                }
                else return abort(404);
            });

        });

        Route::post('/get_payed_factor_list',[
            'uses' => 'transaction_controller@get_payed_factor_list',
            'as' => 'get_payed_factor_list'
        ]);
        Route::get('/payed-factor-list',function(){
            if(session('is_buyer') == true){
                return view('dashboard.buyer.transaction.payed-factor-list');
            }
            else return abort(404);
        })->name('payed-factor-list');

        Route::get('/privacy_and_policy.vue',function(){
            if(session('is_buyer') == true){
                return view('dashboard.buyer.privacy_and_policy.vue');
            }
            else if(session('is_seller') == true){
                return view('dashboard.seller.privacy_and_policy.vue');
            }
        })->name('dashboard-privacy_and_policy.vue');
    });

    Route::post('/user/profile_modification',[
        'uses' => 'profile_controller@profile_modification',
        'as' => 'profile_modification'
    ]);

    Route::delete('/delete_product_by_id',[
        'uses' => 'product_controller@delete_product_by_id',
        'as' => 'delete_product_by_id'
    ]);

    Route::delete('/delete_buy_ad_by_id',[
        'uses' => 'buyAd_controller@delete_buy_ad_by_id',
        'as' => 'delete_buy_ad_by_id'
    ]);

    Route::post('/add_sell_offer',[
        'uses' => 'sell_offer_controller@add_sell_offer',
        'as' => 'add_sell_offer'
    ]);

    Route::post('/get_sell_offer_by_id',[
        'uses' => 'sell_offer_controller@get_sell_offer_by_id',
        'as' => 'get_sell_offer_by_id'
    ]);

    Route::post('/get_my_buyAds_with_related_sell_offers',[
        'uses' => 'buyAd_controller@get_my_buyAds_with_related_sell_offers',
        'as' => 'get_my_buyAds_with_related_sell_offers'
    ]);

    Route::post('/get_related_buyAds_list_to_the_seller',[
        'uses' => 'buyAd_controller@get_related_buyAds_list_to_the_seller',
        'as' => 'get_related_buyAds_list_to_the_seller'
    ]);

    Route::post('/get_my_sell_offer_list',[
        'uses' => 'sell_offer_controller@get_my_sell_offer_list',
        'as' => 'get_my_sell_offer_list'
    ]);

    Route::post('/accept_sell_offer_by_id',[
        'uses' => 'sell_offer_controller@accept_sell_offer_by_id',
        'as' => 'accept_sell_offer_by_id'
    ]);

    Route::post('/reject_sell_offer_by_id',[
        'uses' => 'sell_offer_controller@reject_sell_offer_by_id',
        'as' => 'reject_sell_offer_by_id'
    ]);

    Route::post('/user/profile_info',[
        'uses' => 'profile_controller@get_last_profile_info_with_all_related_content',
        'as' => 'profile_controller_info'
    ]);

//    Route::post('/get_product_list_by_user_name',[
//        'uses' => 'product_controller@get_product_list_by_user_name',
//        'as' => 'get_product_list_by_user_name'
//    ]);

    Route::post('/get_user_transaction_list',[
        'uses' => 'transaction_controller@get_user_in_progress_transaction_list',
        'as' => 'get_user_transaction_list'
    ]);

    Route::post('/confirm_initial_contract',[
        'uses' => 'user_controller@initial_contract_confirmation_by_user',
        'as' => 'initial_contract_confirmation_by_user',
    ]);

    Route::post('/get_payed_factor_list',[
        'uses' => 'transaction_controller@get_payed_factor_list',
        'as' => 'get_payed_factor_list'
    ]);

    Route::post('/get_payed_instant_factor_list',[
        'uses' => 'instant_transaction_controller@get_payed_factor_list',
        'as' => 'get_payed_instant_factor_list'
    ]);

    Route::post('/get_factor_info',[
        'uses' => 'transaction_controller@get_factor_info_by_factor_id',
        'as' => 'get_factor_info_by_factor_id'
    ]);

    Route::post('/get_instant_factor_info',[
        'uses' => 'instant_transaction_controller@get_factor_info_by_factor_id',
        'as' => 'get_instant_factor_info_by_factor_id'
    ]);

    Route::post('/does_buyer_already_had_requested_the_produtct',[
        'uses' => 'product_controller@does_buyer_already_had_requested_the_product',
        'as' => 'does_buyer_already_had_requested_the_product'
    ]);

    Route::post('/register_buyer_request_for_the_product',[
        'uses' => 'product_controller@register_buyer_request_for_the_product',
        'as' => 'register_buyer_request_for_the_product',
    ]);

    Route::post('/change_password',[
        'uses' => 'user_controller@change_password',
        'as' => 'change_user_password'
    ]);

    Route::post('/refresh_my_product_by_id',[
        'uses' => 'product_controller@refresh_product_updated_at_time',
        'as' => 'refresh_my_product_by_id'
    ]);

    Route::post('/get_buyAd_owner_user_id',[
        'uses' => 'buyAd_controller@get_buyAd_owner_user_id',
        'as' => 'get_buyAd_owner_user_id'
    ]);

    Route::post('/get_contract_sides_user_info',[
        'uses' => 'user_controller@get_contract_sides_user_info',
        'as' => 'get_contract_sides_user_info'
    ]);

    Route::post('/get_user_instant_transaction_list',[
        'uses' => 'instant_transaction_controller@get_user_in_progress_transaction_list',
        'as'  => 'get_user_in_progress_instant_transaction_list'
    ]);

    Route::post('/get_terminated_instant_transactions',[
        'uses' => 'instant_transaction_controller@get_user_terminated_transactions',
        'as' => 'get_terminated_instant_transactions',
    ]);

    Route::post('/get_terminated_instant_transaction_info',[
        'uses' => 'instant_transaction_controller@get_terminated_instant_transaction_info',
        'as' => 'get_terminated_instant_transaction_info',
    ]);

    Route::post('/messanger/send_message',[
        'uses' => 'message_controller@send_message',
        'as' => 'send_message',
    ]);

    Route::post('/get_contact_list',[
        'uses' => 'message_controller@get_current_user_contact_list',
        'as'   => 'get_current_user_contact_list'
    ]);

    Route::post('/get_total_unread_messages_for_current_user',[
        'uses' => 'message_controller@get_total_unread_messages_for_current_user',
        'as' => 'message_controller@get_total_unread_messages_for_current_user'
    ]);

    Route::post('/get_user_chat_history',[
        'uses' => 'message_controller@get_user_chat_history',
        'as'   => 'get_user_chat_history'
    ]);

    Route::post('/set_last_chat_contact',[
        'uses' => 'message_controller@set_last_chat_contact',
        'as' => 'set_last_chat_contact'
    ]);

    Route::post('/get_last_chat_contact_info_from_session',[
        'uses' => 'message_controller@get_last_chat_contact_info_from_session',
        'as' => 'get_last_chat_contact_info_from_session'
    ]);

});

Route::post('/send_phone_verification_code_for_password_reset',[
    'uses' => 'sms_controller@send_phone_verification_code_for_password_reset',
    'as' => 'send_reset_password_verification_code'
]);

Route::post('/reset_password',[
    'uses' => 'user_controller@reset_password',
    'as' => 'reset_password'
]);

Route::post('/get_buyAd_list_by_user_name',[
    'uses' => 'buyAd_controller@get_buyAd_list_by_user_name',
    'as' => 'get_buyAd_list_by_user_name'
]);

Route::get('/ads',function(){
    return view('dashboard.product.sell_offer_list');
});

Route::get('/logout',function(){

    Session::flush();
    Session::save();

    $cookie = \Cookie::forget('user_phone');
    $cookie = \Cookie::forget('user_password');
//    response('view')->withCookie($cookie);

    return redirect()->route('login_page')->withCookie($cookie);
})->name('logout');

//-------------------------------- ADMIN PANEL---------------------------------------
//Admin Panel
Route::group(['prefix'=> 'admin'],function(){

    Route::get('/login',function(){
        return view('admin_panel.login');
    })->name('admin_login_page');

    Route::post('/doLogin',[
        'uses' => 'admin_panel\admin_user_controller@login',
        'as' => 'admin_login'
    ]);
    Route::get('/logout',function(){

        Session::flush();
        Session::save();

        return redirect()->route('admin_login_page');
    })->name('admin_panel_logout');
});

Route::group(['prefix' => 'admin','middleware' => [admin_login::class]],function(){

    Route::get('/profile',[
        'uses' => 'admin_panel\admin_profile_controller@load_unconfirmed_profile_records',
        'as' => 'admin_panel_profile'
    ]);

    Route::get('profile-detail/{profile_id}',[
        'uses' => 'admin_panel\admin_profile_controller@load_profile_by_id',
        'as' => 'admin_panel_load_profile_by_id'
    ]);

    Route::post('profile_confirmation',[
        'uses' => 'admin_panel\admin_profile_controller@admin_profile_confirmation',
        'as' => 'admin_panel_profile_confirmation'
    ]);

    Route::get('/profile-list',[
        'uses' => 'admin_panel\admin_profile_controller@load_confirmed_profile_records',
        'as' => 'admin_panel_profile_list'
    ]);

    Route::get('/buyAd',[
        'uses' => 'admin_panel\admin_buyAd_controller@load_unconfirmed_buyAd_list',
        'as' => 'admin_panel_buyAd'
    ]);

    Route::get('buyAd-detail/{buyAd_id}',[
        'uses' => 'admin_panel\admin_buyAd_controller@load_unconfirmed_buyAd_by_id',
        'as' => 'admin_panel_load_unconfirmed_buyAd_by_id'
    ]);

    Route::post('buyAd_confirmation',[
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_confirmation',
        'as' => 'admin_panel_buyAd_confirmation'
    ]);

    Route::post('buyAd_edit',[
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_edit',
        'as' => 'admin_panel_buyAd_edit'
    ]);

    Route::get('/buyAd-list',[
        'uses' => 'admin_panel\admin_buyAd_controller@load_confirmed_buyAd_list',
        'as' => 'admin_panel_buyAd_list'
    ]);

    Route::get('buyAd-list-detail/{buyAd_id}',[
        'uses' => 'admin_panel\admin_buyAd_controller@load_confirmed_buyAd_by_id',
        'as' => 'admin_panel_load_confirmed_buyAd_by_id'
    ]);

    Route::get('/sellAd',[
        'uses' => 'admin_panel\admin_sellAd_controller@load_unconfirmed_sellAd_list',
        'as' => 'admin_panel_sellAd'
    ]);

    Route::get('sellAd-detail/{sellAd_id}',[
        'uses' => 'admin_panel\admin_sellAd_controller@load_unconfirmed_sellAd_by_id',
        'as' => 'admin_panel_load_unconfirmed_sellAd_by_id'
    ]);

    Route::post('sellAd_confirmation',[
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_confirmation',
        'as' => 'admin_panel_sellAd_confirmation'
    ]);

    Route::post('sellAd_edit',[
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_edit',
        'as' => 'admin_panel_sellAd_edit'
    ]);

    Route::get('/sellAd-list',[
        'uses' => 'admin_panel\admin_sellAd_controller@load_confirmed_sellAd_list',
        'as' => 'admin_panel_sellAd_list'
    ]);

    Route::get('sellAd-list-detail/{sellAd_id}',[
        'uses' => 'admin_panel\admin_sellAd_controller@load_confirmed_sellAd_by_id',
        'as' => 'admin_panel_load_confirmed_sellAd_by_id'
    ]);

    //notify
    Route::post('admin_notify',[
        'uses' => 'admin_panel\admin_notify_controller@get_notification_if_any',
        'as' => 'admin_notify'
    ]);

    //delete photos
    Route::delete('sellAd/delete_photo_by_id',[
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_photo_delete_by_id' ,
        'as' => 'delete_sellAd_photo_by_id'
    ]);

    Route::delete('buyAd/delete_photo_by_id',[
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_photo_delete_by_id',
        'as' => 'delete_buyAd_photo_by_id'
    ]);

    Route::delete('profile/delete_photo_by_id',[
        'uses' => 'admin_panel\admin_profile_controller@admin_profile_related_photo_delete_by_id' ,
        'as' => 'delete_profile_related_photo_by_id'
    ]);

    Route::get('user-list',[
        'uses' => 'admin_panel\admin_user_controller@load_user_list',
        'as' => 'admin_panel_load_user_list'
    ]);

    Route::get('user-list-detail/{user_id}',[
        'uses' => 'admin_panel\admin_user_controller@load_user_notes_by_id',
        'as' => 'admin_panel_load_user_notes_by_id',
    ]);

    Route::get('sell-offers',[
        'uses' => 'admin_panel\admin_sell_offer_controller@load_unconfirmed_sell_offer_list',
        'as' => 'admin_panel_sell_offer_list',
    ]);

    Route::get('pending-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_to_initiate_transactions_list',
        'as' => 'admin_panel_waiting_to_initiate_transactions_list'
    ]);

    Route::get('transaction-detail/{id}',[
        'uses' => 'admin_panel\admin_transaction_controller@get_transaction_with_related_buyAd',
        'as' => 'admin_panel_load_transaction_by_id'
    ]);

    Route::get('instant-transaction-detail/{id}',[
        'uses' => 'admin_panel\admin_transaction_controller@get_instant_transaction_with_related_data',
        'as' => 'admin_panel_load_instant_transaction_by_id'
    ]);

    Route::get('sell-offer-detail/{id}',[
        'uses' => 'admin_panel\admin_sell_offer_controller@get_sell_offer_with_related_buyAd',
        'as' => 'admin_panel_load_sell_offer_by_id'
    ]);

    Route::post('register_note_for_user',[
        'uses' => 'admin_panel\admin_user_controller@register_note_for_user',
        'as' => 'admin_panel_register_note_for_user'
    ]);

    Route::post('confirm_sell_offer_by_id',[
        'uses' => 'admin_panel\admin_sell_offer_controller@confirm_sell_offer_by_id',
        'as' => 'admin_panel_confirm_sell_offer_by_id'
    ]);

    Route::get('prepayment-factor-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_prepayment_factor_issuance_transactions_list',
        'as' => 'admin_panel_waiting_for_prepayment_factor_issuance_list'
    ]);

    Route::get('prepayment-instant-factor-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_prepayment_factor_issuance_instant_transactions_list',
        'as' => 'admin_panel_waiting_for_prepayment_instant_factor_issuance_list'
    ]);

    Route::get('payment-factor-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_payment_factor_issuance_transactions_list',
        'as' => 'admin_panel_waiting_for_payment_factor_issuance_list'
    ]);

    Route::get('payment-instant-factor-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_payment_factor_issuance_instant_transactions_list',
        'as' => 'admin_panel_waiting_for_payment_instant_factor_issuance_list'
    ]);

    Route::get('transaction-termination-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_termination_transaction_list',
        'as' => 'admin_panel_waiting_for_termination_transaction_list'
    ]);

    Route::get('instant-transaction-termination-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_termination_instant_transaction_list',
        'as' => 'admin_panel_waiting_for_termination_instant_transaction_list'
    ]);

    Route::get('transaction-checkout-list',[
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_checkout_transaction_list',
        'as' => 'admin_panel_waiting_for_checkout_transaction_list'
    ]);

    Route::get('statistics',[
        'uses' => 'admin_panel\admin_statistics_controller@load_statistics',
        'as' => 'admin_panel_load_statistics'
    ]);

    Route::get('initiate-instant-transaction',function(){
        return view('admin_panel.initiateInstantTransaction');
    })->name('initiate-instant-transaction-view');

    Route::post('initiate-instant-transaction',[
        'uses' => 'admin_panel\admin_transaction_controller@initiate_instant_transaction',
        'as' => 'initiate_instant_transaction'
    ]);

    Route::get('generate-manual-payment-url',function(){
        return view('admin_panel.generateManualPaymentUrl');
    })->name('generate_manual_payment_url');

//    Route::get('factor-issuance-detail/{id}',[
//        'uses' => 'admin_panel\admin_transaction_controller@'
//    ])


    //------------------- inspectors -----------------------------

    Route::get('/farmer-list',[
        'uses' => 'admin_panel\inspectors\admin_farmer_controller@get_farmer_list',
        'as' => 'admin_panel_farmer_list'
    ]);

    Route::get('/farmer/product-list/{farmer_id}',[
        'uses' => 'admin_panel\inspectors\admin_farmer_controller@get_farmer_product_list',
        'as' => 'admin_panel_farmer_product_list'
    ]);

});


Route::post('/action',[
    'uses' => 'transaction_controller@action_controller',
    'as' => 'action_controller'
]);


Route::post('/instant_action',[
    'uses' => 'instant_transaction_controller@action_controller',
    'as'   => 'instant_action_controller'
]);

Route::post('/get_terminated_transactions',[
    'uses' => 'transaction_controller@get_user_terminated_transactions',
    'as' => 'get_terminated_transactions',
]);

Route::post('/get_terminated_transaction_info',[
    'uses' => 'transaction_controller@get_terminated_transaction_info',
    'as' => 'get_terminated_transaction_info',
]);

Route::post('/get_terminated_instant_transaction_info',[
    'uses' => 'instant_transaction_controller@get_terminated_transaction_info',
    'as' => 'get_terminated_instant_transaction_info',
]);


Route::get('/transaction-report',function(){
    return view('dashboard.buyer.transaction.transaction-report-detail');
});

Route::get('/payment/{type}/{transactionId}',[
    'uses' => 'payment_controller@do_my_payment',
    'as' => 'do_payment',
]);

Route::get('/instant_payment/{type}/{transactionId}',[
    'uses' => 'payment_controller@do_instant_transaction_payment',
    'as' => 'do_instant_transaction_payment',
]);

//Route::any('/payment_callback',[
//    'uses' => 'payment_controller@payment_callback',
//    'as' => 'payment_callback'
//]);

Route::any('/payment_callback',[
    'uses' => 'payment_controller@my_payment_callback',
    'as' => 'payment_callback'
]);

Route::any('/instant_payment_callback',[
    'uses' => 'payment_controller@instant_transaction_payment_callback',
    'as' => 'instant_transaction_payment_callback'
]);

Route::post('/get_wp_posts',[
    'uses' => 'index_controller@get_wp_posts',
    'as' => 'get_wp_posts'
]);

Route::get('/manual-payment/{payment_amount}',[
    'uses' => 'payment_controller@do_external_url_payment',
    'as'   => 'external_url_payment'
])->name('manual-payment');

Route::any('/external-url-payment-callback',[
    'uses' => 'payment_controller@external_url_payment_callback',
    'as' => 'external_url_payment_callback',
]);

Route::group(['middleware' => [cors::class]],function(){
    Route::options('/broadcastAuth',function(){
        return response('OK', \Illuminate\Http\Response::HTTP_NO_CONTENT)
            ->header('Access-Control-Allow-Methods','POST, DELETE, OPTIONS');
    });
    Route::post('/broadcastAuth',function(Request $request){

        $pusher = new Pusher('f04fb3210cdacabb3540','a2ffc348382adf93ea19','710900',array('cluster' => 'ap1'));
        $temp = [];
        $temp =  $pusher->socket_auth($_POST['channel_name'], $_POST['socket_id']);

        return response()->json([
            "auth" => json_decode($temp)->auth
        ]);
    });
});

//Route::get('/migrate_users',[
//   'uses' => 'profile_controller@migrate_users'
//]);

//Route::get('/testt',function(){
//    echo phpinfo();
//});








