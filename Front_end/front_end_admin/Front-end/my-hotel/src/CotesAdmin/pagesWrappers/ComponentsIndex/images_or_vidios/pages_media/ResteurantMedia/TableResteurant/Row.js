import React from 'react';
import { Link } from 'react-router-dom';
import { useStateRestaurantAppContext } from '../../../../../../UseStateRestaurant';


const Row = ({ resteurant }) => {
    const { objRestaurantTable } = useStateRestaurantAppContext();

    return (
        <tr key={resteurant.id}>
            <td>{resteurant.id}</td>
            <td>{resteurant.nom}</td>
            <td>{resteurant.created_at}</td>
            <td>
                {resteurant.media.length}
            </td>
            <td>
                <Link to="/images_or_vidios/ResteurantMedia/add" className="btn btn-primary" onClick={
                    () => {
                        objRestaurantTable.setResteurantImageMethod(resteurant);
                    }
                }>
                    +
                </Link>
            </td>

        </tr>
    );
}

export default Row;
