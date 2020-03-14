<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGroupMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('group_messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->text('text');
            $table->unsignedBigInteger('sender_id');
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->boolean('is_link')->default(false);

            $table->foreign('sender_id')->references('id')->on('myusers')->onDelete('cascade');
            $table->foreign('parent_id')->references('id')->on('group_messages');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('group_messages');
    }
}
