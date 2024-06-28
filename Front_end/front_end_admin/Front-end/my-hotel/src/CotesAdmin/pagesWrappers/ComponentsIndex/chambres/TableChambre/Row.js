import React from 'react';
import { Link } from 'react-router-dom';
import { useStateChambreAppContext } from '../../../../UseStateChambre';


const Row = ({ chambre }) => {
    const { objChambreTable } = useStateChambreAppContext();
    return (
        <tr key={chambre.id}>
            <td>{chambre.id}</td>
            <td>{chambre.type_chambre}</td>
            <td>{chambre.disponibilite}</td>
            <td>

                <Link to="/chambre/details" className="btn btn-info btn-icon-split" onClick={
                    () => {
                        objChambreTable.setChambreMethod(chambre);
                    }
                }>
                    <span className="icon text-white-50">
                        <i className="fas fa-info-circle"></i>
                    </span>
                    <span className="text"> </span>

                </Link>
            </td>
            <td>
                <Link to="/chambre/update" className="btn btn-warning btn-icon-split"
                    onClick={
                        () => {
                            objChambreTable.setChambreMethod(chambre);
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
                <Link to="/chambres_route" className="btn btn-danger btn-icon-split"
                    onClick={() => {
                        objChambreTable.deleteChambre(chambre.id);
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
