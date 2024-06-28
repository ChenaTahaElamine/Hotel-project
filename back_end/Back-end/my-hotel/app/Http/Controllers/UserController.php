<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequests\LoginRequest;
use App\Http\Requests\UserRequests\RegisterRequest;
use App\Services\ServicesUser\CrudServices;
use App\Services\ServicesUser\LoginAndRegisterUser;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public LoginAndRegisterUser $userServices;
    public CrudServices $crudServices;


    public function __construct(LoginAndRegisterUser $userServices, CrudServices $crudServices)
    {
        $this->userServices = $userServices;
        $this->crudServices = $crudServices;
    }

    public function RegisterUser(RegisterRequest $request)
    {
        return $this->userServices->RegisterUser($request);
    }
    public function LoginUser(LoginRequest $request)
    {
        return $this->userServices->LoginUser($request);
    }

    public function logoutUser(Request $request)
    {
        return $this->userServices->logoutUser($request);
    }

    public function index()
    {
        return $this->crudServices->getAllClients();
    }
    public function searchUser(Request $request, $searchTearm)
    {
        return $this->crudServices->search($searchTearm);
    }
    public function show(string $id)
    {
        return $this->crudServices->selectWhere($id);
    }


}
