import React, { Component } from "react";
import { Link } from "react-router-dom";
class TourDetails extends Component {
  state = {};
  render() {
    return (
      <section className="ftco-section">
        <div className="container">
          <div className="row d-md-flex">
            <div
              className="col-md-6 ftco-animate img about-image"
              style={this.state.style}
            />
            <div className="col-md-6 ftco-animate p-md-5">
              <div className="row">
                <div className="col-md-12 d-flex align-items-center">
                  <h2 className="mb-4">Offering Reliable Hosting</h2>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div className="tab-pane fade show active">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live in Bookmarksgrove right at the
                      coast of the Semantics, a large language ocean.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Nesciunt voluptate, quibusdam sunt iste dolores
                      consequatur
                    </p>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <p>Includes</p>
                  <ul>
                    <li>Elevator</li>
                  </ul>
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
