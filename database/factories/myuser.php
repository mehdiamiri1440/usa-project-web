<?php

use Faker\Generator as Faker;

$factory->define(App\myuser::class, function (Faker $faker) {
    return [
        'phone' =>  mt_rand(10000000000,99999999999),
        'user_name' => $faker->unique()->word(10),
        'password' => sha1('delideli'),
        'first_name' => 'علی',
        'last_name' => 'دلخوش',
        'sex' => 'آقا',
        'province' => 'گیلان',
        'city' => 'لاهیجان',
        'national_code' => '2730142071',
        'credit' => 10
    ];
});
