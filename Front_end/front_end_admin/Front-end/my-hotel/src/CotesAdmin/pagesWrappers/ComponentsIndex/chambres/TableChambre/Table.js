import React from 'react';
import Row from './Row';
import { useStateChambreAppContext } from '../../../../UseStateChambre';

//table chambres
const Table = () => {
    const { objChambreTable } = useStateChambreAppContext();
    const chambres = objChambreTable.getChambres();
    return (
        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>id</th>
                    <th>type_chambre</th>
                    <th>disponibilite</th>
                    <th>deitail</th>
                    <th>modifer</th>
                    <th>suprimer</th>
                </tr>
            </thead>

            <tbody>
                {
                    chambres.length >= 1 ? (
                        chambres?.map((chambreParam) => {
                            return (
                                <Row chambre={chambreParam} />
                            );
                        })
                    ) : <h2>data not fond</h2>
                }
            </tbody>
        </table>
    );
}

export default Table;
