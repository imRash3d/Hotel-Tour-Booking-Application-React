import React, { Component } from "react";
import PackageTable from "../components/PackageTable";
class Packages extends Component {
  state = {
    packages: []
  };
  getPackages() {
    const data = fetch("https://trabel-booking.firebaseio.com/packages.json");
    data
      .then(res => {
        return res.json();
      })
      .then(res => {
        for (const c in res) {
          const obj = {
            id: c,
            name: res[c].name,
            includes: res[c].includes,
            category: res[c].category,
            location: res[c].location,
            price: res[c].price,
            rating: res[c].rating,
            bg_img: res[c].bg_img
          };
          this.state.packages.push(obj);
          this.setState({ packages: this.state.packages });
        }
      });
  }
  componentDidMount() {
    this.getPackages();
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
          <button className="btn col-md-2 m-3 btn-primary">Add New</button>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PackageTable packages={this.state.packages} />
          </div>
        </div>
      </div>
    );
  }
}

export default Packages;
