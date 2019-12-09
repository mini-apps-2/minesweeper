import { createStore, applyMiddleware } from 'redux'
import boardReducer from './reducer.js'
import thunk from 'redux-thunk'

const store = createStore(boardReducer, { 
  board: null, 
  gameOver: false, 
  duration: null, 
  score: 0,
  difficulty: null,
  scoreBoard: null
}, applyMiddleware(thunk))

export default store