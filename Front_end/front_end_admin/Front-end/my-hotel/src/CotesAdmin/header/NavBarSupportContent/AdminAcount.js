import React from 'react';
import { Link } from 'react-router-dom';

function AdminAcount(props) {
    return (
        <ul class="navbar-nav">

            <li class="nav-item dropdown">

                <Link to="/Profile" className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                >
                    <img src="../assets/images/users/1.jpg" alt="user" class="profile-pic me-2" />Markarn Doe
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown"></ul>
            </li>
        </ul>
    );
}

export default AdminAcount;