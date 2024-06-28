import React, { useEffect } from 'react';
import Header from '../../../header/Header';
import SideBar from '../../../sideBar/SideBar';
import PageBreadcrumb from '../../PageBreadcrumb';
import Pagination from './Pagination';
import { useStateChambreAppContext } from '../../../UseStateReservation';
import { useAppContext } from '../../../AppContext';
import Table from './Table';

const Reservation = () => {

    const { settersAndGetters, methodsData } = useStateChambreAppContext();
    const { objAuthUser } = useAppContext();

    const ReservationIndex = async () => {
        // settersAndGetters.setTokenMethod(objAuthUser.getToken());
        await methodsData.indexReservations();
        
    }

    useEffect(() => { 
        

        if (settersAndGetters.getToken()) {
            ReservationIndex();
        }


    }, [settersAndGetters.getPageTableReservations()]);

    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"Reservation"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="card">
                           <Table />
                        </div>
                        <Pagination />
                    </div>
                </div>
                <footer class="footer"> © 2021 Material Pro Admin by <a href="https://www.wrappixel.com/">wrappixel.com </a>
                </footer>
            </div>

        </div>
    );
}

export default Reservation;
