<?php

namespace App\Services\ServicesArticle_blog;

use App\Models\Article_blog;
use Illuminate\Http\Request;

class CrudServices
{
    public function search($searchTerm)
    {
        // Récupérer le terme de recherche depuis la requête


        // Vérifier si un terme de recherche est fourni
        if ($searchTerm) {
            // Effectuer la requête de recherche
            return Article_blog::where('title', 'LIKE', "%{$searchTerm}%")
                ->with("commentateurs")->with("media")->paginate(5);

        } else {
            // Si aucun terme de recherche n'est fourni, paginer tous les utilisateurs
            return Article_blog::paginate(5);
        }

    }
    public function selectAll()
    {
        return Article_blog::with("commentateurs")->with("media")->paginate(5);
    }

    public function insertInto(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'contenu' => 'required',
            'date_publication' => 'required',
        ]);

        $article = Article_blog::create($request->all());

        return ['success' => 'Article de blog créé avec succès', "article" => $article];
    }
    public function selectWhere($id)
    {
        return Article_blog::find($id);
    }
    public function updateWhere(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'contenu' => 'required',
            'date_publication' => 'required',
        ]);

        $article = Article_blog::find($id);
        $article->update($request->all());
        return ['success' => 'Article de blog mis à jour avec succès', 'article' => $article];
    }
    public function deletetWhere($id)
    {
        Article_blog::find($id)->delete();
        return ['success' => 'Article de blog supprimé avec succès'];
    }
}