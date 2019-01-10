import React, { Component } from "react";
import   '../admin/admin.css'
import TopHeader from "./layouts/TopHeader";
import AdminRoute from "./AdminRoute";
import Sidebar from "./layouts/AdminSidebar";
class Admin extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <Sidebar />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="row" />
              <div className="user-dashboard">
               <div className="row">
               <TopHeader/>
               </div>
                <AdminRoute />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
