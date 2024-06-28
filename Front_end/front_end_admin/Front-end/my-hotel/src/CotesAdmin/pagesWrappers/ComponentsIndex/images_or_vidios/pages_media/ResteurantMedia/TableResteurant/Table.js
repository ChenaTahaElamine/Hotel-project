import React from 'react';
import Row from './Row';
import { useStateRestaurantAppContext } from '../../../../../../UseStateRestaurant';

//table resteurant
const Table = () => {
    const { objRestaurantTable } = useStateRestaurantAppContext();
    const resteurants = objRestaurantTable.getRestaurants();
    return (
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>created at</th>
                    <th>n-img disponibles maintenant</th>
                    <th>add</th>
                </tr>
            </thead>

            <tbody>
                {
                    resteurants.length >= 1 ? (
                        resteurants?.map((resteurantParam) => {
                            return (
                                <Row resteurant={resteurantParam} />
                            );
                        })
                    ) : <h2>data not fond</h2>
                }
            </tbody>
        </table>
    );
}

export default Table;
