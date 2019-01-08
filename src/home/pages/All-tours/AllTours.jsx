import React, { Component } from "react";
import Product from "../../components/product";
class AllTours extends Component {
  state = {
    packages: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]
  };
  render() {
    return (
      <section className="ftco-section ftco-degree-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <p>Side bar </p>
            </div>
            <div className="col-lg-9">
              <div className="row">
                {this.state.packages.map(item => (
                  <div key={item.id} className="col-md-4 ftco-animate">
                    <Product />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AllTours;
