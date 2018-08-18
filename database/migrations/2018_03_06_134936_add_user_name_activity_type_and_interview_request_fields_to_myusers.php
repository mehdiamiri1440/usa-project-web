<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserNameActivityTypeAndInterviewRequestFieldsToMyusers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('myusers', function (Blueprint $table) {
            $table->string('user_name',50)->unique()->after('phone');
            $table->string('activity_type',50)->nullable()->after('national_code');
            $table->boolean('interview_request')->default(false);
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
            $table->dropColumn('user_name');
            $table->dropColumn('activity_type');
            $table->dropColumn('interview_request');
        });
    }
}
