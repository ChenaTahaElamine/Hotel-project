import axios from "axios";
import { getMethode, deleteMethode } from "../LesMethodesCrud";
import ReturnLeNomDeDominDeApi from "../../ReturnLeNomDeDominDeApi";

const objResteurantData = {
    store: async (token, resteurantData) => {

        try {
            const response = await axios.post(`${ReturnLeNomDeDominDeApi}/api/admin/restaurant/add`,
                {
                    "nom": resteurantData.nom,
                    "description": resteurantData.description,
                    "menu": resteurantData.menu
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });


            return response.data;
        } catch (error) {
            console.error('Erreur lors de la création de l\'article', error);
            throw error;
        }

    },
    delete: async (token, id) => {
        if (id && token) {
            try {
                const suprition = await deleteMethode(`admin/restaurant/delete/${id}`, {

                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                });

                return suprition;
            } catch (error) {
                console.error('Erreur de connexion', error);
                throw error;
            }
        }
    },
    index: async (token, page = 1) => {
        try {
            const restaurants = await getMethode(`admin/restaurant/index?page=${page}`, {

                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });

            return restaurants.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }
    },
    search: async (token, page = 1, searchParam) => {

        try {
            const resteurants = await getMethode(`admin/restaurant/search/${searchParam}/?page=${page}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                },

            );

            return resteurants.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }
    },
    update: async (token, objNewResteurant) => {

        try {
            const response = await axios.put(`${ReturnLeNomDeDominDeApi}/api/admin/restaurant/update/${objNewResteurant.id}`,
                {
                    "nom": objNewResteurant.nom,
                    "description": objNewResteurant.description,
                    "menu": objNewResteurant.menu
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });


            return response.data;
        } catch (error) {
            console.error('Erreur lors de la création de l\'article', error);
            throw error;
        }
    },
}

export default objResteurantData;
