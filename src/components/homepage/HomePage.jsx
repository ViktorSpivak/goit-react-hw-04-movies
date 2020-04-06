import React, { Component } from "react";
import { fetchTrendMovies } from "../baseOfRequest/BaseOfRequest";
import FilmList from "../filmList/FilmList";

export class HomePage extends Component {
  state = {
    trendList: "",
  };
  componentDidMount() {
    fetchTrendMovies().then((res) => this.setState({ trendList: res }));
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <FilmList list={this.state.trendList}></FilmList>
      </div>
    );
  }
}

export default HomePage;
