<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessangerGroupSubscibersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messenger_group_subscribers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('myuser_id');
            $table->unsignedBigInteger('group_id');
            $table->boolean('is_active')->default(true);

            $table->foreign('myuser_id')->references('id')->on('myusers')->onDelete('cascade');
            $table->foreign('group_id')->references('id')->on('messenger_groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('messenger_group_subscibers');
    }
}
