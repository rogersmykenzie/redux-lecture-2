import {createStore, combineReducers, applyMiddleware} from 'redux';
import breakingBadReducer from './redux/breakingBadReducer';
import starWarsReducer from './redux/starWarsReducer';
import promise from 'redux-promise-middleware';

const combinedReducers = combineReducers({
    breakingBad: breakingBadReducer, 
    starWars: starWarsReducer
});

export default createStore(combinedReducers, applyMiddleware(promise));