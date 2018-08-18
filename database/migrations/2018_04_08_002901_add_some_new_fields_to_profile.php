<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSomeNewFieldsToProfile extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->string('public_phone',20)->after('profile_photo');
            $table->string('company_name')->nullable()->after('is_company');
            $table->string('company_register_code')->nullable()->after('company_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('profiles', function (Blueprint $table) {
            $table->dropColumn('public_phone');
            $table->dropColumn('company_name');
            $table->dropColumn('company_register_code');
        });
    }
}
