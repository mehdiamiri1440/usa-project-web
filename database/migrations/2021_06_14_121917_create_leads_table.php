<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('buyer_id');
            $table->boolean('is_used')->default(false);
            $table->dateTime('expiry_date');
            $table->unsignedBigInteger('seller_id')->nullable();
            $table->dateTime('assign_date')->nullable();
            $table->unsignedInteger('lead_class_id');
            $table->unsignedInteger('seller_class_id')->nullable();
            $table->unsignedBigInteger('related_product_id')->nullable();
            $table->string('keywords')->nullable();
            $table->unsignedInteger('category_id');

            $table->foreign('buyer_id')->references('id')->on('myusers');
            $table->foreign('seller_id')->references('id')->on('myusers');
            $table->foreign('related_product_id')->references('id')->on('products');
            $table->foreign('category_id')->references('id')->on('categories');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leads');
    }
}
