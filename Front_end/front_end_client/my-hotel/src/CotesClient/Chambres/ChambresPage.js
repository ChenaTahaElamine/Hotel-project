import React, { useEffect } from 'react';
import Header from '../ComposantsPrincipaux/Header';
import Footer from '../ComposantsPrincipaux/Footer';
import AuthUser from '../../FicherDeConnection/AuthUser';
import ChambreIndex from "../../FicherDeConnection/Chambres/ChambreIndex";
import CardsChambre from './CardsChambre';
import { Link } from 'react-router-dom';
import { Bounce, Roll } from 'react-reveal';

const ChambresPage = () => {
    const { getToken } = AuthUser();
    const { getChambrePaginate, pageTableChambres, chambres, linksPaginateChambres, fetchNextChambresTable } = ChambreIndex();

    const indexChambre = async () => {
        if (getToken()) {
            await getChambrePaginate();
        } else { }

    }
    useEffect(() => {
        indexChambre();
        console.log(chambres);
    }, [pageTableChambres]);

    return (
        <>
            <Header Lieu="Chambres" />

            {
                getToken() ? (
                    <div className="properties section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 offset-lg-4">

                                    <Bounce left>
                                        <div className="section-heading text-center">
                                            <h6>| pour afficher touts les  resultat des reservation </h6>


                                            <div class="icon-button">
                                                <Roll left>
                                                    <Link to="#">
                                                        <i class="fa fa-calendar"></i> Click ici
                                                    </Link>
                                                </Roll>
                                            </div>

                                        </div>
                                    </Bounce>

                                    <Bounce left>
                                        <div className="section-heading text-center">
                                            <h6>| PROPRIÉTÉS</h6>
                                            <h2>Chambres</h2>
                                        </div>
                                    </Bounce>


                                </div>
                            </div>
                            <CardsChambre chambres={chambres} linksParam={linksPaginateChambres} fetchNextChambresTable={fetchNextChambresTable} />
                        </div>
                    </div>
                ) : (<>
                    <br />
                    <div class="page-heading header-text">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <span class="breadcrumb">Vous n'êtes pas connecté</span>
                                    <h3>Error 404</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </>)
            }
            <Footer />

        </>
    );
}

export default ChambresPage;
