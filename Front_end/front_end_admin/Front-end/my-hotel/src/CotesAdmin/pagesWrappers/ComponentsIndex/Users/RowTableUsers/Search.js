import React from 'react';
import { useStateUsersAppContext } from '../../../../UseStateUsers';

const Search = () => {
    const { objUsersTable } = useStateUsersAppContext();

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Search ..."
                aria-describedby="button-addon2"
                value={objUsersTable.getTableClientsSerch()}
                onChange={(event) => {
                    // objUsersTable.setPageTableClient(1);
                    objUsersTable.setTableClientsSerchMethode(event.target.value);
                }}
            />
            
            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => {
                    objUsersTable.fetchClientSearch(1);//objUsersTable.getPageTableClient()
                }}
            >
                Button
            </button>
        </div>
    );
}

export default Search;
