<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commentateur extends Model
{
    use HasFactory;

    protected $table="commentateurs";

    protected $fillable = [
        'contenu', 'date_cree', 'note', 'id_chambre', 'id_article_blog', 'id_restaurant', 'id_user'
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

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
