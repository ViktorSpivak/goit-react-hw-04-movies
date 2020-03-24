import React, { Component, Fragment } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import axios from "axios";
import HomePage from "./HomePage";
import MoviesPage from "./MoviesPage";
import MovieDetailsPage from "./MovieDetailsPage";

export default class App extends Component {
  //   baseReqest = (pathname, query = "") => {
  //     const apiKey = "3f3d3dc7a4319cc8bb935aa9323bdeea";

  //     axios.get(
  //       `https://api.themoviedb.org/3/${pathname}?api_key=${apiKey}&${query}`
  //     );
  //   };
  render() {
    const activ = {
      fontWeight: "bold",
      color: "red"
    };
    return (
      <Fragment>
        <header>
          <NavLink to="/" exact activeStyle={activ}>
            <span>Menu</span>
          </NavLink>
          <NavLink to="/movies" activeStyle={activ}>
            <span>Movie</span>
          </NavLink>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>

            <Route path="/movies" component={MoviesPage}></Route>

            <Route component={HomePage}></Route>
          </Switch>
        </main>
      </Fragment>
    );
  }
}
