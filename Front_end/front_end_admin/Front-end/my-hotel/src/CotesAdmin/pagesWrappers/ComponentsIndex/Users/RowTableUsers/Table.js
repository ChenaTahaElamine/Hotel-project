import React, { useEffect, useState } from 'react';
import Row from './Row';

import { useStateUsersAppContext } from '../../../../UseStateUsers';


export default function Table() {
    const { objUsersTable } = useStateUsersAppContext();
    const clients = objUsersTable.getClients();

    return (

        <div>
            <table
                id="demo-foo-addrow"
                className="table table-bordered m-t-30 table-hover contact-list "
                data-paging="true"
                data-paging-size="7"
            >
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joining date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.length >= 1 ? (
                            clients?.map((clientParam) => {

                                return (
                                    <Row client={clientParam} />
                                );
                            })
                        ) : <h2>data not fond</h2>
                    }

                </tbody>

            </table>
            
        </div>
    )
}
