<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTopicColumnToMessangerGroups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('messenger_groups', function (Blueprint $table) {
            $table->string('topic_name',20)->after('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('messanger_groups', function (Blueprint $table) {
            $table->dropColumn('topic_name');
        });
    }
}
