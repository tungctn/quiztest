<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class MemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('member')->insert([
            [
                'name' => 'tung',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('tung'),
                'role' => 1,
                'created_at' => Carbon::now()->format('Y-m-d'),
                'updated_at' => Carbon::now()->format('Y-m-d')
            ],
            [
                'name' => 'tung',
                'email' => 'teacher1@gmail.com',
                'password' => Hash::make('tung'),
                'role' => 2,
                'created_at' => Carbon::now()->format('Y-m-d'),
                'updated_at' => Carbon::now()->format('Y-m-d')
            ],
            [
                'name' => 'tung',
                'email' => 'student1@gmail.com',
                'password' => Hash::make('tung'),
                'role' => 3,
                'created_at' => Carbon::now()->format('Y-m-d'),
                'updated_at' => Carbon::now()->format('Y-m-d')
            ],
        ]);
    }
}
