import React from 'react';
import Row from './Row';
import { useStateArticleBlogAppContext } from '../../../../../../UseStateArticleBlog';

const Table = () => {
    const { objArticleBlog } = useStateArticleBlogAppContext();
    const article_blogs = objArticleBlog.getArticleBlogs();
    return (
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
         
                    <th>id</th>
                    <th>title</th>
                    <th>date_publication</th>
                    <th>n-img disponibles maintenant</th>
                    <th>add</th>
                </tr>
            </thead>

            <tbody>
                {
                    article_blogs.length >= 1 ? (
                        article_blogs?.map((articleBlogParam) => {
                            return (
                                <Row articleBlog={articleBlogParam} />
                            );
                        })
                    ) : <h2>data not fond</h2>
                }
            </tbody>
        </table>
    );
}

export default Table;
