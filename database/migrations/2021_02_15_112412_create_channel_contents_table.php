<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChannelContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('channel_contents', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('title');
            $table->text('text')->nullable();
            $table->string('file_path')->nullable();
            $table->boolean('is_for_seller')->nullable();
            $table->boolean('is_for_buyer')->nullable();
            $table->boolean('is_for_verified')->nullable();
            $table->unsignedInteger('sub_category_id')->nullable();
            $table->unsignedBigInteger('min_contacts_count')->nullable();
            $table->smallInteger('active_package_type')->nullable();
            $table->dateTime('register_date_from')->nullable();
            $table->dateTime('register_date_until')->nullable();
            $table->dateTime('last_login_date_from')->nullable();
            $table->dateTime('last_login_date_until')->nullable();
            $table->string('last_login_client',20)->nullable();
            $table->unsignedBigInteger('myuser_id')->nullable();
            $table->unsignedBigInteger('product_id')->nullable();
            $table->boolean('is_sharable')->default(true);
            $table->softDeletes();

            $table->foreign('sub_category_id')->references('id')->on('categories');
            $table->foreign('myuser_id')->references('id')->on('myusers');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('channel_contents');
    }
}
