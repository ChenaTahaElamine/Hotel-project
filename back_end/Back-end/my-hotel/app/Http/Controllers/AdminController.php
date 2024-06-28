<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminRequests\LoginRequest;
use App\Services\ServicesAdmin\LoginAndRegisterAdmin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public LoginAndRegisterAdmin $adminServices;

    public function __construct(LoginAndRegisterAdmin $adminServices) {
        $this->adminServices=$adminServices;
    }

    public function LoginAdmin(LoginRequest $request){
        return $this->adminServices->LoginAdmin($request);        
    }
    public function LogoutAdmin(Request $request){

        return $this->adminServices->adminLogout($request);
    }

}
