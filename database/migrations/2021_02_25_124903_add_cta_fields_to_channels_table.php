<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCtaFieldsToChannelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('channel_contents', function (Blueprint $table) {
            $table->string('cta_text')->nullable()->after('last_login_client');
            $table->string('cta_link')->nullable()->after('cta_text');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('channel_contents', function (Blueprint $table) {
            $table->dropColumn('cta_text');
            $table->dropColumn('cta_link');
        });
    }
}
