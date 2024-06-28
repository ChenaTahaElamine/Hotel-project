import React from 'react';
import Logo from './Logo';
import NavBarSupportContent from './NavBarSupportContent/NavBarSupportContent';


function Header(props) {
    return (
        <header class="topbar" data-navbarbg="skin6">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                
                <Logo />

                <NavBarSupportContent />
            </nav>
        </header>
    );
}

export default Header;