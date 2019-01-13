import React, { Component } from "react";
import Product from "../../components/product";
import axios from "axios";

class TourPackage extends Component {
  state = {
    packages: []
  };
  getPackages() {
    axios
      .get("https://trabel-booking.firebaseio.com/packages.json")
      .then(res => {
        for (const c in res.data) {
          const obj = {
            id: c,
            name: res.data[c].name,
            includes: res.data[c].includes,
            location: res.data[c].location,
            price: res.data[c].price,
            rating: res.data[c].rating,
            bg_img: `url(${res.data[c].bg_img})`
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
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate">
              <span className="subheading">Special Offers</span>
              <h2 className="mb-4">
                <strong>Top</strong> Tour Packages
              </h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row pl-5 pr-5  ml-5 mr-5 ">
            {this.state.packages.map(item => (
              <div key={item.id} className="col-md-3 ftco-animate">
                <Product packages={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default TourPackage;
