<?php

namespace App\Http\Requests\AdminRequests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    { 
        return [
            'user_name' => 'required',
            'password' => 'required|string',
        ];
    }
}
