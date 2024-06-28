import axios from "axios";
import ParammatreApi from "./LesParamatreDeApi";



const getMethode = async (path, obj = {}) => {
    const parammatreApi = new ParammatreApi(path);

    if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
        console.error('Objet invalide ou vide.');
        return "Objet invalide ou vide.";
    }
    try {

        const response = await axios.get(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`, obj);
        return response;

    } catch (error) {
        console.error('Erreur lors de la requête get:', error);
    } finally {
        // Actions à effectuer après l'exécution de la requête (optionnel)
    }

}

const postMethode = async (path, obj = {}, searchTerm = "vide", token = "vide") => {

    if (token !== "vide" && searchTerm === "vide") {

        const parammatreApi = new ParammatreApi(path);
        try {
            console.log(token);
            const response = await axios.post(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`,
                {

                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    if (searchTerm !== "vide") {

        const parammatreApi = new ParammatreApi(path);

        if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
            console.error('Objet invalide ou vide.');
            return "Objet invalide ou vide.";
        }

        try {

            const response = await axios.post(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`, obj, searchTerm);
            return response.data;

        } catch (error) {
            console.error('Erreur lors de la requête POST:', error);
        } finally {
            // Actions à effectuer après l'exécution de la requête (optionnel)
        }

    } else if (searchTerm === "vide") {
        const parammatreApi = new ParammatreApi(path);

        if (typeof obj !== 'object' || Object.keys(obj).length === 0) {
            console.error('Objet invalide ou vide.');
            return "Objet invalide ou vide.";
        }

        try {

            const response = await axios.post(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`, obj);
            return response.data;

        } catch (error) {
            console.error('Erreur lors de la requête POST:', error);
        } finally {
            // Actions à effectuer après l'exécution de la requête (optionnel)
        }
    }
};

const putMethode = async (path, dataUpdated, token = "") => {
    const parammatreApi = new ParammatreApi(path);
    console.log(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`);
    try {
        const response = await axios.put(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`, dataUpdated, token);
        return response;
    } catch (error) {
        console.log(error);
    }
}

const deleteMethode = async (path, obj = {}) => {
    const parammatreApi = new ParammatreApi(path);
    try {
        const response = await axios.delete(`${parammatreApi.getUrl()}${parammatreApi.getPath()}`, obj);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export { getMethode, postMethode, putMethode, deleteMethode };