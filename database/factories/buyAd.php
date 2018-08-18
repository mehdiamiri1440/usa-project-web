<?php

use Faker\Generator as Faker;

$factory->define(App\buyAd::class, function (Faker $faker) {
    return [
        'requirement_amount' => 20,
        'myuser_id' => function($user_id){
            return $user_id;
        },
        'category_id' => 10,
    ];
});
