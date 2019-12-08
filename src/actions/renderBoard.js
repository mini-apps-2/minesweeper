const renderBoard = (size, numOfMines) => {
  return {
    type: 'RENDER_BOARD',
    size,
    numOfMines
  }
}

export default renderBoard