<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPackTypeAndDestinationFieldsToBuyAds extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('buy_ads', function (Blueprint $table) {
            $table->string('pack_type')->nullable()->after('price_upto');
            $table->boolean('is_valid')->default(true)->after('confirmed');
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
            $table->dropColumn('is_valid');
            $table->dropColumn('pack_type');
        });
    }
}
