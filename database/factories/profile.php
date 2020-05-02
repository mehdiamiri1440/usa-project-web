<?php

use Faker\Generator as Faker;

$factory->define(App\Models\profile::class,function (Faker $faker) {
    return [
        'is_company' => true,
        'public_phone' => '09118413054',
        'confirmed' => true,
        'myuser_id' => function (){
            return factory(App\Models\myuser::class)->create()->id;
        }
    ];
});

$factory->state(App\Models\profile::class,'confirmed' ,function (Faker $faker) {
    return [
        'confirmed' => true,
    ];
});

$factory->state(App\Models\profile::class,'unconfirmed' ,function (Faker $faker) {
    return [
        'confirmed' => false,
    ];
});

