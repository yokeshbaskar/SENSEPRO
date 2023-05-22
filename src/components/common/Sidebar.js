import React from "react";
import { useRouteMatch } from "react-router-dom";
import classNames from "classnames";
import { Link } from "react-router-dom";
import _ from 'lodash';
import { session } from "../../services/session";
const userType = session.isSuperAdmin;
const userRole = session.role;
//const adminRole = session.userData ? session.userData.role.roleName : "";

export const SideBar = props => {
  let routeData = useRouteMatch();
  routeData = _.filter(routeData.url.split('/'), _.size)

  let activeMenu = routeData.length > 0 ? routeData[0]: ''

  return (
    <div className={classNames("sidebar", { "is-open": props.isOpen })}>
      <aside className="side-menu-main-cont">
        <div className="side-menu-inner-cont">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar-heading">Menu</li>
          </ul>

          <ul className="vertical-nav-menu">
            <li
              className={`${activeMenu === "dashboard" ? "active" : ""}`}
            >
              <Link to="/dashboard">
                <i className="fas fa-tachometer-alt"></i>
                Dashboard
              </Link>
            </li>
          </ul>
         {(userType || userRole == 'StoreAdmin' ) && (    <ul className="vertical-nav-menu">
            <li
              className={`${activeMenu === "medicines" ? "active" : ""}`}
            >
              {userType ? (
                <Link to="/medicines?tab=medicines">
                  <i className="fas fa-building"></i>
                  Medicines
                </Link>
              ) : (
                <Link to="medicines?tab=association">
                  <i className="fas fa-building"></i>
                  Medicines
                </Link>
              )}
            </li>
          </ul>
         )}
          <ul className="vertical-nav-menu">          
            <li className={`${activeMenu === "users" ? "active" : ""}`}>
              <Link to="/users">
                <i className="fas fa-users"></i>
                Users
              </Link>
            </li>          
          </ul>
         
        </div>
      </aside>
    </div>
  );
};

