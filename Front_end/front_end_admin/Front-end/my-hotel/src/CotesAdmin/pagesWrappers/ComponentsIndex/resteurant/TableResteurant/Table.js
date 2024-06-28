import React from 'react';
import Row from './Row';
import { useStateRestaurantAppContext } from '../../../../UseStateRestaurant';


//table resteurant
const Table = () => {
    // const { objAuthUser } = useAppContext();
    const { objRestaurantTable } = useStateRestaurantAppContext();
    const restaurants = objRestaurantTable.getRestaurants();



    return (
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>date creation</th>
                    {/* description */}
                    <th>details</th>
                    <th>modifer</th>
                    <th>suprimer</th>
                </tr>
            </thead>

            <tbody>
                {/* <Row />
                <Row />
                <Row />
                <Row /> */}
                {
                    restaurants.length >= 1 ? (
                        restaurants?.map((restaurantsParam) => {

                            return (
                                <Row restaurants={restaurantsParam} />
                            );
                        })
                    ) : <h2>data not fond</h2>
                }

            </tbody>
        </table>
    );
}

export default Table;
