<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buy_ads', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
			$table->string('name');
			$table->integer('requirement_amount');
			$table->datetime('expected_delivery_date');
			$table->integer('price_from');
			$table->integer('price_upto');
			$table->string('address');
			$table->unsignedBigInteger('myuser_id');
			
			$table->foreign('myuser_id')->references('id')->on('myusers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buy_ads');
    }
}
