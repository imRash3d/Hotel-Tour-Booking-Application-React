import React, { Component } from "react";
import { Link } from "react-router-dom";
import PackageTable from "../components/PackageTable";
import Alert from "../../modules/Alert";
class Packages extends Component {
  state = {
    isSuccess: false,
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
  onSuccess() {
    // this.setState({
    //   isSuccess: true
    // });
    // // setTimeout(() => {
    // //   this.setState(
    // //     {
    // //       success: false
    // //     },
    // //     3000
    // //   );
    // // });
    // // this.state.success = true;
    // console.log("sss");
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-end">
          <div className="colmd-">
            {this.state.isSuccess && (
              <Alert title={"Item Deleted Successfully"} />
            )}
          </div>
          <Link
            to="/admin/packages/add"
            className="btn col-md-2 m-3 btn-primary"
          >
            Add New
          </Link>
        </div>
        <div className="row">
          <div className="col-md-12">
            <PackageTable
              onSuccess={this.onSuccess}
              packages={this.state.packages}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Packages;
