const updateNearby = (numOfMines, cellIndex, rowIndex) => {
  return {
    type: 'UPDATE_NEARBY',
    numOfMines,
    cellIndex,
    rowIndex
  }
}

export default updateNearby