<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCommissionPercentageFieldToSellOffers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sell_offers', function (Blueprint $table) {
            $table->decimal('commission_persentage',8,2)->nullable()->after('admin_notes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sell_offers', function (Blueprint $table) {
            $table->dropColumn('commission_persentage');
        });
    }
}
