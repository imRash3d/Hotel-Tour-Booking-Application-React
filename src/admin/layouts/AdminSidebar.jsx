import React from "react";
import { Link } from "react-router-dom";
const Sidebar = props => {
  return (
    <div
      className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
      id="navigation"
    >
      <div className="navi">
        <ul>
          <li className="active">
            <Link to="/admin/dashboard">
              <i className="fa fa-home" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">Dashboard</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/admin/places">
              <i className="fa fa-tasks" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">Places</span>
            </Link>
          </li> */}
          <li>
            <Link to="/admin/packages">
              <i className="fa fa-bar-chart" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">All Packages</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/booking">
              <i className="fa fa-user" aria-hidden="true" />
              <span className="hidden-xs hidden-sm">Booking</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
