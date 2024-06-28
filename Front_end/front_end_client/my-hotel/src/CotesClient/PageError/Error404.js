import React from 'react';

import { Link } from 'react-router-dom';

function Error404(props) {
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">     
                <div className='container-fluid'>
                    <div className='row'>
                        <div class="error-box">
                            <div class="error-body text-center">
                                <h1 class="error-title">404</h1>
                                <h3 class="text-uppercase error-subtitle">PAGE NOT FOUND !</h3>
                                <p class="text-muted mb-4 mt-4">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
                                <Link to="/" className="btn btn-info btn-rounded waves-effect waves-light mb-4 text-white">
                                     Back to home
                                </Link>
                               
                            </div>
                        </div>

                    </div>
                </div>
            
        </div>

    );
}

export default Error404;