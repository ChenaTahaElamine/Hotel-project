<?php

namespace Database\Factories;

use App\Models\Commentateur;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Commentateur>
 */
class CommentateurFactory extends Factory
{
    protected $model = Commentateur::class;

    public function definition()
    {
        return [
            'contenu' => $this->faker->paragraphs(3, true),
            'date_cree' => $this->faker->dateTimeThisMonth(),
            'note' => $this->faker->numberBetween(1, 5),
            'id_chambre' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
            'id_article_blog' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
            'id_restaurant' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
            'id_user' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
        ];
    }
}
