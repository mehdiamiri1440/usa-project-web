<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->unsignedBigInteger('reported_id');
            $table->unsignedBigInteger('reporter_id');
            $table->unsignedBigInteger('option_id');
            $table->text('description')->nullable();

            $table->foreign('reported_id')->references('id')->on('myusers');
            $table->foreign('reporter_id')->references('id')->on('myusers');
            $table->foreign('option_id')->references('id')->on('report_options');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reports');
    }
}
