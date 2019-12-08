import { createStore, combineReducers, applyMiddleware } from 'redux'
import boardReducer from './reducer.js'

const store = createStore(boardReducer, { board: null, gameOver: false })

export default store