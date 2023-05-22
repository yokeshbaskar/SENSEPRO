import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

let pagenumber = 1;
let totalSize=10;

export const NewCustomPagination = (props) => {
  const handleButtonClick = (event, type) => {
  totalSize= props.meta.count;   
    if(type === 'previous') {
        pagenumber =  props.meta.page - 1
    }
    if(type === 'next') {
        pagenumber =  props.meta.page + 1
    }
    if(type ==='last') {
        pagenumber =  Math.max(0, Math.ceil(props.meta.count / props.meta.limit) - 1)
    }

    props.handleClick(event, pagenumber)   
    // pagenumber=props.meta.page

  };

//   const handleBackButtonClick = (event) => {
//     props.handleClick(e, 0)
//   };

//   const handleNextButtonClick = (event) => {
//     props.handleClick(e, 'previous', 1)
//   };

//   const handleLastPageButtonClick = (event) => {
//     this.props.onChangePage(
//       event,
//       Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
//     );
//   };

  return (
//     <div className="row">
//     <div className="col-sm-12 col-md-5">
//         <div className="dataTables_info" id="example_info" role="status" aria-live="polite">Showing 1 to 8 of 8 entries</div>
//     </div>
//     <div className="col-sm-12 col-md-7">
//         <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
//         <ul className="pagination">
//             <li className="paginate_button page-item previous disabled" id="example_previous"><a href="#" aria-controls="example" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li>
//             <li className="paginate_button page-item active"><a href="#" aria-controls="example" data-dt-idx="1" tabindex="0" className="page-link">1</a></li>
//             <li className="paginate_button page-item next disabled" id="example_next"><a href="#" aria-controls="example" data-dt-idx="2" tabindex="0" className="page-link">Next</a></li>
//         </ul>
//         </div>
//     </div>
// </div>
    <>
      <div className="float-left">
              <div className="dataTables_info" 
              id="example_info" 
              role="status" 
              aria-live="polite">
              {/* Showing {pagenumber} of  entries */}
              Showing 11 to 20 of {totalSize} entries
              </div>
          </div>
    <Pagination className='pagination'>
    	<PaginationItem>
        	<PaginationLink first onClick={e => handleButtonClick(e, 'first')}/>
      	</PaginationItem>

      <PaginationItem>
        <PaginationLink previous onClick={e => handleButtonClick(e, 'previous')}/>
      </PaginationItem>


       {/* <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem> 
       <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>  */}

      <PaginationItem>
        <PaginationLink next onClick={e => handleButtonClick(e, 'next')}/>
      </PaginationItem>

      <PaginationItem>
        <PaginationLink last onClick={e => handleButtonClick(e, 'last')} />
      </PaginationItem>

    </Pagination>
    </>
  );
}