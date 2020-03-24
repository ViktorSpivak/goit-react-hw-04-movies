import React, { Component } from "react";
// import { Route, NavLink, Switch } from "react-router-dom";
// import axios from "axios";
import { fetchTrendMovies } from "./BaseOfRequest";
import FilmList from "./FilmList";

export class HomePage extends Component {
  state = {
    trendList: ""
  };
  componentDidMount() {
    fetchTrendMovies().then(res => this.setState({ trendList: res }));
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
