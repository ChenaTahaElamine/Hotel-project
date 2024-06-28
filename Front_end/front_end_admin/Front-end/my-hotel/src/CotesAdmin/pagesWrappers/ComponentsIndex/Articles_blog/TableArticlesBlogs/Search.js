import React from 'react';
import { useAppContext } from '../../../../AppContext';
import { Link } from 'react-router-dom';
import { useStateArticleBlogAppContext } from '../../../../UseStateArticleBlog';

const Search = () => {
    
    const { objArticleBlog } = useStateArticleBlogAppContext();
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Search ..."
                aria-describedby="button-addon2"
                value={objArticleBlog.getTableArticleblogSerch()}
                onChange={(event) => {

                    objArticleBlog.setTableArticleblogSerchMethod(event.target.value);

                }}

            />

            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => {
                    objArticleBlog.fetchArticleBlogSearch(1);//objArticleBlog.getPageTableArticleBlog()
                }}
            >
                Button
            </button>
            <Link to="/articles_blog/add" className="btn btn-outline-success ml-1">
                +
            </Link>
        </div>
    );
}

export default Search;
