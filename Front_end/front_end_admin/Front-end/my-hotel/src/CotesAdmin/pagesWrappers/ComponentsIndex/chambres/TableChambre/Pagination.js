import React from 'react';
import { useStateChambreAppContext } from '../../../../UseStateChambre';

const Pagination = () => {

    const { objChambreTable } = useStateChambreAppContext();
    const links = objChambreTable.getLinksPaginateChambres();


    return (

        <ul className="pagination">

            {
                links?.map((link, index) => {
                    return (
                        <li key={index} className={`page-item ${link.active ? "active" : ""}`}>
                            <a href='#' className="page-link"
                                onClick={
                                    () => {
                                        if (link.url) {
                                            return objChambreTable.fetchNextChambresTable(link.url);
                                        }
                                    }
                                }
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
/**/
export default Pagination;
