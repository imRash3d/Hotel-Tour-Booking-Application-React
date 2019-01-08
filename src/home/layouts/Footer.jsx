import React, { Component } from "react";
import { Link } from "react-router-dom";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">dirEngine</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <Link to="">
                      <span className="icon-twitter" />
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to="">
                      <span className="icon-facebook" />
                    </Link>
                  </li>
                  <li className="ftco-animate">
                    <Link to="">
                      <span className="icon-instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Information</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="" className="py-2 d-block">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Customer Support</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to="" className="py-2 d-block">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker" />
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p> @ Rashedul Islam</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
