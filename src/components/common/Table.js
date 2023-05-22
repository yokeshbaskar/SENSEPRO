import React from "react";
import BootstrapTable from "react-bootstrap-table-next";


export const DataTable = (props) => {
  const { rows, columns, keyField, onSelectRow, selectRow, expandRow } = props;

  const NoDataIndication = () => <div className="spinner">No Data Found</div>;

  return (
    <>
      <BootstrapTable
        bootstrap4
        keyField={keyField}
        data={rows}
        columns={columns}
        bordered={false}
        rowEvents={onSelectRow}
        selectRow={selectRow}
        expandRow={expandRow}
        noDataIndication={() => <NoDataIndication />}
        classes="table-bordered dataTable no-footer"
      />
    </>
  );
};
