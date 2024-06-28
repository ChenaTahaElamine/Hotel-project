import React from 'react';
import { useStateRestaurantAppContext } from '../../../../UseStateRestaurant';

const Pagination = () => {
    const { objRestaurantTable } = useStateRestaurantAppContext();
    const links = objRestaurantTable.getLinksPaginateRestaurants();

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
                                            return objRestaurantTable.fetchNextRestaurantsTable(link.url);
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
