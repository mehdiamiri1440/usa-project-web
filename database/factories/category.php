<?php

use Faker\Generator as Faker;

$factory->define(App\category::class, function (Faker $faker) {
    return [
        'category_name' => $faker->unique()->text(15),
    ];
});

$factory->state(App\category::class,'parent',function(Faker $faker){
   return [
        'parent_id' => null,  
   ];
});

$factory->state(App\category::class,'child',function(Faker $faker){
   return [
        'parent_id' => function($parent_id){
            return $parent_id;
        },  
   ];
});
