import React from 'react';
import LinkArticleBlog from './Links/LinkArticleBlog';
import LinkChambre from './Links/LinkChambre';
import LinkDashboard from './Links/LinkDashboard';
import LinkImageOrVidio from './Links/LinkImageOrVidio';
import LinkResteurant from './Links/LinkResteurant';
import LinkUsers from './Links/LinkUsers';
import LinkReservation from './Links/LinkReservation';


function Scroll_sidebar(props) {
    return (
        <div class="scroll-sidebar">

            <nav class="sidebar-nav">
                <ul id="sidebarnav">

                    <LinkDashboard />
                    <LinkUsers />

                    <LinkArticleBlog />
                    <LinkImageOrVidio />
                    <LinkResteurant />
                    <LinkChambre />
                    <LinkReservation />
                    {/* <li class="sidebar-item">
                        <a class="sidebar-link waves-effect waves-dark sidebar-link"
                            href="pages-error-404.html" aria-expanded="false"><i
                                class="mdi me-2 mdi-help-circle"></i><span class="hide-menu">Error 404</span>
                        </a>
                    </li>
                    <li class="text-center p-20 upgrade-btn">
                        <a href="https://www.wrappixel.com/templates/materialpro/"
                            class="btn btn-warning text-white mt-4" target="_blank">Upgrade to
                            Pro</a>
                    </li> */}
                </ul>

            </nav>

        </div>
    );
}

export default Scroll_sidebar;