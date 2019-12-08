import { createStore } from 'redux'
import boardReducer from './reducer.js'

const store = createStore(boardReducer, { board: null, gameOver: false, duration: null, score: 0 })

export default store