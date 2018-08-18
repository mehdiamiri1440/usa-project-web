<?php

use Faker\Generator as Faker;

$factory->define(App\cities::class, function (Faker $faker) {
    return [
        'city_name' => $faker->text(10),
        'province_id' => function($province_id){
            return $province_id;
        }
    ];
});
