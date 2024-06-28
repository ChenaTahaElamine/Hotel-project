import React from 'react';
import PageBreadcrumb from '../../../PageBreadcrumb';
import Header from "../../../../header/Header";
import SideBar from "../../../../sideBar/SideBar";
import { useAppContext } from '../../../../AppContext';
import { useStateArticleBlogAppContext } from '../../../../UseStateArticleBlog';

const DetailsArticleBlogRfc = () => {
    
    const { objArticleBlog } = useStateArticleBlogAppContext();

    const articlaBlog = objArticleBlog.getArticleBlog();
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"Details article blog"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Le titre</h3>
                                <h6 className="card-subtitle">{articlaBlog.title}</h6>
                                <div className="row">
                                    {/* <div className="col-lg-5 col-md-5 col-sm-6">
                                        
                                    </div> */}
                                    <div className="col-lg-7 col-md-7 col-sm-6">
                                        <h4 className="box-title mt-5">Les details</h4>
                                        <p>{articlaBlog.contenu}</p>
                                        <h2 className="mt-5">
                                            {/* $153<small className="text-success">(36%off)</small> */}
                                        </h2>

                                    </div>
                                    


                                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://th.bing.com/th/id/OIP.bPBCgvp9N0SUbVYJnBg2IQHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://th.bing.com/th/id/OIP.1YM53mG10H_U25iPjop83QHaEo?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3 className="box-title mt-5">Les Commontairs</h3>
                                        <div className="table-responsive">
                                            <table className="table table-striped table-product">
                                                <tbody>
                                                    <tr>
                                                        <td width="390">Brand</td>
                                                        <td>Stellar</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Finish Type</td>
                                                        <td>Matte</td>
                                                    </tr>
                                                </tbody>
                                            </table>
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
        </div>






    );
}

export default DetailsArticleBlogRfc;
