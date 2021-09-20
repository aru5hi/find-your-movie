import { combineReducers } from "redux";
import { default as searchReducer } from './searchReducer';

export default combineReducers({
    appState: searchReducer
})