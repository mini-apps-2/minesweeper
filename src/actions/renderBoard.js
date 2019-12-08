const renderBoard = (size, numberOfMines) => {
  return {
    type: 'RENDER_BOARD',
    size,
    numberOfMines
  }
}

export default renderBoard