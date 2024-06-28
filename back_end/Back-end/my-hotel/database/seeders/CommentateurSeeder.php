<?php

namespace Database\Seeders;

use App\Models\Commentateur;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CommentateurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Commentateur::factory(10)->create();
    }
}
