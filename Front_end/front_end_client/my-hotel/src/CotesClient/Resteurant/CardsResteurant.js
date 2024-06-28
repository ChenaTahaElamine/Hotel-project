import React from 'react';
import Pagination from './Pagination';
import MethodsHandelCardResteurant from './MethodsHandelCardResteurant';
import { Link } from 'react-router-dom';
import AuthUser from '../../FicherDeConnection/AuthUser';
import { Bounce } from 'react-reveal';


const CardsResteurant = ({ restaurants, linksParam, fetchNextRestaurantsTable }) => {

    const { onclickAddCommontair } = MethodsHandelCardResteurant();
    const { getUser, getToken } = AuthUser();

    const codeURIObjet = (obj) => {
        return encodeURIComponent(JSON.stringify(obj));
    }
    return (
        <>
            <div className="row">
                {
                    restaurants == null ? (<></>) : (
                        restaurants.length >= 1 ? (
                            restaurants?.map((restaurantsParam) => {

                                return (

                                    <Bounce left>
                                        <div className="col-lg-4 col-md-6" key={restaurantsParam.id}>
                                            <div className="item">
                                                <Link to={`/DeitailsResteurant`} onClick={() => {
                                                    localStorage.setItem('restaurantsParam', JSON.stringify(restaurantsParam));
                                                }}>
                                                    <img src="assets/images/property-01.jpg" alt="" />
                                                </Link>

                                                <span className="category">n-resteurant</span>
                                                <h6>{restaurantsParam.nom}</h6> <br /><br />
                                                {/* DeitailsResteurant */}
                                                <h4>
                                                    <Link to={`/DeitailsResteurant`} onClick={() => {
                                                        localStorage.setItem('restaurantsParam', JSON.stringify(restaurantsParam));
                                                    }}>
                                                        Click isi pour plus des deitails
                                                    </Link>
                                                </h4>

                                                <div className="main-button">
                                                    <Link to="/ResteurantPage" onClick={() => {
                                                        onclickAddCommontair(restaurantsParam.id, getUser().id, getToken());
                                                    }}>
                                                        Ajouter un commontair
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Bounce>
                                );
                            })
                        ) : <h2>data not fond</h2>
                    )
                }

            </div>
            <Pagination linksParamm={linksParam} fetchNextRestaurantsTable={fetchNextRestaurantsTable} />



        </>

    );
}

export default CardsResteurant;
