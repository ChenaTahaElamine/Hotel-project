import React, { useEffect, useState } from 'react';
import Header from '../ComposantsPrincipaux/Header';
import Footer from '../ComposantsPrincipaux/Footer';
import MethodsHandelCardChambre from './MethodsHandelCardChambre';
import AuthUser from '../../FicherDeConnection/AuthUser';
import AfficherImagesChambre from './AfficherImagesChambre';


const DeitailsChambre = () => {
    const [chambre, setChambre] = useState(null);
    const { onclickAddCommontair } = MethodsHandelCardChambre();
    const { getUser, getToken } = AuthUser();

    useEffect(() => {
        const storedData = localStorage.getItem('chambresParam');
        if (storedData) {
            setChambre(JSON.parse(storedData));
        }
    }, []);

    return (
        <>
            <Header Lieu="Chambres" />
            <br />
            <br />

            {
                chambre === null ? (<>data not fond</>) : (
                    <>
                        <div className="page-heading header-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span className="breadcrumb"><a href="#">Chambre</a>  /  Deitails</span>
                                        <h3>Deitails Chambre</h3>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="section best-deal">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="section-heading">
                                            <h6>| Tous</h6>
                                            <h2>Les détails sur la chambre </h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tabs-content">
                                            <div className="row">
                                                <div className="nav-wrapper ">
                                                    <ul className="nav nav-tabs" role="tablist">
                                                        {/* les button */}
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">Deitails</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="villa-tab" data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false">Ajouter un commontair</button>
                                                        </li>
                                                        <li className="nav-item" role="presentation">
                                                            <button className="nav-link" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false">Afficher les commontair</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tab-content" id="myTabContent">
                                                    {/* tab de Deitails */}

                                                    <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="info-table">
                                                                    {/* type_chambre , description ,tarif_nuit ,disponibilite */}
                                                                    <h4>Le type de chambre</h4>
                                                                    <p>
                                                                        <span>{chambre.type_chambre}</span>
                                                                    </p><br />
                                                                    <h4>La disponibilite</h4>
                                                                    <p>
                                                                        <span>{chambre.disponibilite}</span>
                                                                    </p><br />
                                                                    <h4>Tarif nuit</h4>
                                                                    <p>
                                                                        <span>{chambre.tarif_nuit} Da</span>
                                                                    </p><br />
                                                                </div>
                                                            </div>
                                                            <AfficherImagesChambre />
                                                            {/* <div className="col-lg-6">

                                                                {
                                                                    chambre.media.length === 0 ? (<img src="assets/images/property-01.jpg" alt="" />) : (
                                                                        <>
                                                                            {
                                                                                chambre.media.length === 1 ? (<img src="assets/images/single-property.jpg" alt="" />) : (

                                                                                    <>
                                                                                        {
                                                                                            chambre.media.length > 1 ? (<>
                                                                                                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                                                                                    <div className="carousel-inner">
                                                                                                        <div className="carousel-item active">
                                                                                                            <img src="assets/images/property-01.jpg" className="d-block w-100" alt="..." />
                                                                                                        </div>
                                                                                                        <div className="carousel-item">
                                                                                                            <img src="assets/images/property-02.jpg" className="d-block w-100" alt="..." />
                                                                                                        </div>
                                                                                                        <div className="carousel-item">
                                                                                                            <img src="assets/images/property-03.jpg" className="d-block w-100" alt="..." />
                                                                                                        </div>
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
                                                                                            </>) : (<></>)
                                                                                        }
                                                                                    </>
                                                                                )
                                                                            }
                                                                        </>
                                                                    )
                                                                }
                                                            </div> */}
                                                            <div className="col-lg-3">
                                                                <h4>La description</h4>
                                                                <p>{chambre.description}</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* tab de 'Ajouter un commontair' */}
                                                    <div className="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                                                        <div className="row">
                                                            <div className="col-lg-3"></div>
                                                            <div className="col-lg-6">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary"
                                                                    onClick={() => {
                                                                        onclickAddCommontair(chambre.id, getUser().id, getToken());
                                                                    }}
                                                                >
                                                                    Click pour commentaire
                                                                </button>
                                                            </div>
                                                            <div className="col-lg-3"></div>
                                                        </div>
                                                    </div>
                                                    {/* tab de 'Afficher les commontair' */}
                                                    <div className="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                                                        <div className="row">
                                                            <div className="col-lg-2"></div>
                                                            <div className="col-lg-8">
                                                                {
                                                                    chambre.commentateurs.length === 0 ? (
                                                                        <h4>
                                                                            Il n'y a pas de commentaires sur ce post
                                                                        </h4>
                                                                    ) : (
                                                                        <table className="table table-hover">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th scope="col">id</th>
                                                                                    <th scope="col">contenu</th>
                                                                                    <th scope="col">date_cree</th>

                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                    chambre?.commentateurs.map((commentateur) => {
                                                                                        return (
                                                                                            <tr key={commentateur.id}>
                                                                                                <th scope="row">{commentateur.id}</th>
                                                                                                <td>{commentateur.contenu}</td>
                                                                                                <td>{commentateur.date_cree}</td>
                                                                                            </tr>
                                                                                        );
                                                                                    })
                                                                                }


                                                                            </tbody>
                                                                        </table>
                                                                    )
                                                                }

                                                            </div>
                                                            <div className="col-lg-2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }



            <Footer />
        </>
    );
}

export default DeitailsChambre;
