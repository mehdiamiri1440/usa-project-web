<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhoneNumberViewLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phone_number_view_logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->enum('viewer_role', [
                'BUYER',
                'SELLER',
            ]);
            $table->enum('user_role', [
                'BUYER',
                'SELLER',
            ]);
            $table->unsignedBigInteger('viewer_id');
            $table->unsignedBigInteger('myuser_id');
            $table->enum('related_item',[
                'PRODUCT',
                'BUYAD',
                'PROFILE',
                'OTHER'
            ])->nullable();
            
            $table->boolean('is_free')->default(false);

            $table->foreign('viewer_id')->references('id')->on('myusers');
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
        Schema::dropIfExists('phone_number_view_logs');
    }
}
