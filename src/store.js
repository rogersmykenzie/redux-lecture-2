import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import breakingBad from "./ducks/breakingBad";
import starWars from "./ducks/starWars";

const rootReducer = combineReducers({ breakingBad: breakingBad, starWars });
const store = createStore(rootReducer, applyMiddleware(promise));

export default store;
