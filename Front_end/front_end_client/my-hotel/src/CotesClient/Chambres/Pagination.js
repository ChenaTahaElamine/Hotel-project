import React from 'react';
import { Link } from 'react-router-dom';



const Pagination = ({ linksParamm, fetchNextchambresTable }) => {
    
    const links = linksParamm;

    return (
        <div class="row">
            <div class="col-lg-12">
                <ul className="pagination">
                    
                    {
                        links?.map((link, index) => {
                            return (
                                <li key={index} className={`${link.active ? "active" : ""}`} >


                                    <Link to="/ChambresPage" className="page-link text-align-center"
                                        onClick={
                                            () => {
                                                if (link.url) {
                                                    return fetchNextchambresTable(link.url);
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
