<?php

use Faker\Generator as Faker;

$factory->define(App\province::class, function (Faker $faker) {
    return [
        'province_name' => $faker->unique()->text(10),
    ];
});
