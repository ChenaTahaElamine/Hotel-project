<?php 

namespace App\Services\ServicesMessage;

use App\Models\Message;
use Illuminate\Http\Request;

class CrudServices{
    public function selectAll(){
        return Message::with('admin', 'user')->paginate(5);
    }

    public function insertInto(Request $request)
    {
        $request->validate([
            'description' => 'required',
            'statut' => 'required',
            'id_admin' => 'required',
            'id_user' => 'required',
            'date' => 'required',
            'but' => 'required',
        ]);

        Message::create($request->all());

        return ['success'=> 'Message créé avec succès'];
    }

    public function selectWhere($id)
    {
        return Message::with('admin', 'user')->find($id);
    }
    public function updateWhere(Request $request, $id)
    {
        $request->validate([
            'description' => 'required',
            'statut' => 'required',
            'id_admin' => 'required',
            'id_user' => 'required',
            'date' => 'required',
            'but' => 'required',
        ]);
        $message= Message::find($id)->update($request->all());
        return ['success', 'Message mis à jour avec succès',"message"=> $message];
    }
    
    public function deletetWhere($id)
    {
        Message::find($id)->delete();

        return ['success'=>'Message supprimé avec succès'];
    }
}