<?php

namespace App\Http\Controllers;

use App\Services\ServicesCommentateur\CrudServices;
use Illuminate\Http\Request;

class CommentateurController extends Controller
{
    public CrudServices $crudServices;
    public function __construct(CrudServices $crudServices) {
        $this->crudServices=$crudServices;
    }
    public function index(){
        return $this->crudServices->selectAll();
    }

    public function create()
    {
        
    }

    public function storeCommentateurRestaurant(Request $request)
    {
        return $this->crudServices->insertIntoCommentateurRestaurant($request);
    }

    public function storeCommentateurArticleBlog(Request $request)
    {
        return $this->crudServices->insertIntoCommentateurArticleBlog($request);
    }

    public function storeCommentateurChambre(Request $request)
    {
        return $this->crudServices->insertIntoCommentateurChambre($request);
    }

    public function show(string $id)
    {
        return $this->crudServices->selectWhere($id);
    }
 
    public function edit(string $id)
    {
        
    }
 
    public function update(Request $request, string $id)
    {
        return $this->crudServices->updateWhere($request,$id);
    }
 
    public function destroy(string $id)
    {
        return $this->crudServices->deletetWhere($id);
    }
}
