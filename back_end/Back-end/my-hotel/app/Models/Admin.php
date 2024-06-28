<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $guard = 'admin';
    protected $table = 'admins';
    protected $fillable = [
        'nom', 'prenom', 'email', 'password',"user_name", 'role', 'droits_daccès','date_ajouter',"date_annuler"
    ];
    public function messages()
    {
        return $this->hasMany(Message::class, 'id_admin', 'id');
    }
}
