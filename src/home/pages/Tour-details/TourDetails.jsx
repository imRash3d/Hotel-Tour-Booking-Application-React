import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router";

import axios from "axios";
import BookingForm from "../../components/BookingForm";
class TourDetails extends Component {
  state = {
    modal: false,
    package: {
      name: "",
      price: "",
      description: "",
      location: "",
      includes: [],
      category: "",
      room_type: [],
      bg_img: ""
    },
    package_id: ""
  };
  getPackageDetails(id) {
    axios
      .get("https://trabel-booking.firebaseio.com/packages/" + id + ".json")
      .then(res => {
        const data = res.data;
        this.setState({
          package: data
        });
      });
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.getPackageDetails(id);
    this.setState({
      package_id: id
    });
  }

  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row d-md-flex">
            <div
              className="col-md-6 ftco-animate img about-image"
              style={{ background: `url(${this.state.package.bg_img})` }}
            />
            <div className="col-md-6 ftco-animate p-md-5">
              <div className="row">
                <div className="col-md-12 d-flex align-items-center">
                  <h2 className="mb-4">{this.state.package.name}</h2>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div className="tab-pane fade show active">
                    <p>{this.state.package.description}</p>
                    {/* <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nesciunt voluptate, quibusdam sunt iste dolores
                      consequatur
                    </p> */}
                  </div>
                </div>
                <div className="col-md-12 ">
                  <h4 className="col-md-12">Includes</h4>
                  <ul className="ml-3">
                    {this.state.package.includes.map((item, index) => (
                      <li style={{ listStyle: "circle" }} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-12 ">
                  <h4 className="col-md-12">Room Type</h4>
                  <ul className="ml-3">
                    {this.state.package.room_type.map((item, index) => (
                      <li style={{ listStyle: "circle" }} key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-12" />
                <div className="col-md-12">
                  <BookingForm package_id={this.state.package_id} />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default TourDetails;
