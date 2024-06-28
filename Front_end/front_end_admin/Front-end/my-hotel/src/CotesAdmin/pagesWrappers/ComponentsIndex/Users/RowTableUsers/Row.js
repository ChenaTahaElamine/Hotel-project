import React from 'react';
import { Link } from 'react-router-dom';
import { useStateUsersAppContext } from '../../../../UseStateUsers';

export default function Row({ client }) {

    const { objUsersTable } = useStateUsersAppContext();
    return (


        <tr key={client.id}>
            <td>{client.id}</td>
            <td>
                <a href="javascript:void(0)" className="link"
                >
                    <img
                        src="../../assets/images/users/4.jpg"
                        alt="user"
                        width="40"
                        className="rounded-circle"
                    />
                    <Link to="/ProfileUser" onClick={
                        async () => {
                            await objUsersTable.showClient(client.id);
                        }
                    }>
                        {client.name}
                    </Link>

                </a>
            </td>
            <td> {client.email}</td>
            <td>{client.created_at}</td>
        </tr>

    )
}
