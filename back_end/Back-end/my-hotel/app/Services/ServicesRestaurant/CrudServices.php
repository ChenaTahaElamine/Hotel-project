<?php

namespace App\Services\ServicesRestaurant;

use App\Models\Restaurant;
use Illuminate\Http\Request;

class CrudServices
{
    public function selectAll()
    {
        return Restaurant::with("commentateurs")->with("media")->paginate(5);
    }
    public function insertInto(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'description' => 'required',
            'menu' => 'required',
        ]);
        $restaurant = Restaurant::create($request->all());
        return $restaurant;
    }
    public function selectWhere($id)
    {
        $restaurant = Restaurant::with("commentateurs")->with("media")->find($id);
        return $restaurant;
    }
    public function updateWhere(Request $request, $id)
    {
        $request->validate([
            'nom' => 'required',
            'description' => 'required',
            'menu' => 'required',
        ]);
        $restaurant = Restaurant::find($id);
        $restaurant->update($request->all());
        return Restaurant::find($id);
    }
    public function deletetWhere($id)
    {
        $restaurant = Restaurant::find($id);
        $restaurant->delete();
        return ['success', 'Restaurant supprimé avec succès'];
    }
    public function search($searchTerm)
    {
        // Récupérer le terme de recherche depuis la requête
        // Vérifier si un terme de recherche est fourni
        if ($searchTerm) {
            // Effectuer la requête de recherche
            return Restaurant::where('nom', 'LIKE', "%{$searchTerm}%")
                ->orWhere('description', 'LIKE', "%{$searchTerm}%")
                ->with("commentateurs")->with("media")->paginate(5);

        } else {
            // Si aucun terme de recherche n'est fourni, paginer tous les utilisateurs
            return Restaurant::paginate(5);
        }

    }

}
