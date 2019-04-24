import axios from "axios";
// Breaking Bad Ducks

// Initial State

const initialState = {
  characters: [],
  loading: true,
  error: ""
};

// Action Types Go Here
const SET_LOADING = "SET_LOADING";
const GET_CHARACTERS = "GET_CHARACTERS";

// Action Creator
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading
  };
}

export function getCharacters() {
  return {
    type: GET_CHARACTERS,
    payload: axios.get(
      "https://www.breakingbadapi.com/api/character/random?limit=10"
    )
  };
}

// Reducer
export default function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case `${GET_CHARACTERS}_REJECTED`:
      return { ...state, error: "An unknown error occurred", loading: false };
    case `${GET_CHARACTERS}_FULFILLED`:
      return { ...state, characters: action.payload.data, loading: false };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
