import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

let pagenumber = 1;
let totalSize = 10;
let startData = 1;

export const CustomPagination = props => {

  if(props && !props.meta) {
    return false
  }

  let { count, data, page, limit } = props.meta;

  let endData = data && data.length;
  let currentPage = page;
  pagenumber = page
  totalSize = count;

  const handleButtonClick = (event, type) => {
    totalSize = count;
    if (type === "previous") {
      pagenumber = page - 1;
    }
    if (type === "next") {
      pagenumber = page + 1;
    }
    if (type === "first") {
      pagenumber = 1;
    }
    if (type === "last") {
      pagenumber = Math.ceil(count / limit);
    }
    props.handleClick(event, pagenumber);
  };

  startData = (currentPage - 1) * limit + 1;

  endData = totalSize < currentPage * limit ? totalSize: currentPage === 1 ? limit : currentPage * limit;

  return (
    <>
      <div className="float-left">
        <div
          className="dataTables_info"
          id="example_info"
          role="status"
          aria-live="polite"
        >
          {totalSize === 0 ? (
            // "No Records Found"
            ""
          ) : (
            <>
              {/* Showing {startData} to {endData} of {totalSize} entries */}
              Showing {1} to {4} of {4} entries
            </>
          )}

        </div>
      </div>
      {totalSize === 0 ? (
        ""
      ) : (
        <Pagination className="pagination" style={{marginRight:'10px'}}>
          {/* <PaginationItem disabled={currentPage <= 1}>
            <PaginationLink
              first
              onClick={e => handleButtonClick(e, "first")}
            />
          </PaginationItem> */}

          <PaginationItem disabled={currentPage <= 1}>
            <PaginationLink
              style={{backgroundColor:'white',color:'black'}}
              previous
              onClick={e => handleButtonClick(e, "previous")}
            />
          </PaginationItem>

          {/* <PaginationItem className={"pagination-bg"}>
            <PaginationLink>{page} / {Math.ceil(totalSize/limit)}</PaginationLink>
          </PaginationItem> */}
          <PaginationItem className={"pagination-bg"}>
            <PaginationLink>1</PaginationLink>
          </PaginationItem>

          <PaginationItem disabled={endData === totalSize ? true : false}>
            <PaginationLink 
            style={{backgroundColor:'white',color:'black'}} 
            next onClick={e => handleButtonClick(e, "next")} />
          </PaginationItem>

          {/* <PaginationItem disabled={endData === totalSize ? true : false}>
            <PaginationLink last onClick={e => handleButtonClick(e, "last")} />
          </PaginationItem> */}
        </Pagination>
      )}
    </>
  );
};
