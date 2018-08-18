<?php

use Faker\Generator as Faker;

$factory->define(App\product::class, function (Faker $faker) {
    return [
        'stock' => 300,
        'min_sale_price' => 400,
        'min_sale_amount' => 10,
        'confirmed' => 1,
        'myuser_id' => function($user_id){
            return $user_id;
        },
        'category_id' => 10,        
    ];
});
