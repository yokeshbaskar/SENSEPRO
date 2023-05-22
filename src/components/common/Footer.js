import React from 'react';
import { Container } from 'reactstrap';
import { useHistory, useLocation, Link } from "react-router-dom";

export const Footer = (props) => {
  return (
    <div className="fotter">
    <div className="container-fluid">
       <div className="fotter-wrapper">
      <ul >
               <li>
               <Link to="/home/dashboard" className="newfontcolor">
                  HOME
                  </Link>
                </li>
                <li>
                  <Link to="/mycompany/people" className="newfontcolor">
                 MY COMPANY
                  </Link>
                </li>
                <li>
                  <Link to="/riskelements/environment" className="newfontcolor">
                 RISK ELEMENTS
                  </Link>
                </li>
                <li>
                  <Link to="/assets/index" className="newfontcolor">
                 ASSETS
                  </Link>
                </li>
               
                <li>
                  <Link  className="newfontcolor">
                  THREATS
                  </Link>
                </li>
                <li>
                  <Link  className="newfontcolor">
                  PROFILES
                  </Link>
                </li>
                <li>
                  <Link to="/documents/documents" className="newfontcolor">
                  DOCUMENTS
                  </Link>
                </li>
                <li>
                  <Link className="newfontcolor">
                  REPORTS
                  </Link>
                </li>

      </ul>
      {/* <p>System Version:1.1.0  Build Date:11-20-2020 08:30 </p> */}
    </div>
    
          <div className="bot-logo"> <img src={require("../../assets/img/specializeddatalog.jpg")}/></div>
          <p className="copyright">© Copyright 2022 Specialized Data Systems Inc. All rights reserved.</p>
    </div>
  </div>

  );
}

//export default Footer;