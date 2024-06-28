<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chambre extends Model
{

    use HasFactory;

    protected $table = "chambres";

    protected $fillable = [
        'type_chambre', 'description', 'tarif_nuit', 'disponibilite'
    ];


    public function commentateurs()
    {
        return $this->hasMany(Commentateur::class, 'id_chambre', 'id');
    }

    public function media()
    {
        return $this->hasMany(Image_or_vidio::class, 'id_chambre', 'id');
    }
}
