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

export function FourthPage(props) {
  const inputRef = useRef(null);
  let history = useHistory();
  const location = useLocation();
  const [sort, SetSort] = useState();
  const [checkEmail, setcheckEmail] = useState(true);

  // Table Cloumns List
  const FourthPageTH = [
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
    { name: "Single Phase" },
    { name: "Three Phase" },
    { name: "Three Phase Dual Comp" },
    { name: "Chiller (AHU)" },
    { name: "Single Phase AC DB" },
    { name: "Three Phase AC DB" },
    { name: "Chiller DB" }
  ];

  return (
    <>
      <div className="container">
        <h1 style={{ marginTop: "5rem", fontWeight: "900" }}>SENSEPRO</h1>
        <h6 style={{ marginLeft: "456px" }}>
          Save Energy,Save Money,Save The Planet
        </h6>
        <div className="row">
          <Formik initialValues={{ name: "" }}>
            {props => (
              <div>
                {console.log(props)}

                <div
                  className="ml-10"
                  style={{
                    border: "2px solid black",
                    float: "left",
                    width: "35%"
                  }}
                >
                  <h4 className="ml-20 mt-10" style={{ height: "10px" }}>
                    Device Category
                  </h4>
                  <hr style={{ border: "1px solid black" }}></hr>

                  <Form className="ml-30">
                    <Row className="mb-20">
                      <Col>
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
                    </Row>

                    <button
                      type="submit"
                      className="btn btn-primary mr-40"
                      style={{ width: "20%" }}
                    >
                      Add
                    </button>
                    <br />
                    <br />
                  </Form>
                </div>

                <div
                  style={{
                    border: "2px solid black",
                    marginLeft: "453px",
                    marginTop: "50px",
                    width: "50%"
                  }}
                >
                  <h4 className="ml-20 mt-10" style={{ height: "10px" }}></h4>
                  <hr style={{ border: "1px solid black" }}></hr>

                  <div style={{ margin: "10px" }}>
                    {console.log("personData", personsData)}
                    {personsData && personsData && (
                      <DataTable
                        keyField="gatewayname"
                        rows={personsData}
                        columns={FourthPageTH}
                      />
                    )}
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
