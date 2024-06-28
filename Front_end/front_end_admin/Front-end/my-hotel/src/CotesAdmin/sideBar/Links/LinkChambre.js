import React from 'react';
import { Link } from 'react-router-dom';

function LinkChambre(props) {
    return (
        <li class="sidebar-item">
            <Link to="/chambres_route" className="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                <i class="mdi me-2 mdi-gauge"></i>
                <span class="hide-menu">Chambre</span>
            </Link>
        </li> 
    );
}

export default LinkChambre;