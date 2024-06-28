import React from 'react';
import { useStateUsersAppContext } from '../../../../UseStateUsers';

const Pagination = () => {
    const { objUsersTable } = useStateUsersAppContext();
    const links = objUsersTable.getLinksPaginateClient();
    return (

        <ul className="pagination">
            {
                links?.map((link, index) => {
                    return (
                        <li key={index} className={`page-item ${link.active ? "active" : ""}`}>
                            <a href='#' className="page-link"
                                onClick={() => {
                                    if (link.url) {
                                        return objUsersTable.fetchNextClientTable(link.url);
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

