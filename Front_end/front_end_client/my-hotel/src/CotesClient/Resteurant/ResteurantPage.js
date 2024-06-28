import React, { useEffect } from 'react';
import Header from '../ComposantsPrincipaux/Header';
import Footer from '../ComposantsPrincipaux/Footer';
import AuthUser from '../../FicherDeConnection/AuthUser';
import ResteurantIndex from '../../FicherDeConnection/Resteurant/ResteurantIndex';
import CardsResteurant from './CardsResteurant';
import { Bounce, Fade, Zoom } from 'react-reveal';

const ResteurantPage = () => {
    const { getToken } = AuthUser();
    const { getResteurantPaginate, pageTableRestaurants, restaurants, linksPaginateRestaurants, fetchNextRestaurantsTable } = ResteurantIndex();

    const indexResteurant = async () => {
        if (getToken()) {
            await getResteurantPaginate();
        } else { }

    }
    useEffect(() => {
        indexResteurant();
    }, [pageTableRestaurants]);
    return (
        <>
            <Header Lieu="Resteurant" />


            {
                getToken() ? (

                    <div className="properties section">
                        <div className="container">
                            <Fade left>
                                <div className="row">
                                    <div className="col-lg-4 offset-lg-4">
                                        <div className="section-heading text-center">
                                            <h6>| PROPRIÉTÉS</h6>
                                            <h2>Resteurant</h2>
                                        </div>
                                    </div>

                                </div>
                            </Fade>

                            <CardsResteurant restaurants={restaurants} linksParam={linksPaginateRestaurants} fetchNextRestaurantsTable={fetchNextRestaurantsTable} />

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

export default ResteurantPage;
