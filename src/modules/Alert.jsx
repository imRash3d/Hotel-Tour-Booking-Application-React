import React from "react";
const Alert = props => {
  return (
    <div className="col-md-7">
      <div className=" alert alert-success" role="alert">
        {props.title}
      </div>
    </div>
  );
};

export default Alert;
