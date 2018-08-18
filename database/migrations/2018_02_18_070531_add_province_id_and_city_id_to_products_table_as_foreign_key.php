<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddProvinceIdAndCityIdToProductsTableAsForeignKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
			$table->unsignedInteger('city_id')->nullable();
			
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
        Schema::table('products', function (Blueprint $table) {
			$table->dropForeign('products_city_id_foreign');
        });
    }
}
