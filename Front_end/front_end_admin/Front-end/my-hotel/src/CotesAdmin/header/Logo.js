import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
    return (

        <div class="navbar-header" data-logobg="skin6">
            {/* logo component */}
            <Link to="/" className="navbar-brand ms-4">
                <b class="logo-icon">
                    <img src="../assets/images/logo-light-icon.png" alt="homepage" class="dark-logo" />
                </b>
                <span class="logo-text">
                    <img src="../assets/images/logo-light-text.png" alt="homepage" class="dark-logo" />
                </span>
            </Link>
           
        </div>

    );
}

export default Logo;