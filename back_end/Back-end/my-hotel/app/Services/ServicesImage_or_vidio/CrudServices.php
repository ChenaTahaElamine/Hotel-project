<?php

namespace App\Services\ServicesImage_or_vidio;

use Illuminate\Support\Facades\Storage;

use App\Models\Image_or_vidio;
use Illuminate\Http\Request;


class CrudServices
{
    public MethodPourAddImageOrVidio $methodPourAddImageOrVidio;
    public function __construct(MethodPourAddImageOrVidio $methodPourAddImageOrVidio)
    {
        $this->methodPourAddImageOrVidio = $methodPourAddImageOrVidio;
    }

    public function selectAll()
    {
        return Image_or_vidio::with('chambre', 'articleBlog', 'restaurant')->paginate(10);
    }

    public function insertIntoImgChambre(Request $request, $id_chambre)
    {
        $request->validate([
            "image" => "required",
        ]);

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('images', $imageName, 'public');

        // Sauvegarde du chemin dans la base de données  
        $chemin_fichier = $imageName;
        if ($chemin_fichier) {
            Image_or_vidio::create([
                "chemin_fichier" => $chemin_fichier,
                "id_chambre" => $id_chambre
            ]);
            return ['success' => 'Image ou vidéo de la chambre créée avec succès'];
        } else {
            return ['error' => 'Quelque chose ne va pas'];
        }
    }

    public function insertIntoArticle_blog(Request $request, $id_article_blog)
    {
        $request->validate([
            "image" => "required",
        ]);

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('images', $imageName, 'public');
        // $chemin_fichier = $this->methodPourAddImageOrVidio->upload($request);

        // Sauvegarde du chemin dans la base de données  
        $chemin_fichier = $imageName;

        if ($chemin_fichier) {
            Image_or_vidio::create([
                "chemin_fichier" => $chemin_fichier,
                "id_article_blog" => $request->id_article_blog
            ]);
            return ['success' => "Image ou vidéo de l'article de blog créée avec succès"];
        } else {
            return ['error' => 'Quelque chose ne va pas'];
        }

    }

    public function insertIntoRestaurant(Request $request, $id_restaurant)
    {
        $request->validate([
            "image" => "required",
        ]);

        $image = $request->file('image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->storeAs('images', $imageName, 'public');

        // Sauvegarde du chemin dans la base de données  
        $chemin_fichier = $imageName;

        if ($chemin_fichier) {
            Image_or_vidio::create([
                "chemin_fichier" => $chemin_fichier,
                "id_restaurant" => $request->id_restaurant
            ]);
            return ['success' => 'Image ou vidéo de restaurant créée avec succès'];
        } else {
            return ['error' => 'Quelque chose ne va pas'];
        }
    }

    public function selectWhere($id)
    {
        return Image_or_vidio::with('chambre', 'articleBlog', 'restaurant')->find($id);
    }

    public function updateWhere(Request $request, $id)
    {
        $request->validate([
            'chemin_fichier' => 'required',
        ]);

        Image_or_vidio::find($id)->update($request->all());

        return redirect()->route('media.index')->with('success', 'Image ou vidéo mise à jour avec succès');
    }

    public function deletetWhere($fileName)
    {
        // Image_or_vidio::find($id)->delete();
        // return ['success' => 'Image ou vidéo supprimée avec succès'];

        // Assurez-vous d'ajouter la logique de validation et de gestion des erreurs appropriée

        // Récupérer l'image par son ID
        // Assurez-vous d'ajouter la logique de validation et de gestion des erreurs appropriée

        // Récupérer l'image par son ID

        $image = Image_or_vidio::where('chemin_fichier', $fileName)->first();

        // Supprimer l'image de la base de données
        $image->delete();

        // Supprimer le fichier dans le stockage (storage/app/public/images)
        $filePath = 'public/images/' . $image->chemin_fichier;

        if (Storage::exists($filePath)) {
            Storage::delete($filePath);
            return response()->json(['message' => 'Image supprimée avec succès'], 200);
        } else {
            return response()->json(['message' => 'Fichier introuvable dans le stockage'], 404);
        }

    }

    public function showFileNameService($filename)
    {
        $path = storage_path('app/public/images/' . $filename);

        if (!file_exists($path)) {
            abort(404);
        }

        $file = file_get_contents($path);
        $type = mime_content_type($path);

        return response($file)->header('Content-Type', $type);
    }


}