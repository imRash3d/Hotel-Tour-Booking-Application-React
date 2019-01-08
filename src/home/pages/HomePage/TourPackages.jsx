import React, { Component } from "react";
import Product from "../../components/product";

class TourPackage extends Component {
  state = {
    packages: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  };
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
                <Product />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default TourPackage;
