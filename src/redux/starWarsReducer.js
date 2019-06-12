import axios from 'axios';

const initialState = {
    loading: null,
    characters: []
}

const GET_STAR_WARS_CHARACTERS = 'GET_STAR_WARS_CHARACTERS';

export function getStarWarsCharacters() {
    return {
        type: GET_STAR_WARS_CHARACTERS,
        payload: axios.get("https://swapi.co/api/people")
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case `${GET_STAR_WARS_CHARACTERS}_FULFILLED`: 
            return {
                ...state,
                loading: false,
                characters: action.payload.data.results
            }
        case `${GET_STAR_WARS_CHARACTERS}_PENDING`:
            return {
                ...state,
                loading: true
            }
        default: return state;
    } 
}