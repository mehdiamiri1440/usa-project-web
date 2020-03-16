<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupMessageReceiversTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_message_receivers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('subscription_id');
            $table->unsignedBigInteger('message_id');
            $table->boolean('is_read')->default(false);

            $table->foreign('subscription_id')->references('id')->on('messenger_group_subscribers')->onDelete('cascade');
            $table->foreign('message_id')->references('id')->on('group_messages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group_message_receivers');
    }
}
