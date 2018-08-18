<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_statistics', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('myuser_id')->nullable();
            $table->unsignedBigInteger('product_id')->nullable();
            $table->boolean('at_least_one_view')->default(false);
            $table->boolean('at_least_one_phone_view')->default(false); 
            
            $table->foreign('myuser_id')->references('id')->on('myusers')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_statistics');
    }
}
