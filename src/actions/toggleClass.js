const toggleClass = (rowIndex, cellIndex) => {
  return {
    type: 'TOGGLE_CLASS',
    rowIndex,
    cellIndex
  }
}

export default toggleClass