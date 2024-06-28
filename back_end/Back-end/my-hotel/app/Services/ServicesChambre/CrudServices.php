<?php

namespace App\Services\ServicesChambre;

use App\Models\Chambre;
use Illuminate\Http\Request;

class CrudServices
{

    public function selectAll()
    {
        return Chambre::with("commentateurs")->with("media")->paginate(5);
    }

    public function insertInto(Request $request)
    {
        $request->validate([
            'type_chambre' => 'required',
            'description' => 'required',
            'tarif_nuit' => 'required',
            'disponibilite' => 'required',
        ]);
        Chambre::create($request->all());
        return ['success' => 'Chambre créée avec succès'];
    }
    public function selectWhere($id)
    {
        return Chambre::find($id);
    }
    public function updateWhere(Request $request, $id)
    {
        $request->validate([
            'type_chambre' => 'required',
            'description' => 'required',
            'tarif_nuit' => 'required',
            'disponibilite' => 'required',
        ]);
        Chambre::find($id)->update($request->all());
        return ['success' => 'Chambre mise à jour avec succès'];
    }
    public function deletetWhere($id)
    {
        Chambre::find($id)->delete();
        return ['success' => 'Chambre supprimée avec succès'];
    }

    public function search($searchTerm)
    {
        // Récupérer le terme de recherche depuis la requête
        // Vérifier si un terme de recherche est fourni
        if ($searchTerm) {
            // Effectuer la requête de recherche
            return Chambre::where('type_chambre', 'LIKE', "%{$searchTerm}%")
                ->orWhere('description', 'LIKE', "%{$searchTerm}%")
                ->with("commentateurs")->with("media")->paginate(5);

        } else {
            // Si aucun terme de recherche n'est fourni, paginer tous les utilisateurs
            return Chambre::paginate(5);
        }

    }

}