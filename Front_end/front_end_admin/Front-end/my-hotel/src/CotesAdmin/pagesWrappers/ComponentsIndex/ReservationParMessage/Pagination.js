import React from 'react';
import { useStateChambreAppContext } from '../../../UseStateReservation';

const Pagination = () => {

    const { settersAndGetters, methodsData } = useStateChambreAppContext();
    const links = settersAndGetters.getLinksPaginateReservations();
    return (

        <ul className="pagination">
            {
                links?.map((link, index) => {
                    return (
                        <li key={index} className={`page-item ${link.active ? "active" : ""}`}>
                            <a href='#' className="page-link"
                                onClick={() => {
                                    if (link.url) {
                                        return methodsData.fetchNextReservationTable(link.url);
                                    }
                                }}
                            >
                                {link.label.replace("&laquo;", "").replace("&raquo;", "")}
                            </a>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Pagination;

