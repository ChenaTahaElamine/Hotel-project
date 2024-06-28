import React from 'react';
import { Link } from 'react-router-dom';

function LinkArticleBlog(props) {
    return (

        <li class="sidebar-item">
            <Link to="/articles_blog" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                <i class="mdi me-2 mdi-gauge"></i>
                <span class="hide-menu">Articles blogs</span>
            </Link>
        </li>
    );
}

export default LinkArticleBlog;