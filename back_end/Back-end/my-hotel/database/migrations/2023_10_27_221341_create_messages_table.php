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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->text('description');
            $table->string('statut');
            $table->timestamp('date');
            $table->string('but');
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_admin')->nullable();
            $table->foreign('id_user')->references('id')->on('users')->onDelete('cascade');;
            $table->foreign('id_admin')->references('id')->on('admins')->onDelete('cascade');;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
