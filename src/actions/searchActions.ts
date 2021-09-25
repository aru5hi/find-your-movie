import { Action } from "../reducers/searchReducer";
import { FETCH_MOVIE, FETCH_MOVIE_DETAILS, SEARCH_MOVIE, TOGGLE_LOADING } from "./actionTypes";
import axios from "axios";
import apiKey from "../apiKey";

export const searchMovie = (searchText: string) => (dispatch: (actionParams: Action) => any) => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: searchText
    } as Action);
}

export const fetchMovies = (searchText: string) => (dispatch: (actionParams: Action) => any) => {
    dispatch({
        type: TOGGLE_LOADING,
        payload: true
    });

    axios.get(`http://www.omdbapi.com/?apikey=${apiKey.apiKey}&s=${searchText}`)
    .then((response) => dispatch({
        type: FETCH_MOVIE,
        payload: {
            movieList: response.data.Search,
            isLoading: false
        }
    }));
}

export const fetchMovieDetails = (id: string) => (dispatch: (actionParams: Action) => any) => {
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey.apiKey}&i=${id}`)
    .then((response) => dispatch({
        type: FETCH_MOVIE_DETAILS,
        payload: response.data
    }));
}