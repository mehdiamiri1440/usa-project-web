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
use App\Http\Middleware\cors;
use App\Models\profile;
use Illuminate\Http\Request;

use App\Jobs\sendSMS;
use App\Jobs\LeadHandler\LeadDistributorBot;


Route::get('/',[
    'uses' => 'index_controller@load_home_page_blade'
])->middleware('throttle:10,1');

Route::get('/product-list',[
    'uses' => 'Product\product_list_controller@get_product_list_blade',
])->middleware('throttle:10,1');;

Route::get('/product-list/category/{category_name}',[
    'uses' => 'Product\product_list_controller@get_product_list_blade',
])->name('product-list');

Route::get('/product-view/{category_name}/{extra_text}/{product_id}',[
    'uses' => 'Product\product_controller@get_product_blade',
])->where('product_id','[0-9]+');

Route::get('/pricing',function(){
    if(session()->has('user_id')){
        if(session('is_seller') == true){
            return redirect('/seller/pricing');
        }
        else if(session('is_buyer') == true){

            return redirect('/switch-role');
        }
    }
    else{
        return redirect('/register');
    }
});

Route::get('/msg',function(){
    if(session()->has('user_id')){
        if(session('is_seller') == true){
            return redirect('/seller/messenger/contacts');
        }
        else if(session('is_buyer') == true){
            return redirect('/buyer/messenger/contacts');
        }
    }
    else{
        return redirect('/register');
    }
});

Route::get('/buyers',function(){
    if(session()->has('user_id')){
        if(session('is_seller') == true){
            return redirect('/seller/messenger/buy-ads');
        }
        else if(session('is_buyer') == true){

            return redirect('/switch-role');
        }
    }
    else{
        return redirect('/register');
    }
});

// Route::group(['prefix' => 'master'], function () {
//     Route::get('/', function () {
//         return view('layout.master');
//     });
//     Route::get('product-list/{searchText?}', function ($searchText = null) {
//         return view('layout.master', [
//             'searchText' => $searchText,
//         ]);
//     })->name('product-list');
// });

// Download Route
Route::get('download/app', function () {
    // Check if file exists in app/storage/file folder
    return redirect(asset('storage/download/buskool.apk'));
})->name('download-app');

Route::post('/dologin', [
    'uses' => 'Accounting\user_controller@login',
    'as' => 'login',
]);

Route::get('/register-from-blog', function () {
    session(['is_from_QA_blog' => true]);

    return redirect('/register');
});

Route::post('/user/is_user_name_unique', [
    'uses' => 'Accounting\user_controller@does_user_name_already_exists',
    'as' => 'does_user_name_already_exists',
]);

Route::post('/user/is_national_code_unique', [
    'uses' => 'Accounting\user_controller@does_national_code_already_exists',
    'as' => 'does_national_code_already_exists',
]);

Route::post('send_verification_code', [
    'uses' => 'Notification\sms_controller@send_phone_verification_code',
    'as' => 'send_verification_code',
])->middleware('throttle:3,1'); // 10 try in each 15 mins

Route::post('/verify_code', [
    'uses' => 'Notification\sms_controller@verify_code',
    'as' => 'verify_code',
])->middleware('throttle:10,1');

Route::post('/get_category_list', [
    'uses' => 'General\category_controller@get_all_categories',
    'as' => 'get_category_list',
]);

Route::post('/get_related_categories',[
    'uses' => 'General\category_controller@get_related_category_names'
]);

Route::post('/get_category_meta_data',[
    'uses' => 'Product\product_controller@get_category_tags_data_if_any',
    'as' => 'get_gategory_meta_data'
]);

Route::post('/user/get_product_list', [
    'uses' => 'Product\product_list_controller@get_product_list',
    'as' => 'get_product_list',
]);

Route::post('/get_buyAd_list',[
    'uses' => 'BuyAd\buyAd_controller@get_buyAd_list',
    'as' => 'get_buyAd_list'
]);

Route::post('/location/get_location_info', [
    'uses' => 'General\location_controller@get_all_provinces_or_cities_in_the_province_in_iran',
    'as' => 'get_location_info',
]);

Route::post('/get_product_by_id', [
    'uses' => 'Product\product_controller@get_product_by_id',
    'as' => 'get_product_by_id',
]);

// Route::post('/get_buy_ad_by_id', [
//     'uses' => 'BuyAd\buyAd_controller@get_buy_ad_by_id',
//     'as' => 'get_buy_ad_by_id',
// ]);

Route::post('/get_related_products', [
    'uses' => 'Product\product_controller@get_related_products_to_given_the_product',
    'as' => 'get_related_products',
]);

Route::post('/load_profile_by_user_name', [
    'uses' => 'Accounting\profile_controller@get_last_profile_info_with_all_related_content_by_user_name',
    'as' => 'load_profile_by_user_name',
]);

Route::post('/get_product_list_by_user_name', [
    'uses' => 'Product\product_controller@get_product_list_by_user_name',
    'as' => 'get_product_list_by_user_name',
]);

Route::post('/get_user_statistics_by_user_name', [
    'uses' => 'Accounting\profile_controller@get_user_statistics_by_user_name',
    'as' => 'get_user_statistics_by_user_name',
]);

Route::post('/get_user_reputation_score', [
    'uses' => 'Accounting\reputation_controller@calculate_user_reputation_score',
    'as' => 'get_user_reputation_score',
]);

// Route::post('/increment_user_profile_visit_count', [
//     'uses' => 'Accounting\profile_controller@increment_user_profile_visit_count',
//     'as' => 'increment_user_profile_visit_count',
// ]);

Route::post('/get_sample_products', [
    'uses' => 'Product\product_controller@get_sample_products',
    'as' => 'get_sample_products',
]);

Route::post('/get_sample_buyAds', [
    'uses' => 'BuyAd\buyAd_controller@get_sample_buyAds',
    'as' => 'get_sample_buyAds',
]);

Route::group(['middleware' => [login::class]], function () {
    Route::post('/user/add_product', [
        'uses' => 'Product\product_controller@add_product',
        'as' => 'add_product',
    ])->middleware('optimizeImages');

    Route::post('/user/add_buyAd', [
        'uses' => 'BuyAd\buyAd_controller@add_buyAd',
        'as' => 'add_buyAd',
    ]);

    Route::get('back-to-basic/{transaction_id}', function ($transaction_id) {
        return view('back-to-basic', [
            'transaction_id' => $transaction_id,
        ]);
    })->name('back-to-basic');

    Route::get('instant-back-to-basic/{transaction_id}', function ($transaction_id) {
        return view('instant-back-to-basic', [
            'transaction_id' => $transaction_id,
        ]);
    })->name('instant-back-to-basic');

    Route::post('/user/profile_modification', [
        'uses' => 'Accounting\profile_controller@profile_modification',
        'as' => 'profile_modification',
    ])->middleware('optimizeImages');

    Route::post('/delete_product_by_id', [
        'uses' => 'Product\product_controller@delete_product_by_id',
        'as' => 'delete_product_by_id',
    ]);

    Route::post('/delete_buy_ad_by_id', [
        'uses' => 'BuyAd\buyAd_controller@delete_buy_ad_by_id',
        'as' => 'delete_buy_ad_by_id',
    ]);

    // Route::post('/add_sell_offer', [
    //     'uses' => 'sell_offer_controller@add_sell_offer',
    //     'as' => 'add_sell_offer',
    // ]);

    // Route::post('/get_sell_offer_by_id', [
    //     'uses' => 'sell_offer_controller@get_sell_offer_by_id',
    //     'as' => 'get_sell_offer_by_id',
    // ]);

    // Route::post('/get_my_buyAds_with_related_sell_offers', [
    //     'uses' => 'BuyAd\buyAd_controller@get_my_buyAds_with_related_sell_offers',
    //     'as' => 'get_my_buyAds_with_related_sell_offers',
    // ]);

    Route::post('/get_related_buyAds_list_to_the_seller', [
        'uses' => 'BuyAd\buyAd_controller@get_related_buyAds_list_to_the_seller',
        'as' => 'get_related_buyAds_list_to_the_seller',
    ]);

    Route::post('/get_user_permission_for_buyAd_reply',[
        'uses' => 'BuyAd\buyAd_controller@check_user_permisson_for_sending_buyAd_reply',
        'as'   => 'check_user_permisson_for_sending_buyAd_reply'
    ]);

    // Route::post('/get_my_sell_offer_list', [
    //     'uses' => 'sell_offer_controller@get_my_sell_offer_list',
    //     'as' => 'get_my_sell_offer_list',
    // ]);

    // Route::post('/accept_sell_offer_by_id', [
    //     'uses' => 'sell_offer_controller@accept_sell_offer_by_id',
    //     'as' => 'accept_sell_offer_by_id',
    // ]);

    // Route::post('/reject_sell_offer_by_id', [
    //     'uses' => 'sell_offer_controller@reject_sell_offer_by_id',
    //     'as' => 'reject_sell_offer_by_id',
    // ]);

    Route::post('/user/profile_info', [
        'uses' => 'Accounting\profile_controller@get_last_profile_info_with_all_related_content',
        'as' => 'profile_controller_info',
    ]);

    // Route::post('/get_user_transaction_list', [
    //     'uses' => 'transaction_controller@get_user_in_progress_transaction_list',
    //     'as' => 'get_user_transaction_list',
    // ]);

    // Route::post('/confirm_initial_contract', [
    //     'uses' => 'Accounting\user_controller@initial_contract_confirmation_by_user',
    //     'as' => 'initial_contract_confirmation_by_user',
    // ]);

    // Route::post('/get_payed_factor_list', [
    //     'uses' => 'transaction_controller@get_payed_factor_list',
    //     'as' => 'get_payed_factor_list',
    // ]);

    // Route::post('/get_payed_instant_factor_list', [
    //     'uses' => 'instant_transaction_controller@get_payed_factor_list',
    //     'as' => 'get_payed_instant_factor_list',
    // ]);

    // Route::post('/get_factor_info', [
    //     'uses' => 'transaction_controller@get_factor_info_by_factor_id',
    //     'as' => 'get_factor_info_by_factor_id',
    // ]);

    // Route::post('/get_instant_factor_info', [
    //     'uses' => 'instant_transaction_controller@get_factor_info_by_factor_id',
    //     'as' => 'get_instant_factor_info_by_factor_id',
    // ]);

    // Route::post('/does_buyer_already_had_requested_the_produtct', [
    //     'uses' => 'Product\product_controller@does_buyer_already_had_requested_the_product',
    //     'as' => 'does_buyer_already_had_requested_the_product',
    // ]);

    // Route::post('/register_buyer_request_for_the_product', [
    //     'uses' => 'Product\product_controller@register_buyer_request_for_the_product',
    //     'as' => 'register_buyer_request_for_the_product',
    // ]);

    Route::post('/change_password', [
        'uses' => 'Accounting\user_controller@change_password',
        'as' => 'change_user_password',
    ]);

    // Route::post('/get_buyAd_owner_user_id', [
    //     'uses' => 'BuyAd\buyAd_controller@get_buyAd_owner_user_id',
    //     'as' => 'get_buyAd_owner_user_id',
    // ]);

    // Route::post('/get_contract_sides_user_info', [
    //     'uses' => 'Accounting\user_controller@get_contract_sides_user_info',
    //     'as' => 'get_contract_sides_user_info',
    // ]);

    // Route::post('/get_user_instant_transaction_list', [
    //     'uses' => 'instant_transaction_controller@get_user_in_progress_transaction_list',
    //     'as' => 'get_user_in_progress_instant_transaction_list',
    // ]);

    // Route::post('/get_terminated_instant_transactions', [
    //     'uses' => 'instant_transaction_controller@get_user_terminated_transactions',
    //     'as' => 'get_terminated_instant_transactions',
    // ]);

    // Route::post('/get_terminated_instant_transaction_info', [
    //     'uses' => 'instant_transaction_controller@get_terminated_instant_transaction_info',
    //     'as' => 'get_terminated_instant_transaction_info',
    // ]);

    Route::post('/messanger/send_message', [
        'uses' => 'Messenger\message_controller@send_message',
        'as' => 'send_message',
    ]);

    Route::post('/send_reply_to_buyAd',[
        'uses' => 'Messenger\message_controller@send_reply_message_to_the_buyAd',
        'as' => 'send_reply_to_buyAd'
    ]);

    Route::post('/send_reply_to_product',[
        'uses' => 'Messenger\message_controller@send_reply_message_to_the_product',
        'as' => 'send_reply_to_product'
    ]);

    Route::post('/get_contact_list', [
        'uses' => 'Messenger\message_controller@get_current_user_contact_list',
        'as' => 'get_current_user_contact_list',
    ]);

    Route::post('/get_total_unread_messages_for_current_user', [
        'uses' => 'Messenger\message_controller@get_total_unread_messages_for_current_user',
        'as' => 'Messenger\message_controller@get_total_unread_messages_for_current_user',
    ]);

    Route::post('/get_user_chat_history', [
        'uses' => 'Messenger\message_controller@get_user_chat_history',
        'as' => 'get_user_chat_history',
    ]);

    Route::post('/set_last_chat_contact', [
        'uses' => 'Messenger\message_controller@set_last_chat_contact',
        'as' => 'set_last_chat_contact',
    ]);

    Route::post('/get_last_chat_contact_info_from_session', [
        'uses' => 'Messenger\message_controller@get_last_chat_contact_info_from_session',
        'as' => 'get_last_chat_contact_info_from_session',
    ]);

    Route::post('/get_user_last_confirmed_profile_photo', [
        'uses' => 'Accounting\profile_controller@get_user_last_confirmed_profile_photo',
        'as' => 'get_user_last_confirmed_profile_photo',
    ]);

    // Route::post('/is_allowed_to_access_buyAd_requests', [
    //     'uses' => 'BuyAd\buyAd_controller@is_user_allowed_to_access_buyAd_requests',
    //     'as' => 'is_allowed_to_access_buyAd_requests',
    // ]);

    Route::post('/edit_product', [
        'uses' => 'Product\product_controller@edit_product_by_id',
        'as' => 'edit_product_by_id',
    ]);

    Route::get('/payment/{pakageType}', [
        'uses' => 'Payment\payment_controller@do_payment',
        'as' => 'do_payment',
    ]);

    Route::get('/payment/elevator/{product_id}', [
        'uses' => 'Payment\payment_controller@do_elevator_payment',
        'as' => 'do_elevator_payment',
    ])->where('product_id', '[0-9]+');
    
    Route::get('/payment/product-capacity/{extra_pacacity}', [
        'uses' => 'Payment\payment_controller@do_product_capacity_payment',
        'as' => 'do_product_capacity_payment',
    ])->where('extra_pacacity', '[0-9]+');

    Route::get('/payment/buyAd-reply-capacity/{extra_pacacity}', [
        'uses' => 'Payment\payment_controller@do_buyAd_reply_capacity_payment',
        'as' => 'do_buyAd_reply_capacity_payment',
    ])->where('extra_pacacity', '[0-9]+');

    Route::post('/payment/get-packages-price',[
        'uses' => 'Payment\payment_controller@get_packages_price'
    ]);

    Route::get('/wallet-payment/charge/{amount}',[
        'uses' => 'Payment\wallet_controller@do_charge_wallet'
    ])->where('amount','[0-9]+');


    // Route::get('app/payment/{user_id}/{pakageType}', [
    //     'uses' => 'Payment\payment_controller@app_do_payment',
    //     'as' => 'app_do_payment',
    // ]);

    // Route::get('app/payment/elevator/{product_id}', [
    //     'uses' => 'Payment\payment_controller@app_do_elevator_payment',
    //     'as' => 'do_elevator_payment',
    // ])->where('product_id', '[0-9]+');
    
    // Route::get('app/payment/product-capacity/{user_id}/{extra_pacacity}', [
    //     'uses' => 'Payment\payment_controller@do_product_capacity_payment',
    //     'as' => 'do_product_capacity_payment',
    // ])->where('extra_pacacity', '[0-9]+');

    // Route::get('app/payment/buyAd-reply-capacity/{user_id}/{extra_pacacity}', [
    //     'uses' => 'Payment\payment_controller@do_buyAd_reply_capacity_payment',
    //     'as' => 'do_buyAd_reply_capacity_payment',
    // ])->where('extra_pacacity', '[0-9]+');

    Route::any('/payment_callback', [
        'uses' => 'Payment\payment_controller@payment_callback',
        'as' => 'payment_callback',
    ]);

    Route::any('/elevator_payment_callback', [
        'uses' => 'Payment\payment_controller@elevator_payment_callback',
        'as' => 'elevator_payment_callback',
    ]);
    
    Route::any('/product_capacity_payment_callback', [
        'uses' => 'Payment\payment_controller@product_capacity_payment_callback',
        'as' => 'product_capacity_payment_callback',
    ]);
    
    Route::any('/buyAd_reply_capacity_payment_callback', [
        'uses' => 'Payment\payment_controller@buyAd_reply_capacity_payment_callback',
        'as' => 'buyAd_reply_capacity_payment_callback',
    ]);

    Route::any('/wallet_payment_callback', [
        'uses' => 'Payment\wallet_controller@wallet_payment_callback',
        'as' => 'wallet_payment_callback',
    ]);

    // Route::any('app/payment_callback', [
    //     'uses' => 'Payment\payment_controller@app_payment_callback',
    //     'as' => 'app_payment_callback',
    // ]);

    // Route::any('app/elevator_payment_callback', [
    //     'uses' => 'Payment\payment_controller@app_elevator_payment_callback',
    //     'as' => 'app_elevator_payment_callback',
    // ]);
    
    // Route::any('app/product_capacity_payment_callback', [
    //     'uses' => 'Payment\payment_controller@app_product_capacity_payment_callback',
    //     'as' => 'app_product_capacity_payment_callback',
    // ]);
    
    // Route::any('app/buyAd_reply_capacity_payment_callback', [
    //     'uses' => 'Payment\payment_controller@app_buyAd_reply_capacity_payment_callback',
    //     'as' => 'app_buyAd_reply_capacity_payment_callback',
    // ]);

    Route::post('/is_user_allowed_to_register_product', [
        'uses' => 'Product\product_controller@is_user_allowed_to_register_product',
        'as' => 'is_user_allowed_to_register_product',
    ]);

    Route::post('/get_seller_dashboard_required_data', [
        'uses' => 'Accounting\user_controller@get_seller_dashboard_required_data',
        'as' => 'get_seller_dashboard_required_data',
    ]);

    Route::match(['POST','GET'],'/switch-role',[
        'uses' => 'Accounting\user_controller@switch_user_role',
        'as' => 'swith_user_role'
    ]);

    Route::post('/get_report_options',[
        'uses' => 'Messenger\report_controller@get_report_options',
        'as'   => 'get_report_options'
    ]);

    Route::post('/send_user_report',[
        'uses' => 'Messenger\report_controller@send_user_report',
        'as'   => 'send_user_report'
    ]);


     Route::group(['prefix' => 'group'],function(){
        Route::post('/get_groups_list',[
            'uses' => 'Messenger\group_message_controller@get_user_groups_list',
            'as' => 'get_user_subscribed_groups_list'
        ]);
        Route::post('/subscribe_user',[
            'uses' => 'Messenger\group_message_controller@subscribe_user_in_group',
            'as' => 'user_subscriber_in_group'
        ]);
    
        Route::post('/send_message',[
            'uses' => 'Messenger\group_message_controller@send_message',
            'as' => 'send_message_to_group'
        ]);
    
    
        Route::post('/get_group_chats',[
            'uses' => 'Messenger\group_message_controller@get_group_chats',
            'as' => 'get_group_chats'
        ]);
    

        Route::post('/get_all_groups',[
            'uses' => 'Messenger\group_message_controller@get_all_groups',
            'as' => 'get_all_groups'
        ]);

        Route::delete('/unsubscribe_user',[
            'uses' => 'Messenger\group_message_controller@unsubscribe_user_from_group',
            'as' => 'unsubscribe_user_from_group'
        ]);
     });

     Route::group(['prefix' => 'fcm'],function(){

        Route::post('/register_token',[
            'uses' => 'Notification\fcm_controller@subscribe_token_in_topic',
            'as' => 'register_token'
        ]);

        Route::post('/register_token_in_groups',[
            'uses' => 'Notification\fcm_controller@subscribe_token_in_groups',
            'as' => 'register_token_in_groups'
        ]);

        Route::post('/unregister_token',[
            'uses' => 'Notification\fcm_controller@unsubscribe_token_from_groups',
            'as' => 'unsubscribe_token_from_groups'
        ]);

     });

     Route::post('/profile/add-comment',[
        'uses' => 'Accounting\comment_controller@post_comment',
        'as' => 'post_comment_on_user_porfile'
     ]);


     Route::post('/profile/do-like',[
        'uses' => 'Accounting\comment_controller@do_like_actions',
        'as' => 'get_user_comments'
    ]);

    Route::post('/profile/is-user-authorized-to-post-comment',[
        'uses' => 'Accounting\comment_controller@is_user_authorized_to_post_comment_on_the_user',
        'as' => 'is_user_authorized_to_post_comment_on_the_user'
    ]);

    Route::post('/profile/delete-user-comment',[
        'uses' => 'Accounting\comment_controller@delete_comment',
        'as'   => 'delete_user_comment'
    ]);

    Route::post('/get_special_users_info',[
        'uses' => 'General\marketing_data_controller@get_special_users_info',
        'as'   => 'get_special_users_info'
    ]);

    Route::post('/verify/upload-photos',[
        'uses' => 'Accounting\verification_controller@upload_verification_photos',
        'as' => 'upload_user_verification_photos'
    ]);

    Route::post('/get_show_pricing_page_status',[
        'uses' => 'Accounting\user_controller@get_pricing_page_visit_status',
        'as' => 'get_show_pricing_page_status'
    ]);

    Route::post('/get_my_buyAd_suggestions',[
        'uses' => 'BuyAd\buyAd_controller@get_my_buyAd_suggestions',
        'as'   => 'get_my_buyAd_suggestions'
    ]);

    Route::post('/get_related_buyAds_to_my_product',[
        'uses' => 'Product\product_controller@get_related_buyAds_to_the_last_registered_product'
    ]);

    Route::post('/get_my_buyAds',[
        'uses' => 'BuyAd\buyAd_controller@get_my_buyAds'
    ]); 

    Route::post('/get_channel_contents',[
        'uses' => 'Messenger\channel_controller@get_channel_contents'
    ]);

    Route::post('/get_seller_phone_number',[
        'uses' => 'Accounting\phone_number_controller@get_seller_phone_number',
        'as' => 'get_seller_phone_number'
    ]);

    Route::post('/get_buyer_phone_number',[
        'uses' => 'Accounting\phone_number_controller@get_buyer_phone_number',
        'as' => 'get_buyer_phone_number'
    ]);
    
    Route::post('/set_phone_number_view_permission',[
        'uses' => 'Accounting\phone_number_controller@set_my_phone_number_view_permissions',
        'as' => 'set_my_phone_number_view_permissions'
    ]);
    
    Route::post('/get_phone_number_viewers_list',[
        'uses' => 'Accounting\phone_number_controller@get_my_phone_number_viewers_list',
        'as' => 'get_my_phone_number_viewers_list'
    ]);
    
    Route::post('/get_my_account_balance',[
        'uses' => 'Accounting\user_controller@get_my_account_balance',
        'as' => 'get_my_account_balance'
    ]);

    Route::post('/wallet-expend/elevator',[
        'uses' => 'Payment\wallet_controller@do_elevator_payment_from_wallet',
        'as' => 'do_elevator_payment_from_wallet'
    ]);

    Route::post('/wallet-expend/product-capacity',[
        'uses' => 'Payment\wallet_controller@do_extra_product_capacity_payment_from_wallet',
        'as' => 'do_extra_product_capacity_payment_from_wallet'
    ]);

    Route::post('/wallet-expend/buyAd-capacity',[
        'uses' => 'Payment\wallet_controller@do_extra_buyAd_capacity_payment_from_wallet',
        'as' => 'do_extra_buyad_capacity_payment_from_wallet'
    ]);

    Route::post('/wallet-expend/buy-package',[
        'uses' => 'Payment\wallet_controller@do_package_payemnt_from_wallet',
        'as' => 'do_package_payment_from_wallet'
    ]);
    
    Route::post('/app/get_product_list', [
        'uses' => 'Product\product_list_controller@get_product_list',
        'as' => 'get_product_list',
    ]);

    Route::post('/get-user-phone-contacts',[
        'uses' => 'Accounting\phone_number_controller@get_user_contacts',
        'as' => 'get_user_phone_contact_list'
    ]);

    Route::post('/get-user-referral-info',[
        'uses' => 'Accounting\user_controller@get_referral_credit_amount',
        'as' => 'get_user_referral_credit'
    ]);
    
});

Route::post('/send_phone_verification_code_for_password_reset', [
    'uses' => 'Notification\sms_controller@send_phone_verification_code_for_password_reset',
    'as' => 'send_reset_password_verification_code',
]);

Route::post('/reset_password', [
    'uses' => 'Accounting\user_controller@reset_password',
    'as' => 'reset_password',
]);

Route::post('/profile/get-user-comments',[
    'uses' => 'Accounting\comment_controller@get_user_comments',
    'as' => 'get_user_comments'
]);


// Route::post('/get_buyAd_list_by_user_name', [
//     'uses' => 'BuyAd\buyAd_controller@get_buyAd_list_by_user_name',
//     'as' => 'get_buyAd_list_by_user_name',
// ]);

// Route::get('/ads', function () {
//     return view('dashboard.product.sell_offer_list');
// });

//--------------- App payment routes ---------------------------------------------------

Route::get('app-payment/payment/{user_id}/{pakageType}', [
    'uses' => 'Payment\payment_controller@app_do_payment',
    'as' => 'app_do_payment',
]);

Route::get('app-payment/elevator/{product_id}', [
    'uses' => 'Payment\payment_controller@app_do_elevator_payment',
    'as' => 'app_do_elevator_payment',
])->where('product_id', '[0-9]+');

Route::get('app-payment/product-capacity/{user_id}/{extra_capacity}', [
    'uses' => 'Payment\payment_controller@app_do_product_capacity_payment',
    'as' => 'app_do_product_capacity_payment',
])->where('extra_capacity', '[0-9]+');

Route::get('app-payment/buyAd-reply-capacity/{user_id}/{extra_capacity}', [
    'uses' => 'Payment\payment_controller@app_do_buyAd_reply_capacity_payment',
    'as' => 'app_do_buyAd_reply_capacity_payment',
])->where('extra_capacity', '[0-9]+');

Route::get('/app-wallet-payment/charge/{user_id}/{amount}',[
    'uses' => 'Payment\wallet_controller@do_app_charge_wallet'
])->where('amount','[0-9]+');

Route::any('app-payment/payment_callback', [
    'uses' => 'Payment\payment_controller@app_payment_callback',
    'as' => 'app_payment_callback',
]);

Route::any('app-payment/elevator_payment_callback', [
    'uses' => 'Payment\payment_controller@app_elevator_payment_callback',
    'as' => 'app_elevator_payment_callback',
]);

Route::any('app-payment/product_capacity_payment_callback', [
    'uses' => 'Payment\payment_controller@app_product_capacity_payment_callback',
    'as' => 'app_product_capacity_payment_callback',
]);

Route::any('app-payment/buyAd_reply_capacity_payment_callback', [
    'uses' => 'Payment\payment_controller@app_buyAd_reply_capacity_payment_callback',
    'as' => 'app_buyAd_reply_capacity_payment_callback',
]);

Route::any('/app-wallet-payment-callback', [
    'uses' => 'Payment\wallet_controller@app_wallet_payment_callback',
    'as' => 'app_wallet_payment_callback',
]);


//------------------------- End of app payment routes-------------------------------------------------------



//------------------------- Channel routes ---------------------------------------------------------

Route::get('/public-channel/{slug}',[
    'uses' => 'Messenger\channel_controller@get_channel_content_by_id',
    'as' => 'load_channel_content_by_id'
]);

//------------------------- End of Channel routes ---------------------------------------------------------

Route::get('/logout', function () {
    $otp_count = session('OTP_count');

    Session::flush();
    Session::save();

    Session::put('OTP_count',$otp_count);

    $cookie = \Cookie::forget('user_phone');
    $cookie = \Cookie::forget('user_password');
//    response('view')->withCookie($cookie);

    return redirect('/')->withCookie($cookie);
})->name('logout');

//-------------------------------- ADMIN PANEL---------------------------------------
//Admin Panel
Route::group(['prefix' => 'admin'], function () {
    Route::get('/login', function () {
        return view('admin_panel.login');
    })->name('admin_login_page');

    Route::post('/doLogin', [
        'uses' => 'admin_panel\admin_user_controller@login',
        'as' => 'admin_login',
    ]);
    Route::get('/logout', function () {
        Session::flush();
        Session::save();

        return redirect()->route('admin_login_page');
    })->name('admin_panel_logout');
});

Route::group(['prefix' => 'admin', 'middleware' => [admin_login::class]], function () {
    Route::get('/profile', [
        'uses' => 'admin_panel\admin_profile_controller@load_unconfirmed_profile_records',
        'as' => 'admin_panel_profile',
        'description' => "دسترسی به لیست پروفایلهای تایید نشده"
    ]);

    Route::get('profile-detail/{profile_id}', [
        'uses' => 'admin_panel\admin_profile_controller@load_profile_by_id',
        'as' => 'admin_panel_load_profile_by_id',
        'description' => "دسترسی به جزییات پروفایل تایید نشده",
    ]);

    Route::post('profile_confirmation', [
        'uses' => 'admin_panel\admin_profile_controller@admin_profile_confirmation',
        'as' => 'admin_panel_profile_confirmation',
        'description' => "توانایی تایید پروفایل",
    ]);

    Route::get('/profile-list', [
        'uses' => 'admin_panel\admin_profile_controller@load_confirmed_profile_records',
        'as' => 'admin_panel_profile_list',
        'description' => "دسترسی به لیست پروفایلهای تایید شده",
    ]);

    Route::get('/buyAd', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_unconfirmed_buyAd_list',
        'as' => 'admin_panel_buyAd',
        'description' => "دسترسی به لیست درخواستهای خرید تایید نشده",
    ]);

    Route::get('buyAd-detail/{buyAd_id}', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_unconfirmed_buyAd_by_id',
        'as' => 'admin_panel_load_unconfirmed_buyAd_by_id',
        'description' => "دسترسی به حزییات درخواست خرید تایید نشده",
    ]);

    Route::post('buyAd_confirmation', [
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_confirmation',
        'as' => 'admin_panel_buyAd_confirmation',
        'description' => "توانایی تایید و ویرایش درخواست خرید تایید نشده",
    ]);

    Route::post('buyAd_edit', [
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_edit',
        'as' => 'admin_panel_buyAd_edit',
        'description' => "توانایی ویرایش درخواست خرید تایید شده",
    ]);

    Route::get('/buyAd-list', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_confirmed_buyAd_list',
        'as' => 'admin_panel_buyAd_list',
        'description' => "دسترسی به لیست درخواستهای خرید تایید شده",
    ]);

    Route::get('buyAd-list-detail/{buyAd_id}', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_confirmed_buyAd_by_id',
        'as' => 'admin_panel_load_confirmed_buyAd_by_id',
        'description' => "دسترسی به جزییات درخواست خرید تایید شده",
    ]);

    Route::get('/sellAd', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_unconfirmed_sellAd_list',
        'as' => 'admin_panel_sellAd',
        'description' => "دسترسی به لیست محصولات تایید نشده"
    ]);

    Route::get('sellAd-detail/{sellAd_id}', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_unconfirmed_sellAd_by_id',
        'as' => 'admin_panel_load_unconfirmed_sellAd_by_id',
        'description' => "دسترسی به جزییات محصول تایید نشده",
    ]);

    Route::post('sellAd_confirmation', [
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_confirmation',
        'as' => 'admin_panel_sellAd_confirmation',
        'description' => "توانایی تایید و ویرایش محصول تایید نشده",
    ]);

    Route::post('sellAd_edit', [
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_edit',
        'as' => 'admin_panel_sellAd_edit',
        'description' => "توانایی ویرایش محصول تایید شده",
    ]);

    Route::get('/sellAd-list', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_confirmed_sellAd_list',
        'as' => 'admin_panel_sellAd_list',
        'description' => "دسترسی به لیست محصولات تایید شده",
    ]);

    Route::get('sellAd-list-detail/{sellAd_id}', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_confirmed_sellAd_by_id',
        'as' => 'admin_panel_load_confirmed_sellAd_by_id',
        'description' => "دسترسی به جزییات محصول تایید شده",
    ]);

    //notify
    Route::post('admin_notify', [
        'uses' => 'admin_panel\admin_notify_controller@get_notification_if_any',
        'as' => 'admin_notify',
        'description' => "دسترسی به نوتیفیکیشن های پنل ادمین",
    ]);

    //delete photos
    Route::delete('sellAd/delete_photo_by_id', [
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_photo_delete_by_id',
        'as' => 'delete_sellAd_photo_by_id',
        'description' => "توانایی حذف تصاویر محصول",
    ]);

    // Route::delete('buyAd/delete_photo_by_id', [
    //     'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_photo_delete_by_id',
    //     'as' => 'delete_buyAd_photo_by_id',
    //     'description' => "",
    // ]);

    Route::delete('profile/delete_photo_by_id', [
        'uses' => 'admin_panel\admin_profile_controller@admin_profile_related_photo_delete_by_id',
        'as' => 'delete_profile_related_photo_by_id',
        'description' => "توانایی حذف تصاویر مربوطه و مدارک از پروفایل",
    ]);

    Route::get('user-list', [
        'uses' => 'admin_panel\admin_user_controller@load_user_list',
        'as' => 'admin_panel_load_user_list',
        'description' => "دسترسی به لیست کاربران",
    ]);

    Route::get('user-list-detail/{user_id}', [
        'uses' => 'admin_panel\admin_user_controller@load_user_notes_by_id',
        'as' => 'admin_panel_load_user_notes_by_id',
        'description' => "دسترسی به کامنت های ادمین برای هر کاربر",
    ]);

    // Route::get('sell-offers', [
    //     'uses' => 'admin_panel\admin_sell_offer_controller@load_unconfirmed_sell_offer_list',
    //     'as' => 'admin_panel_sell_offer_list',
    //     'description' => "",
    // ]);

    // Route::get('pending-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_to_initiate_transactions_list',
    //     'as' => 'admin_panel_waiting_to_initiate_transactions_list',
    //     'description' => "",
    // ]);

    // Route::get('transaction-detail/{id}', [
    //     'uses' => 'admin_panel\admin_transaction_controller@get_transaction_with_related_buyAd',
    //     'as' => 'admin_panel_load_transaction_by_id',
    //     'description' => "",
    // ]);

    // Route::get('instant-transaction-detail/{id}', [
    //     'uses' => 'admin_panel\admin_transaction_controller@get_instant_transaction_with_related_data',
    //     'as' => 'admin_panel_load_instant_transaction_by_id',
    //     'description' => "",
    // ]);

    // Route::get('sell-offer-detail/{id}', [
    //     'uses' => 'admin_panel\admin_sell_offer_controller@get_sell_offer_with_related_buyAd',
    //     'as' => 'admin_panel_load_sell_offer_by_id',
    //     'description' => "",
    // ]);

    Route::post('register_note_for_user', [
        'uses' => 'admin_panel\admin_user_controller@register_note_for_user',
        'as' => 'admin_panel_register_note_for_user',
        'description' => "توانایی نوشتن کامنت ادمین برای هر کاربر",
    ]);

    // Route::post('confirm_sell_offer_by_id', [
    //     'uses' => 'admin_panel\admin_sell_offer_controller@confirm_sell_offer_by_id',
    //     'as' => 'admin_panel_confirm_sell_offer_by_id',
    //     'description' => "",
    // ]);

    // Route::get('prepayment-factor-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_prepayment_factor_issuance_transactions_list',
    //     'as' => 'admin_panel_waiting_for_prepayment_factor_issuance_list',
    //     'description' => "",
    // ]);

    // Route::get('prepayment-instant-factor-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_prepayment_factor_issuance_instant_transactions_list',
    //     'as' => 'admin_panel_waiting_for_prepayment_instant_factor_issuance_list',
    //     'description' => "",
    // ]);

    // Route::get('payment-factor-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_payment_factor_issuance_transactions_list',
    //     'as' => 'admin_panel_waiting_for_payment_factor_issuance_list',
    //     'description' => "",
    // ]);

    // Route::get('payment-instant-factor-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_payment_factor_issuance_instant_transactions_list',
    //     'as' => 'admin_panel_waiting_for_payment_instant_factor_issuance_list',
    //     'description' => "",
    // ]);

    // Route::get('transaction-termination-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_termination_transaction_list',
    //     'as' => 'admin_panel_waiting_for_termination_transaction_list',
    //     'description' => "",
    // ]);

    // Route::get('instant-transaction-termination-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_termination_instant_transaction_list',
    //     'as' => 'admin_panel_waiting_for_termination_instant_transaction_list',
    //     'description' => "",
    // ]);

    // Route::get('transaction-checkout-list', [
    //     'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_checkout_transaction_list',
    //     'as' => 'admin_panel_waiting_for_checkout_transaction_list',
    //     'description' => "",
    // ]);

    // Route::match(['get', 'post'], 'statistics', [
    //     'uses' => 'admin_panel\admin_statistics_controller@load_statistics',
    //     'as' => 'admin_panel_load_statistics',
    //     'description' => "دسترسی به قسمت آمار",
    // ]);

    // Route::post('get_site_statistics', [
    //     'uses' => 'admin_panel\admin_statistics_controller@load_statistics',
    //     'as' => 'get_site_statistics',
    //     'description' => "",
    // ]);

    // Route::get('initiate-instant-transaction', function () {
    //     return view('admin_panel.initiateInstantTransaction');
    // })->name('initiate-instant-transaction-view');

    // Route::post('initiate-instant-transaction', [
    //     'uses' => 'admin_panel\admin_transaction_controller@initiate_instant_transaction',
    //     'as' => 'initiate_instant_transaction',
    //     'description' => "",
    // ]);

    // Route::get('generate-manual-payment-url', function () {
    //     return view('admin_panel.generateManualPaymentUrl');
    // })->name('generate_manual_payment_url');

    Route::match(['get', 'post'], '/statisticsCharts', [
        'uses' => 'admin_panel\admin_chart_controller@chart_loader',
        'as' => 'admin_panel_load_statistics_chart',
        'description' => "دسترسی به قسمت نمودارها و آمار سایت",
    ]);

    Route::get('/messages', [
        'uses' => 'admin_panel\admin_message_controller@load_messages_form',
        'as' => 'admin_panel_message_list',
        'description' => 'دسترسی به صفحه ی پیامها'
    ]);

    Route::post('/messages', [
        'uses' => 'admin_panel\admin_message_controller@get_all_user_contacts_with_related_messages',
        'as' => 'admin_panel_load_user_messages',
        'description' => "دسترسی به چت های کاربران",
    ]);

    Route::get('/user-comment-list',[
        'uses' => 'admin_panel\admin_user_comment_controller@load_unconfirmed_comments',
        'as' => 'load_users_unconfirmed_comments',
        'description' => "دسترسی به لیست کامنتهای تایید نشده",
    ]);

    Route::get('/user-comment-detail/{id}',[
        'uses' => 'admin_panel\admin_user_comment_controller@get_user_comment_by_id',
        'as'   => 'admin_panel_load_user_comment_by_id',
        'description' => "توانایی مشاهده ی جزییات یک کامنت از طرف کاربر",
    ]);

    Route::post('/confirm_user_comment_by_id',[
        'uses' => 'admin_panel\admin_user_comment_controller@confirm_user_comment_by_id',
        'as'   => 'admin_panel_confirm_user_comment_by_id',
        'description' => "توانایی تایید یک کامنت تایید نشده",
    ]);

    Route::get('/suspicious-messages-list',[
        'uses' => 'admin_panel\AnomalyDetector\messaging_anomaly_controller@load_messaging_anomaly',
        'as'   => 'admin_panel_load_messaging_anomaly',
        'description' => "دسترسی به لیست پیام های آنومالی",
    ]);

    Route::post('/block-operator',[
        'uses' => 'admin_panel\AnomalyDetector\messaging_anomaly_controller@block_operator',
        'as'  => 'admin_panel_block_operator',
        'description' => "توانایی مسدود و عدم مسدود سازی یک کاربر",
    ]);

    Route::get('/unverified-user-list',[
        'uses' => 'admin_panel\admin_verification_controller@load_unverified_documents',
        'as' => 'admin_load_unverified_documents',
        'description' => "دسترسی به لیست کاربرانی که فرم احراز هویت را پر کرده اند",
    ]);

    Route::get('/document-detail/{user_id}', [
        'uses' => 'admin_panel\admin_verification_controller@load_user_documents_by_id',
        'as' => 'admin_panel_load_user_document_by_id',
        'description' => "دسترسی به تصاویر و جزییات ارسال شده برای احراز هویت",
    ]);
    
    Route::delete('/d-verifivation-photo', [
        'uses' => 'admin_panel\admin_verification_controller@delete_verification_photo_by_id',
        'as' => 'delete_verification_photo_by_id',
        'description' => "توانایی حذف تصویر ارسال شده برای احراز هویت",
    ]);
    
    Route::post('/verifiy-user-account', [
        'uses' => 'admin_panel\admin_verification_controller@verify_user_account',
        'as' => 'verify_user_account_by_id',
        'description' => "توانایی احراز هویت کردن کاربران",
    ]);

    Route::get('/payment-list',[
        'uses' => 'admin_panel\admin_payment_controller@get_payment_logs',
        'as' => 'admin_panel_payment_list',
        'description' => "دسترسی به لیست کلی وضعیت تراکنش ها",
    ]);

    Route::post('/add-channel-content',[
        'uses' => 'Messenger\channel_controller@add_content',
        'as' => 'admin_panel_add_channel_content',
        'description' => "توانایی اضافه کردن محتوا در کانال رسمی باسکول در پیام رسان",
    ]);

    Route::delete('/d-channel-content',[
        'uses' => 'Messenger\channel_controller@delete_channel_content',
        'as' => 'delete_channel_content_by_admin',
        'description' => "توانایی حذف محتوااز کانال رسمی باسکول",
    ]);

    Route::get('/channel-contents-list',[
        'uses' => 'Messenger\channel_controller@get_all_channel_contents',
        'as' => 'admin_panel_channel_content_list',
        'description' => "دسترسی به لیست محتوای منتشر شده در کانال باسکول",
    ]);

    Route::get('/submit-to-channel', [
        'uses' => 'Messenger\channel_controller@submit_contents_to_channel',
        'as' => 'admin_panel_submit_to_channel',
        'description' => "دسترسی به صفحه ی اضافه کردن محتوا به کانال باسکول",
    ]);
    
    Route::get('/categories-meta-data-list', [
        'uses' => 'admin_panel\admin_seo_controller@load_meta_contents_list',
        'as' => 'admin_panel_load_meta_contents_list',
        'description' => "دسترسی به لیست محتوا های منتشر شده برای دسته بندی ها",
    ]);

    Route::get('/meta-data-detail/{id}', [
        'uses' => 'admin_panel\admin_seo_controller@load_meta_content_details',
        'as' => 'load_meta_content_details_by_id',
        'description' => "دسترسی به جزییات محتوای منتشر شده برای دسته بندی ها",
    ]);

    Route::post('/edit-category-meta-data-detail', [
        'uses' => 'admin_panel\admin_seo_controller@edit_meta_content_to_a_category',
        'as' => 'admin_panel_edit_meta_content_to_a_category',
        'description' => "توانایی ویرایش محتوای یم دسته بندی که بلافاصله منتشر خواهد شد",
    ]);

    Route::post('/add-category-meta-data-detail', [
        'uses' => 'admin_panel\admin_seo_controller@add_meta_content_to_a_category',
        'as' => 'admin_panel_add_meta_content_to_a_category',
        'description' => "توانایی اضافه کردن محتوای جدید برای یک دسته بندی",
    ]);

    Route::get('/add-category-meta-data-detail',[
        'uses' => 'admin_panel\admin_seo_controller@load_add_new_category_meta_form',
        'as' => 'admin_panel_add_new_meta_content_form',
        'description' => 'دسترسی به صفحه اضافه کردن محتوای جدید برای دسته بندی ها'
    ]);

    Route::get('/same-device-users-list/{user_id}',[
        'uses' => 'admin_panel\admin_user_controller@load_same_device_users',
        'as' => 'admin_panel_same_device_users_list',
        'description' => "دسترسی به لیست دستگاه های متصل به یک حساب کاربری",
    ])->where('user_id','[0-9]+');

    Route::get('/clear-storage-cache',[
        'uses' => 'admin_panel\admin_user_controller@clear_categories_cached_file',
        'as' => 'admin_panel_clear_categories_cache',
        'description' => "توانایی حذف کش برای لیست دسته بندی ها"
    ]);

    Route::get('/d-leads',function(){
        LeadDistributorBot::dispatch();
    })->name('admin_panel_manual_lead_distribution')->setAction([
        'description' => 'توانایی توزیع لید بصورت دستی'
    ]);

    Route::get('/admin-users-list',[
        'uses' => 'admin_panel\admin_user_controller@load_admin_users_list',
        'as' => 'load_admin_users_list',
        'description' => "دسترسی به لیست کاربران ادمین",
    ]);

    Route::get('/add-new-admin-form',[
        'uses' => 'admin_panel\admin_user_controller@load_add_new_user_form',
        'as' => 'admin_panel_add_new_admin_user_form',
        'description' => 'دسترسی به فرم اضافه کردن ادمین جدید'
    ]);

    Route::post('/add-new-admin-user',[
        'uses' => 'admin_panel\admin_user_controller@add_new_admin_user',
        'as' => 'admin_panel_add_new_admin_user',
        'description' => "توانایی اضافه کردن ادمین جدید",
    ]);

    Route::get('/admin-user-permission-form/{admin_user_id}',[
        'uses' => 'admin_panel\admin_user_controller@load_admin_user_permission_setup_form',
        'as' => 'admin_panel_load_admin_user_permission_setup_form',
        'description' => "دسترسی به لیست دسترسی های یک کاربر ادمین",
    ]);

    Route::post('/setup-admin-user-permissions',[
        'uses' => 'admin_panel\admin_user_controller@setup_admin_user_permissions',
        'as'   => 'admin_panel_setup_admin_user_permissions',
        'description' => "توانایی دسترسی دادن یا حذف دسترسی یک کاربر ادمین رو مارد دسترسی",
    ]);

    Route::get('/make-content-visible/{id}',[
        'uses' => 'admin_panel\admin_seo_controller@make_category_meta_content_visible',
        'as' => 'admin_panel_make_category_meta_content_visible',
        'description' => "توانایی اجازه انتشار دادن به یک محتوا دسته بندی که اولین بار اضافه شده",
    ]);
    
    
    Route::get('/make-content-invisible/{id}',[
        'uses' => 'admin_panel\admin_seo_controller@make_category_meta_content_invisible',
        'as' => 'admin_panel_make_category_meta_content_invisible',
        'description' => "توانایی از حالت انتشار خارج کردن محتوای یک دسته بندی",
    ]);

    Route::get('/potential-paying-users-list',[
        'uses' => 'admin_panel\admin_payment_controller@get_potential_paying_users_list',
        'as'   => 'admin_panel_get_potential_paying_users_list',
        'description' => "دسترسی به لیست کاربران گیر کرده در درگاه بانکی",
    ]);
    
    Route::get('/package-expiring-custormers',[
        'uses' => 'admin_panel\admin_payment_controller@get_package_expiring_customers_list',
        'as'   => 'admin_panel_get_package_expiring_customers_list',
        'description' => "دسترسی به لیست کاربرانی که عضویت آنها در حال اتمام است",
    ]);
    
    Route::get('/setup-admin-routes',[
        'uses' => 'admin_panel\admin_user_controller@get_admin_routes',
        'as'   => 'admin_panel_get_package_expiring_customers_lists'
    ]);
    
});

Route::post('/refresh-token',[
    'uses' => 'Accounting\user_controller@refresh_token'
]);

//Route::any('/payment_callback',[
//    'uses' => 'Payment\payment_controller@my_payment_callback',
//    'as' => 'payment_callback'
//]);

Route::any('/instant_payment_callback', [
    'uses' => 'Payment\payment_controller@instant_transaction_payment_callback',
    'as' => 'instant_transaction_payment_callback',
]);

Route::post('/get_wp_posts', [
    'uses' => 'index_controller@get_wp_posts',
    'as' => 'get_wp_posts',
]);


Route::get('download-media','General\media_controller@download_media');


// Route::group(['middleware' => [cors::class]], function () {
//     Route::options('/broadcastAuth', function () {
//         return response('OK', \Illuminate\Http\Response::HTTP_NO_CONTENT)
//             ->header('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
//     });
//     Route::post('/broadcastAuth', function (Request $request) {
//         $pusher = new Pusher('f04fb3210cdacabb3540', 'a2ffc348382adf93ea19', '710900', array('cluster' => 'ap1'));
//         $temp = [];
//         $temp = $pusher->socket_auth($_POST['channel_name'], $_POST['socket_id']);

//         return response()->json([
//             'auth' => json_decode($temp)->auth,
//         ]);
//     });
// });

Route::post('/is_user_from_webview', [
    'uses' => 'Accounting\user_controller@is_user_from_webview',
]);

Route::get('/sitemap-buskool-txwhgvuikd.xml', [
    'uses' => 'General\sitemap_controller@get_required_data_for_sitemap',
    'as' => 'get_sitemap',
]);

Route::get('/shared-profile/{username}',[
    'uses' => 'Accounting\profile_controller@get_user_shared_profile_info'
])->name('sharedProfile')->where("username","[A-Za-z0-9_]+$");

Route::get('/profileBlade', function () {
    return view('layout.profile');
});
//-----------------------------------------------------
//    in code bayad bad az har chizi ke any dare biad
Route::get('/{any}', function (Request $request) {
    if (!$request->session()->has('user_id')) {
        $user_phone = $request->cookie('user_phone');
        $user_hashed_password = $request->cookie('user_password');

        if ($user_phone && $user_hashed_password) {
            $login_middleware_object = new login();
            $status = $login_middleware_object->set_user_session($user_phone, $user_hashed_password);
        }
    }

    return  view('layout.master');
})->where('any', '.*');
//-----------------------------------------------------
