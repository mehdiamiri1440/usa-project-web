<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAdminNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admin_notes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->text('note');
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
        Schema::dropIfExists('admin_notes');
    }
}
