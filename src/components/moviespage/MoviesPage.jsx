import React, { Component } from "react";
import FilmList from "../FilmList";
import { fetchSearchMovies } from "../BaseOfRequest";
import queryString from "query-string";
import style from "./moviespage.module.css";

export class MoviesPage extends Component {
  state = {
    searchWord: "",
    searchResult: ""
  };
  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      const { query } = queryString.parse(search);

      fetchSearchMovies(query).then(res =>
        this.setState({ searchResult: res })
      );
      this.setState({ searchWord: query });
    }
  }
  handleChange = ev => {
    this.setState({ searchWord: ev.target.value });
  };
  handleSubmit = ev => {
    ev.preventDefault();
    fetchSearchMovies(this.state.searchWord).then(res =>
      this.setState({ searchResult: res })
    );

    this.props.history.push({
      ...this.props.location,
      search: `query=${this.state.searchWord}`
    });
  };

  render() {
    return (
      <div>
        <form className={style.formSearch}>
          <input
            type="text"
            value={this.state.searchWord}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Find
          </button>
        </form>

        <FilmList list={this.state.searchResult}></FilmList>
      </div>
    );
  }
}

export default MoviesPage;
