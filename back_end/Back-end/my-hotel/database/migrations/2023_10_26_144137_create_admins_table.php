<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('email');
            $table->string('password');
            $table->string('user_name');
            $table->string('role')->default("admin");
            $table->enum('droits_daccès', ['AdminPrincipale', 'réservations', 'témoignages']);
            $table->timestamp('date_ajouter')->nullable();
            $table->timestamp('date_annuler')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admins');
    }
};
