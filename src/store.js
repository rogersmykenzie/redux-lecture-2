import { createStore } from "redux";
import breakingBad from "./ducks/breakingBad";

const store = createStore(breakingBad);

export default store;
