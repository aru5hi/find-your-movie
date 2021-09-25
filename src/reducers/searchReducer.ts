import { FETCH_MOVIE, FETCH_MOVIE_DETAILS, SEARCH_MOVIE, TOGGLE_LOADING } from "../actions/actionTypes";
import { MovieOverviewData } from "../components/MovieOverview/MovieOverviewType";

export interface MovieDetails {
    Poster: string;
    Type: string;
    Title: string;
    imdbID: string;
    Year: string;
    rating?: string;
}

export interface MainState {
    text: string;
    movieList: MovieDetails[];
    isLoading: boolean;
    movieDetails?: MovieOverviewData;
}

export interface Action {
    type: string;
    payload: string | boolean | Record<string, any>;
}

const initialState: MainState = {
    text: '',
    movieList: [],
    isLoading: false
};

const actionIdentifier = (state: MainState = initialState, action: Action) => {
    let newState;
    switch(action.type) {
        case SEARCH_MOVIE:
            newState = {
                ...state,
                text: action.payload as string,
                isLoading: false,
            }
            return newState;
        case FETCH_MOVIE: 
            newState = {
                ...state,
                ...(action.payload as MainState) 
            }
            return newState;
        case TOGGLE_LOADING:
            newState = {
                ...state,
                isLoading: action.payload as boolean
            }
            return newState;
        case FETCH_MOVIE_DETAILS:
            newState = {
                ...state,
                movieDetails: action.payload as MovieOverviewData
            }
            return newState;
        default:
            return state;
        }
}
    
export default actionIdentifier;
