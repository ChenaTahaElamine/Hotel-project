import axios from "axios";
import ReturnLeNomDeDomin from "../../ReturnLeNomDeDomin";

export default function Chambre() {

    const index = async (token, page = 1) => {

        try {
            const chambres = await axios.get(`${ReturnLeNomDeDomin}/api/CotesUser/chambre/index?page=${page}`, {

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

    }

    return {
        index,
    };

}