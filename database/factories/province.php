<?php

use Faker\Generator as Faker;

$factory->define(App\Models\province::class, function (Faker $faker) {
    return [
        'province_name' => $faker->unique()->text(10),
    ];
});
