const boardReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_NEARBY':
      const copyOfState = {...state}
      const newBoard = copyOfState.board
      console.log('ACTION: ', action.rowIndex, action.cellIndex)
      newBoard[action.rowIndex][action.cellIndex].content = action.numOfMines
      console.log(action)
      return {...state, board: newBoard }
    default:
      return state;
  }
}

export default boardReducer;