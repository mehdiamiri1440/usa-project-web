<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\sell_offer;
use App\factor;
use App\buyAd;
use App\Http\Library\date_convertor;
use DB;

class transaction_controller extends Controller
{
    protected $necessary_fields_for_transaction = [
        'sell_offers.id',
        'sell_offers.buy_ad_id',
        'sell_offers.myuser_id',
        'sell_offers.deal_date',
        'sell_offers.transaction_status',
        'buy_ads.name as product_name',
    ];
    protected  $transaction_id_increase_amount_proportional_to_real_id = 100000;
    
    protected $user_role_array = [
        '1' => 'buyer',
        '2' => 'seller',
        '3' => 'admin',
    ];
    
    protected $terminated_transaction_status = '0000000011111111';
    
    protected $user_state_array = [
        'buyer' => [
            'states' => [
                '1' => [
                    'number' => 1,
                    'step' => 1,
                    'description' => 'Tranacton has been initiated or just seller agreed the contact',
                    'msg' => '',
                ],
                [
                    'number' => 2,
                    'step' => 1,
                    'description' => 'buyer agreed the contract content issued by ADMIN, seller has not agreed yet',
                    'msg' => 'در انتظار صدور فاکتور پیش پرداخت'
                ],
                [
                    'number' => 3,
                    'step' => 1,
                    'description' => 'seller and buyer both agreed the cotract content issued by ADMIN',
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
    ];
    
    protected $transaction_data_according_to_the_status = [
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
                        'sell_offers.loading_dead_line',
                        'sell_offers.admin_notes'
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
                'buyer' => 'آغاز شده',
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
                        'sell_offers.admin_notes'
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
                    ],
                    'conditions' => [
                        //
                    ],
                ],                   
            ],
            'state' => [
                'buyer' => 1,
                'seller' => 2,
            ],
            'short_status' => [
                'buyer' => 'در انتظار تایید قرارداد',
                'seller' => 'در انتظار پیش پرداخت خریدار',
            ],
        ],
        '0000000000000101' => [
            'description' => 'buyer agreed the contract content issued by ADMIN, seller has not agreed yet',
            'data' => [
                'buyer' => [
                    'tables' => [
                        //
                    ],
                    'fields' => [
                        'sell_offers.loading_dead_line',
                        'sell_offers.admin_notes'
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
                    ],
                    'conditions' => [
                        //
                    ],
                ],                       
            ],
            'state' => [
                'buyer' => 2,
                'seller' => 1,
            ],
            'short_status' => [
                'buyer' => 'در انتظار صدور فاکتور',
                'seller' => 'در انتظار تایید قرارداد',
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
                    //
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
                'seller' => 'درانتظار تسویه',
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
        
    ];
    
    protected $actions_array = [
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
        ],
        '4' =>[
            'name' => 'prepayment factor issuance for buyer',
            'actor' => 'admin',
            'bit_index' => 3,
            'required_bit_index_set' =>[0,1,2],
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
        ],
        '7' =>[
            'name' => 'buyer final payment',
            'actor' => 'buyer',
            'bit_index' => 6,
            'required_bit_index_set' => [0,1,2,3,4,5],
            'data' => [
                //
            ],
            'validation_rules' => [
                //
            ],
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
        ],
        
    ];
    //public method
    public function get_user_in_progress_transaction_list()
    {
        $user_id = session('user_id');
        
        $user_role = $this->get_user_role();
        
        $transaction_condition = [
            'second_side' => '0000000000000000',
            'operator' => '<>',
        ];
        
        $transactions = $this->get_user_transactions($user_id,$user_role,$transaction_condition);
        
        $date_convertor_object = new date_convertor();  
        
        $transactions->each(function($transaction) use($date_convertor_object,$user_role){
            $transaction->deal_formation_date = $date_convertor_object->get_persian_date_with_month_name($transaction->deal_date);
            $transaction->transaction_id = $transaction->id + $this->transaction_id_increase_amount_proportional_to_real_id;
            $transaction->short_status = $this->transaction_data_according_to_the_status["$transaction->transaction_status"]['short_status']["$user_role"]; 
            
            unset($transaction->transaction_status);
            unset($transaction->deal_date);
        });
        
        return response()->json([
           'transactions' => $transactions, 
        ],200);        
    }
    
    protected function get_user_transactions($user_id,$role,$transaction_condition)
    {
        if($role == 'buyer'){
            $user_related_table_name = 'buy_ads';
        }
        else if($role == 'seller'){
            $user_related_table_name = 'sell_offers';
        }
        else{
            return null;
        }
        
        extract($transaction_condition);
        
        $transactions = DB::table('sell_offers')
                            ->join('buy_ads','sell_offers.buy_ad_id' ,'=', 'buy_ads.id')
                            ->where('sell_offers.is_accepted',true)
                            ->where('sell_offers.is_pending',false)
                            ->where('sell_offers.transaction_status',$operator,$second_side) //come from extract
                            ->where("$user_related_table_name.myuser_id",$user_id)
                            ->select($this->necessary_fields_for_transaction)
                            ->latest('sell_offers.updated_at')
                            ->get();
        
        return $transactions;
    }
    //public method
    public function get_transaction_info(Request $request)
    {
        $this->validate($request,[
            'transaction_id' => "required|integer|min:$this->transaction_id_increase_amount_proportional_to_real_id",
        ]);
        
        $user_role = $this->get_user_role();
        
        if($this->is_user_authorized_to_have_an_action_on_the_transaction($request->transaction_id,$user_role) == false){
            return response()->json([
                //
            ],404);
        }
        
        $sell_offer_id = $request->transaction_id  -  $this->transaction_id_increase_amount_proportional_to_real_id;
        
        
        $transaction_status = $this->get_transaction_status($sell_offer_id);        
        
        $given_status_instructions = $this->transaction_data_according_to_the_status["$transaction_status"];
        
        
        $transaction_data = $this->get_transaction_data_according_to_the_given_data_instructions($given_status_instructions['data'],$sell_offer_id,$user_role);
        
        $date_convertor_object = new date_convertor();
        
        if(isset($transaction_data->created_at)){
            $transaction_data->issue_date = $date_convertor_object->get_persian_date($transaction_data->created_at);   
        }
        
        $conversion_result_array = $this->convert_transaction_status_to_step_number($transaction_status,$user_role);
        
        
        extract($conversion_result_array);
        
        return response()->json([
            'transaction_info' => $transaction_data,
            'step' => $step_number,
            'msg' => $state_msg,
        ]);
    }
    
    protected function get_transaction_status($sell_offer_id)
    {
        $transaction_status_object = sell_offer::where('id',$sell_offer_id)
                                ->select('transaction_status')
                                ->get()
                                ->first();
        
        return $transaction_status_object->transaction_status;
    }
    
    protected function get_user_role()
    {
        if(session('is_buyer')){
            $user_role_id = 1;
        }
        else if(session('is_seller')){
            $user_role_id = 2;
        }
        else if(session('admin_user_id')){
            $user_role_id = 3;
        }
        else{
            //write in log file 
            //code here
            
            return response()->json([
                'status' => false,
                'msg' => 'user role is undefined, malicious activity detected. tracing the request ...'
            ],404);
        }
        
        return $this->user_role_array[$user_role_id];
    }
    
    protected function get_transaction_data_according_to_the_given_data_instructions($data_instruction_array,$sell_offer_id,$user_role)
    {
        if( ! is_null($data_instruction_array[$user_role])){
            $initial_db_query = $this->generate_DB_query_by_given_data($data_instruction_array[$user_role]);
            
            $complete_db_query = $initial_db_query->where('sell_offers.id',$sell_offer_id);
            $required_data = $complete_db_query->get()->first();
        }
        else {
            $required_data = null;
        }
        
        return $required_data;
    }
    
    protected function convert_transaction_status_to_step_number($transaction_status,$user_role)
    {
        $transaction_status_meta_data = $this->transaction_data_according_to_the_status[$transaction_status];
        $transaction_state = $transaction_status_meta_data['state'][$user_role];
        
        $step_number = $this->user_state_array[$user_role]['states'][$transaction_state]['step'];
        
        $state_msg = $this->user_state_array[$user_role]['states'][$transaction_state]['msg'];
        
        return compact('step_number','state_msg');
    }
    
    protected function generate_DB_query_by_given_data($given_data_array)
    {
        $tables = $given_data_array['tables'];
        $fields = $given_data_array['fields'];
        $additional_conditions = $given_data_array['conditions']; //AND where conditions for now
        
        if(sizeof($tables) > 0){
            $query = DB::table('sell_offers');
            
            foreach($tables as $table_name => $conditions){
                $query = $query->join($table_name,function($join) use($conditions){
                    
                            foreach($conditions as $condition){
                                
                                list($first_side,$operator,$second_side) = $condition;
                                
                                $join->on($first_side,$operator,$second_side);
                            }
                        });
            }
            
            $query = $query->select($fields);
            
            foreach($additional_conditions as $condition){
                list($first_side,$operator,$second_side) = $condition;
                $query = $query->where($first_side,$operator,$second_side);
            }
        }
        else if(sizeof($fields) > 0){
            $query = DB::table('sell_offers')
                        ->select($fields)
                        ;
        }
        else{
            $query = DB::table('sell_offers')
                        ->select('id')
                        ;
        }
        
        return $query;
    }
    
    //public method
    public function action_controller(Request $request)
    {
        if($this->validate_action_data($request) == false){
            return response()->json([
                'msg' => 'unAuthorized Access!',
            ],422);
        }
        
        $action_meta_data =  $this->actions_array[$request->action_id];
        
        $sell_offer_id = $request->transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id ;
        $transaction_record = sell_offer::find($sell_offer_id); //sell_offer_record in fact
        
        if(isset($action_meta_data['data']['factor'])){
            $factor_record = new factor();
            
            $admin_id = session('admin_user_id'); //factors can be issued just by admins
            
            $factor_fields = $action_meta_data['data']['factor'];
                
            foreach($factor_fields as $field_name){
                $factor_record->$field_name = $request->$field_name;
//                $request->request->remove($field_name);
            }
            
            $factor_record->admin_id = $admin_id;
            $factor_record->sell_offer_id = $sell_offer_id;
            
            $factor_record->save(); //generating record for the first time
        }
        
        $fields_name = array_values($action_meta_data['data']);
        
        $date_convertor_object = new date_convertor();
        
        foreach($fields_name as $field_name){
            if($field_name == 'loading_dead_line'){
                $transaction_record->$field_name = $date_convertor_object->get_georgian_date_from_standard_persian_date_string($request->$field_name);
            }
            else if(! is_array($field_name)){
                $transaction_record->$field_name = $request->$field_name;   
            }
        }
        
        //update transaction status
        $new_status = $this->update_transaction_status($transaction_record->transaction_status,$action_meta_data['bit_index']);//call by REFRENCE
        $transaction_record->transaction_status = $new_status;
        
        $transaction_record->save(); //updating transaction record
        
        return response()->json([
            'status' => true,
            'msg' => 'Done',
        ]);
    }
    
    protected function update_transaction_status($old_status,$bit_index)
    {
        $old_status[15 - $bit_index] = '1';
        
        return $old_status;
    }
    
    protected function validate_action_data(&$request)
    {
        $this->validate($request,[
            'action_id' => "required|integer|min:1",
            'transaction_id' => "required|integer|min:$this->transaction_id_increase_amount_proportional_to_real_id"
        ]);
        
        $action_meta_data =  $this->actions_array[$request->action_id];
        
        $user_role = $this->get_user_role();
        
        if($user_role != $action_meta_data['actor']){
            echo $user_role;
            return false;
            //write user info because of melecious activity on log file
        }
        
        if($this->is_user_authorized_to_have_an_action_on_the_transaction($request->transaction_id,$user_role,$action_meta_data) == false){
           return false;
            //write user info because of melecious activity on log file
        }
       
        $this->validate($request,$action_meta_data['validation_rules']);
        
        return true;
    }
    
    protected function is_user_authorized_to_have_an_action_on_the_transaction($transaction_id,$user_role,$action_meta_data = null)
    {
        $sell_offer_id = $transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id;
        
        $sell_offer_record = sell_offer::find($sell_offer_id);
        
        if(is_null($sell_offer_record)) return false;
        
        if($action_meta_data != null){
            if(sizeof($action_meta_data['required_bit_index_set']) > 0){
                foreach($action_meta_data['required_bit_index_set'] as $index){
                    if($sell_offer_record->transaction_status[15 - $index] != 1){
                        echo "test";
                        return false;
                    }
                }
            }
        }
        
        
        if($user_role == 'admin'){
            return true;
        }
        else if($user_role == 'seller'){
            if($sell_offer_record->myuser_id == session('user_id')){
                return true;
            }
            else {
                return false;
            }             
        }
        else if($user_role == 'buyer'){
            $buy_ad_record = buyAd::find($sell_offer_record->buy_ad_id);
            if($buy_ad_record){
                if($buy_ad_record->myuser_id == session('user_id')){
                    return true;
                }
                else{
                    return false;
                } 
            }
             else{
                return false;
            } 
        }
        else {
            return false;
        }
        
    }
    
    public function get_user_terminated_transactions()
    {
        $user_id = session('user_id');
        
        $user_role = $this->get_user_role();
        
        $transaction_condition = [
            'second_side' => '0000000011111111',
            'operator' => '=',
        ];
        
        $transactions = $this->get_user_transactions($user_id,$user_role,$transaction_condition);
        
        $date_convertor_object = new date_convertor();
        
        $transactions->each(function($transaction) use($date_convertor_object,$user_role){
            $transaction->deal_formation_date = $date_convertor_object->get_persian_date_with_month_name($transaction->deal_date);
            $transaction->transaction_id = $transaction->id + $this->transaction_id_increase_amount_proportional_to_real_id;
            
            unset($transaction->deal_date);
            unset($transaction->deal_date);
        });
        
        return response()->json([
           'transactions' => $transactions, 
        ],200);
    }
    
    public function get_terminated_transaction_info(Request $request)
    {
        $this->validate($request,[
            'transaction_id' => "required|integer|min:$this->transaction_id_increase_amount_proportional_to_real_id",
        ]);
        
        $sell_offer_id = $request->transaction_id - $this->transaction_id_increase_amount_proportional_to_real_id ;
        
        $transaction_record = sell_offer::where('id',$sell_offer_id)
                                ->select([
                                    'id',
                                    'loading_dead_line',
                                    'admin_notes',
                                    'deal_date',
                                    'commission_persentage'
                                ])
                                ->get()
                                ->first();
        
        $payment_factor_record  = factor::where('sell_offer_id',$sell_offer_id)
                                                ->where('type','payment')
                                                ->select([
                                                    'quantity',
                                                    'inspection_price',
                                                    'unit_price',
                                                    'amount_to_pay as payment_amount',
                                                ])
                                                ->get()
                                                ->first();
        
        $prepayment_factor_record = factor::where('sell_offer_id',$sell_offer_id)
                                                ->where('type','prepayment')
                                                ->select([
                                                    'amount_to_pay as prepayment_amount'
                                                ])
                                                ->get()
                                                ->first();
        
        $user_role = $this->get_user_role();
        
        if($user_role == 'buyer'){
            unset($transaction_record->commission_persentage);
        }
        
        $date_convertor_object = new date_convertor();
        
        $transaction_record->deal_formation_date = $date_convertor_object->get_persian_date($transaction_record->deal_date);
        $transaction_record->loading_end_date = $date_convertor_object->get_persian_date($transaction_record->loading_dead_line);
        unset($transaction_record->deal_date);
        unset($transaction_record->loading_deal_line);
        
        $result = collect($transaction_record)->merge(collect($payment_factor_record))
                                     ->merge(collect($prepayment_factor_record));
        
        return response()->json([
           'transaction_info' => $result, 
        ]);
    }
    
    
}