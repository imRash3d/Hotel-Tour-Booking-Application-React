import React, { Component } from "react";

import Package from "../../components/TourPackage";
class TourPlaces extends Component {
  state = {
    packages: [
      {
        id: 1,
        name: "Londol , UK",
        listing_count: 10,
        bg_img:
          "url(https://images.unsplash.com/photo-1518134346374-184f9d21cea2)"
      },
      {
        id: 2,
        name: "Italy , Venis",
        listing_count: 10,
        bg_img:
          "url(https://images.unsplash.com/photo-1526677504211-233c8477c61b)"
      },
      {
        id: 3,
        name: "Paris , Italy",
        listing_count: 10,
        bg_img:
          "url(https://images.unsplash.com/photo-1519501025264-65ba15a82390)"
      },
      {
        id: 4,
        name: "Lion , Singapur ",
        listing_count: 10,
        bg_img:
          "url(https://images.unsplash.com/photo-1520106212299-d99c443e4568)"
      }
    ]
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
              <div className="destination-slider owl-carousel ftco-animate row">
                {this.state.packages.map(item => (
                  <div key={item.id} className="item col-md-3 ">
                    <Package place={item} />
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

export default TourPlaces;
