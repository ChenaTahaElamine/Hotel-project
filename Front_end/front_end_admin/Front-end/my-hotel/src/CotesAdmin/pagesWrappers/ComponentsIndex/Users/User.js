import React, { useEffect, useState } from 'react';
import PageBreadcrumb from '../../PageBreadcrumb';
import Header from "../../../header/Header";
import SideBar from "../../../sideBar/SideBar";
import Row from './RowTableUsers/Row';
import Table from './RowTableUsers/Table';
import Pagination from './RowTableUsers/Pagination';
import Search from './RowTableUsers/Search';
import { useStateUsersAppContext } from '../../../UseStateUsers';
import { useAppContext } from '../../../AppContext';

function User(props) {

    const { objUsersTable } = useStateUsersAppContext();
    const { objAuthUser } = useAppContext();

    const UsersIndex = async () => {


        objUsersTable.setTokenMethode(objAuthUser.getToken());
        
        await objUsersTable.indexClients();
    }


    useEffect(() => {
        if (objUsersTable.getToken()) {
            if (objUsersTable.getTableClientsSerch() !== "") {
                console.log("Users search");
                objUsersTable.fetchClientSearch(objUsersTable.getPageTableClient());
                console.log("Users search");
            } else if (objUsersTable.getTableClientsSerch() === "") {
                console.log("Users index");
                UsersIndex();
            } else {
                console.log("mana3ref");
            }
        } else {

            console.log("makanch token");
        }
    }, [objUsersTable.getPageTableClient()]);

    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"user"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="card">

                            <div className="card-body">
                                <Search />
                                <Table />
                            </div>
                            <div className="card-body">
                                <Pagination />
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

export default User;