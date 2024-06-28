import React from 'react';
import { Link } from 'react-router-dom';

const LinkReservation = () => {
    return (
        <li class="sidebar-item">
            <Link to="/reservation_route" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                <i class="mdi me-2 mdi-gauge"></i>
                <span class="hide-menu">Reservation</span>
            </Link>
        </li>
    );
}

export default LinkReservation;
