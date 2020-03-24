import React, { Component } from "react";
import { fetchReview } from "./BaseOfRequest";

class Reviews extends Component {
  state = {
    reviewData: ""
  };
  componentDidMount() {
    fetchReview(this.props.match.params.movieId).then(res =>
      this.setState({ reviewData: res })
    );
  }

  render() {
    console.log(this.state.reviewData);

    return (
      <ul>
        {this.state.reviewData &&
          this.state.reviewData.map((el, idx) => (
            <li key={idx}>
              <h2>Author:{el.author}</h2>
              <p>{el.content}</p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Reviews;
