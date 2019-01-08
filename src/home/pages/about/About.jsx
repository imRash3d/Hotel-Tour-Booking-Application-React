import React, { Component } from "react";
import { Link } from "react-router-dom";
class About extends Component {
  state = {
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1546847924-c44381c9e09c)"
    }
  };
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
                <div className="col-md-12 nav-link-wrap mb-5">
                  <div
                    className="nav ftco-animate nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <Link
                      className="nav-link active"
                      id="v-pills-whatwedo-tab"
                      data-toggle="pill"
                      to="#v-pills-whatwedo"
                      role="tab"
                      aria-controls="v-pills-whatwedo"
                      aria-selected="true"
                    >
                      What we do
                    </Link>
                  </div>
                </div>
                <div className="col-md-12 d-flex align-items-center">
                  <div
                    className="tab-content ftco-animate"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-whatwedo"
                      role="tabpanel"
                      aria-labelledby="v-pills-whatwedo-tab"
                    >
                      <div>
                        <h2 className="mb-4">Offering Reliable Hosting</h2>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nesciunt voluptate, quibusdam sunt iste dolores
                          consequatur
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-mission"
                      role="tabpanel"
                      aria-labelledby="v-pills-mission-tab"
                    >
                      <div>
                        <h2 className="mb-4">Exceptional Web Solutions</h2>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nesciunt voluptate, quibusdam sunt iste dolores
                          consequatur
                        </p>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-goal"
                      role="tabpanel"
                      aria-labelledby="v-pills-goal-tab"
                    >
                      <div>
                        <h2 className="mb-4">Help Our Customer</h2>
                        <p>
                          Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts. Separated they live in Bookmarksgrove
                          right at the coast of the Semantics, a large language
                          ocean.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Nesciunt voluptate, quibusdam sunt iste dolores
                          consequatur
                        </p>
                      </div>
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

export default About;
