import React, { useRef, useState, useEffect } from "react";
// import { useSelector } from 'react-redux';
import { useHistory, useLocation, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { DataTable } from "../components/common/Table";
import { LimitChange } from "../components/common/LimitChange";
import { Search } from "../components/common/Search";
import { CustomPagination } from "../components/common/Pagination";

let departmentInitialValues = {
  name: ""
};



export function FirstPage(props) {
  const inputRef = useRef(null);
  let history = useHistory();
  const location = useLocation();

  const [sort, SetSort] = useState();
  const [checkEmail, setcheckEmail] = useState(true);
 
  const PeopleTH = [
    {
      dataField: "Name",
      text: "Name",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.name}
          </div>
        );
      }
    },

    {
      dataField: "Device Type",
      text: "Device Type",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.deviceType}
          </div>
        );
      }
    },
    {
      dataField: "Gateway",
      text: "Gateway",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.gateway}
          </div>
        );
      }
    },
    {
      dataField: "Node-Id",
      text: "Node-Id",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.nodeId}
          </div>
        );
      }
    },
    {
      dataField: "Location",
      text: "Location",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.location}
          </div>
        );
      }
    },

    {
      dataField: "status",
      text: "Status",
      formatter: (cellContent, row) => {
        return (
          <div className={"mw-400"}>
            {row.status}
            <div className="action-cont">
              <Link>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </Link>
            </div>
          </div>
        );
      }
    },
    {
      dataField: "Action",
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <div className={"mw-400"}>
            {row.actions}
            <div className="action-cont">
              <Link>
                <a>
                  <img
                    title="Edit People"
                    src={require("../assets/img/editrp.png")}
                  />
                </a>
              </Link>
            </div>
          </div>
        );
      }
    }
  ];

  let personsData = [
    {
      name: "Office 1",
      deviceType: "Energy Saver",
      gateway: "CC:50:E3:15:69:62",
      nodeId: "1001",
      location: "Block 1 GF"
    },
    {
      name: "Office 1",
      deviceType: "Energy Saver",
      gateway: "CC:50:E3:15:69:62",
      nodeId: "1002",
      location: "Block 1 4F"
    },
    {
      name: "LT Panel",
      deviceType: "Energy Meter",
      gateway: "CC:50:E3:15:69:62",
      nodeId: "1003",
      location: "Block 1"
    },
    {
      name: "AHU 1",
      deviceType: "BTU Meter",
      gateway: "CC:50:E3:15:69:62",
      nodeId: "1004",
      location: "Block 1 GF"
    }
  ];

  return (
    <>
      <div className="container">
        <h1 style={{ marginTop: "5rem", fontWeight: "900" }}>SENSEPRO</h1>
        <h6 style={{ marginLeft: "456px" }}>
          Save Energy,Save Money,Save The Planet
        </h6>
        <div className="row" style={{ marginTop: "-5rem" }}>
          <Formik
            initialValues={{
              deviceType: "",
              gateway: "",
              nodeId: "",
              deviceCategory: "",
              name: "",
              location: "",
              schedule: "",
              brandModel: ""
            }}
          >
            {props => (
              <div>
                {console.log(props)}
                <div className="row mb-5">
                  <div className="col-lg-12 text-center">
                    <h3
                      className="mt-5 ml-10 "
                      style={{
                        float: "left",
                        marginLeft: "-11rem",
                        marginTop: "70px",
                        fontWeight: "bold"
                      }}
                    >
                      Device
                    </h3>
                  </div>
                </div>
                <div
                  className="mt-20 ml-10"
                  style={{
                    border: "2px solid black",
                    float: "left",
                    width: "35%",
                    marginLeft: "-12rem"
                  }}
                >
                  <h4 className="ml-20 mt-10" style={{ height: "10px" }}>
                    Add Device
                  </h4>
                  <hr style={{ border: "1px solid black" }}></hr>

                  <Form className="ml-30">
                    <Row className="mb-20">
                      <Col style={{ float: "left" }}>
                        <label className="mb-10" htmlFor="email">
                          Device Type
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="deviceType"
                          placeholder="Select Device "
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col style={{ float: "left" }}>
                        <label className="mb-10" htmlFor="email">
                          Gateway
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="gateway"
                          placeholder="Select Gateway"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-20">
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Node-Id</label>
                        <br />
                        <Field
                          type="text"
                          name="nodeId"
                          placeholder="LoRa Id"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Device Category</label>
                        <br />
                        <Field
                          type="text"
                          name="deviceCategory"
                          placeholder="Select Device"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-20">
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Name</label>
                        <br />
                        <Field
                          type="text"
                          name="name"
                          placeholder=" Name"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Location</label>
                        <br />
                        <Field
                          type="text"
                          name="location"
                          placeholder="Location"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-20">
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Schedule</label>
                        <br />
                        <Field
                          type="text"
                          name="schedule"
                          placeholder=" Select Schedule"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Brand Model</label>
                        <br />
                        <Field
                          type="text"
                          name="brandModel"
                          placeholder="Select Model"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                    </Row>

                    <button
                      type="submit"
                      className="btn btn-primary mr-40"
                      style={{ width: "20%", float: "right" }}
                    >
                      Submit
                    </button>
                    <br />
                    <br />
                  </Form>
                </div>

                <div
                  style={{
                    border: "2px solid black",
                    marginLeft: "313px",
                    marginTop: "20px",
                    width: "87%"
                  }}
                >
                  <h4 className="ml-20 mt-10" style={{ height: "10px" }}>
                    {" "}
                    Device List
                  </h4>
                  <hr style={{ border: "1px solid black" }}></hr>
                  <LimitChange
                    limit={1}
                    style={{ marginTop: "8px" }}
                    // changePageCount={changePageCount}
                  />
                  <Search sendSearchData={""} sendGetData={""} />

                  <div style={{ margin: "10px" }}>
                    {console.log("personData", personsData)}
                    {personsData && personsData && (
                      <DataTable
                        keyField="gatewayname"
                        rows={personsData}
                        columns={PeopleTH}
                      />
                    )}
                  </div>

                  <div className="ml-10 mb-30">
                    <CustomPagination
                      meta={personsData}
                      // handleClick={changePage}
                    />
                  </div>
                  <br />
                </div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
