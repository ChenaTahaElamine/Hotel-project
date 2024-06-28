import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../../FicherDeConnection/MethodeDeRecupirationDonner/athentificationAndAutherizatioon/Logout';
import { useAppContext } from '../AppContext';

function Sidebar_footer(props) {
    const { objAuthUser } = useAppContext();

    const MethodeLogout = async (token) => {
        await Logout(token);
    }
    return (
        <div className="sidebar-footer">
            <div className="row">
                <div className="col-4 link-wrap">

                    <Link to="/" className="link" data-toggle="tooltip" title="" data-original-title="Settings">
                        <i className="ti-settings"></i>
                    </Link>
                </div>
                <div className="col-4 link-wrap">

                    <Link to="/" className="link" data-toggle="tooltip" title="" data-original-title="Email">
                        <i className="mdi mdi-gmail"></i>
                    </Link>
                </div>
                <div className="col-4 link-wrap">


                    <Link to="/loginAdmin" className="link" data-toggle="tooltip" title=""
                        data-original-title="Logout" onClick={() => {
                            MethodeLogout(objAuthUser.getToken());
                        }}>

                        <i className="mdi mdi-power"></i>


                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Sidebar_footer;