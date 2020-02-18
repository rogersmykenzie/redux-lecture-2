import {createStore, combineReducers, applyMiddleware} from 'redux';
import rickMortyReducer from './redux/rickMortyReducer';
import starWarsReducer from './redux/starWarsReducer';
import promise from 'redux-promise-middleware';

const combinedReducers = combineReducers({
    rickMorty: rickMortyReducer, 
    starWars: starWarsReducer
});

export default createStore(combinedReducers, applyMiddleware(promise));