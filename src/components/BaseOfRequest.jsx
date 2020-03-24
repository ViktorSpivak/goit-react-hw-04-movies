import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const apiKey = "3f3d3dc7a4319cc8bb935aa9323bdeea";
export const fetchTrendMovies = () =>
  axios.get(`trending/all/day?api_key=${apiKey}`).then(res => res.data.results);
// .then(console.log);
export const fetchMovieInfo = movieId =>
  axios
    .get(`movie/${movieId}?api_key=${apiKey}&language=en-US`)
    .then(res => res.data);
export const fetchCast = movieId =>
  axios
    .get(`movie/${movieId}/credits?api_key=${apiKey}`)
    .then(res => res.data.cast);
export const fetchReview = movieId =>
  axios
    .get(`movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`)
    .then(res => res.data.results);
