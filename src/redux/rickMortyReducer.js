import axios from "axios";

const initialState = {
  loading: null,
  characters: [],
  error: ""
};
const GET_RICK_MORTY_CHARACTERS = "GET_RICK_MORTY_CHARACTERS";

export function getRickMortyCharacters() {
  return {
    type: GET_RICK_MORTY_CHARACTERS,
    payload: axios.get(
      "https://rickandmortyapi.com/api/character/"
    )
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_RICK_MORTY_CHARACTERS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        characters: action.payload.data,
        error: ""
      };
    case `${GET_RICK_MORTY_CHARACTERS}_PENDING`:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case `${GET_RICK_MORTY_CHARACTERS}_REJECTED`:
      return {
        ...state,
        loading: false,
        error:
          "An Unknown Error has Ocurred. Please contact System Administrator"
      };
    default:
      return state;
  }
}
