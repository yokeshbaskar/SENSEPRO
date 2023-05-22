import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';


export const NewDataTable = (props) => {
    const {
        rows,
        columns,
      } = props

      // const handleOnTableChange = () => {
      //   console.log("sdsdsdds")
      // }

      const options = {
        paginationSize: 4,
        pageStartIndex: 1,
        // alwaysShowAllBtns: true, // Always show next and previous button
        // withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        //paginationTotalRenderer: customTotal,
        onSizePerPageChange: (sizePerPage, page) => {
          console.log('Size per page change!!!');
          console.log('Newest size per page:' + sizePerPage);
          console.log('Newest page:' + page);
        },
        onPageChange: (page, sizePerPage) => {
          console.log('Page change!!!');
          console.log('Newest size per page:' + sizePerPage);
          console.log('Newest page:' + page);
        }
      };

      
      if(!props.meta) {
          return null
      }
      
      return (
        <>
          {/* <BootstrapTable
            bootstrap4
            keyField={keyField}
            data={rows}
            columns={columns}
            bordered={false}
            rowEvents={onSelectRow}
            //rowClasses={rowClasses}
            noDataIndication={noDataIndication}
            classes="table-bordered dataTable no-footer"
            pagination={ paginationFactory(options) } 
          /> */}

    <BootstrapTable
      remote
      keyField="id"
      data={ rows }
      columns={ columns }
      pagination={ paginationFactory(options)}
      //onTableChange={ handleOnTableChange }
    />

        </>
      )
}
