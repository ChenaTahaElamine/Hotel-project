import React from 'react';
import { Link } from 'react-router-dom';
import { useStateRestaurantAppContext } from '../../../../UseStateRestaurant';


const Row = ({ restaurants }) => {

    const { objRestaurantTable } = useStateRestaurantAppContext();


    return (
        <tr key={restaurants.id}> {/*  */}
            <td>{restaurants.id}</td>
            <td>{restaurants.nom}</td>
            <td>{restaurants.created_at}</td>
            <td>
                {/* <Route path='/resteurant/details' exact element={ProtectedRoute(<DetailsResteurantRfc />)} />
                    <Route path='/resteurant/update' exact element={ProtectedRoute(<UpdateResteurant />)} />
                    <Route path='/resteurant/add' exact element={ProtectedRoute(<AddResteurant />)} /> */}
                <Link to="/resteurant/details" className="btn btn-info btn-icon-split" onClick={
                    () => {
                        objRestaurantTable.setRestaurantMethod(restaurants);
                    }
                }>

                    <span className="icon text-white-50">
                        <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="text"> </span>

                </Link>
            </td>
            <td>
                <Link to="/resteurant/update" className="btn btn-warning btn-icon-split"
                    onClick={
                        () => {
                            objRestaurantTable.setRestaurantMethod(restaurants);
                        }
                    }
                >
                    <span className="icon text-white-50">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                    <span className="text"> </span>
                </Link>
            </td>
            <td>
                <Link to="/resteurant" className="btn btn-danger btn-icon-split"
                    onClick={() => {
                        objRestaurantTable.deleteRestaurant(restaurants.id);
                    }}
                >
                    <span className="icon text-white-50">
                        <i className="fas fa-trash"></i>
                    </span>
                    <span className="text"> </span>
                </Link>
            </td>
        </tr>
    );
}

export default Row;
