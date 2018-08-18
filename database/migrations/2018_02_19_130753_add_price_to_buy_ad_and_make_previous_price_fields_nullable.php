<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPriceToBuyAdAndMakePreviousPriceFieldsNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('buy_ads', function (Blueprint $table) {
            $table->integer('price')->nullable()->after('expected_delivery_date');
			$table->integer('price_from')->nullable()->change();
			$table->integer('price_upto')->nullable()->change();
			$table->datetime('expected_delivery_date')->nullable()->change();
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
            $table->dropColumn('price');
			$table->integer('price_from')->change();
			$table->integer('price_upto')->change();
			$table->datetime('expected_delivery_date')->change();
        });
    }
}
