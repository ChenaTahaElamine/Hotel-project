import React, { useEffect } from 'react';
import PageBreadcrumb from '../../PageBreadcrumb';
import Header from "../../../header/Header";
import SideBar from "../../../sideBar/SideBar";
import Table from './TableResteurant/Table';
import Search from './TableResteurant/Search';
import Pagination from './TableResteurant/Pagination';
import { useStateRestaurantAppContext } from '../../../UseStateRestaurant';
import { useAppContext } from '../../../AppContext';

function Resteurant(props) {

    const { objRestaurantTable } = useStateRestaurantAppContext();
    const { objAuthUser } = useAppContext();

    const RestaurantsIndex = async () => {
        objRestaurantTable.setTokenMethod(objAuthUser.getToken());
        await objRestaurantTable.indexRestaurants();
    }

    useEffect(() => { 
        

        if (objRestaurantTable.getToken()) {
            if (objRestaurantTable.getTableRestaurantSerch() !== "") {
                objRestaurantTable.fetchRestaurantSearch(objRestaurantTable.getPageTableRestaurants());
            } else {
                RestaurantsIndex();
            }
        }


    }, [objRestaurantTable.getPageTableRestaurants()]);


    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
            data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Header />
            <SideBar />
            <div className="page-wrapper">

                <PageBreadcrumb location={"Resteraunt"} />
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

export default Resteurant;