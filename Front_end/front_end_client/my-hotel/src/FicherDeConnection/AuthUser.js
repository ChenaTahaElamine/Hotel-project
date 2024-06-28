import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReturnLeNomDeDomin from "../ReturnLeNomDeDomin";

export default function AuthUser() {

    const getToken = () => {
        const tokenString = sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () => {
        const userString = sessionStorage.getItem("user");
        const user_details = JSON.parse(userString);
        return user_details;
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const navigate = useNavigate();

    const saveToken = (user, token) => {
        sessionStorage.setItem("token", JSON.stringify(token));
        sessionStorage.setItem("user", JSON.stringify(user));

        setToken(token);
        setUser(user);
        // navigate("/");
    }
    const logout = () => {
        sessionStorage.clear();
        // navigate("/");
    }
    const http = axios.create({
        baseURL: `${ReturnLeNomDeDomin}/api`,
        headers: {
            "Content-type": "application/json"
        }
    });
    return {
        setToken: saveToken,
        token,
        user,
        getUser,
        getToken,
        logout,
        http
    };

}