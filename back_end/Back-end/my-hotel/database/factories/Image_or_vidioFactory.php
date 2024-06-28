<?php

namespace Database\Factories;

use App\Models\Image_or_vidio;
use Illuminate\Database\Eloquent\Factories\Factory;

class Image_or_vidioFactory extends Factory
{
    protected $model = Image_or_vidio::class;

    public function definition()
    {
        return [
            'chemin_fichier' => $this->faker->imageUrl(), // Exemple de lien vers une image
            'id_chambre' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
            // 'id_article_blog' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
            // 'id_restaurant' => $this->faker->numberBetween(1, 10), // Assurez-vous que cette plage est correcte
        ];
    }
}
