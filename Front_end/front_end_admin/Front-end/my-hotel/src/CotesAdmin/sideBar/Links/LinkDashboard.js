import React from 'react';
import { Link } from 'react-router-dom';


function LinkDashboard(props) {

    return (
        <li class="sidebar-item">
            <Link to="/" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                <i class="mdi me-2 mdi-gauge"></i>
                <span class="hide-menu">Dashbord</span>
            </Link>
        </li>

    );
}

export default LinkDashboard;


/* <li class="sidebar-item">
            <a class="sidebar-link waves-effect waves-dark sidebar-link"
                href='/' aria-expanded="false">
                <i class="mdi me-2 mdi-gauge"></i><span
                    class="hide-menu">Dashboard</span>
            </a>
        </li> */