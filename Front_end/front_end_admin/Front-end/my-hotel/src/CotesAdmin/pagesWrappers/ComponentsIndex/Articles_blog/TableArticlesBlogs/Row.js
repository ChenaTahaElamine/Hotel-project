import React from 'react';
import { useAppContext } from '../../../../AppContext';
import { Link } from 'react-router-dom';
import { useStateArticleBlogAppContext } from '../../../../UseStateArticleBlog';


const Row = ({ articleBlog }) => {
    
    const { objArticleBlog } = useStateArticleBlogAppContext();


    return (
        <tr key={articleBlog.id}>
            <td>{articleBlog.id}</td>
            <td>{articleBlog.title}</td>
            <td> {articleBlog.created_at}</td>
            <td>

                <Link to="/articles_blog/details" className="btn btn-info btn-icon-split" onClick={
                    () => {
                        objArticleBlog.setArticleBlogMethod(articleBlog);
                    }
                }>

                    <span className="icon text-white-50">
                        <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="text"> </span>

                </Link>
            </td>
            <td>
                <Link to="/articles_blog/update" className="btn btn-warning btn-icon-split"
                    onClick={
                        () => {
                            objArticleBlog.setArticleBlogMethod(articleBlog);
                        }
                    }
                >
                    <span className="icon text-white-50">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                    <span className="text"> </span>
                </Link>
            </td>
            <td>
                <Link to="/articles_blog" className="btn btn-danger btn-icon-split"
                    onClick={() => {
                        objArticleBlog.deleteArticleBlog(articleBlog.id);
                    }}
                >
                    <span className="icon text-white-50">
                        <i className="fas fa-trash"></i>
                    </span>
                    <span className="text"> </span>
                </Link>
            </td>
        </tr>
    );
}

export default Row;
