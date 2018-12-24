<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstantTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instant_transactions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('product_name');
            $table->datetime('deal_date')->nullable();
            $table->string('transaction_status');
            $table->datetime('loading_dead_line');
            $table->decimal('commission_percentage',8,2);
            $table->text('admin_notes');
            $table->unsignedBigInteger('buyer_id');
            $table->unsignedBigInteger('seller_id');
            
            $table->foreign('buyer_id')->references('id')->on('myusers');
            $table->foreign('seller_id')->references('id')->on('myusers');
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instant_transactions');
    }
}
