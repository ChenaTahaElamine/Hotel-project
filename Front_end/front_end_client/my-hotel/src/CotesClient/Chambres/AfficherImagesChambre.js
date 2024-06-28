import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthUser from '../../FicherDeConnection/AuthUser';
import axios from 'axios';
import ReturnLeNomDeDomin from '../../ReturnLeNomDeDomin';


const AfficherImagesChambre = () => {


    const chambre = JSON.parse(localStorage.getItem('chambresParam'));

    const { getToken } = AuthUser();
    const [imagePath, setImagePath] = useState('');
    const [imageUrls, setImageUrls] = useState([]);
    const [imageUrlsIndex, setImageUrlsIndex] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const handleFetchImages = async () => {

        if (chambre.media.length > 0) {
            const imageUrlsToFetch = [];

            for (let index = 0; index < chambre.media.length; index++) { imageUrlsToFetch.push(chambre.media[index].chemin_fichier); }

            const newImageUrls = [];

            setImageUrlsIndex(imageUrlsToFetch);

            for (const imageUrl of imageUrlsToFetch) {
                try {
                    const response = await axios.get(`${ReturnLeNomDeDomin}/api/CotesUser/image-or-vidio/showFileName/${imageUrl}`, {
                        responseType: 'blob',
                        headers: {
                            'Authorization': `Bearer ${getToken()}`,
                        },
                    });

                    const url = URL.createObjectURL(response.data);
                    newImageUrls.push(url);
                } catch (error) {
                    console.error(`Erreur lors de la récupération de l'image ${imageUrl}`, error);
                }
            }

            setImageUrls(newImageUrls);
        }
    };

    useEffect(() => {
        handleFetchImages();
    }, []);

    return (
        <div className="col-lg-6">
            

            {

                chambre.media.length === 0 ? (<img src="assets/images/property-01.jpg" alt="" />) : (
                    <>
                        {
                            chambre.media.length === 1 ? (
                                <img key={0} src={imageUrls[0]} alt={`Image ${0}`} />
                            ) : (

                                <>
                                    {
                                        chambre.media.length > 1 ? (
                                            <>

                                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                    <div className="carousel-inner">

                                                        {imageUrls.map((url, index) => {
                                                            if (index == 0) {
                                                                return (
                                                                    <div className="carousel-item active">
                                                                        <img src={url} alt={`Image ${index}`} className="d-block w-100" />
                                                                    </div>
                                                                );
                                                            } else {
                                                                return (
                                                                    <div className="carousel-item">
                                                                        <img src={url} alt={`Image ${index}`} className="d-block w-100" />
                                                                    </div>
                                                                );
                                                            }
                                                        })}


                                                    </div>
                                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </>
                                        ) : (<></>)
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    );
}
/*


*/

export default AfficherImagesChambre;
