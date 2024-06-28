<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{ 
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*'nom', 'prenom', 'email', 'password',
        "user_name", 'role', 'droits_daccès',
        'date_ajouter',"date_annuler" */
        Admin::create([
            'nom' => 'Chena',
            'prenom' => 'taha elamine',
            "user_name"=>"chena.tahaelamine",
            'email' => 'tahachenaa@gmail.com',
            'password' => Hash::make('123'),
            'role' => 'admin',
            'droits_daccès' => 'AdminPrincipale',
        ]);
    }
}
