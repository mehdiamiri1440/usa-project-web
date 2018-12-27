<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstantFactorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instant_factors', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('product_name');
            $table->bigInteger('unit_price');
            $table->bigInteger('quantity');
            $table->bigInteger('inspection_price');
            $table->boolean('is_payed')->default(false);
            $table->bigInteger('amount_to_pay'); 
            $table->bigInteger('payed_so_far')->default(0);
            $table->string('type');
            $table->unsignedBigInteger('transaction_id');
            $table->unsignedInteger('admin_id');
            
			$table->foreign('admin_id')->references('id')->on('admin_users');            
            $table->foreign('transaction_id')->references('id')->on('instant_transactions');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('instant_factors');
    }
}
