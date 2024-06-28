<?php

namespace App\Services\ServicesUser;



use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class CrudServices
{
    public function getAllClients()
    {
        return User::paginate(5);
    }
    public function selectWhere($id)
    {
        return User::find($id);
    }
    public function search($searchTerm)
    {
        // Récupérer le terme de recherche depuis la requête


        // Vérifier si un terme de recherche est fourni
        if ($searchTerm) {
            // Effectuer la requête de recherche
            return User::where('name', 'LIKE', "%{$searchTerm}%")
                ->orWhere('email', 'LIKE', "%{$searchTerm}%")
                ->paginate(5);

        } else {
            // Si aucun terme de recherche n'est fourni, paginer tous les utilisateurs
            return User::paginate(5);
        }

    }

}