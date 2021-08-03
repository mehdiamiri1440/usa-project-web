<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserContactsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_contacts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('contact_name',50)->nullable();
            $table->boolean('has_thumbnail')->default(false);
            $table->unsignedBigInteger('myuser_id');
            $table->unsignedBigInteger('contact_id');

            $table->unique(['myuser_id', 'contact_id']);

            $table->foreign('myuser_id')->references('id')->on('myusers');
            $table->foreign('contact_id')->references('id')->on('contact_phones');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_contacts');
    }
}
