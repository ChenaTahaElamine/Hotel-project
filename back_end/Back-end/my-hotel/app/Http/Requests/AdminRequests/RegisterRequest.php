<?php

namespace App\Http\Requests\AdminRequests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true; // Vous pouvez appliquer des règles d'autorisation ici si nécessaire
    } 

    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:admins',
            "user_name"=>"required|string|max:20|unique:admins",
            'password' => 'required|string|min:8',//confirmed
        ];
    }
}
