<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyAdMediaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buy_ad_media', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
			$table->string('file_path');
			$table->unsignedInteger('buy_ad_id');
			
			$table->foreign('buy_ad_id')->references('id')->on('buy_ads');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buy_ad_media');
    }
}
