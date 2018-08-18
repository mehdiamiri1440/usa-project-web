<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMyusersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('myusers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
			$table->string('phone',20)->unique();
			$table->string('password',256);
			$table->string('first_name');
			$table->string('last_name');
			$table->string('sex',10);
			$table->string('province');
			$table->string('city');
			$table->integer('credit');			
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('myusers');
    }
}
