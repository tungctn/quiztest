<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Document extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document', function (Blueprint $table) {
            $table->id();
            $table->string('question')->unique();
            $table->string('A');
            $table->string('B');
            $table->string('C');
            $table->string('D');
            $table->enum('answer', ['A', 'B', 'C', 'D']);
            $table->unsignedBigInteger('memberId');
            $table->foreign('memberId')->references('id')->on('member')->onDelete('cascade');
            $table->unsignedBigInteger('courseId');
            $table->foreign('courseId')->references('id')->on('course')->onDelete('cascade');
            $table->enum('level', [1, 2, 3, 4]);
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
        Schema::dropIfExists('document');
    }
}
