<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddReplyCapacityFieldToBuyAdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('buy_ads', function (Blueprint $table) {
            $table->smallInteger('reply_capacity')->default(10)->after('is_valid');
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
            $table->dropColumn('reply_capacity');
        });
    }
}
