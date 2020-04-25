<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyAdReplyMetaDatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buy_ad_reply_meta_datas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('replier_id');
            $table->unsignedInteger('buy_ad_id');

            $table->foreign('replier_id')->references('id')->on('myusers')->cascade('delete');
            $table->foreign('buy_ad_id')->references('id')->on('buy_ads')->cascade('delete');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('buy_ad_reply_meta_datas');
    }
}
