import { placeMine, renderRow } from './reducerHelpers.js'

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
      newBoard[action.rowIndex][action.cellIndex].class = newBoard[action.rowIndex][action.cellIndex].class === 'cell' ? 'cell-checked' : 'cell'
      return {...state, board: newBoard}
    case 'RENDER_BOARD':
      const board = []
      renderRow(board, action.size)
      for (let i = 0; i < action.numOfMines; i++) {
        const mineCoords = placeMine()
        if (board[mineCoords[0]][mineCoords[1]].hasMine === true) i--
        board[mineCoords[0]][mineCoords[1]].hasMine = true
      }
      return {...state, board}
    default:
      return state;
  }
}

export default boardReducer;