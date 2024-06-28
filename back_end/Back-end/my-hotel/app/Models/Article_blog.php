<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article_blog extends Model
{
    use HasFactory; 

    protected $table = "article_blogs";

    
    protected $fillable = [
        'title', 'contenu', 'date_publication'
    ];

    public function commentateurs()
    {
        return $this->hasMany(Commentateur::class, 'id_article_blog', 'id');
    }

    public function media()
    {
        return $this->hasMany(Image_or_vidio::class, 'id_article_blog', 'id');
    }
}
