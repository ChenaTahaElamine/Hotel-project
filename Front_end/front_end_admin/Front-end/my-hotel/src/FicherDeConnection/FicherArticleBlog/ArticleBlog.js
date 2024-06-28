import axios from "axios";
import { getMethode, postMethode, putMethode, deleteMethode } from "../LesMethodesCrud";
import ReturnLeNomDeDominDeApi from "../../ReturnLeNomDeDominDeApi";

const objArticleBlog = {
    store: async (token, articleData) => {

        try {
            const response = await axios.post(`${ReturnLeNomDeDominDeApi}/api/admin/article-blog/add`,
                {
                    "title": articleData.title,
                    "contenu": articleData.contenu,
                    "date_publication": articleData.date_publication
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
                const suprition = await deleteMethode(`admin/article-blog/delete/${id}`, {

                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                });

                return suprition.success;
            } catch (error) {
                console.error('Erreur de connexion', error);
                throw error;
            }
        }
    },
    index: async (token, page = 1) => {
        try {
            const articleBlogs = await getMethode(`admin/article-blog/index?page=${page}`, {

                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });

            return articleBlogs.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }
    },
    search: async (token, page = 1, searchParam) => {

        try {
            const articlesBlogs = await getMethode(`admin/article-blog/search/${searchParam}/?page=${page}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                },

            );

            return articlesBlogs.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }
    },
    update: async (token, objNewDate) => {
        try {
            const response = await axios.put(`${ReturnLeNomDeDominDeApi}/api/admin/article-blog/update/${objNewDate.id}`,
                {
                    "title": objNewDate.title,
                    "contenu": objNewDate.contenu,
                    "date_publication": objNewDate.date_publication
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

export default objArticleBlog;
