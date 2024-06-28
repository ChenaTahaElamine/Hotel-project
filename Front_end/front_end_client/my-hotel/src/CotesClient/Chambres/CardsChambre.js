import React from 'react';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import MethodsHandelCardChambre from "./MethodsHandelCardChambre";
import AuthUser from '../../FicherDeConnection/AuthUser';

const CardsChambre = ({ chambres, linksParam, fetchNextChambresTable }) => {

    const { onclickAddCommontair } = MethodsHandelCardChambre();
    const { getUser, getToken } = AuthUser();
    return (
        <>
            <div className="row">
                {
                    chambres == null ? (<></>) : (
                        chambres.length >= 1 ? (
                            chambres?.map((chambresParam) => {

                                return (

                                    <div className="col-lg-4 col-md-6" key={chambresParam.id}>
                                        
                                        <div className="item">
                                            <Link to={`/DeitailsChambre`} onClick={() => {
                                                localStorage.setItem('chambresParam', JSON.stringify(chambresParam));
                                            }}>
                                                <img src="assets/images/property-01.jpg" alt="" />
                                            </Link>

                                            <span className="category">type_chambre</span>
                                            <h6>{chambresParam.type_chambre}</h6> <br /><br />
                                            {/* DeitailsResteurant */}
                                            <h4>
                                                <Link to={`/DeitailsChambre`} onClick={() => {
                                                    localStorage.setItem('chambresParam', JSON.stringify(chambresParam));
                                                }}>
                                                    Click isi pour plus des deitails
                                                </Link>
                                            </h4>

                                            <div className="main-button">
                                                <Link to="#" onClick={() => {
                                                    onclickAddCommontair(chambresParam.id, getUser().id, getToken());
                                                }}>
                                                    Ajouter un commontair
                                                </Link>
                                            </div>
                                        </div>
                                    </div>


                                );
                            })
                        ) : <h2>data not fond</h2>
                    )
                }

            </div>
            <Pagination linksParamm={linksParam} fetchNextchambresTable={fetchNextChambresTable} />



        </>
    );
}
 
export default CardsChambre;
