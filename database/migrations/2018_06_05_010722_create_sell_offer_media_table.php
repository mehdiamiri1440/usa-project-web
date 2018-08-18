<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSellOfferMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sell_offer_media', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('file_path');
            $table->unsignedBigInteger('sell_offer_id');
            
            $table->foreign('sell_offer_id')->references('id')->on('sell_offers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sell_offer_media');
    }
}
