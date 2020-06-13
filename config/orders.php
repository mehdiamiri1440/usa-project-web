<?php

return [
    
    /*
    |--------------------------------------------------------------------------
    | orders status
    |--------------------------------------------------------------------------
    |
    | Each transaction has a binary string status.
    | string length is 16 bits. 
    | 
    | Each bit being set has special meaning in transactions.
    |
    | Ali Delkhosh knows the meanings!
    | phone : 0911 841 3054 
    | E-mail: ali_delkhosh@ymail.com
    | 
    | 
    |
    */
    'lightOrders' => [
        '00000001' => [
            'status' => 'payed',
            'msg' => 'هزینه بار دریافت شد'
        ],
        '00000011' => [
            'status' => 'shipping',
            'msg' => 'در حال آماده سازی بار'
        ],
        '00000111' => [
            'status' => 'shipped',
            'msg' => 'بار ارسال شد'
        ],
        '00001111' => [
            'status' => 'arrived',
            'msg' => 'بار به مقصد رسید'
        ],
        '00011111' => [
            'status' => 'delivered',
            'msg' => 'بار به خریدار تحویل داده شد'
        ],
        '00111111' => [
            'status' => 'suspended',
            'msg' => 'سفارش معلق شده است'
        ],
        '01111111' => [
            'status' => 'terminated',
            'msg' => 'سفارش پایان بافت'
        ],
    ]
    
];