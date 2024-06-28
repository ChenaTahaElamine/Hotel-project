<?php 

namespace App\Services\ServicesAdmin;

use App\Http\Requests\AdminRequests\LoginRequest;
use App\Models\Admin;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;


class LoginAndRegisterAdmin{

    public function RegisterAdmin($adminArray){
        $adminArray["password"]=Hash::make($adminArray["password"]);
        Admin::create($adminArray);
    }

    public function LoginAdmin(LoginRequest $request){
        $credentials = $request->only('user_name', 'password');

        try {
            if (Auth::guard('admin')->attempt($credentials)) {
            
                $admin=Admin::where("user_name",request("user_name"))->first();
            
                $token =$admin->createToken(time())->plainTextToken;
                $user=Auth::user();
           
            }else {
                return response()->json(['message' => 'user not fond'], 401);
            }
        }catch (Exception $e) {
                return response()->json(['error' => 'Could not create token'], 500);
        }

        return ["token"=>$token,"admin"=>$admin];
    }
    public function adminLogout(Request $request)
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
                $adminUser = $request->user();

                if ($adminUser) {
                    // Supprimer le token de la base de données
                    PersonalAccessToken::where('tokenable_id', $adminUser->id)
                    ->where('tokenable_type', get_class($adminUser))
                    ->update(['expires_at' => now()]);
    
                    Auth::guard('admin')->logout();
    
                    Cookie::forget('admin_token');
    
                    return response()->json(['message' => 'Logout successful'], 200);
                } else {
                    // Gérer l'erreur si l'utilisateur administrateur n'est pas authentifié
                    return response()->json(['error' => 'User not authenticated'], 401);
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

    
}
