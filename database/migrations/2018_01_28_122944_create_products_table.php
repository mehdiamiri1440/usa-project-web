<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
			$table->string('product_name');
			$table->integer('stock');
			$table->integer('min_sale_price');
			$table->integer('min_sale_amount');
			$table->string('address');
			$table->unsignedBigInteger('myuser_id');
			
			$table->foreign('myuser_id')->references('id')->on('myusers');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
