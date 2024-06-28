import React from 'react';
import Row from './Row';
import { useAppContext } from '../../../../AppContext';
import { useStateArticleBlogAppContext } from '../../../../UseStateArticleBlog';

const Table = () => {
    const { objArticleBlog } = useStateArticleBlogAppContext();
    
    const articlesBlogs = objArticleBlog.getArticleBlogs();
    return (
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>titre</th>
                    <th>date creation</th>
                    <th>deitail</th>
                    <th>modifer</th>
                    <th>suprimer</th>
                </tr>
            </thead>

            <tbody>
                {
                    articlesBlogs.length >= 1 ? (
                        articlesBlogs?.map((articleBlogParam) => {

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
