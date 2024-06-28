import React from 'react';
import ResteurantIndex from '../../FicherDeConnection/Resteurant/ResteurantIndex';
import { Link } from 'react-router-dom';



const Pagination = ({ linksParamm, fetchNextRestaurantsTable }) => {
    // const { fetchNextRestaurantsTable } = ResteurantIndex();


    const links = linksParamm;

    console.log(linksParamm);

    return (
        <div class="row">
            <div class="col-lg-12">
                <ul className="pagination">
                    
                    {
                        links?.map((link, index) => {
                            return (
                                <li key={index} className={`${link.active ? "active" : ""}`} >


                                    <Link to="/ResteurantPage" className="page-link text-align-center"
                                        onClick={
                                            () => {
                                                if (link.url) {
                                                    return fetchNextRestaurantsTable(link.url);
                                                }
                                            }
                                        }
                                    >

                                        {link.label.replace("&laquo;", "").replace("&raquo;", "")}

                                    </Link>

                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>

    );

}

export default Pagination;
