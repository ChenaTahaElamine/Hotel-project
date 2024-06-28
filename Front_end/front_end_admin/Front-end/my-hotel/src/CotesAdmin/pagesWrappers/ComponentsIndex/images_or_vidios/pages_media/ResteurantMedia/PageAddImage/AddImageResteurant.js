import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../../../../../../header/Header';
import SideBar from '../../../../../../sideBar/SideBar';
import PageBreadcrumb from '../../../../../PageBreadcrumb';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateRestaurantAppContext } from '../../../../../../UseStateRestaurant';
import ReturnLeNomDeDominDeApi from '../../../../../../../ReturnLeNomDeDominDeApi';

const AddImageResteurant = () => {
    const { objRestaurantTable } = useStateRestaurantAppContext();
    const resteurant = objRestaurantTable.getResteurantImage();
    const [imagePath, setImagePath] = useState('');
    const { register, handleSubmit } = useForm();
    const [imageUrls, setImageUrls] = useState([]);
    const [imageUrlsIndex, setImageUrlsIndex] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFetchImages = async () => {
        if (resteurant.media.length > 0) {
            const imageUrlsToFetch = [];

            for (let index = 0; index < resteurant.media.length; index++) { imageUrlsToFetch.push(resteurant.media[index].chemin_fichier); }

            const newImageUrls = [];

            setImageUrlsIndex(imageUrlsToFetch);

            for (const imageUrl of imageUrlsToFetch) {
                try {
                    const response = await axios.get(`${ReturnLeNomDeDominDeApi}/api/admin/image-or-vidio/showFileName/${imageUrl}`, {
                        responseType: 'blob',
                        headers: {
                            'Authorization': `Bearer ${objRestaurantTable.getToken()}`,
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

    const onSubmit = async (data) => {
        if (data.image[0]) {

            setLoading(true);
            const formData = new FormData();
            formData.append('image', data.image[0]);

            try {
                const response = await axios.post(`${ReturnLeNomDeDominDeApi}/api/admin/image-or-vidio/store-img-restaurant/${resteurant.id}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${objRestaurantTable.getToken()}`,
                    },
                });

                navigate("/images_or_vidios/ResteurantMedia");
                setImagePath(response.data.image_path);
                setLoading(false);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `L'image a été ajoutée avec succès`,
                    showConfirmButton: false,
                    timer: 1500
                })
            } catch (error) {
                console.error('Upload error', error.response.data);
                setLoading(false);
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Vous n'avez pas sélectionné l'image de la chambre que vous souhaitez ajouter`,
                // footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    };
    const onDelete = async (fileName) => {

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success');
                await objRestaurantTable.deleteImage(fileName);
                navigate("/images_or_vidios/ResteurantMedia");
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })

    }

    useEffect(() => {
        handleFetchImages();
    }, []);

    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"Les images des resteurant"} buttonReteur={"/images_or_vidios/ResteurantMedia"} />
                <div className='container-fluid'>

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Le nom de resteurant</h3>
                            <h6 className="card-subtitle">

                                {resteurant.nom}
                            </h6>
                            <div className="row">

                                <div className="col-lg-7 col-md-7 col-sm-6">
                                    <h4 className="box-title mt-5">Description</h4>
                                    <p>
                                        {resteurant.description}
                                    </p>
                                    <h2 className="mt-5">
                                        {/* $153<small className="text-success">(36%off)</small> */}
                                    </h2>

                                </div>

                                <div className="col-lg-7 col-md-7 col-sm-6">
                                    <h4 className="box-title mt-5">menu</h4>
                                    <p>
                                        {resteurant.menu}
                                    </p>
                                    <h2 className="mt-5">
                                        {/* $153<small className="text-success">(36%off)</small> */}
                                    </h2>

                                </div>



                                {resteurant.media.length >= 1 ? (

                                    <div className='row'>
                                        {imageUrls.map((url, index) => (
                                            <div className="col-lg-4 col-xlg-3" key={index}>
                                                <div className="card">
                                                    <img src={url} alt={`Image ${index}`} />


                                                    <div className="card-body">
                                                        <button type="button" className="btn btn-danger mt-3" onClick={
                                                            async () => {
                                                                await onDelete(imageUrlsIndex[index]);
                                                            }
                                                        }>Supprimer</button>
                                                        <button type="button" className="btn btn-warning mt-3 ml-5">Modifier</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                ) : (
                                    <div className='row'>
                                        <div className="col-lg-4 col-xlg-3">
                                            <div className="card">
                                                {
                                                    imageUrlsIndex.length === 0 ? (

                                                        <h3 className="box-title mt-5">
                                                            Il n'y a pas de image
                                                        </h3>

                                                    ) : (
                                                        <>
                                                            <img key={0} src={imageUrls[0]} alt={`Image ${0}`} />

                                                            <div className="card-body">
                                                                <button type="button" class="btn btn-danger mt-3" onClick={
                                                                    async () => {
                                                                        await onDelete(imageUrlsIndex[0]);
                                                                    }
                                                                }>Suprimer</button>
                                                                <button type="button" class="btn btn-warning mt-3 ml-5">modifer</button>
                                                            </div>

                                                        </>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    // <div className='row'>


                                    //     <div className="col-lg-4 col-xlg-3">
                                    //         <div className="card">
                                    //             <img key={0} src={imageUrls[0]} alt={`Image ${0}`} />
                                    //             <button type="button" class="btn btn-danger mt-3" onClick={
                                    //                 async () => {

                                    //                         await onDelete(imageUrlsIndex[0]);


                                    //                 }
                                    //             }>Suprimer</button>
                                    //             <button type="button" class="btn btn-warning">modifer</button>
                                    //         </div>
                                    //     </div>

                                    // </div>
                                )}
                                {resteurant.commentateurs.length === 0 ? (
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3 className="box-title mt-5">
                                            Il n'y a pas de commentaires
                                        </h3>
                                    </div>
                                ) : (
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3 className="box-title mt-5">Les Commontairs</h3>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-product">
                                                <tbody>
                                                    <tr>
                                                        <td width="390">Brand</td>
                                                        <td>Stellar</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Finish Type</td>
                                                        <td>Matte</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='card-img-top h5'>
                            <div className='container'>
                                <p className='mt-3'>
                                    sélectionner votre chambre que vous avez prendre un photos :
                                </p>
                            </div>
                        </div>
                        <div className="card-body little-profile text-center">
                            <div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        {...register('image')}
                                    />
                                    {
                                        loading ?
                                            <div className="">
                                                <div className="spinner-border text-success" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>
                                            </div>
                                            :
                                            <button type="submit" class="btn btn-success" >Ajouter</button>
                                    }
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
                <footer className="footer"> © 2021 Material Pro Admin by <a href="https://www.wrappixel.com/">wrappixel.com </a>
                </footer>
            </div>
        </div >
    );
}

export default AddImageResteurant;
