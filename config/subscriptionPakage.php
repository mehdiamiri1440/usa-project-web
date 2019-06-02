<?php

return [
    'type-0' => [
        'max-products' => 1,
        'view-priority' => 4,
        'sms-to-buyers' => false,
        'immediate-confirm' => false,
        'reputation-score' => 0,
        'validated-seller' => false,
        'access-to-buy-requests' => false,
        'show-profile-link-in-blog' => false,
    ],
    'type-1' => [
        'max-products' => 3,
        'view-priority' => 3,
        'sms-to-buyers' => true,
        'immediate-confirm' => true,
        'reputation-score' => 80,
        'validated-seller' => false,
        'access-to-buy-requests' => false,
        'show-profile-link-in-blog' => false,
    ],
    'type-2' => [
        'max-products' => 5,
        'view-priority' => 2,
        'sms-to-buyers' => true,
        'immediate-confirm' => true,
        'reputation-score' => 200,
        'validated-seller' => false,
        'access-to-buy-requests' => false,
        'show-profile-link-in-blog' => true,
    ],
    'type-3' => [
        'max-products' => 7,
        'view-priority' => 1,
        'sms-to-buyers' => true,
        'immediate-confirm' => true,
        'reputation-score' => 420,
        'validated-seller' => true,
        'access-to-buy-requests' => true,
        'show-profile-link-in-blog' => true,
    ],
];