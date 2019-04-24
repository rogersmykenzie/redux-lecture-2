import axios from "axios";
// Star Wars Ducks

// Initial State

const initialState = {
  characters: [],
  loading: true
};

// Action Types Go Here
const SET_STARWARS_LOADING = "SET_STARWARS_LOADING";
const GET_STARWARS_CHARACTERS = "GET_STARWARS_CHARACTERS";
const GET_STARWARS_CHARACTERS_FULFILLED = "GET_STARWARS_CHARACTERS_FULFILLED";

// Action Creator
export function setStarWarsLoading(loading) {
  return {
    type: SET_STARWARS_LOADING,
    payload: loading
  };
}

export function getStarWarsCharacters() {
  return {
    type: GET_STARWARS_CHARACTERS,
    payload: axios.get("https://swapi.co/api/people")
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case GET_STARWARS_CHARACTERS_FULFILLED:
      return {
        ...state,
        characters: action.payload.data.results,
        loading: false
      };
    case SET_STARWARS_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
