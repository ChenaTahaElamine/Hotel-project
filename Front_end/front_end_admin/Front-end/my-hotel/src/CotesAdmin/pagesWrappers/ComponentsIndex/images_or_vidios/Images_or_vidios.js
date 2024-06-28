
import React, { useEffect } from 'react';
import PageBreadcrumb from '../../PageBreadcrumb';
import Header from "../../../header/Header";
import SideBar from "../../../sideBar/SideBar";
import { Link } from 'react-router-dom';
import { useStateChambreAppContext } from '../../../UseStateChambre';

function Images_or_vidios(props) {
    
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"images or vidio"} />
                <div className='container-fluid'>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Médias</h1>
                    </div>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h3 className="mb-0">
                            Cliquez sur l'une des options suivantes pour ajouter une image à la publication
                        </h3>

                    </div>
                    <div className='row'>

                        <div className="col-lg-4 col-xlg-3 mt-3">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2 ml-5">
                                            <Link to='/images_or_vidios/ChambreMedia'>
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    chambres
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-auto">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-xlg-3 mt-3">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2 ml-5">
                                            <Link to='/images_or_vidios/ArticleBlogMedia'>
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    articles blog
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-auto">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-xlg-3 mt-3">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2 ml-5">
                                            <Link to='/images_or_vidios/ResteurantMedia'>
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    resteurants
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-auto">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer"> © 2021 Material Pro Admin by <a href="https://www.wrappixel.com/">wrappixel.com </a>
                </footer>
            </div>
        </div >


    );
}

export default Images_or_vidios;