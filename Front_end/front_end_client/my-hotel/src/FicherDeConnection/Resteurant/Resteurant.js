import axios from "axios";
import ReturnLeNomDeDomin from "../../ReturnLeNomDeDomin";

export default function Resteurant() {

    const index = async (token, page = 1) => {

        try {
            const restaurants = await axios.get(`${ReturnLeNomDeDomin}/api/CotesUser/restaurant/index?page=${page}`, {

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

    }

    return {
        index,
    };

}