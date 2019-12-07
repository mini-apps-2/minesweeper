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
    default:
      return state;
  }
}

export default boardReducer;