<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('pay_for',255);
            $table->string('client');
            $table->unsignedBigInteger('myuser_id');
            $table->unsignedBigInteger('transaction_id');

            $table->foreign('myuser_id')->references('id')->on('myusers')->onDelete('cascade');
            $table->foreign('transaction_id')->references('id')->on('gateway_transactions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_logs');
    }
}
