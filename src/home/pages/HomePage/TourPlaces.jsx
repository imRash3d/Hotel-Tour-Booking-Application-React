import React, { Component } from "react";
import { Link } from "react-router-dom";
class TourPlaces extends Component {
  state = {
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1546847924-c44381c9e09c)"
    }
  };
  render() {
    return (
      <section className="ftco-section ftco-destination">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate">
              <span className="subheading">Featured</span>
              <h2 className="mb-4">
                <strong>Featured</strong> Destination
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="destination-slider owl-carousel ftco-animate">
                <div className="item col-md-4 ">
                  <div className="destination">
                    <Link
                      to=""
                      className="img d-flex justify-content-center align-items-center"
                      style={this.state.style}
                    >
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className="icon-search2" />
                      </div>
                    </Link>
                    <div className="text p-3">
                      <h3>Paris, Italy</h3>
                      <span className="listing">15 Listing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TourPlaces;
