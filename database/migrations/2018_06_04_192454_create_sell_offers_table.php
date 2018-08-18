<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sell_offers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('price');
            $table->string('deliver_at');
            $table->datetime('valid_date_from');
            $table->datetime('valid_date_to');
            $table->text('description');
            $table->boolean('is_accepted')->default(false);
            $table->boolean('is_pending')->default(true);
            $table->unsignedInteger('buy_ad_id');
            $table->unsignedBigInteger('myuser_id');
			
			$table->foreign('buy_ad_id')->references('id')->on('buy_ads');
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
        Schema::dropIfExists('sell_offers');
    }
}
