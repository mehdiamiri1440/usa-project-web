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
use App\profile;
use Illuminate\Http\Request;

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
    'uses' => 'user_controller@login',
    'as' => 'login',
]);

Route::get('/register-from-blog', function () {
    session(['is_from_QA_blog' => true]);

    return redirect('/register');
});

Route::post('/user/is_user_name_unique', [
    'uses' => 'user_controller@does_user_name_already_exists',
    'as' => 'does_user_name_already_exists',
]);

Route::post('/user/is_national_code_unique', [
    'uses' => 'user_controller@does_national_code_already_exists',
    'as' => 'does_national_code_already_exists',
]);

Route::post('send_verification_code', [
    'uses' => 'sms_controller@send_phone_verification_code',
    'as' => 'send_verification_code',
]);

Route::post('/verify_code', [
    'uses' => 'sms_controller@verify_code',
    'as' => 'verify_code',
]);

Route::post('/get_category_list', [
    'uses' => 'category_controller@get_all_categories',
    'as' => 'get_category_list',
]);

Route::post('/get_category_meta_data',[
    'uses' => 'product_controller@get_category_tags_data_if_any',
    'as' => 'get_gategory_meta_data'
]);

Route::post('/user/get_product_list', [
    'uses' => 'product_controller@get_product_list',
    'as' => 'get_product_list',
]);

// Route::post('/user/get_buyAd_list',[
//     'uses' => 'buyAd_controller@get_buyAd_list',
//     'as' => 'get_buyAd_list'
// ]);

Route::post('/location/get_location_info', [
    'uses' => 'location_controller@get_all_provinces_or_cities_in_the_province_in_iran',
    'as' => 'get_location_info',
]);

Route::post('/get_product_by_id', [
    'uses' => 'product_controller@get_product_by_id',
    'as' => 'get_product_by_id',
]);

// Route::post('/get_buy_ad_by_id', [
//     'uses' => 'buyAd_controller@get_buy_ad_by_id',
//     'as' => 'get_buy_ad_by_id',
// ]);

Route::post('/get_related_products', [
    'uses' => 'product_controller@get_related_products_to_given_the_product',
    'as' => 'get_related_products',
]);

Route::post('/load_profile_by_user_name', [
    'uses' => 'profile_controller@get_last_profile_info_with_all_related_content_by_user_name',
    'as' => 'load_profile_by_user_name',
]);

Route::post('/get_product_list_by_user_name', [
    'uses' => 'product_controller@get_product_list_by_user_name',
    'as' => 'get_product_list_by_user_name',
]);

Route::post('/get_user_statistics_by_user_name', [
    'uses' => 'profile_controller@get_user_statistics_by_user_name',
    'as' => 'get_user_statistics_by_user_name',
]);

Route::post('/get_user_reputation_score', [
    'uses' => 'reputation_controller@calculate_user_reputation_score',
    'as' => 'get_user_reputation_score',
]);

// Route::post('/increment_user_profile_visit_count', [
//     'uses' => 'profile_controller@increment_user_profile_visit_count',
//     'as' => 'increment_user_profile_visit_count',
// ]);

Route::post('/get_sample_products', [
    'uses' => 'product_controller@get_sample_products',
    'as' => 'get_sample_products',
]);

Route::post('/get_sample_buyAds', [
    'uses' => 'buyAd_controller@get_sample_buyAds',
    'as' => 'get_sample_buyAds',
]);

Route::group(['middleware' => [login::class]], function () {
    Route::post('/user/add_product', [
        'uses' => 'product_controller@add_product',
        'as' => 'add_product',
    ])->middleware('optimizeImages');

    Route::post('/user/add_buyAd', [
        'uses' => 'buyAd_controller@add_buyAd',
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
        'uses' => 'profile_controller@profile_modification',
        'as' => 'profile_modification',
    ])->middleware('optimizeImages');

    Route::post('/delete_product_by_id', [
        'uses' => 'product_controller@delete_product_by_id',
        'as' => 'delete_product_by_id',
    ]);

    // Route::delete('/delete_buy_ad_by_id', [
    //     'uses' => 'buyAd_controller@delete_buy_ad_by_id',
    //     'as' => 'delete_buy_ad_by_id',
    // ]);

    // Route::post('/add_sell_offer', [
    //     'uses' => 'sell_offer_controller@add_sell_offer',
    //     'as' => 'add_sell_offer',
    // ]);

    // Route::post('/get_sell_offer_by_id', [
    //     'uses' => 'sell_offer_controller@get_sell_offer_by_id',
    //     'as' => 'get_sell_offer_by_id',
    // ]);

    // Route::post('/get_my_buyAds_with_related_sell_offers', [
    //     'uses' => 'buyAd_controller@get_my_buyAds_with_related_sell_offers',
    //     'as' => 'get_my_buyAds_with_related_sell_offers',
    // ]);

    Route::post('/get_related_buyAds_list_to_the_seller', [
        'uses' => 'buyAd_controller@get_related_buyAds_list_to_the_seller',
        'as' => 'get_related_buyAds_list_to_the_seller',
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
        'uses' => 'profile_controller@get_last_profile_info_with_all_related_content',
        'as' => 'profile_controller_info',
    ]);

    // Route::post('/get_user_transaction_list', [
    //     'uses' => 'transaction_controller@get_user_in_progress_transaction_list',
    //     'as' => 'get_user_transaction_list',
    // ]);

    // Route::post('/confirm_initial_contract', [
    //     'uses' => 'user_controller@initial_contract_confirmation_by_user',
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

    Route::post('/does_buyer_already_had_requested_the_produtct', [
        'uses' => 'product_controller@does_buyer_already_had_requested_the_product',
        'as' => 'does_buyer_already_had_requested_the_product',
    ]);

    // Route::post('/register_buyer_request_for_the_product', [
    //     'uses' => 'product_controller@register_buyer_request_for_the_product',
    //     'as' => 'register_buyer_request_for_the_product',
    // ]);

    Route::post('/change_password', [
        'uses' => 'user_controller@change_password',
        'as' => 'change_user_password',
    ]);

    // Route::post('/get_buyAd_owner_user_id', [
    //     'uses' => 'buyAd_controller@get_buyAd_owner_user_id',
    //     'as' => 'get_buyAd_owner_user_id',
    // ]);

    // Route::post('/get_contract_sides_user_info', [
    //     'uses' => 'user_controller@get_contract_sides_user_info',
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
        'uses' => 'message_controller@send_message',
        'as' => 'send_message',
    ]);

    Route::post('/get_contact_list', [
        'uses' => 'message_controller@get_current_user_contact_list',
        'as' => 'get_current_user_contact_list',
    ]);

    Route::post('/get_total_unread_messages_for_current_user', [
        'uses' => 'message_controller@get_total_unread_messages_for_current_user',
        'as' => 'message_controller@get_total_unread_messages_for_current_user',
    ]);

    Route::post('/get_user_chat_history', [
        'uses' => 'message_controller@get_user_chat_history',
        'as' => 'get_user_chat_history',
    ]);

    Route::post('/set_last_chat_contact', [
        'uses' => 'message_controller@set_last_chat_contact',
        'as' => 'set_last_chat_contact',
    ]);

    Route::post('/get_last_chat_contact_info_from_session', [
        'uses' => 'message_controller@get_last_chat_contact_info_from_session',
        'as' => 'get_last_chat_contact_info_from_session',
    ]);

    Route::post('/get_user_last_confirmed_profile_photo', [
        'uses' => 'profile_controller@get_user_last_confirmed_profile_photo',
        'as' => 'get_user_last_confirmed_profile_photo',
    ]);

    // Route::post('/is_allowed_to_access_buyAd_requests', [
    //     'uses' => 'buyAd_controller@is_user_allowed_to_access_buyAd_requests',
    //     'as' => 'is_allowed_to_access_buyAd_requests',
    // ]);

    Route::post('/edit_product', [
        'uses' => 'product_controller@edit_product_by_id',
        'as' => 'edit_product_by_id',
    ]);

    Route::get('/payment/{pakageType}', [
        'uses' => 'payment_controller@do_payment',
        'as' => 'do_payment',
    ]);

    Route::get('/payment/elevator/{product_id}', [
        'uses' => 'payment_controller@do_elevator_payment',
        'as' => 'do_elevator_payment',
    ])->where('product_id', '[0-9]+');

    Route::any('/payment_callback', [
        'uses' => 'payment_controller@payment_callback',
        'as' => 'payment_callback',
    ]);

    Route::any('/elevator_payment_callback', [
        'uses' => 'payment_controller@elevator_payment_callback',
        'as' => 'elevator_payment_callback',
    ]);

    Route::post('/is_user_allowed_to_register_product', [
        'uses' => 'product_controller@is_user_allowed_to_register_product',
        'as' => 'is_user_allowed_to_register_product',
    ]);

    Route::post('/get_seller_dashboard_required_data', [
        'uses' => 'user_controller@get_seller_dashboard_required_data',
        'as' => 'get_seller_dashboard_required_data',
    ]);

    Route::get('/switch-role',[
        'uses' => 'user_controller@switch_user_role',
        'as' => 'swith_user_role'
    ]);
    Route::group(['prefix' => 'group'],function(){
        Route::post('/subscribe_user',[
            'uses' => 'group_message_controller@subscribe_user_in_group',
            'as' => 'user_subscriber_in_group'
        ]);

        Route::post('/send_message',[
            'uses' => 'group_message_controller@send_message',
            'as' => 'send_message_to_group'
        ]);

        Route::post('/get_groups_list',[
            'uses' => 'group_message_controller@get_user_groups_list',
            'as' => 'get_user_subscribed_groups_list'
        ]);

        Route::post('/get_group_chats',[
            'uses' => 'group_message_controller@get_group_chats',
            'as' => 'get_group_chats'
        ]);

        Route::delete('/unsubscribe_user',[
            'uses' => 'group_message_controller@unsubscribe_user_from_group',
            'as' => 'unsubscribe_user_from_group'
        ]);
    });
    
});

Route::post('/send_phone_verification_code_for_password_reset', [
    'uses' => 'sms_controller@send_phone_verification_code_for_password_reset',
    'as' => 'send_reset_password_verification_code',
]);

Route::post('/reset_password', [
    'uses' => 'user_controller@reset_password',
    'as' => 'reset_password',
]);

// Route::post('/get_buyAd_list_by_user_name', [
//     'uses' => 'buyAd_controller@get_buyAd_list_by_user_name',
//     'as' => 'get_buyAd_list_by_user_name',
// ]);

// Route::get('/ads', function () {
//     return view('dashboard.product.sell_offer_list');
// });

Route::get('/logout', function () {
    Session::flush();
    Session::save();

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
    ]);

    Route::get('profile-detail/{profile_id}', [
        'uses' => 'admin_panel\admin_profile_controller@load_profile_by_id',
        'as' => 'admin_panel_load_profile_by_id',
    ]);

    Route::post('profile_confirmation', [
        'uses' => 'admin_panel\admin_profile_controller@admin_profile_confirmation',
        'as' => 'admin_panel_profile_confirmation',
    ]);

    Route::get('/profile-list', [
        'uses' => 'admin_panel\admin_profile_controller@load_confirmed_profile_records',
        'as' => 'admin_panel_profile_list',
    ]);

    Route::get('/buyAd', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_unconfirmed_buyAd_list',
        'as' => 'admin_panel_buyAd',
    ]);

    Route::get('buyAd-detail/{buyAd_id}', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_unconfirmed_buyAd_by_id',
        'as' => 'admin_panel_load_unconfirmed_buyAd_by_id',
    ]);

    Route::post('buyAd_confirmation', [
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_confirmation',
        'as' => 'admin_panel_buyAd_confirmation',
    ]);

    Route::post('buyAd_edit', [
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_edit',
        'as' => 'admin_panel_buyAd_edit',
    ]);

    Route::get('/buyAd-list', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_confirmed_buyAd_list',
        'as' => 'admin_panel_buyAd_list',
    ]);

    Route::get('buyAd-list-detail/{buyAd_id}', [
        'uses' => 'admin_panel\admin_buyAd_controller@load_confirmed_buyAd_by_id',
        'as' => 'admin_panel_load_confirmed_buyAd_by_id',
    ]);

    Route::get('/sellAd', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_unconfirmed_sellAd_list',
        'as' => 'admin_panel_sellAd',
    ]);

    Route::get('sellAd-detail/{sellAd_id}', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_unconfirmed_sellAd_by_id',
        'as' => 'admin_panel_load_unconfirmed_sellAd_by_id',
    ]);

    Route::post('sellAd_confirmation', [
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_confirmation',
        'as' => 'admin_panel_sellAd_confirmation',
    ]);

    Route::post('sellAd_edit', [
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_edit',
        'as' => 'admin_panel_sellAd_edit',
    ]);

    Route::get('/sellAd-list', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_confirmed_sellAd_list',
        'as' => 'admin_panel_sellAd_list',
    ]);

    Route::get('sellAd-list-detail/{sellAd_id}', [
        'uses' => 'admin_panel\admin_sellAd_controller@load_confirmed_sellAd_by_id',
        'as' => 'admin_panel_load_confirmed_sellAd_by_id',
    ]);

    //notify
    Route::post('admin_notify', [
        'uses' => 'admin_panel\admin_notify_controller@get_notification_if_any',
        'as' => 'admin_notify',
    ]);

    //delete photos
    Route::delete('sellAd/delete_photo_by_id', [
        'uses' => 'admin_panel\admin_sellAd_controller@admin_sellAd_photo_delete_by_id',
        'as' => 'delete_sellAd_photo_by_id',
    ]);

    Route::delete('buyAd/delete_photo_by_id', [
        'uses' => 'admin_panel\admin_buyAd_controller@admin_buyAd_photo_delete_by_id',
        'as' => 'delete_buyAd_photo_by_id',
    ]);

    Route::delete('profile/delete_photo_by_id', [
        'uses' => 'admin_panel\admin_profile_controller@admin_profile_related_photo_delete_by_id',
        'as' => 'delete_profile_related_photo_by_id',
    ]);

    Route::get('user-list', [
        'uses' => 'admin_panel\admin_user_controller@load_user_list',
        'as' => 'admin_panel_load_user_list',
    ]);

    Route::get('user-list-detail/{user_id}', [
        'uses' => 'admin_panel\admin_user_controller@load_user_notes_by_id',
        'as' => 'admin_panel_load_user_notes_by_id',
    ]);

    Route::get('sell-offers', [
        'uses' => 'admin_panel\admin_sell_offer_controller@load_unconfirmed_sell_offer_list',
        'as' => 'admin_panel_sell_offer_list',
    ]);

    Route::get('pending-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_to_initiate_transactions_list',
        'as' => 'admin_panel_waiting_to_initiate_transactions_list',
    ]);

    Route::get('transaction-detail/{id}', [
        'uses' => 'admin_panel\admin_transaction_controller@get_transaction_with_related_buyAd',
        'as' => 'admin_panel_load_transaction_by_id',
    ]);

    Route::get('instant-transaction-detail/{id}', [
        'uses' => 'admin_panel\admin_transaction_controller@get_instant_transaction_with_related_data',
        'as' => 'admin_panel_load_instant_transaction_by_id',
    ]);

    Route::get('sell-offer-detail/{id}', [
        'uses' => 'admin_panel\admin_sell_offer_controller@get_sell_offer_with_related_buyAd',
        'as' => 'admin_panel_load_sell_offer_by_id',
    ]);

    Route::post('register_note_for_user', [
        'uses' => 'admin_panel\admin_user_controller@register_note_for_user',
        'as' => 'admin_panel_register_note_for_user',
    ]);

    Route::post('confirm_sell_offer_by_id', [
        'uses' => 'admin_panel\admin_sell_offer_controller@confirm_sell_offer_by_id',
        'as' => 'admin_panel_confirm_sell_offer_by_id',
    ]);

    Route::get('prepayment-factor-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_prepayment_factor_issuance_transactions_list',
        'as' => 'admin_panel_waiting_for_prepayment_factor_issuance_list',
    ]);

    Route::get('prepayment-instant-factor-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_prepayment_factor_issuance_instant_transactions_list',
        'as' => 'admin_panel_waiting_for_prepayment_instant_factor_issuance_list',
    ]);

    Route::get('payment-factor-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_payment_factor_issuance_transactions_list',
        'as' => 'admin_panel_waiting_for_payment_factor_issuance_list',
    ]);

    Route::get('payment-instant-factor-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_payment_factor_issuance_instant_transactions_list',
        'as' => 'admin_panel_waiting_for_payment_instant_factor_issuance_list',
    ]);

    Route::get('transaction-termination-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_termination_transaction_list',
        'as' => 'admin_panel_waiting_for_termination_transaction_list',
    ]);

    Route::get('instant-transaction-termination-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_termination_instant_transaction_list',
        'as' => 'admin_panel_waiting_for_termination_instant_transaction_list',
    ]);

    Route::get('transaction-checkout-list', [
        'uses' => 'admin_panel\admin_transaction_controller@load_waiting_for_checkout_transaction_list',
        'as' => 'admin_panel_waiting_for_checkout_transaction_list',
    ]);

    Route::match(['get', 'post'], 'statistics', [
        'uses' => 'admin_panel\admin_statistics_controller@load_statistics',
        'as' => 'admin_panel_load_statistics',
    ]);

    Route::post('get_site_statistics', [
        'uses' => 'admin_panel\admin_statistics_controller@load_statistics',
        'as' => 'get_site_statistics',
    ]);

    Route::get('initiate-instant-transaction', function () {
        return view('admin_panel.initiateInstantTransaction');
    })->name('initiate-instant-transaction-view');

    Route::post('initiate-instant-transaction', [
        'uses' => 'admin_panel\admin_transaction_controller@initiate_instant_transaction',
        'as' => 'initiate_instant_transaction',
    ]);

    Route::get('generate-manual-payment-url', function () {
        return view('admin_panel.generateManualPaymentUrl');
    })->name('generate_manual_payment_url');

    Route::match(['get', 'post'], '/statisticsCharts', [
        'uses' => 'admin_panel\admin_chart_controller@chart_loader',
        'as' => 'admin_panel_load_statistics_chart',
    ]);

    Route::get('/messages', function () {
        return view('admin_panel.message');
    })->name('admin_panel_message_list');

    Route::post('/messages', [
        'uses' => 'admin_panel\admin_message_controller@get_all_user_contacts_with_related_messages',
        'as' => 'admin_panel_load_user_messages',
    ]);
});

//Route::any('/payment_callback',[
//    'uses' => 'payment_controller@my_payment_callback',
//    'as' => 'payment_callback'
//]);

Route::any('/instant_payment_callback', [
    'uses' => 'payment_controller@instant_transaction_payment_callback',
    'as' => 'instant_transaction_payment_callback',
]);

Route::post('/get_wp_posts', [
    'uses' => 'index_controller@get_wp_posts',
    'as' => 'get_wp_posts',
]);

Route::group(['middleware' => [cors::class]], function () {
    Route::options('/broadcastAuth', function () {
        return response('OK', \Illuminate\Http\Response::HTTP_NO_CONTENT)
            ->header('Access-Control-Allow-Methods', 'POST, DELETE, OPTIONS');
    });
    Route::post('/broadcastAuth', function (Request $request) {
        $pusher = new Pusher('f04fb3210cdacabb3540', 'a2ffc348382adf93ea19', '710900', array('cluster' => 'ap1'));
        $temp = [];
        $temp = $pusher->socket_auth($_POST['channel_name'], $_POST['socket_id']);

        return response()->json([
            'auth' => json_decode($temp)->auth,
        ]);
    });
});

Route::post('/is_user_from_webview', [
    'uses' => 'user_controller@is_user_from_webview',
]);

Route::get('/sitemap.xml', [
    'uses' => 'sitemap_controller@get_required_data_for_sitemap',
    'as' => 'get_sitemap',
]);

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
