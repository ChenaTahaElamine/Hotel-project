import React, { useEffect, useState } from 'react';
import Header from '../ComposantsPrincipaux/Header';
import Footer from '../ComposantsPrincipaux/Footer';
import MethodsHandelCardResteurant from './MethodsHandelCardResteurant';
import AuthUser from '../../FicherDeConnection/AuthUser';


const DeitailsResteurant = () => {
    const [restaurant, setRestaurant] = useState(null);
    const { onclickAddCommontair } = MethodsHandelCardResteurant();
    const { getUser, getToken } = AuthUser();

    useEffect(() => {
        const storedData = localStorage.getItem('restaurantsParam');
        if (storedData) {
            setRestaurant(JSON.parse(storedData));
        }
    }, []);

    return (
        <>
            <Header Lieu="Resteurant" />
            <br />
            <br />

            {
                restaurant === null ? (<>data not fond</>) : (
                    <>
                        <div className="page-heading header-text">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span className="breadcrumb"><a href="#">Resteurant</a>  /  Deitails</span>
                                        <h3>Deitails Resteurant</h3>
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
                                            <h2>Les détails sur le restaurant</h2>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tabs-content">
                                            <div className="row">
                                                <div className="nav-wrapper ">
                                                    <ul className="nav nav-tabs" role="tablist">
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
                                                    <div className="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="info-table">
                                                                    <h4>Le menu</h4>
                                                                    <p>
                                                                        {restaurant.menu}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">

                                                                {
                                                                    restaurant.media.length === 0 ? (<img src="assets/images/property-01.jpg" alt="" />) : (
                                                                        <>
                                                                            {
                                                                                restaurant.media.length === 1 ? (<img src="assets/images/single-property.jpg" alt="" />) : (

                                                                                    <>
                                                                                        {
                                                                                            restaurant.media.length > 1 ? (<>
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
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <h4>La description</h4>
                                                                <p>{restaurant.description}</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                                                        <div className="row">
                                                            <div className="col-lg-3"></div>
                                                            <div className="col-lg-6">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary"
                                                                    onClick={() => {
                                                                        onclickAddCommontair(restaurant.id, getUser().id, getToken());
                                                                    }}
                                                                >
                                                                    Click pour commentaire
                                                                </button>
                                                            </div>
                                                            <div className="col-lg-3"></div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                                                        <div className="row">
                                                            <div className="col-lg-2"></div>
                                                            <div className="col-lg-8">
                                                                {
                                                                    restaurant.commentateurs.length === 0 ? (
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
                                                                                    restaurant?.commentateurs.map((commentateur) => {
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

export default DeitailsResteurant;
