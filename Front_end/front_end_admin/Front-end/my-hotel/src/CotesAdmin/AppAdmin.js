import React, { Fragment, useEffect, useState } from 'react';
import '../CotesAdmin/assets/plugins/chartist-js/dist/chartist.min.css';
import '../CotesAdmin/assets/plugins/chartist-js/dist/chartist-init.css';
import '../CotesAdmin/css/style.min.css';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import Index from "./pagesWrappers/index";
import { useAppContext } from './AppContext';





function AppAdmin(props) {
    const { objAuthUser } = useAppContext();

    useEffect(() => {
        
    }, []);
    return (
        <Fragment>
            <Index objAuthUser={objAuthUser} />
        </Fragment>

    );
}

export default AppAdmin;


/**/