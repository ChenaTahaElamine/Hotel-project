<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    
    public function run(): void
    {

        $this->call([
            ChambreSeeder::class,
            Article_blogSeeder::class,//problem 1
            RestaurantSeeder::class,
            CommentateurSeeder::class,
            MessageSeeder::class,
            ImageOrVidioSeeder::class//problem 2
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
