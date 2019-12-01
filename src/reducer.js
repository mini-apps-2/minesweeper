const boardReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_NEARBY':
      const copyOfState = {...state}
      const newBoard = copyOfState.board
      newBoard[action.rowIndex][action.cellIndex].content = action.numOfMines
      return {...state, board: newBoard }
    default:
      return state;
  }
}

export default boardReducer;