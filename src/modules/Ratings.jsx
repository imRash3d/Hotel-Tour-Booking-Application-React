import React, { Component } from "react";
class Rating extends Component {
  state = { rating: "" };
  getStar() {
    const fullStar = Math.round(this.props.rating);
    const halfStar = 5 - fullStar;
    let rating = "";
    for (let i = 1; i <= fullStar; i++) {
      rating += '<i className="fas fa-star " />';
      this.setState({ rating: rating });
    }
    for (let i = 1; i <= halfStar; i++) {
      rating += '<i className="fas fa-star-half-alt " />';
      this.setState({ rating: rating });
    }
  }
  createMarkup() {
    return { __html: this.state.rating };
  }
  componentDidMount() {
    this.getStar();
  }

  render() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}

export default Rating;
