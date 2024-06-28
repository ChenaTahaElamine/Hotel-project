import React, { createContext, useContext, useState } from 'react';
import Users from '../FicherDeConnection/LeFicherUsers/Users';


const UseStateUsersContex = createContext();


export const AppProviderStateUsers = ({ children }) => {

    //-----< table users
    
    const [token, setToken] = useState(null);
    const [clients, setClients] = useState([]);
    const [linksPaginateClient, setLinksPaginateClient] = useState([]);
    const [pageTableClient, setPageTableClient] = useState(1);
    const [tableClientsSerch, setTableClientsSerch] = useState("");
    const [client, setclient] = useState({});

    const objUsersTable = {
        getClient: () => {
            return client;
        },
        setClientMethed: (clientParam) => {
            setclient(clientParam);
        },
        getTableClientsSerch: () => {
            return tableClientsSerch;
        },
        setTableClientsSerchMethode: (tableClientsSerchParam) => {
            setTableClientsSerch(tableClientsSerchParam);
        },
        getPageTableClient: () => {
            return pageTableClient;
        },
        setPageTableClient: (pageTableClientParam) => {
            setPageTableClient(pageTableClientParam);
        },
        getLinksPaginateClient: () => {
            return linksPaginateClient;
        },
        setLinksPaginateClient: (linksPaginateClientParam) => {
            setLinksPaginateClient(linksPaginateClientParam);
        },
        getClients: () => {
            return clients;
        },
        setClientsMethode: (clientsParam) => {
            setClients(clientsParam);
        },
        // ----<
        setTokenMethode: (tokenParamm) => {
            setToken(tokenParamm);
        },
        getToken: () => {

            const tokenString = sessionStorage.getItem("token");
            const userToken = JSON.parse(tokenString);
            return userToken;
            
        },
        // ---->
        // -----<
        showClient: async (idParam) => {
            const user = await Users.showUser(token, 1, idParam);
            setclient(user);
            return user;
        },
        fetchClientSearch: async (page = 1) => {
            if (tableClientsSerch) {
                const users = await Users.search(token, pageTableClient, tableClientsSerch);
                setClients(users.data);
                setLinksPaginateClient(users.links);
                setPageTableClient(page);
                return users;
            } else if (tableClientsSerch === "") {
                const users = await Users.index(token, pageTableClient);

                setClients(users.data);
                setLinksPaginateClient(users.links);
                return clients;
            }
        },
        fetchNextClientTable: (link) => {
            const url = new URL(link);
            setPageTableClient(url.searchParams.get("page"));
        },
        indexClients: async () => {
            const users = await Users.index(objUsersTable.getToken(), pageTableClient);
            setClients(users.data);
            setLinksPaginateClient(users.links);
            return clients;
        },
        // ---->
    }
    return (
        <UseStateUsersContex.Provider value={{ objUsersTable }}>
            {children}
        </UseStateUsersContex.Provider>
    );
};



export const useStateUsersAppContext = () => {
    return useContext(UseStateUsersContex);
};
