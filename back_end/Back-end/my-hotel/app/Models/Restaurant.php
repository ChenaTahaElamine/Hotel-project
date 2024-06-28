<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    use HasFactory;

    protected $table="restaurants";
    protected $fillable = [
        'nom', 'description', 'menu'
    ];

    public function commentateurs()
    {
        return $this->hasMany(Commentateur::class, 'id_restaurant', 'id');
    }

    public function media()
    {
        return $this->hasMany(Image_or_vidio::class, 'id_restaurant', 'id');
    }
}
