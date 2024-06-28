import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReturnLeNomDeDomin from "../../ReturnLeNomDeDomin";


export default function MethodsHandelCardChambre() {
    const navigate = useNavigate();

    const onclickAddCommontair = async (id_chambreParam, id_userParam, token) => {

        Swal.fire({
            title: "Entrez votre commentaire sur ce chambre",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Commentaire",
            showLoaderOnConfirm: true,
            preConfirm: async (commontair) => {
                try {

                    const response = await axios.post(`${ReturnLeNomDeDomin}/api/CotesUser/commentateur/store-chambre`,
                        {
                            'contenu': commontair,
                            'note': 5,
                            'id_chambre': id_chambreParam,
                            'id_user': id_userParam,
                        },
                        {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                            },
                        });

                } catch (error) {
                    Swal.showValidationMessage(`
                      Request failed: ${error}
                    `);
                }

            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Votre commentaire a été ajouté avec succès",
                    imageUrl: result.value.avatar_url
                });
                navigate("/");
            }
        });
    }

    return {
        onclickAddCommontair
    };

}