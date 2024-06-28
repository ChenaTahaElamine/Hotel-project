import React, { useEffect } from 'react';
import PageBreadcrumb from '../../PageBreadcrumb';
import Header from "../../../header/Header";
import SideBar from "../../../sideBar/SideBar";
import Search from "./TableChambre/Search";
import Table from './TableChambre/Table';
import Pagination from "./TableChambre/Pagination";
import { useStateChambreAppContext } from '../../../UseStateChambre';
import { useAppContext } from '../../../AppContext';




function Chambres(props) {

    const { objChambreTable } = useStateChambreAppContext();
    const { objAuthUser } = useAppContext();

    const chambresIndex = async () => {
        objChambreTable.setTokenMethod(objAuthUser.getToken());
        return await objChambreTable.indexChambres();
    }
    useEffect(() => {
        if (objChambreTable.getToken()) {
            if (objChambreTable.getTableChambreSerch() !== "") {
                objChambreTable.fetchChambreSearch(objChambreTable.getPageTableChambres());
            } else {
                console.log(chambresIndex());
            }
        }
    }, [objChambreTable.getPageTableChambres()]);

    return (

        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"chambres"} />
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

                <footer class="footer"> © 2021 Material Pro Admin by <a href="https://www.wrappixel.com/">wrappixel.com </a>
                </footer>
            </div>
        </div>

    );
}

export default Chambres;