<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ChangeExtraProductCapacityFieldType extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('myusers', function (Blueprint $table) {
            $table->unsignedInteger('extra_product_capacity')->default(0)->change();
            $table->unsignedInteger('extra_buyAd_reply_capacity')->default(0)->change();

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
            $table->boolean('extra_buyAd_reply_capacity')->default(false)->change();
            $table->boolean('extra_product_capacity')->default(false)->change();
        });
    }
}
