<?php

namespace App\Http\Controllers;

use App\Models\Image_or_vidio;
use App\Services\ServicesImage_or_vidio\CrudServices;
use Illuminate\Http\Request;

class ImageOrVidioController extends Controller
{
    public CrudServices $crudServices;
    public function __construct(CrudServices $crudServices)
    {
        $this->crudServices = $crudServices;
    }

    public function index()
    {
        return $this->crudServices->selectAll();
    }

    public function create()
    {
        //
    }

    public function storeImgChambre(Request $request, $id_chambre)
    {
        return $this->crudServices->insertIntoImgChambre($request, $id_chambre);
    }

    public function storeImgArticle_blog(Request $request, $id_article_blog)
    {
        return $this->crudServices->insertIntoArticle_blog($request, $id_article_blog);
    }
  
    public function storeImgRestaurant(Request $request, $id_restaurant)
    {
        return $this->crudServices->insertIntoRestaurant($request ,$id_restaurant);
    }

    public function show(string $id)
    {
        return $this->crudServices->selectWhere($id);
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        return $this->crudServices->updateWhere($request, $id);
    }

    public function destroy(string $fileName)
    {
        return $this->crudServices->deletetWhere($fileName);
    }
    public function showFileName($filename)
    {
        return $this->crudServices->showFileNameService($filename);
    }
}
