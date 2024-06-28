import React from 'react';
import AdminAcount from './AdminAcount';
import Search from './Search';

function NavBarSupportContent(props) {
    return (
        <div className="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
            {/* <ul class="navbar-nav d-lg-none d-md-block ">
                        <li class="nav-item">
                            <a class="nav-toggler nav-link waves-effect waves-light text-white "
                                href="#"><i class="ti-menu ti-close"></i></a>
                        </li>
                    </ul> */}


            {/* Search */}
            <Search />


            <AdminAcount />
        </div>
    );
}

export default NavBarSupportContent;