<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image_or_vidio extends Model
{
    use HasFactory;

    protected $table = "images_or_videos";

    /*
    chemin_fichier,id_chambre,id_article_blog , id_restaurant
    */
    protected $fillable = [
        'chemin_fichier', 'id_chambre', 'id_article_blog', 'id_restaurant'
    ];

    public function chambre()
    {
        return $this->belongsTo(Chambre::class, 'id_chambre', 'id');
    }

    public function articleBlog()
    {
        return $this->belongsTo(Article_blog::class, 'id_article_blog', 'id');
    }

    public function restaurant()
    {
        return $this->belongsTo(Restaurant::class, 'id_restaurant', 'id');
    }
}
