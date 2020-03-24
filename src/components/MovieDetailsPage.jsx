import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { fetchMovieInfo } from "./BaseOfRequest";
import Reviews from "./Reviews";
import Cast from "./Cast";

export class MovieDetailsPage extends Component {
  state = {
    movieDetails: ""
  };
  componentDidMount() {
    fetchMovieInfo(this.props.match.params.movieId).then(res =>
      this.setState({ movieDetails: res })
    );
  }
  render() {
    const {
      poster_path,
      original_title,
      title,
      overview,
      genres
    } = this.state.movieDetails;
    console.log(this.state.movieDetails);

    return (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={original_title}
        />
        <h1>
          {title}
          {original_title}
        </h1>
        <p></p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map((el, idx) => <li key={idx}>{el.name}</li>)}
        </ul>
        <Link to={`${this.props.match.url}/cast`}>Cast</Link>
        <Link to={`${this.props.match.url}/review`}>Review</Link>
        <Route path={`${this.props.match.path}/cast`} component={Cast}></Route>
        <Route
          path={`${this.props.match.path}/review`}
          component={Reviews}
        ></Route>
      </div>
    );
  }
}

export default MovieDetailsPage;
