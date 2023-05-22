import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { session } from "../../services/session";
import { Redirect, useHistory, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import _ from "lodash";
import { func } from "prop-types";
export const Header = (props) => {
  let routeData = useRouteMatch();
  routeData = _.filter(routeData.url.split("/"), _.size);

  let activeMainMenu = routeData.length > 0 ? routeData[0] : "";
  let activeSubMenu = routeData.length > 0 ? routeData[1] : "";
  const isLoggedIn = true;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const UserName = session.userName;
  // const pharmacyName = session.userData.pharmacy.name;
  let history = useHistory();
  //const location = useLocation();
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  //const queryString = require("query-string");
  //let queryParamsData = queryString.parse(location.search);
  //let isFirstLogin = queryParamsData ? queryParamsData.firstLogin : '';
  //console.log(isFirstLogin)
  //const toggle = () => setIsOpen(!isOpen);

  const logout = async () => {
    props.logout();
    session.logout();
    localStorage.clear();
    handleGoToHome();
    // setLogin(true)
    new session();
  };

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const handlechangepassword = (e) => {
    history.push(`/changepassword?firstLogin=false`);
    toggle();
  };
  const handleProfile = (e) => {
    history.push(`/profile`);
    toggle();
  };
  function handleGoToHome() {
    console.log("HHHHHHHH");
    window.location.href =
      "https://www.remotecomplystaging.com/remoteComply/login.do";
  }

  return (
    <div>
      <div className="main-container ">
        <Container fluid={true}>
          <div className="container-fluid ">
            <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-6 header-left">
              <div className="col-lg-5 col-md-5 col-sm-5 logo2">
                <img src={require("../../assets/img/left-logo.png")} alt="" />
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-6">
              <div className="col-lg-7 col-md-7 col-sm-12 logo">
                <img
                  src={require("../../assets/img/RemoteProfileLogo.jpg")}
                  alt=""
                />
              </div>
            </div>
            <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-6 header-right">
              <div className="col-lg-5 col-md-5 col-sm-5 logo1 cursor">
                <Link>
                  <img
                    src={require("../../assets/img/logo1.png")}
                    alt=""
                    onClick={handleGoToHome}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-lg-5 col-md-5 col-sm-5 col-xs-8">
            <div className="row">
              <div className="welcome">
                Welcome {UserName}{" "}
                <Link to="/companylist">(Switch Company)</Link>
              </div>
            </div>
          </div>
          <div className="logout cursor">
            {/* <a onClick={logout}>Log out</a> */}
            <Link onClick={logout}>Log out</Link>
          </div>
          <div className="container-fluid">
            <div className="menuContainer">
              <div className="newMenuBackground">
                <ul id="menu" className="menu">
                  <li>
                    {" "}
                    <Link
                      to="/home/dashboard"
                      className={`${
                        activeMainMenu === "home" ? "selectedLeftMenu" : ""
                      }`}
                    >
                      Home
                    </Link>
                    {activeMainMenu === "home" && (
                      <ul className="submenu">
                        <li>
                          {" "}
                          <a
                            href=""
                            className={`${
                              activeSubMenu === "dashboard"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="">Support</a>
                        </li>
                        <li>
                          <a href="">Privacy</a>
                        </li>
                        <li>
                          <a href="">Chat</a>
                        </li>
                        <li>
                          <a href="" className="">
                            FAQ
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/mycompany/people"
                      className={`${
                        activeMainMenu === "mycompany"
                          ? "main-menu-selected"
                          : ""
                      }`}
                    >
                      My Company
                    </Link>
                    {activeMainMenu === "mycompany" && (
                      <ul className="submenu">
                        <li>
                          {" "}
                          <Link
                            to="/mycompany/people"
                            className={`${
                              activeSubMenu === "people"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            People
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/mycompany/location"
                            className={`${
                              activeSubMenu === "location"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Locations
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/mycompany/department"
                            className={`${
                              activeSubMenu === "department"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Departments
                          </Link>
                        </li>

                        {/* <li>
                          <Link
                            to="/resources/index"
                            className={`${
                              activeSubMenu === "index"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Resources
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link
                            to="/mycompany/vendors"
                            className={`${
                              activeSubMenu === "vendors"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Vendors
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            to="/mycompany/team"
                            className={`${
                              activeSubMenu === "team" ? "sub_menu_inner" : ""
                            }`}
                          >
                            Team
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            to="/mycompany/question"
                            className={`${
                              activeSubMenu === "question"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Question
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            to="/mycompany/questionaire"
                            className={`${
                              activeSubMenu === "questionaire" ||
                              activeSubMenu === "question"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Questionnaire
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/mycompany/communities"
                            className={`${
                              activeSubMenu === "communities"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Communities
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/riskelements/environment"
                      className={`${
                        activeMainMenu === "riskelements"
                          ? "main-menu-selected"
                          : ""
                      }`}
                    >
                      {" "}
                      Risk Elements{" "}
                    </Link>
                    {activeMainMenu === "riskelements" && (
                      <ul className="submenu">
                        <li>
                          {" "}
                          <Link
                            to="/riskelements/environment"
                            className={`${
                              activeSubMenu === "environment"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            Environment
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/riskelements/resourcetypes"
                            className={`${
                              activeSubMenu === "resourcetypes"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Asset Types
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/riskelements/securityprogram"
                            className={`${
                              activeSubMenu === "securityprogram"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Security Program
                          </Link>
                        </li>

                        {/* <li>
                          <Link
                            to="/riskelements/assettypes"
                            className={`${
                              activeSubMenu === "assettypes"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Asset Types
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            to="/riskelements/riskscales"
                            className={`${
                              activeSubMenu === "riskscales"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Risk Scales
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/riskelements/riskdomain"
                            className={`${
                              activeSubMenu === "riskdomain"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Risk Domain
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/riskelements/regulation"
                            className={`${
                              activeSubMenu === "regulation"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Regulation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/riskelements/riskmatrices"
                            className={`${
                              activeSubMenu === "riskmatrices"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            {" "}
                            Matrices
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      to="/assets/index"
                      className={`${
                        activeMainMenu === "assets" ? "main-menu-selected" : ""
                      }`}
                    >
                      Assets
                    </Link>
                    {activeMainMenu === "assets" && (
                      <ul className="submenu">
                        <li>
                          <Link
                            to="/assets/index"
                            className={`${
                              activeSubMenu === "index"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            Index
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            to="/assets/ratingbyassetgroup"
                            className={`${
                              activeSubMenu === "ratingbyassetgroup" ? "sub_menu_inner" : ""
                            }`}
                          >
                           Rating By Asset Group
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link
                            to="/assets/audit"
                            className={`${
                              activeSubMenu === "audit" ? "sub_menu_inner" : ""
                            }`}
                          >
                            Audit
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            to="/assets/controls"
                            className={`${
                              activeSubMenu === "controls"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Controls
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link
                      to="/profiles/define"
                      className={`${
                        activeMainMenu === "profiles"
                          ? "main-menu-selected"
                          : ""
                      }`}
                    >
                      Profiles
                    </Link>
                    {activeMainMenu === "profiles" && (
                      <ul className="submenu">
                        <li>
                          <Link
                            to="/profiles/define"
                            className={`${
                              activeSubMenu === "define"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            Define
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profiles/questionarie"
                            className={`${
                              activeSubMenu === "questionarie"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Questionnarie
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profiles/riskmatrix"
                            className={`${
                              activeSubMenu === "riskmatrix"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Risk Matrix
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profiles/review"
                            className={`${
                              activeSubMenu === "review" ? "sub_menu_inner" : ""
                            }`}
                          >
                            Review
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profiles/authorize"
                            className={`${
                              activeSubMenu === "authorize"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Authorize
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/profiles/audit"
                            className={`${
                              activeSubMenu === "audit" ? "sub_menu_inner" : ""
                            }`}
                          >
                            Audit
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      to="/monitoring/threatManagement"
                      className={`${
                        activeMainMenu === "monitoring"
                          ? "main-menu-selected"
                          : ""
                      }`}
                    >
                      Monitoring
                    </Link>
                    {activeMainMenu === "monitoring" && (
                      <ul className="submenu">
                        <li>
                          <Link
                            to="/monitoring/threatManagement"
                            className={`${
                              activeSubMenu === "threatManagement"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            Threat Management
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/monitoring/profilelist"
                            className={`${
                              activeSubMenu === "profilelist"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Profile List
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/monitoring/assetList"
                            className={`${
                              activeSubMenu === "assetList"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Asset List
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/monitoring/rateThreat"
                            className={`${
                              activeSubMenu === "rateThreat"
                                ? "sub_menu_inner"
                                : ""
                            }`}
                          >
                            Rate Threat
                          </Link>
                        </li>
                        <li>
                          <Link
                          to="/monitoring/importThreat"
                          className={`${
                            activeSubMenu === "importThreat"
                              ? "sub_menu_inner"
                              : ""
                          }`}
                          >Import Threats</Link>
                        </li>
                        
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      to="/documents/documents"
                      className={`${
                        activeSubMenu === "documents"
                          ? "main-menu-selected"
                          : ""
                      }`}
                    >
                      Documents
                    </Link>
                    {activeMainMenu === "documents" && (
                      <ul className="submenu">
                        <li>
                          <Link
                            to="/documents/documents/"
                            className={`${
                              activeSubMenu === "documents"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            Documents
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link
                      to="/reports/assets/"
                      className={`${
                        activeSubMenu === "assets" ? "main-menu-selected" : ""
                      }`}
                    >
                      Reports
                    </Link>
                    {activeMainMenu === "reports" && (
                      <ul className="submenu">
                        <li>
                          <Link
                            to="/reports/assets/"
                            className={`${
                              activeSubMenu === "assets"
                                ? "sub_menu_left_selected"
                                : ""
                            }`}
                          >
                            Assets
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
