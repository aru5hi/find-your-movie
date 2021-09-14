import { Action } from "../reducers/searchReducer";
import { FETCH_MOVIE, SEARCH_MOVIE, TOGGLE_LOADING } from "./actionTypes";
import axios from "axios";
import apiKey from "../apiKey";

export const searchMovie = (searchText: string) => (dispatch: (actionParams: Action) => any) => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: searchText
    } as Action);
}

export const fetchMovies = (searchText?: string) => (dispatch: (actionParams: Action) => any) => {
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