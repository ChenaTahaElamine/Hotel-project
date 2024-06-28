<?php

namespace Database\Seeders;

use App\Models\Article_blog as ModelsArticle_blog;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Article_blogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ModelsArticle_blog::factory(100)->create();
    }
}
