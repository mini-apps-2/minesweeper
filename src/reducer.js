import { placeMine, renderRow } from './reducerHelpers.js'
import axios from 'axios'

const boardReducer = (state = [], action) => {
  const copyOfState = {...state}
  const newBoard = copyOfState.board
  switch(action.type) {
    case 'UPDATE_NEARBY':
      newBoard[action.rowIndex][action.cellIndex].content = action.numOfMines
      return {...state, board: newBoard }
    case 'SHOW_BOMBS':
      for (let row of newBoard) {
        for (let cell of row) {
          if (cell.hasMine) cell.content = '💣'
        }
      }
      return {...state, board: newBoard, gameOver: true }
    case 'TOGGLE_CLASS':
      newBoard[action.rowIndex][action.cellIndex].class = 'cell-checked'
      return {...state, board: newBoard}
    case 'RENDER_BOARD':
      // calculate time based on difficulty
      const duration = action.size * action.numOfMines - (action.size * action.numOfMines / 2)
      
      // calculate difficulty level
      let difficulty
      if (duration <= 50) difficulty = 'easy'
      if (duration > 50 && duration <= 100) difficulty = 'hard'
      if (duration > 100) difficulty = 'ludicrous'

      const board = []
      renderRow(board, action.size)
      for (let i = 0; i < action.numOfMines; i++) {
        const mineCoords = placeMine(action.size)
        if (board[mineCoords[0]][mineCoords[1]].hasMine === true) i--
        board[mineCoords[0]][mineCoords[1]].hasMine = true
      }
      return {...state, board, duration, difficulty}
    case 'INCREMENT_SCORE':
      return {...state, score: state.score + 1}
    case 'SUBMIT_SCORE':
      return ({...state, scoreBoard: action.scores})
    case 'GET_SCORE':
      return ({...state, scoreBoard: action.scores})
    default:
      return state;
  }
}

export default boardReducer;