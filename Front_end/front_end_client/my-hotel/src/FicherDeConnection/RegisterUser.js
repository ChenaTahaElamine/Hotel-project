import axios from "axios";
import { useState } from "react";
import ReturnLeNomDeDomin from "../ReturnLeNomDeDomin";



export default function RegisterUser() {

    const [response, setResponse] = useState(null);

    const RegisterUserAccont = async (name, email, password) => {
        try {
            
            const response = await axios.post(`${ReturnLeNomDeDomin}/api/user/register`, {
                'name': name,
                'email': email,
                'password': password
            });

            setResponse(response.data);


        } catch (error) {
            console.log(error);
            
        }
    }
    return {
        RegisterUserAccont,
        getResponse: () => { return response; }
    }

}