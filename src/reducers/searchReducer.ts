import { FETCH_MOVIE, SEARCH_MOVIE, TOGGLE_LOADING } from "../actions/actionTypes";

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
    switch(action.type) {
        case SEARCH_MOVIE:
            const newState = {
                ...state,
                text: action.payload as string,
                isLoading: false,
            }
            return newState;
        case FETCH_MOVIE: 
            const updatedState = {
                ...state,
                ...(action.payload as MainState) 
            }
            return updatedState
        case TOGGLE_LOADING:
            const updateState = {
                ...state,
                isLoading: action.payload as boolean
            }
            return updateState;
        default:
            return state;
        }
}
    
export default actionIdentifier;
