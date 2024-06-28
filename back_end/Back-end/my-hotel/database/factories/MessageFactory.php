<?php

namespace Database\Factories;

use App\Models\Message;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    protected $model = Message::class;

    public function definition()
    {
        return [
            'description' => $this->faker->paragraphs(3, true),
            'statut' => $this->faker->randomElement(['Nouveau', 'En cours', 'Fermé']),
            'date' => $this->faker->dateTimeThisMonth(),
            'but' => $this->faker->sentence,
            'id_user' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
            // 'id_admin' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
        ];
    }
}
