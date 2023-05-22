import React, { useState } from 'react';
import classNames from 'classnames';

const CustomSidebar = (props) => {
    return(
        <nav className="col-md-2 col-lg-2">
            <aside className="side-menu-main-cont">
                <div className="side-menu-inner-cont">
                    <ul className="vertical-nav-menu">
                        <li className="app-sidebar-heading">Menu</li>
                        <li className="active">
                            <a href="">
                                <i className="fas fa-tachometer-alt"></i>
                                Dashboard
                            </a>
                            <ul className="menu-inner">
                                <li className="active">
                                    <a href="javascript:void()">
                                        <i className="far fa-circle"></i>
                                        Create
                                    </a>
                                </li>
                                <li className="">
                                    <a href="javascript:void()">
                                        <i className="far fa-circle"></i>
                                        View
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </aside>
        </nav>
    );
}
export default CustomSidebar;