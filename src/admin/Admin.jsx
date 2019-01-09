import React, { Component } from "react";
import Header from "./layouts/AdminHeader";
class Admin extends Component {
  state = {};
  render() {
    return (
      <div class="home">
        <div class="container-fluid display-table">
          <div class="row display-table-row">
            <Header />
            <div class="col-md-10 col-sm-11 display-table-cell v-align">
              <div class="row" />
              <div class="user-dashboard">
                <h1>Hello, JS</h1>
                <div class="row">
                  <div class="col-md-5 col-sm-5 col-xs-12 gutter">
                    <div class="sales">
                      <h2>Your Sale</h2>

                      <div class="btn-group">
                        <button
                          class="btn btn-secondary btn-lg dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>Period:</span> Last Year
                        </button>
                        <div class="dropdown-menu">
                          <a href="#">2012</a>
                          <a href="#">2014</a>
                          <a href="#">2015</a>
                          <a href="#">2016</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-7 col-xs-12 gutter">
                    <div class="sales report">
                      <h2>Report</h2>
                      <div class="btn-group">
                        <button
                          class="btn btn-secondary btn-lg dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>Period:</span> Last Year
                        </button>
                        <div class="dropdown-menu">
                          <a href="#">2012</a>
                          <a href="#">2014</a>
                          <a href="#">2015</a>
                          <a href="#">2016</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
