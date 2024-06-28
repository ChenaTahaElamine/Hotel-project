import axios from "axios";
import ReturnLeNomDeDominDeApi from "../../ReturnLeNomDeDominDeApi";

const AddImageArticleBlog = {
    
    delete: async (token, fileName) => {
        try {
            // Configurer les headers avec le token d'authentification
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };

            // Faire la requête DELETE vers votre backend Laravel
            const response = await axios.delete(`${ReturnLeNomDeDominDeApi}/api/admin/image-or-vidio/delete/${fileName}`, { headers });
            
            // Si la suppression côté backend est réussie, supprimer également côté frontend
            if (response.status === 200) {
                // Supprimer le fichier dans le stockage (storage/images) en utilisant une autre requête si nécessaire
                // ...

                return { success: true, message: 'Image supprimée avec succès' };
            } else {
                return { success: false, message: 'Échec de la suppression côté serveur' };
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'image', error);
            return { success: false, message: 'Erreur lors de la suppression de l\'image' };
        }
    },

    
}

export default AddImageArticleBlog;
