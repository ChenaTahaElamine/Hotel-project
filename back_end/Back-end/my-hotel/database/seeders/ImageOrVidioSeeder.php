<?php

namespace Database\Seeders;

use App\Models\Image_or_vidio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ImageOrVidioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Image_or_vidio::factory(10)->create();
    }
}
