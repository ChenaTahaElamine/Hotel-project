import React, { useEffect } from 'react';
import "./ProfileUser.css";
import Header from '../../../../header/Header';
import SideBar from '../../../../sideBar/SideBar';
import PageBreadcrumb from '../../../PageBreadcrumb';
import { useAppContext } from '../../../../AppContext';
import { useStateUsersAppContext } from '../../../../UseStateUsers';

const ProfileUserFile = (props) => {

    const { objUsersTable } = useStateUsersAppContext();
    const client=objUsersTable.getClient();
  

    
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"profile user"} />

                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-xl-6 col-md-12">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">
                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25">
                                                <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" />
                                            </div>
                                            <h6 className="f-w-600">{client.name}</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">{client.role}</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    <h6 className="text-muted f-w-400">{client.email}</h6>
                                                </div>
                                                {/* <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Phone</p>
                                                    <h6 className="text-muted f-w-400">98979989898</h6>
                                                </div> */}
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">created at</p>
                                                    <h6 className="text-muted f-w-400">{client.created_at}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">update at</p>
                                                    <h6 className="text-muted f-w-400">{client.updated_at}</h6>
                                                </div>
                                            </div>
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

export default ProfileUserFile;
