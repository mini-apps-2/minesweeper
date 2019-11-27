import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers(/* Reducers here */);

const store = createStore(rootReducer);

export default store;