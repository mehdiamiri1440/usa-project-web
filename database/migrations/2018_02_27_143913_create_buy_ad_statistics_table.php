<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyAdStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buy_ad_statistics', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('myuser_id')->nullable();
            $table->unsignedInteger('buy_ad_id')->nullable();
            $table->boolean('at_least_one_view')->default(false);
            $table->boolean('at_least_one_phone_view')->default(false); 
            
            $table->foreign('myuser_id')->references('id')->on('myusers')->onDelete('cascade');
            $table->foreign('buy_ad_id')->references('id')->on('buy_ads')->onDelete('cascade');   
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buy_ad_statistics');
    }
}
