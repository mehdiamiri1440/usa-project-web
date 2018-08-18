<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCityIdToBuyAds extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('buy_ads', function (Blueprint $table){
            $table->unsignedInteger('city_id')->nullable()->after('category_id');
			
			$table->foreign('city_id')->references('id')->on('cities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('buy_ads', function (Blueprint $table) {
            $table->dropForeign('buy_ads_city_id_foreign');
        });
    }
}
