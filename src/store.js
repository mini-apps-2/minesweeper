import { createStore, combineReducers, applyMiddleware } from 'redux'
import boardReducer from './reducer.js'

const placeMine = () => {
  const randRowInd = Math.floor(Math.random() * 10)
  const randColInd = Math.floor(Math.random() * 10)

  return [randRowInd, randColInd]
}

const renderRow = (board) => {
  for (let i = 0; i < 10; i++) {
    const row = []
    for (let a = 0; a < 10; a++) row.push({content: '', hasMine: false, index: a, rowIndex: i, hasBeenChecked: false})
    board.push(row)
  }
}
const board = []
renderRow(board)

for (let i = 0; i < 10; i++) {
  const mineCoords = placeMine()
  if (board[mineCoords[0]][mineCoords[1]].hasMine === true) i--
  board[mineCoords[0]][mineCoords[1]].hasMine = true
}

const store = createStore(boardReducer, { board, gameOver: false })

export default store