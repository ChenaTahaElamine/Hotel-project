import React from 'react';
import { Link } from 'react-router-dom';

function PageBreadcrumb({ location, buttonReteur }) {

    const afficherButtonReteur = (buttonReteurParam) => {
        if (buttonReteurParam) {
            return (
                <div>
                    <li className="breadcrumb-item">
                        <Link className="btn btn-light" to={buttonReteur}>
                            {"<"}-------
                        </Link>
                    </li>
                </div>
            );
        } else {

        }
    }

    return (
        <div className="page-breadcrumb">
            <div className="row align-items-center">
                <div className="col-md-6 col-8 align-self-center">
                    <h3 className="page-title mb-0 p-0">Dashboard</h3>
                    <div className="d-flex align-items-center">

                        {afficherButtonReteur(buttonReteur)}

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{location}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageBreadcrumb;