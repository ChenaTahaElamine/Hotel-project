<?php

namespace App\Services\ServicesCommentateur;

use App\Models\Commentateur;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CrudServices
{
    public function selectAll()
    {
        return Commentateur::with("commentateurs")->with("chambre", "articleBlog", "restaurant", "user")->paginate(10);
    }

    public function insertIntoCommentateurRestaurant(Request $request)
    {
        $request->validate([
            'contenu' => 'required',
            'note' => 'required',
            'id_restaurant' => 'required',
            'id_user' => 'required',
        ]);


        Commentateur::create([
            'contenu' => $request->contenu,
            'note' => $request->note,
            'id_restaurant' => $request->id_restaurant,
            'id_user' => $request->id_user,
            "date_cree" => Carbon::now(),
        ]);
        return ['success' => 'Commentateur de restaurant créé avec succès'];
    }

    public function insertIntoCommentateurArticleBlog(Request $request)
    {
        $request->validate([
            'contenu' => 'required',
            'note' => 'required',
            'id_article_blog' => 'required',
            'id_user' => 'required',
        ]);
        Commentateur::create($request->all());
        return ['success' => 'Commentateur de article blog créé avec succès'];
    }

    public function insertIntoCommentateurChambre(Request $request)
    {
        $request->validate([
            'contenu' => 'required',
            'note' => 'required',
            'id_chambre' => 'required',
            'id_user' => 'required',
        ]);

        Commentateur::create([
            'contenu' => $request->contenu,
            'note' => $request->note,
            'id_chambre' => $request->id_chambre,
            'id_user' => $request->id_user,
            "date_cree"=>Carbon::now(),
        ]);
        return ['success' => 'Commentateur de restaurant créé avec succès'];
    }

    public function selectWhere($id)
    {
        return Commentateur::with("chambre", "articleBlog", "restaurant", "user")->find($id);
    }
    public function updateWhere(Request $request, $id)
    {
        $request->validate([
            'contenu' => 'required',
            'note' => 'required',
        ]);

        $commentateur = Commentateur::find($id)->update($request->all());

        return ['success' => 'Commentateur mis à jour avec succès', 'commentateur' => $commentateur];
    }
    public function deletetWhere($id)
    {
        Commentateur::find($id)->delete();
        return ['success' => 'Commentateur supprimé avec succès'];
    }
}