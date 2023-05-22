import React, { useRef, useState, useEffect } from "react";
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

export function SecondPage(props) {
  const inputRef = useRef(null);
  let history = useHistory();
  const location = useLocation();
  const [sort, SetSort] = useState();
  const [checkEmail, setcheckEmail] = useState(true);

  // Table Cloumns List
  const PeopleTH = [
    {
      dataField: "Gateway Name",
      text: "Gateway Name",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.gatewayname}
          </div>
        );
      }
    },

    {
      dataField: "MAC/IMEI",
      text: "MAC/IMEI",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.mac}
          </div>
        );
      }
    },
    {
      dataField: "Site",
      text: "Site",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.site}
          </div>
        );
      }
    },
    {
      dataField: "Created On",
      text: "Created On",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.createdOn}
          </div>
        );
      }
    },
    {
      dataField: "Signal Strength",
      text: "Signal Strength",
      formatter: (cellContent, row) => {
        return (
          <div style={{ margin: "10px" }} className={"mw-400"}>
            {row.signalStrength}
          </div>
        );
      }
    },
    {
      dataField: "",
      text: "",
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
      gatewayname: "Block 1",
      mac: "145EHGD764",
      site: "Arbor",
      createdOn: "5/18/23 11:30:33",
      signalStrength: "Poor"
    },
    {
      gatewayname: "OfficeBlock",
      mac: "86548775432687",
      site: "Alsaqer",
      createdOn: "6/17/23 8:45:22",
      signalStrength: "Good"
    },
    {
      gatewayname: "Block2",
      mac: "HT556TYNB3434",
      site: "Nesto",
      createdOn: "9/12/23 5:30:21",
      signalStrength: "Average"
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
              name: "",
              code: "",
              mac: "",
              gsm: "",
              site: "",
              gatewayType: ""
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
                      Gateway
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
                    Add Gateway
                  </h4>
                  <hr style={{ border: "1px solid black" }}></hr>

                  <Form className="ml-30">
                    <Row className="mb-20">
                      <Col style={{ float: "left" }}>
                        <label className="mb-10" htmlFor="email">
                          Name
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col style={{ float: "left" }}>
                        <label className="mb-10" htmlFor="email">
                          Code
                        </label>
                        <br />
                        <Field
                          type="text"
                          name="code"
                          placeholder="Code"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-20">
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Mac</label>
                        <br />
                        <Field
                          type="text"
                          name="mac"
                          placeholder="MAC"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">IMEI(GSM)</label>
                        <br />
                        <Field
                          type="text"
                          name="gsm"
                          placeholder="GSM"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                    </Row>

                    <Row className="mb-20">
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Site</label>
                        <br />
                        <Field
                          type="text"
                          name="site"
                          placeholder=" Select Site"
                          autoComplete="off"
                          style={{ width: "70%" }}
                        />
                      </Col>
                      <Col style={{ float: "left" }}>
                        <label htmlFor="email">Gateway Type</label>
                        <br />
                        <Field
                          type="text"
                          name="gatewaytype"
                          placeholder=""
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
                    Gateway Devices
                  </h4>
                  <hr style={{ border: "1px solid black" }}></hr>
                  <LimitChange
                    limit={1}
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
