<?php

namespace Database\Factories;

use App\Models\Chambre;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chambre>
 */
class ChambreFactory extends Factory
{
    protected $model = Chambre::class;

    public function definition()
    {
        return [
            'type_chambre' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'tarif_nuit' => $this->faker->randomFloat(2, 50, 200),
            'disponibilite' => $this->faker->boolean,
        ];
    }
}
