<?php

use Faker\Generator as Faker;

$factory->define(App\sell_offer::class, function (Faker $faker) {
    return [
        'price' => $faker->number(),
        'deliver_at' => $faker->text(20),
        'valid_date_from' => $faker->datetime(),
        'valid_date_to' => $faker->datetime(),
        'description' => $taker->text(100),
        'myuser_id' => function($user_id){
            return $user_id;
        },
        'buy_ad_id' => function($buy_ad_id){
            return $buy_ad_id;
        },
    ];
});
