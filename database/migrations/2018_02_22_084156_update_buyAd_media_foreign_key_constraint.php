<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateBuyAdMediaForeignKeyConstraint extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('buy_ad_media', function (Blueprint $table) {
            $table->dropForeign('buy_ad_media_buy_ad_id_foreign');
            
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
        Schema::table('buy_ad_media', function (Blueprint $table) {
            //
        });
    }
}
