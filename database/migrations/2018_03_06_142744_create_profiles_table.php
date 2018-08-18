<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->text('description')->nullable();
            $table->string('activity_domain')->nullable();
            $table->text('related_activity_history')->nullable();
            $table->integer('human_resource_count')->nullable();
            $table->string('profile_photo')->nullable();
            $table->boolean('is_company')->default(0);
            $table->boolean('confirmed');
            $table->unsignedBigInteger('myuser_id');
            
            $table->foreign('myuser_id')->references('id')->on('myusers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
