import React from 'react';
import { useAppContext } from '../AppContext';
import Error404 from './ComponentsIndex/errors/Error404';
import DashbordPage from './ComponentsIndex/Dashbord/DashbordPage';
import PageLogin from './ComponentsIndex/Login/PageLogin';





const ProtectedRoute = (elementParam,casExceptionnel="vide") => {
    const { objAuthUser } = useAppContext();
    if (objAuthUser.getUser() && objAuthUser.getToken()) {
        return elementParam;

    }else if(!objAuthUser.getUser() && !objAuthUser.getToken() && casExceptionnel=="/"){
        return (<PageLogin />);
    } else {
        return (<Error404 />);
    }
};

export default ProtectedRoute;
