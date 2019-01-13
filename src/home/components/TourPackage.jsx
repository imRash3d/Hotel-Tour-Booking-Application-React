import React from "react";
import { Link } from "react-router-dom";
const Package = props => {
  return (
    <div className="destination">
      <Link
        to="tours"
        className="img d-flex justify-content-center align-items-center"
        style={{ backgroundImage: props.place.bg_img }}
      >
        <div className="icon d-flex justify-content-center align-items-center">
          <span className="icon-search2" />
        </div>
      </Link>
      <div className="text p-3">
        <h3>{props.place.name}</h3>
        <span className="listing">{props.place.listing_count} Listing</span>
      </div>
    </div>
  );
};

export default Package;
