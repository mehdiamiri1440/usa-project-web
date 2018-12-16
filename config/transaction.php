<?php

return [
    
    /*
    |--------------------------------------------------------------------------
    | Required Data For Each Transaction
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

    'data-according-to-status' => [
        /*'status-string' => [
                'description' => 'status description'
                'data' => [
                    'buyer' => [
                        'tables' => [
                            'table_name#1' => [ //conditions for join
                                ['first_side','operator','second_side'],
                                ...
                            ],
                            'table_name#2' => [
                                ...
                            ],
                        ],
                        'fields' => [
                            'field_name#1',
                            'field_name#2',
                            ...
                        ]
                    ],
                    'seller' => [
                        'tables' => [
                            'table_name#1' => [ //conditions for join
                                ['first_side','operator','second_side'],
                                ...
                            ],
                            'table_name#2' => [
                                ...
                            ],
                        ],
                        'fields' => [
                            'field_name#1',
                            'field_name#2',
                            ...
                        ]
                    ]
                ],
                'state' => [
                    'buyer'  => 'buyer-related-state-number',
                    'seller' => 'seller-related-state-number'
                ]
        ],*/
        "0000000000000001" => [
            'description' => 'Transaction has been initiated by ADMIN',
            'data' => [
                'buyer' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ],
                ],
                'seller' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        'sell_offers.loading_dead_line',
                        'sell_offers.admin_notes',
                        'sell_offers.commission_persentage',
                        'sell_offers.myuser_id as seller_user_id',
                        'sell_offers.buy_ad_id',
                    ],
                    'conditions' => [
                        //
                    ],
                ],                
            ],
            'state' => [
                'buyer' => 1,
                'seller' => 1,
            ],
            'short_status' => [
                'buyer' => 'در انتظار تایید فروشنده',
                'seller' => 'آغاز شده',
            ],
        ],
        '0000000000000011' => [
            'description' => 'seller agreed the contract content issued by ADMIN, buyer has not agreed yet',
            'data' => [
                'buyer' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        'sell_offers.loading_dead_line',
                        'sell_offers.admin_notes',
                        'sell_offers.myuser_id as seller_user_id',
                        'sell_offers.buy_ad_id',
                    ],
                    'conditions' => [
                        //
                    ],
                ],
                'seller' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        'sell_offers.loading_dead_line',
                        'sell_offers.admin_notes',
                        'sell_offers.commission_persentage'
                    ],
                    'conditions' => [
                        //
                    ],
                ],                   
            ],
            'state' => [
                'buyer' => 2,
                'seller' => 2,
            ],
            'short_status' => [
                'buyer' => 'در انتظار تایید قرارداد',
                'seller' => 'در انتظار تایید خریدار',
            ],
        ],
        '0000000000001011' => [
            'description' => 'seller agreed the contract and admin issued prepayment factor',
            'data' => [
                'buyer' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        'sell_offers.loading_dead_line',
                        'sell_offers.admin_notes',
                        'sell_offers.myuser_id as seller_user_id',
                        'sell_offers.buy_ad_id',
                    ],
                    'conditions' => [
                        //
                    ],
                ],
                'seller' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
//                        'sell_offers.loading_dead_line',
//                        'sell_offers.admin_notes',
//                        'sell_offers.commission_persentage'
                    ],
                    'conditions' => [
                        //
                    ],
                ],                       
            ],
            'state' => [
                'buyer' => 2,
                'seller' => 2,
            ],
            'short_status' => [
                'buyer' => 'در انتظار تایید قرارداد',
                'seller' => 'در انتظار پیش پرداخت',
            ],
        ],
        '0000000000000111' => [
            'description' => 'seller and buyer both agreed the cotract content issued by ADMIN',
            'data' => [
                'buyer' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ],
                ],
                'seller' => [
                    'tables' => [
                        //
                    ],                    
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ],
                ],
            ],
            'state' => [
                'buyer' => 3,
                'seller' => 3,
            ],
            'short_status' => [
                'buyer' => 'در انتظار صدور فاکتور',
                'seller' => 'در انتظار پیش پرداخت خریدار',
            ],
        ],
        '0000000000001111' => [
            'description' => 'ADMIN issued buyer prepayment factor',
            'data' => [
                'buyer' => [
                    'tables' => [
                        'factors' => [
                                ['factors.sell_offer_id','=','sell_offers.id'],
                            ],
                        'buy_ads' => [
                                ['buy_ads.id','=','sell_offers.buy_ad_id'],
                            ],
                    ],
                    'fields' => [
                        'factors.unit_price',
                        'factors.quantity',
                        'factors.inspection_price',
                        'factors.amount_to_pay',
                        'factors.product_name',
                        'factors.type',
                        'factors.created_at',
                    ],
                    'conditions' => [
                        ['factors.type','=','prepayment']  
                    ],
                ],
                'seller' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ],
                ]
            ],
            'state' => [
                'buyer' => 4,
                'seller' => 3,
            ],
            'short_status' => [
                'buyer' => 'در انتظار پرداخت',
                'seller' => 'در انتظار پیش پرداخت خریدار',
            ],
        ],        
        '0000000000011111' => [
            'description' => 'buyer payed prepayment factor',
            'data' => [
                'buyer' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ],
                ],
                'seller' => [
                    'tables' => [
                        'buy_ads' => [
                            ['buy_ads.id','=','sell_offers.buy_ad_id'],
                        ]
                    ],
                    'fields' => [
                        'buy_ads.description',
                        'sell_offers.admin_notes',
                    ],
                    'conditions' => [
                        //
                    ],
                ], 
            ],
            'state' => [
                'buyer' => 5,
                'seller' => 4,
            ],
            'short_status' => [
                'buyer' => 'در انتظار اتمام بارگیری',
                'seller' => 'در حال بارگیری محصول',
            ],
        ],
        '0000000000111111' => [
            'description' => 'ADMIN confirmed product quality, loading process and issued final payment factor for buyer',
            'data' => [
                'buyer' => [
                    'tables' => [
                        'factors' => [
                                ['factors.sell_offer_id','=','sell_offers.id'],
                            ],
                        'buy_ads' => [
                                ['buy_ads.id','=','sell_offers.buy_ad_id'],
                            ],
                    ],
                    'fields' => [
                        'factors.unit_price',
                        'factors.quantity',
                        'factors.inspection_price',
                        'factors.amount_to_pay',
                        'factors.product_name',
                        'factors.type',
                        'factors.created_at',
                    ],
                    'conditions' => [
                        ['factors.type','=','payment']  
                    ],
                ],
                'seller' => [
                    'tables' => [
                        //
                    ],                    
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ],
                ],
            ],
            'state' => [
                'buyer' => 6,
                'seller' => 5,
            ],
            'short_status' => [
                'buyer' => 'در انتظار تسویه',
                'seller' => 'در انتظار تسویه ی خریدار',
            ],
        ],
        '0000000001111111' => [
            'description' => 'buyer payed final payment factor',
            'data' => [
               'buyer' => [
                   'tables' => [
                       //
                   ],
                   'fields' => [
                       //
                   ],
                   'conditions' => [
                        //
                    ],
               ],
               'seller' => [
                    'tables' => [
                       //
                   ],
                   'fields' => [
                       //
                   ],
                   'conditions' => [
                        //
                    ],
               ]
            ],
            'state' => [
                'buyer' => 7,
                'seller' => 6,
            ],
            'short_status' => [
                'buyer' => 'در انتظار دریافت بار',
                'seller' => 'در انتظار تسویه حساب',
            ],
        ],
        '0000000011111111' => [
            'description' => 'ADMIN confirmed that TRANSACSTION is DONE now!',
            'data' => [
                'buyer' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ]
                ],
                'seller' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        //
                    ],
                    'conditions' => [
                        //
                    ]
                ]
            ],
            'state' => [
                'buyer' => 8,
                'seller' => 6,
            ],
            'short_status' => [
                'buyer' => 'پایان یافته',
                'seller' => 'پایان یافته',
            ],
        ],        
    ],
    
    
    'actions' => [
        '1' => [
            'name' => 'Transaction initiation',
            'actor' => 'admin',
            'bit_index' => 0,
            'required_bit_index_set' => [
                //
            ],
            'data' => [
                'loading_dead_line',
                'admin_notes',
                'expiration_date',
                'commission_persentage'
            ],
            'validation_rules' => [
                'loading_dead_line' => 'required',
                'admin_notes' => 'required',
                'expiration_date' => 'required',
                'commission_persentage' => 'required|between:0.00,100.00'
            ], 
            'to_notify' => [
                'seller' => 'یک تراکنش برای شما در سامانه آغاز شده است.برای تایید قرارداد به وبسایت مراجعه کنید.',
                'buyer'  => 'یک تراکنش برای شما در سامانه آغاز شده است.برای تایید قرارداد به وبسایت مراجعه کنید.',
            ],
        ],
        '2' => [
            'name' => 'seller agreed contract',
            'actor' => 'seller',
            'bit_index' => 1,
            'required_bit_index_set' => [
                0,
            ],
            'data' => [
                //
            ],
            'validation_rules' => [
                //
            ],
            'to_notify' => [
                'admin' => 'فروشنده قرارداد رو تایید کرد',
                'buyer' => 'تامین کننده ی ما قرارداد مربوط به این معامله را تایید کرده است.'
            ]
        ],
        '3' => [
            'name' => 'buyer agreed contract',
            'actor' => 'buyer',
            'bit_index' => 2,
            'required_bit_index_set' => [
                0,
            ],
            'data' => [
                //
            ],
            'validation_rules' => [
                //
            ],
            'to_notify' => [
                'admin' => 'خریدار قرارداد رو تایید کرد',
                'seller' => 'خریدار محصول شما قرارداد مربوط به این معامله را تایید کرده است.'
            ]
        ],
        '4' =>[
            'name' => 'prepayment factor issuance for buyer',
            'actor' => 'admin',
            'bit_index' => 3,
            'required_bit_index_set' =>[0,1],
            'data' => [
                'expiration_date',
                'factor' => [
                    'product_name',
                    'quantity',
                    'unit_price',
                    'inspection_price',
                    'amount_to_pay',
                    'type',
                ],
            ],
            'validation_rules' => [
                'expiration_date' => 'required',
                'product_name' => 'required',
                'quantity' => 'required|integer|min:1',
                'unit_price' => 'required|integer|min:1',
                'inspection_price' => 'required|integer|min:1',
                'amount_to_pay' => 'required|integer|min:1',
                'type' => 'required'
            ],
            'to_notify' => [
                'buyer' => 'فاکتور پیش پرداخت شما صادر شده است.برای پرداخت آن به اینکوباک مراجعه کنید.'
            ]
        ],
        '5' =>[
            'name' => 'buyer prepayment',//will be called at bank payment callback function
            'actor' => 'buyer',
            'bit_index' => 4,
            'required_bit_index_set' => [0,1,2,3],
            'data' => [
                //
            ],
            'validation_rules' => [
                //
            ],
            'to_notify' => [
                'admin'  => 'خریدار پیش پرداخت رو انجام داد.',
                'seller' => 'خریدار محصول شما پیش پرداخت را انجام داد.پرداخت های اینکوباک دو مرحله ای است.',
                'buyer'  => 'پیش پرداخت شما با موفقیت انجام شد.اینکوباک درحال پیگیری بارگیری محصول است.'
            ]
        ],
        '6' =>[
            'name' => 'final payment factor issuance for buyer',
            'actor' => 'admin',
            'bit_index' => 5,
            'required_bit_index_set' => [0,1,2,3,4],
            'data' => [
                'expiration_date',
                'factor' => [
                    'product_name',
                    'quantity',
                    'unit_price',
                    'inspection_price',
                    'amount_to_pay',
                    'type',
                ],
            ],
            'validation_rules' => [
                'expiration_date' => 'required',
                'product_name' => 'required',
                'quantity' => 'required|integer|min:1',
                'unit_price' => 'required|integer|min:1',
                'inspection_price' => 'required|integer|min:1',
                'amount_to_pay' => 'required|integer|min:1',
                'type' => 'required'
            ],
            'to_notify' => [
                'buyer' => 'بارگیری درحال اتمام است.فاکتور پرداخت نهایی شما صادر گردید.لطفا هر چه سریعتر برای پرداخت آن به اینکوباک مراجعه کنید.'
            ]
        ],
        '7' =>[
            'name' => 'buyer final payment',//will be called at bank payment callback function
            'actor' => 'buyer',
            'bit_index' => 6,
            'required_bit_index_set' => [0,1,2,3,4,5],
            'data' => [
                //
            ],
            'validation_rules' => [
                //
            ],
            'to_notify' => [
                'admin' => 'خریدار پرداخت نهایی رو انجام داد',
                'seller' => 'خریدار تمام پول محصول را پرداخت کرد.برای خروج بار با کارشناسان اینکوباک در تماس باشید',
                'buyer' => 'پرداخت نهایی شما با موفقیت انجام شد.منتظردریافت محصول خود باشید.'
            ]
        ],
        '8' =>[
            'name' => 'DONE',
            'actor' => 'admin',
            'bit_index' => 7,
            'required_bit_index_set' => [0,1,2,3,4,5,6],
            'data' => [
                //
            ],
            'validation_rules' => [
                //
            ],
            'to_notify' => [
                //
            ]
        ],
    ],
    
    
    
    'user-state' => [
        'buyer' => [
            'states' => [
                '1' => [
                    'number' => 1,
                    'step' => 1,
                    'description' => 'Tranacton has been initiated',
                    'msg' => 'در انتظار تایید قرارداد توسط فروشنده',
                ],
                [
                    'number' => 2,
                    'step' => 1,
                    'description' => 'seller agreed the contract',
                    'msg' => ''
                ],
                [
                    'number' => 3,
                    'step' => 1,
                    'description' => 'buyer agreed the contract content issued by ADMIN',
                    'msg' => 'در انتظار صدور فاکتور پیش پرداخت'
                ],
                [
                    'number' => 4,
                    'step' => 2,
                    'description' => 'ADMIN issued buyer prepayment factor',
                    'msg' => ''
                ],
                [
                    'number' => 5,
                    'step' => 2,
                    'description' => 'buyer payed prepayment factor',
                    'msg' => 'در حال بارگیری و بازرسی محصول'
                ],
                [
                    'number' => 6,
                    'step' => 3,
                    'description' => 'ADMIN confirmed product quality, loading process and issued final payment factor for buyer',
                    'msg' => ''
                ],
                [
                    'number' => 7,
                    'step' => 3,
                    'description' => 'buyer payed final payment factor',
                    'msg' => 'در حال پیگیری ارسال بار و رسیدن به مقصد'
                ],
                [
                    'number' => 8,
                    'step' => 4,
                    'description' => 'ADMIN confirmed that TRANSACSTION is DONE now!',
                    'msg' => ''
                ],
            ]  
        ],
        'seller' => [
            'states' => [
              '1' =>  [
                    'number' => 1,
                    'step' => 1,
                    'description' => 'waiting for seller to agree contract regardless of buyer agreement',
                    'msg' => '',
                ],
                [
                    'number' => 2,
                    'step' => 1,
                    'description' => 'waiting for buyer to agree to contract',
                    'msg' => 'در انتظار پیش پرداخت خریدار',
                ],
                [
                    'number' => 3,
                    'step' => 1,
                    'description' => 'waiting for ADMIN fo issue prepayment factor',
                    'msg' => 'در انتظار پیش پرداخت خریدار',
                ],
                [
                    'number' => 4,
                    'step' => 2,
                    'description' => 'buyer has payed prepayment factor',
                    'msg' => '',
                ],
                [
                    'number' => 5,
                    'step' => 2,
                    'description' => 'ADMIN confirmed product and has issued final payment factor',
                    'msg' => 'در انتظار تسویه ی خریدار',
                ],
                [
                    'number' => 6,
                    'step' => 3,
                    'description' => 'transaction is done',
                    'msg' => '',
                ],
            ]
        ],
    ],
];