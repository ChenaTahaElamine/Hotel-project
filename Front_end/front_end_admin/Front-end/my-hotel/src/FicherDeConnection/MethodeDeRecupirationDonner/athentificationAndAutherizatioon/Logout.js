import { getMethode } from "../../LesMethodesCrud";


async function Logout(token) {

    try {

        const response = await getMethode("admin/logout", {

            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'Authorization': `Bearer ${token}`,
            },

        });
        console.log(response);
        return response;
    } catch (error) {
        console.error('Erreur de connexion', error);
        throw error;
    }
}

export default Logout;