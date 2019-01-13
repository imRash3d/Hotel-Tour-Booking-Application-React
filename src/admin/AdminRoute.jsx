import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Places from "./pages/Places";
import Packages from "./pages/Packages";
import AddForm from "./components/addForm";
import BookingPage from "./pages/BookingPage";
class AdminRoute extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/admin/packages/add" component={AddForm} />
          <Route path="/admin/dashboard" component={Dashboard} />
          <Route path="/admin/places" component={Places} />
          <Route path="/admin/packages" component={Packages} />
          <Route path="/admin/booking" component={BookingPage} />
          <Route path="/admin/package/edit/:id" component={AddForm} />

          <Route path="/" component={Dashboard} />
          <Redirect from="" exact to="/dashboard" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AdminRoute;
