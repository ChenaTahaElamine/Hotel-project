<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    
    protected $table = "messages";

    protected $fillable = [
        'description', 'statut', 'date', 'but', 'id_user', 'id_admin'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'id_admin', 'id');
    }
}
