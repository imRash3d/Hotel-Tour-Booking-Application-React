import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link to="home" className="navbar-brand">
            dirEngine.
          </Link>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="home" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
