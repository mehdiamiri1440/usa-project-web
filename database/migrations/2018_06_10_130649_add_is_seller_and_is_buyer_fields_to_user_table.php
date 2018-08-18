<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddIsSellerAndIsBuyerFieldsToUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('myusers', function (Blueprint $table) {
            $table->boolean('is_buyer')->default(false);
            $table->boolean('is_seller')->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('myusers', function (Blueprint $table) {
            $table->dropColumn('is_seller');
            $table->dropColumn('is_buyer');
        });
    }
}
