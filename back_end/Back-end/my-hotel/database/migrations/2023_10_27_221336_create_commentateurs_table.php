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
        Schema::create('commentateurs', function (Blueprint $table) {
            $table->id();
            $table->text('contenu');
            $table->timestamp('date_cree');
            $table->integer('note');
            $table->unsignedBigInteger('id_chambre')->nullable();
            $table->unsignedBigInteger('id_article_blog')->nullable();
            $table->unsignedBigInteger('id_restaurant')->nullable();
            $table->unsignedBigInteger('id_user');
            $table->foreign('id_chambre')->references('id')->on('chambres')->onDelete('cascade');
            $table->foreign('id_article_blog')->references('id')->on('article_blogs')->onDelete('cascade');
            $table->foreign('id_restaurant')->references('id')->on('restaurants')->onDelete('cascade');
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commentateurs');
    }
};
