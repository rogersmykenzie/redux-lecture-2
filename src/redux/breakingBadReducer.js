import axios from 'axios';

const initialState = {
    loading: null,
    characters: [],
    error: ''
}
const GET_BREAKING_BAD_CHARACTERS = 'GET_BREAKING_BAD_CHARACTERS';

export function getBreakingBadCharacters() {
    return {
        type: GET_BREAKING_BAD_CHARACTERS,
        payload: axios.get("https://www.breakingbadapi.com/api/character/random?limit=10")
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case `${GET_BREAKING_BAD_CHARACTERS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                characters: action.payload.data,
                error: ''
            }
        case `${GET_BREAKING_BAD_CHARACTERS}_PENDING`:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case `${GET_BREAKING_BAD_CHARACTERS}_REJECTED`:
            return {
                ...state,
                loading: false,
                error: 'An Unknown Error has Ocurred. Please contact System Administrator'
            }
        default: return state;
    } 
}