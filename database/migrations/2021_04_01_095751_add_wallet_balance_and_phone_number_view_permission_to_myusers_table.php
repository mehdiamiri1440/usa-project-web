<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddWalletBalanceAndPhoneNumberViewPermissionToMyusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('myusers', function (Blueprint $table) {
            $table->unsignedBigInteger('wallet_balance')->default(0)->after('is_blocked');
            $table->string('phone_view_permission',8)->default('1111')->after('wallet_balance');
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
            $table->dropColumn('phone_view_permission');
            $table->dropColumn('wallet_balance');
        });
    }
}
