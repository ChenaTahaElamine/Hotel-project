import React from 'react';
import { Link } from 'react-router-dom';
import { useStateArticleBlogAppContext } from '../../../../../../UseStateArticleBlog';


const Row = ({ articleBlog }) => {
    const { objArticleBlog } = useStateArticleBlogAppContext();
    /*
    id
    title
    date_publication
    n_image
    */

    return (
        <tr key={articleBlog.id}>

            <td>{articleBlog.id}</td>
            <td>{articleBlog.title}</td>
            <td>{articleBlog.date_publication}</td>
            <td>
                {articleBlog.media.length}
            </td>
            <td>
                <Link to="/images_or_vidios/ArticleBlogMedia/add" className="btn btn-primary" onClick={
                    () => {
                        objArticleBlog.setArticleBlogImageMethod(articleBlog);
                    }
                }>
                    +
                </Link>
            </td>

        </tr>
    );
}

export default Row;
