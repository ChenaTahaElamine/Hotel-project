import React, { createContext, useContext, useState } from 'react';


const UseStateResteurantContex = createContext();


export const AppProviderStateResteurant = ({ children }) => {
    const obj={}
    
    
    return (
        <UseStateResteurantContex.Provider value={{ obj }}>
            {children}
        </UseStateResteurantContex.Provider>
    );
};



export const useStateResteurantAppContext = () => {
    return useContext(UseStateResteurantContex);
};
