<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RenamePanelVisibilityColumnInMyusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('myusers', function (Blueprint $table) {
            $table->renameColumn('panel_visisbility','extra_product_capacity');
            $table->renameColumn('interview_request','extra_buyAd_reply_capacity');
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
            $table->renameColumn('interview_request','extra_buyAd_reply_capacity');
            $table->renameColumn('extra_product_capacity','panel_visisbility');
        });
    }
}
