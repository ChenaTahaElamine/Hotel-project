import React from 'react';
import { Link } from 'react-router-dom';

function LinkResteurant(props) {
    return (
        <li class="sidebar-item">
            <Link to="/resteurant" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                <i class="mdi me-2 mdi-gauge"></i>
                <span class="hide-menu">Restraunt</span>
            </Link>
        </li>
    );
}

export default LinkResteurant;