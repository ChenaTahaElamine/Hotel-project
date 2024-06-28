import React from 'react';
import { useStateArticleBlogAppContext } from '../../../../../../UseStateArticleBlog';

const Pagination = () => {

    const { objArticleBlog } = useStateArticleBlogAppContext();
    const links = objArticleBlog.getLinksPaginateArticleblog();


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
                                            return objArticleBlog.fetchNextArticleBlogsTable(link.url);
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
