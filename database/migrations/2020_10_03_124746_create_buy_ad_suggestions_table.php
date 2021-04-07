<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyAdSuggestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buy_ad_suggestions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedInteger('buy_ad_id');
            $table->unsignedBigInteger('seller_id');

            $table->foreign('seller_id')->references('id')->on('myusers')->onDelete('cascade');
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
        Schema::dropIfExists('buy_ad_suggestions');
    }
}
