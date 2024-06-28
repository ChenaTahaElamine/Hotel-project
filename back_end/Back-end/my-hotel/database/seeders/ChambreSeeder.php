<?php

namespace Database\Seeders;

use App\Models\Chambre;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChambreSeeder extends Seeder
{
    
    public function run(): void
    {
        Chambre::factory(10)->create();
    }
}
