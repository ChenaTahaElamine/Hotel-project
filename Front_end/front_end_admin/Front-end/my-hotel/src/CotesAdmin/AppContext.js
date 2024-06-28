import React, { createContext, useContext, useState } from 'react';
import Login from '../FicherDeConnection/MethodeDeRecupirationDonner/athentificationAndAutherizatioon/Login';


const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const objAuthUser = {

        setToken: (TokenParam) => {
            setToken(TokenParam);
        },
        
        getToken: () => {
            const tokenString = sessionStorage.getItem("token");
            const userToken = JSON.parse(tokenString);
            return userToken;
        },

        

        getUser: () => {
            const userString = sessionStorage.getItem("admin");
            const user_details = JSON.parse(userString);
            return user_details;
        },
        setUser: (userParam) => {
            setUser(userParam);

        },

        loginMethode: async (emailParammatre, passwordParammatre) => {
            const objTokenAndAdmin = await (Login(emailParammatre, passwordParammatre));
            return objTokenAndAdmin;
        },
        logout: () => {
            sessionStorage.clear();
            setUser(null);
            setToken(null);
        }
    };

    return (
        <AppContext.Provider value={{ objAuthUser }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
