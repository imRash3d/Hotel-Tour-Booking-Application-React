import React, { Component } from "react";

import Package from "../../components/TourPackage";
class TourPlaces extends Component {
  state = {
    packages: []
  };

  getPlaces() {
    const data = fetch(
      "https://trabel-booking.firebaseio.com/listing_places.json"
    );
    data
      .then(res => {
        return res.json();
      })
      .then(res => {
        for (const c in res) {
          const obj = {
            id: c,
            name: res[c].name,
            listing_count: res[c].listing_count,
            bg_img: `url(${res[c].bg_img})`
          };
          this.state.packages.push(obj);
          this.setState({packages:this.state.packages})
        }
      });
  }
 constructor(){
   super();
   this.getPlaces();
 
  // console.log(this.state.packages)
 }
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
