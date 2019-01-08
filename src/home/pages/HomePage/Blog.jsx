import React, { Component } from "react";
import { Link } from "react-router-dom";
class Blog extends Component {
  state = {
    style: {
      backgroundImage:
        "url(https://images.unsplash.com/photo-1546847924-c44381c9e09c)"
    }
  };
  render() {
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-start mb-5 pb-3">
            <div className="col-md-7 heading-section ftco-animate">
              <span className="subheading">Recent Blog</span>
              <h2>
                <strong>Tips</strong> &amp; Articles
              </h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3 d-flex ftco-animate">
              <div className="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={this.state.style}
                />
                <div className="text p-4 d-block">
                  <span className="tag">Tips, Travel</span>
                  <h3 className="heading mt-3">
                    <Link to="">
                      8 Best homestay in Philippines that you don't miss out
                    </Link>
                  </h3>
                  <div className="meta mb-3">
                    <div>
                      <Link to="">August 12, 2018</Link>
                    </div>
                    <div>
                      <Link to="">Admin</Link>
                    </div>
                    <div>
                      <Link to="" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </Link>
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

export default Blog;
