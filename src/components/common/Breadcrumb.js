import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { showError } from '../../helpers/show-error';
const queryString = require("query-string");

export const Breadcrumb = props => {
  let {
    title,
    url,
    type,
    subtitle,
    add,
    queryParamsData,
    disabled
  } = props;

  // title = _.startCase(title);
  // subtitle = _.startCase(subtitle);
  // add = _.startCase(add);

  let viewAddBreadcrumb, anotherTitle, titleWithPural, showHideAdd;

  if (subtitle !== "") {
    type == "list"
      ? (titleWithPural = title + "s")
      : (titleWithPural = subtitle);
    viewAddBreadcrumb = (
      <div className="float-left mt-1">
        {type !== "list" ? _.startCase(type) : "View"} {titleWithPural}
      </div>
    );
    anotherTitle = subtitle;
  } else {
    type == "list" ? (titleWithPural = title + "s") : (titleWithPural = title);
    viewAddBreadcrumb = (
      <div className="float-left mt-1">
        {type !== "list" ? _.startCase(type) : "View"} {titleWithPural}
      </div>
    );
    anotherTitle = title;
  }

  if (add !== "" && add == "Hide") {
    showHideAdd = false;
  } else {
    showHideAdd = true;
  }

  const checkHospital = () => {
    showError('', { message : 'Please Select Hospital'})
  }


  const renderAddButton = () => {
    return  !disabled ? <Link to={`${url}/add${queryParamsData}`}>
    <i className="far fa-plus-square"></i>
    {/* Add {title}     */}
    Add {anotherTitle}
  </Link> : <span className='cursor-pointer' onClick={()=> checkHospital()}>
    <i className="far fa-plus-square"></i>
    {/* Add {title}     */}
    Add {anotherTitle}
  </span>
  }

  return (
    <div className="page-breadcrumb">
      <div className="page-crump-head">
        {type == "list" ? (
          <i className="fas fa-tv float-left"></i>
        ) : (
          <i className="far fa-plus-square float-left"></i>
        )}
        {viewAddBreadcrumb}
      </div>
      <div className="page-crump-nav">
        {type == "list" ? (
          showHideAdd ? (
            renderAddButton()
          ) : (
            ""
          )
        ) : (
          <Link to={`${url}`}>
            <i className="fas fa-tv float-left mt-2"></i>
            View {title}s
          </Link>
        )}
      </div>
    </div>
  );
};
