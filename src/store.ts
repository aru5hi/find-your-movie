import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from './reducers';
// import { Action, MainState } from "./reducers/searchReducer";

const middleware = [thunk];

const initialState = {};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

// const initialState: Record<string, Partial<MainState>> = {};

// const store = createStore<Partial<MainState>, Action, any, any>(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
