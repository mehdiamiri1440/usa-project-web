<?php

return [
    'type-0' => [
        'max-products' => 1,
        'view-priority' => 4,
        'sms-to-buyers' => false,
        'immediate-confirm' => false,
        'view-in-special-products' => false,
        'reputation-score' => 0,
        'validated-seller' => false,
        'access-to-buy-requests' => false,
        'show-profile-link-in-blog' => false,
        'pakage-duration-in-months' => 12,
        'buyAd-count' => 5,
        'buyAd-reply-count' => 3,
        'elevator-count' => 0,
        'price' => 0
    ],
   'type-1' => [
       'max-products' => 3,
       'view-priority' => 3,
       'sms-to-buyers' => true,
       'immediate-confirm' => true,
       'view-in-special-products' => false,
       'reputation-score' => 150,
       'validated-seller' => false,
       'access-to-buy-requests' => false,
       'show-profile-link-in-blog' => false,
       'pakage-duration-in-months' => 3,
       'buyAd-count' => 10,
       'buyAd-reply-count' => 10,
       'elevetor-count' => 0,
       'price' => 2970000,
       'price-1' => 2490000, //old price
       'price-discount' => 1990000
   ],
   'type-2' => [
       'max-products' => 2,
       'view-priority' => 2,
       'sms-to-buyers' => true,
       'immediate-confirm' => true,
       'view-in-special-products' => false,
       'reputation-score' => 100,
       'validated-seller' => false,
       'access-to-buy-requests' => false,
       'show-profile-link-in-blog' => true,
       'pakage-duration-in-months' => 6,
       'elevetor-count' => 1,
       'buyAd-count' => 15,
       'buyAd-reply-count' => 10,
       'elevetor-count' => 1,
       'price' => 6490000
   ],
    'type-3' => [
        'max-products' => 7,
        'view-priority' => 1,
        'sms-to-buyers' => true,
        'immediate-confirm' => true,
        'view-in-special-products' => true,
        'reputation-score' => 500,
        'validated-seller' => true,
        'access-to-buy-requests' => true,
        'show-profile-link-in-blog' => true,
        'pakage-duration-in-months' => 12,
        'buyAd-count' => 2000,
        'buyAd-reply-count' => 30,
        'elevetor-count' => 1,
        'price' => 9790000,
        'price-1' => 6890000, //old price
        'price-discount' => 6890000
    ],
    
    'elevator' => [
        'price' => 250000,
        'expiration-time-in-days' => 7
    ],
    'phone-number' => [
        'view-price' => 500, //Toman
        'max-daily-access-count' => 10
    ],
];