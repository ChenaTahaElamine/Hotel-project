import React from 'react';
import { useAppContext } from '../../../../AppContext';
import { Link } from 'react-router-dom';
import { useStateRestaurantAppContext } from '../../../../UseStateRestaurant';

const Search = () => {
    
    const { objRestaurantTable } = useStateRestaurantAppContext();

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Search ..."
                aria-describedby="button-addon2"
                value={objRestaurantTable.getTableRestaurantSerch()}
                onChange={(event) => {

                    objRestaurantTable.setTableRestaurantSerchMethod(event.target.value);

                }}

            />

            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => {
                    objRestaurantTable.fetchRestaurantSearch(1);//objRestaurantTable.getPageTableRestaurants()
                }}
            >
                Button
            </button>
            <Link to="/resteurant/add" className="btn btn-outline-success ml-1">
                +
            </Link>
        </div>
    );
}

export default Search;
