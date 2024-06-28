<?php

namespace Database\Factories;

use App\Models\Article_blog;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article_blog>
 */
class Article_blogFactory extends Factory
{
    protected $model = Article_blog::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'contenu' => $this->faker->paragraphs(3, true),
            'date_publication' => $this->faker->dateTimeThisMonth(),
        ];
    }
}
