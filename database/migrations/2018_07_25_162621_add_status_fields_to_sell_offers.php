<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStatusFieldsToSellOffers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sell_offers', function (Blueprint $table){
            $table->string('transaction_status')->nullable()->after('is_pending');
            $table->datetime('deal_date')->nullable()->after('updated_at');
            $table->datetime('expiration_date')->nullable()->after('transaction_status');
            $table->datetime('loading_dead_line')->nullable()->after('expiration_date');
            $table->text('admin_notes')->nullable()->after('loading_dead_line');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sell_offers', function (Blueprint $table){
            $table->dropColumn('admin_notes');
            $table->dropColumn('loading_dead_line');
            $table->dropColumn('expiration_date');
            $table->dropColumn('deal_date');
            $table->dropColumn('transaction_status');
        });
    }
}
