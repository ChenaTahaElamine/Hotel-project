import React from 'react';
import { Link } from 'react-router-dom';
import { useStateChambreAppContext } from '../../../../../../UseStateChambre';


const Row = ({ chambre }) => {
    const { objChambreTable } = useStateChambreAppContext();

    return (
        <tr key={chambre.id}>

            <td>{chambre.id}</td>
            <td>{chambre.type_chambre}</td>
            <td>
                {chambre.media.length}
            </td> 
            <td>
                <Link to="/images_or_vidios/ChambreMedia/add" className="btn btn-primary" onClick={
                    () => {
                        objChambreTable.setChambreImageMethod(chambre);
                    }
                }>
                    +
                </Link>
            </td>

        </tr>
    );
}

export default Row;
