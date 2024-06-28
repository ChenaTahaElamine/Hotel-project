<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([

            'name' => 'samir',
            'email' => 'samir123@gmail.com',
            'password' => Hash::make('123'), 

        ]);
        // User::factory(100)->create();

    }
}
