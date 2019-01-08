import React from "react";
import { Link } from "react-router-dom";
const Package = props => {
  const { package } = this.props.item;
  return (
    <div className="destination">
      <Link
        to=""
        className="img d-flex justify-content-center align-items-center"
        style={this.props.img}
      >
        <div className="icon d-flex justify-content-center align-items-center">
          <span className="icon-search2" />
        </div>
      </Link>
      <div className="text p-3">
        <h3>Paris, Italy</h3>
        <span className="listing">15 Listing</span>
      </div>
    </div>
  );
};

export default Package;
