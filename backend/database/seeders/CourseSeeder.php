<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('course')->insert([
            [
                'course_name'=>'Math',
                'created_at'=>Carbon::now()->format('Y-m-d'),
                'updated_at'=>Carbon::now()->format('Y-m-d'),
            ]
        ]);
    }
}
