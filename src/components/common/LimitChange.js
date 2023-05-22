import React from "react";
import { Row, Col } from "reactstrap";

export const LimitChange = props => {
  let { limit } = props;

  const changePageCount = page => {
    props.changePageCount(page);
  };

  return (
    <>
      <Col lg={6} className="mt-10">
        <Row>
          <Col lg={1} className="dataTables_length mr-10" style={{marginTop:"8px"}}>
            <label>Show</label>
          </Col>
          <Col lg={3}>
            <select
              onChange={changePageCount}
              name="example_length"
              aria-controls="example"
              className="custom-select custom-select-sm form-control form-control-sm"
              value={limit ? limit : ""}
              style={{width:'70px'}}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </Col>
          <Col lg={2} className="dataTables_length  pl-0" style={{marginTop:"8px",marginLeft:"-41px"}}>
            <label>Entries</label>
          </Col>
        </Row>
      </Col>
    </>
  );
};
