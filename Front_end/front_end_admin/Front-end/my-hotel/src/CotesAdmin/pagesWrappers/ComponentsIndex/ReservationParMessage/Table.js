import React from 'react';
import { useStateChambreAppContext } from '../../../UseStateReservation';

const Table = () => {

    const { settersAndGetters } = useStateChambreAppContext();
    const reservation = settersAndGetters.getReservations();

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">id user</th>
                    <th scope="col">id chambre</th>
                    <th scope="col">Date de réservation</th>
                    <th scope="col">Acceptation</th>
                    <th scope="col">Rejeter</th>
                </tr>
            </thead>
            <tbody>
                {
                    reservation.length >= 1 ? (
                        reservation?.map((reservationParam) => {

                            return (
                                <tr key={reservationParam.id}>
                                    <th scope="row">{reservationParam.id_user}</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>button</td>
                                    <td>button</td>
                                </tr>
                            );
                        })
                    ) : <h2>data not fond</h2>
                }

            </tbody>
        </table>
    );
}

export default Table;
