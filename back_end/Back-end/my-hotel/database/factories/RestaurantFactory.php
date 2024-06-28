<?php

namespace Database\Factories;

use App\Models\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurant>
 */
class RestaurantFactory extends Factory
{
    protected $model = Restaurant::class;

    public function definition()
    {
        return [
            'nom' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'menu' => $this->faker->paragraphs(5, true),
        ];
    }
}
