<?php

use Faker\Generator as Faker;

$factory->define(App\Models\profile_media::class, function (Faker $faker) {
    return [
        'file_path' => $faker->text(20),
        'profile_id' => function($profile_id){
            return $profile_id;
        }
    ];
});
