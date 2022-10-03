<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Result extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('result', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->double('point');
            $table->unsignedBigInteger('courseId');
            $table->foreign('courseId')->references('id')->on('course')->onDelete('cascade');
            $table->unsignedBigInteger('memberId');
            $table->foreign('memberId')->references('id')->on('member')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('result');
    }
}
