import React, { useEffect } from 'react';
import Header from '../../../../../header/Header';
import SideBar from '../../../../../sideBar/SideBar';
import PageBreadcrumb from '../../../../PageBreadcrumb';
import { useStateRestaurantAppContext } from '../../../../../UseStateRestaurant';
import Table from './TableResteurant/Table';
import Pagination from "./TableResteurant/Pagination";

const ResteurantMedia = () => {

    const { objRestaurantTable } = useStateRestaurantAppContext();

    const RestaurantsIndex = async () => {
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

                <PageBreadcrumb location={"resteurant"} buttonReteur={"/images_or_vidios"} />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-lg-8 col-xlg-3">

                            <div className="card">
                                <div className='card-img-top h5'>
                                    <div className='container'>
                                        <p className='mt-3'>
                                            sélectionner votre resteurant que vous avez prendre un photos :
                                        </p>
                                    </div>
                                </div>
                                <div className="card-body little-profile text-center">
                                    <Table />
                                </div>
                                <div className="card-body little-profile text-center">
                                    <Pagination />
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

export default ResteurantMedia;
