<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_comments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->text('text')->nullable()->default(null);
            $table->boolean('deleted_by_owner')->default(false);
            $table->boolean('confirmed')->default(false);
            $table->smallInteger('rating_score')->default(0);
            $table->unsignedBigInteger('commenter_id');
            $table->unsignedBigInteger('myuser_id');

            $table->foreign('commenter_id')->references('id')->on('myusers');
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
        Schema::dropIfExists('user_comments');
    }
}
