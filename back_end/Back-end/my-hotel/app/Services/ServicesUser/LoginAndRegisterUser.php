<?php

namespace App\Services\ServicesUser;


use App\Http\Requests\UserRequests\LoginRequest;
use App\Http\Requests\UserRequests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Laravel\Sanctum\PersonalAccessToken;



use Exception;


class LoginAndRegisterUser
{
    public function RegisterUser(RegisterRequest $request)
    {
        
        $request->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = new User([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);
        $user->save();
        $token=$user->createToken(time())->plainTextToken;
        return ["token"=>$token];
    }
    public function logoutUser(Request $request)
    {
        try {
            // Récupérer le token depuis la requête
            $authorizationHeader = $request->header('Authorization');

            $tokenParts = explode(' ', $authorizationHeader);
            if (count($tokenParts) === 2 && $tokenParts[0] === 'Bearer') {

                $token = $tokenParts[1];

            }

            // Vérifier si l'utilisateur administrateur est authentifié
            if ($token) {
                $accessToken = PersonalAccessToken::where('id', $token)->first();
                $ClientUser = $accessToken->tokenable;

                if ($ClientUser) {
                    // Supprimer le token de la base de données
                    PersonalAccessToken::where('tokenable_id', $ClientUser->id)
                        ->where('tokenable_type', get_class($ClientUser))
                        ->update(['expires_at' => now()]);

                    Auth::guard('web')->logout();

                    Cookie::forget('web_token');

                    return response()->json(['message' => 'Logout successful'], 200);
                } else {
                    // Gérer l'erreur si l'utilisateur administrateur n'est pas authentifié
                    return response()->json(['error' => 'Client not authenticated'], 401);
                }
            } else {
                // Gérer l'erreur si le token n'est pas fourni
                return response()->json(['error' => 'Token not provided'], 400);
            }
        } catch (\Exception $e) {
            // Gérer les erreurs
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    public function LoginUser(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        try {

            if (Auth::guard('web')->attempt($credentials)) {
                $user = User::where("email", request("email"))->first();
                $token = $user->createToken(time())->plainTextToken;
            } else {
                return response()->json(['message' => 'user not fond'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }

        return ["token" => $token, "user" => $user];
    }

}