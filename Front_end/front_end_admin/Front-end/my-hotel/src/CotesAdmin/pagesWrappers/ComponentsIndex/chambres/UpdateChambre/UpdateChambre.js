import React, { useState } from 'react';
import Header from '../../../../header/Header';
import SideBar from '../../../../sideBar/SideBar';
import PageBreadcrumb from '../../../PageBreadcrumb';
import { useStateChambreAppContext } from '../../../../UseStateChambre';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateChambre = () => {

    const { objChambreTable } = useStateChambreAppContext();
    const chambre = objChambreTable.getChambre();


    const [type_chambreState, setType_chambre] = useState("");
    const [descriptionState, setDescription] = useState("");
    const [tarif_nuitState, setTarif_nuit] = useState(0);
    const [disponibiliteState, setDisponibilite] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    const submitMethod = async (e) => {
        setLoading(true);
        e.preventDefault();

        const chambreData = {
            id: chambre.id,
            type_chambre: type_chambreState,
            description: descriptionState,
            tarif_nuit: tarif_nuitState,
            disponibilite: disponibiliteState,
        }

        try {
            const res = await objChambreTable.UpdateChambre(chambreData);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${chambre.type_chambre} a été enregistré avec succès `,
                showConfirmButton: false,
                timer: 1500
            });
            setLoading(false);
            navigate("/chambres_route");
        } catch (error) {
            setLoading(false);
            console.log(error);
            setErrors(error.response.data.errors);

        }
    }

    const renderErrors = (field) => {
        return errors?.[field]?.map((error, index) => (
            <div key={index} className="alert alert-danger mt-2" role="alert">
                {error}
            </div>
        )
        );
    }

    return (

        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"update chambre"} />
                <div className='container-fluid'>
                    <div className='row'>

                        <div className="col-lg-5 d-none d-lg-block bg-register-image mt-4">
                            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://th.bing.com/th/id/OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="p-5">

                                <form
                                    className="mb-5"
                                    id="contactForm"
                                    name="contactForm"
                                    onSubmit={(e) => {
                                        submitMethod(e);
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">

                                            <label for="" className="col-form-label">type chambre</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="type_chambre" id="type_chambre"
                                                placeholder={chambre.type_chambre}
                                                value={type_chambreState}
                                                onChange={(e) => {
                                                    setType_chambre(e.target.value);
                                                }}
                                            />
                                            {renderErrors("type_chambre")}
                                        </div>
                                        <div className="col-md-6 form-group mb-3">

                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-md-6 form-group mb-3">

                                            <div>
                                                <label className="col-form-label" htmlFor="disponibilite">Disponibilité :</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder={chambre.disponibilite}
                                                    id="disponibilite"
                                                    checked={disponibiliteState}
                                                    onChange={(e) => { setDisponibilite(e.target.value); }}
                                                />
                                                {renderErrors("disponibilite")}

                                            </div>

                                        </div>
                                        <div className="col-md-6 form-group mb-3">

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 form-group mb-3">
                                            <div>
                                                <label className="col-form-label" htmlFor="tarif_nuit">tarif nuit :</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder={chambre.tarif_nuit}
                                                    id="tarif_nuit"
                                                    value={tarif_nuitState}
                                                    onChange={(e) => { setTarif_nuit(e.target.value); }}
                                                    step="0.01" // Pour permettre seulement deux chiffres après la virgule
                                                />
                                                {renderErrors("tarif_nuit")}
                                            </div>

                                        </div>
                                        <div className="col-md-6 form-group mb-3">

                                        </div>
                                    </div>

                                    <div className="row mb-5">
                                        <div className="col-md-12 form-group mb-3">

                                            <label for="message" className="col-form-label">description </label>
                                            <textarea
                                                className="form-control"
                                                name="contenu"
                                                id="contenu"
                                                cols="30"
                                                rows="4"
                                                placeholder={chambre.description}
                                                value={descriptionState}
                                                onChange={(e) => {
                                                    setDescription(e.target.value);
                                                }}
                                            >
                                                {chambre.description}
                                            </textarea>
                                            {renderErrors("description")}
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">

                                        {
                                            loading ?
                                                <div className="col-md-5 form-group text-center">
                                                    <div className="spinner-border text-success" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                </div>
                                                :
                                                <div className="col-md-5 form-group text-center">
                                                    <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4" />
                                                    <span className="submitting"></span>
                                                </div>
                                        }


                                        <div className="col-md-5 form-group text-center">

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <footer className="footer"> © 2021 Material Pro Admin by <a href="https://www.wrappixel.com/">wrappixel.com </a>
                </footer>
            </div>

        </div>
    );
}

export default UpdateChambre;
