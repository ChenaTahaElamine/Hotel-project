import React, { createContext, useContext, useState } from 'react';
import Chambre from "../FicherDeConnection/FicherChambre/Chambre";
import AddImageChambre from '../FicherDeConnection/FicherChambre/AddImageChambre';

const UseStateChambreContex = createContext();


export const AppProviderStateChambre = ({ children }) => {
    /*
        type_chambre
        description
        tarif_nuit
        disponibilite
    */

    //-----< table chambre

    const [token, setToken] = useState(null);
    const [chambres, setChambres] = useState("");
    const [pageTableChambres, setPageTableChambres] = useState(1);
    const [linksPaginateChambres, setLinksPaginateChambres] = useState([]);
    const [tableChambreSerch, setTableChambreSerch] = useState("");
    const [chambre, setChambre] = useState({});
    const [chambreImage, setChambreImage] = useState([]);

    const objChambreTable = {
        //seters & geters
        setChambreImageMethod: (chambreImageParam) => { setChambreImage(chambreImageParam); },
        getChambreImage: () => { return chambreImage },
        setTokenMethod: (tokenparam) => { setToken(tokenparam); },
        getToken: () => {
            const tokenString = sessionStorage.getItem("token");
            const userToken = JSON.parse(tokenString);
            return userToken;
        },

        setChambresMethod: (chambresParam) => { setChambres(chambresParam); },
        getChambres: () => { return chambres; },

        setPageTableChambresMethod: (pageTableChambresParam) => { setPageTableChambres(pageTableChambresParam); },
        getPageTableChambres: () => { return pageTableChambres; },

        setLinksPaginateChambresMethod: (linksPaginateChambresParam) => { setLinksPaginateChambres(linksPaginateChambresParam); },
        getLinksPaginateChambres: () => { return linksPaginateChambres; },

        setTableChambreSerchMethod: (tableChambreSerchParam) => { setTableChambreSerch(tableChambreSerchParam); },
        getTableChambreSerch: () => { return tableChambreSerch; },

        setChambreMethod: (chambreParam) => { setChambre(chambreParam); },
        getChambre: () => { return chambre; },
        // //methods
        deleteImage: async (fileName) => {
            const res = await AddImageChambre.delete(token, fileName);
            console.log(res);
            return res;
        },
        storeImageChambre: async (objNewchambreImage) => {
            // AddImageChambre
            const res = await AddImageChambre.store(token, objNewchambreImage);
            console.log(res);
            return res;
        },
        UpdateChambre: async (objNewDate) => {
            const res = Chambre.update(token, objNewDate);
            return res;
        },
        storeChambre: async (chambreData) => {
            const res = Chambre.store(token, chambreData);
            return res;
        },
        deleteChambre: async (idParam) => {
            try {
                const response = await Chambre.delete(token, idParam);
                setPageTableChambres(2);
                setPageTableChambres(1);
                return response;
            } catch (error) {
                console.log("chena taha elamine ", error);
            }


        },

        fetchChambreSearch: async (page = 1) => {
            if (tableChambreSerch) {
                const chambres = await Chambre.search(token, pageTableChambres, tableChambreSerch);
                setChambres(chambres.data);
                setLinksPaginateChambres(chambres.links);
                setPageTableChambres(page);
                return chambres;
            } else if (tableChambreSerch === "") {
                const chambres = await Chambre.index(token, pageTableChambres);
                setChambres(chambres.data);
                setLinksPaginateChambres(chambres.links);
                return chambres;
            }

        },
        fetchNextChambresTable: (link) => {
            const url = new URL(link);
            setPageTableChambres(url.searchParams.get("page"));
        },
        indexChambres: async () => {
            const chambres = await Chambre.index(objChambreTable.getToken(), pageTableChambres);
            setChambres(chambres.data);
            setLinksPaginateChambres(chambres.links);
            return chambres;
        },
    }
    return (
        <UseStateChambreContex.Provider value={{ objChambreTable }}>
            {children}
        </UseStateChambreContex.Provider>
    );
};



export const useStateChambreAppContext = () => {
    return useContext(UseStateChambreContex);
};
