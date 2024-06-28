import React from 'react';
import Scroll_sidebar from './Scroll_sidebar';
import Sidebar_footer from './Sidebar_footer';

function SideBar() {
     

    return (
        <aside class="left-sidebar" data-sidebarbg="skin6">
            
            <Scroll_sidebar />
            <Sidebar_footer />
        </aside>
    );
}

export default SideBar;