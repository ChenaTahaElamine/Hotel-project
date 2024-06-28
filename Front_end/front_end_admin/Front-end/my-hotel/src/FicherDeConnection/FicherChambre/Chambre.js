import axios from "axios";
import { getMethode, postMethode, putMethode, deleteMethode } from "../LesMethodesCrud";
import ReturnLeNomDeDominDeApi from "../../ReturnLeNomDeDominDeApi";

const objobjNewchambre = {
    store: async (token, objNewchambre) => {

        try {
            const response = await axios.post(`${ReturnLeNomDeDominDeApi}/api/admin/chambre/add`,
                {
                    "type_chambre": objNewchambre.type_chambre,
                    "description": objNewchambre.description,
                    "tarif_nuit": objNewchambre.tarif_nuit,
                    "disponibilite": objNewchambre.disponibilite
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
                const suprition = await deleteMethode(`admin/chambre/delete/${id}`, {

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
            const chambres = await getMethode(`admin/chambre/index?page=${page}`, {

                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });

            return chambres.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }
    },
    search: async (token, page = 1, searchParam) => {

        try {
            const chambres = await getMethode(`admin/chambre/search/${searchParam}/?page=${page}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                },

            );

            return chambres.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }
    },
    update: async (token, objNewchambre) => {

        try {
            const response = await axios.put(`${ReturnLeNomDeDominDeApi}/api/admin/chambre/update/${objNewchambre.id}`,
                {
                    "type_chambre": objNewchambre.type_chambre,
                    "description": objNewchambre.description,
                    "tarif_nuit": objNewchambre.tarif_nuit,
                    "disponibilite": objNewchambre.disponibilite
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

export default objobjNewchambre;
