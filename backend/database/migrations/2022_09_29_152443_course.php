<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class Course extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        Schema::create('course', function (Blueprint $table) {
            // $table->engine = 'InnoDB';
            $table->id();
            $table->string('course_name');
            // $table->foreign('id')->references('courseId')->on('document')->onDelete('cascade');
            // $table->foreign('id')->references('courseId')->on('result')->onDelete('cascade');
            $table->timestamps();
        });
        // DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course');
    }
}
