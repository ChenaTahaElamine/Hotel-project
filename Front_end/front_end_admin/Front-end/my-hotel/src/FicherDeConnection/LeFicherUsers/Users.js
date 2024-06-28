import { getMethode, postMethode } from "../LesMethodesCrud";


const objMethodesUsers = {
    index: async (token, page = 1) => {
        if (token) {
            try {
                const users = await getMethode(`admin/users/index?page=${page}`, {

                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },

                });

                return users.data;
            } catch (error) {
                console.error('Erreur de connexion', error);
                throw error;
            }
        }
    },
    showUser: async (token, page = 1, id) => {

        //localhost:8000/api/admin/users/search/samir
        try {
            const users = await getMethode(`admin/users/show/${id}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                },

            );

            return users.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }

    },
    search: async (token, page = 1, searchParam) => {
        //localhost:8000/api/admin/users/search/samir
        try {
            const users = await getMethode(`admin/users/search/${searchParam}/?page=${page}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Accept": "application/json",
                        'Authorization': `Bearer ${token}`,
                    },
                },

            );

            return users.data;
        } catch (error) {
            console.error('Erreur de connexion', error);
            throw error;
        }
    }
}

export default objMethodesUsers;
