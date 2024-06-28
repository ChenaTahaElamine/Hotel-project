import React, { useEffect } from 'react';
import Header from '../../../header/Header';
import SideBar from '../../../sideBar/SideBar';
import PageBreadcrumb from '../../PageBreadcrumb';


function Profile(props) {
     

    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
           
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"Profile"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-lg-4 col-xlg-3">

                            <div className="card">
                                <img className="card-img-top" src="data:image/jpeg;base64,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"
                                    alt="CardImage cap" />
                                <div className="card-body little-profile text-center">
                                    <div className="pro-img"><img src="https://img.freepik.com/photos-premium/bouton-profil-compte-bleu-fond-bleu_509562-71.jpg?w=740" alt="user" /></div>
                                    <h3 className="mb-0">Chena taha elamine</h3>
                                    <p>Administrateur &amp; principale</p>

                                    <div className="row text-center mt-3">
                                        <div className="col-lg-4 col-md-4 mt-3">
                                            <h3 className="mb-0 font-light"> </h3><small> </small>
                                        </div>
                                        <div className="col-lg-4 col-md-4 mt-3">
                                            <h3 className="mb-0 font-light"> </h3><small> </small>
                                        </div>
                                        <div className="col-lg-4 col-md-4 mt-3">
                                            <h3 className="mb-0 font-light"> </h3><small> </small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-xlg-9 col-md-7">
                            <div className="card">
                                <div className="card-body">
                                    <form className="form-horizontal form-material mx-2">
                                        <div className="form-group">
                                            <label className="col-md-12 mb-0">Full Name</label>
                                            <div className="col-md-12">
                                                <input type="text" placeholder="Johnathan Doe"
                                                    className="form-control ps-0 form-control-line" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="example-email" className="col-md-12">Email</label>
                                            <div className="col-md-12">
                                                <input type="email" placeholder="tahachenaa@gmail.com"
                                                    className="form-control ps-0 form-control-line" name="example-email"
                                                    id="example-email" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-12 mb-0">Password</label>
                                            <div className="col-md-12">
                                                <input type="password" value="password"
                                                    className="form-control ps-0 form-control-line" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-12 mb-0">Phone No</label>
                                            <div className="col-md-12">
                                                <input type="text" placeholder="123 456 7890"
                                                    className="form-control ps-0 form-control-line" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-md-12 mb-0">Message</label>
                                            <div className="col-md-12">
                                                <textarea rows="5" className="form-control ps-0 form-control-line"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-12">Select Country</label>
                                            <div className="col-sm-12 border-bottom">
                                                <select className="form-select shadow-none ps-0 border-0 form-control-line">
                                                    <option>London</option>
                                                    <option>India</option>
                                                    <option>Usa</option>
                                                    <option>Canada</option>
                                                    <option>Thailand</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-sm-12 d-flex">
                                                <button className="btn btn-success mx-auto mx-md-0 text-white">Update
                                                    Profile</button>
                                            </div>
                                        </div>
                                    </form>
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

export default Profile;

/*<div className="container-fluid">
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <!-- Row -->
                <div className="row">
                    <!-- Column -->
                    <div className="col-lg-4 col-xlg-3 col-md-5">
                        <div className="card">
                            <div className="card-body profile-card">
                                <center className="mt-4"> <img src="../assets/images/users/5.jpg"
                                        className="rounded-circle" width="150" />
                                    <h4 className="card-title mt-2">Hanna Gover</h4>
                                    <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                                    <div className="row text-center justify-content-center">
                                        <div className="col-4">
                                            <a href="javascript:void(0)" className="link">
                                                <i className="icon-people" aria-hidden="true"></i>
                                                <span className="value-digit">254</span>
                                            </a></div>
                                        <div className="col-4">
                                            <a href="javascript:void(0)" className="link">
                                                <i className="icon-picture" aria-hidden="true"></i>
                                                <span className="value-digit">54</span>
                                            </a></div>
                                    </div>
                                </center>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div className="col-lg-8 col-xlg-9 col-md-7">
                        <div className="card">
                            <div className="card-body">
                                <form className="form-horizontal form-material mx-2">
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Full Name</label>
                                        <div className="col-md-12">
                                            <input type="text" placeholder="Johnathan Doe"
                                                className="form-control ps-0 form-control-line">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="example-email" className="col-md-12">Email</label>
                                        <div className="col-md-12">
                                            <input type="email" placeholder="johnathan@admin.com"
                                                className="form-control ps-0 form-control-line" name="example-email"
                                                id="example-email">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Password</label>
                                        <div className="col-md-12">
                                            <input type="password" value="password"
                                                className="form-control ps-0 form-control-line">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Phone No</label>
                                        <div className="col-md-12">
                                            <input type="text" placeholder="123 456 7890"
                                                className="form-control ps-0 form-control-line">
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-12 mb-0">Message</label>
                                        <div className="col-md-12">
                                            <textarea rows="5" className="form-control ps-0 form-control-line"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-12">Select Country</label>
                                        <div className="col-sm-12 border-bottom">
                                            <select className="form-select shadow-none ps-0 border-0 form-control-line">
                                                <option>London</option>
                                                <option>India</option>
                                                <option>Usa</option>
                                                <option>Canada</option>
                                                <option>Thailand</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-12 d-flex">
                                            <button className="btn btn-success mx-auto mx-md-0 text-white">Update
                                                Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>
                <!-- Row -->
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Right sidebar -->
                <!-- ============================================================== -->
                <!-- .right-sidebar -->
                <!-- ============================================================== -->
                <!-- End Right sidebar -->
                <!-- ============================================================== -->
            </div> */