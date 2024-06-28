import { postMethode } from "../../LesMethodesCrud";

async function Login(emailParammatre, passwordParammatre) {


    try {
        const objTokenAndAdmin = await postMethode("admin/login", {
            user_name: emailParammatre,
            password: passwordParammatre
        });
    
        return objTokenAndAdmin;
    } catch (error) {
        console.error('Erreur de connexion', error);
        throw error;
    }

}

export default Login;
