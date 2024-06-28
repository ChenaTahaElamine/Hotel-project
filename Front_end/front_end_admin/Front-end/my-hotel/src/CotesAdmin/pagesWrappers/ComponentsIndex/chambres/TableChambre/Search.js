import React from 'react';
import { useAppContext } from '../../../../AppContext';
import { Link } from 'react-router-dom';
import { useStateChambreAppContext } from '../../../../UseStateChambre';

const Search = () => {
    // const { objAuthUser } = useAppContext();
    const { objChambreTable } = useStateChambreAppContext();

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Search ..."
                aria-describedby="button-addon2"
                value={objChambreTable.getTableChambreSerch()}
                onChange={(event) => {
                    objChambreTable.setTableChambreSerchMethod(event.target.value);
                }}

            />

            <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => {
                    objChambreTable.fetchChambreSearch(1);//objChambreTable.getPageTableChambres()
                }}
            >
                Button
            </button>
            <Link to="/chambre/add" className="btn btn-outline-success ml-1">
                +
            </Link>
        </div>
    );
}

export default Search;
