import axios from "axios";
import ReturnLeNomDeDominDeApi from "../../ReturnLeNomDeDominDeApi";


export default function ReservationChambre() {
    const http = axios.create({
        baseURL: `${ReturnLeNomDeDominDeApi}/api`,
        headers: {
            "Content-type": "application/json"
        }
    });

    const index = async (token, page = 1) => {
        if (token) {
            try {
                const users = await http.get(`admin/message/index?page=${page}`, {

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
    }



    return {
        http, index
    };

}