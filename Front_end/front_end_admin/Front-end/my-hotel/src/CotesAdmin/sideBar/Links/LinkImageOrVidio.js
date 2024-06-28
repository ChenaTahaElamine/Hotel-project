import React from 'react';
import { Link } from 'react-router-dom';

function LinkImageOrVidio(props) {
    return (
        <li class="sidebar-item">
            <Link to="/images_or_vidios" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                <i class="mdi me-2 mdi-gauge"></i>
                <span class="hide-menu">Image or vidio </span>
            </Link>
        </li>
    );
}

export default LinkImageOrVidio;