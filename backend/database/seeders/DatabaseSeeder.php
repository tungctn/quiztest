<?php

namespace Database\Seeders;

use Course;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            RoleSeeder::class,
            CourseSeeder::class,
            MemberSeeder::class,
        ]);
    }
}
