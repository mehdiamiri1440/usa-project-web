<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddServiceNameColumnToExpendigLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('expending_logs', function (Blueprint $table) {
            $table->unsignedBigInteger('service_id')->nullable()->change();
            $table->string('service_name',50)->nullable()->after('service_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('expending_logs', function (Blueprint $table) {
            $table->dropColumn('service_name');
            $table->unsignedBigInteger('service_id')->change();
        });
    }
}
