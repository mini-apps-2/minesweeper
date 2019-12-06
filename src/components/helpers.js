const isAdjacentToMine = (cell, board) => {
  // check the same, below, and above rows
  const rowsToCheck = [
    board[cell.rowIndex], 
    board[cell.rowIndex - 1], 
    board[cell.rowIndex + 1]
  ].filter(row => row !== undefined) // filter out rows in case of cell being at first or last row

  // check the cells to the left and right of input cell
  const cellIndicesToCheck = [
    cell.index - 1,
    cell.index,
    cell.index + 1
  ].filter(index => board[cell.rowIndex][index] !== undefined) // filter out cells in case of cell being at far left or right of row

  // If either of the cells in any row contain a mine, return true
  for (let row of rowsToCheck) {
    for (let cellIndex of cellIndicesToCheck) {
      if (row === board[cell.rowIndex] && cellIndex === cell.index) continue // don't check input cell
      if (row[cellIndex].hasMine) return true
    }
  }

  return false
}

const getNumberOfMines = (cell, board) => {
  // check the same, below, and above rows
  const rowsToCheck = [
    board[cell.rowIndex], 
    board[cell.rowIndex - 1], 
    board[cell.rowIndex + 1]
  ].filter(row => row !== undefined) // filter out rows in case of cell being at first or last row

  // check the cells to the left and right of input cell
  const cellIndicesToCheck = [
    cell.index - 1,
    cell.index,
    cell.index + 1
  ].filter(index => board[cell.rowIndex][index] !== undefined) // filter out cells in case of cell being at far left or right of row

  // count number of mines in adjacent cells
  let mines = 0
  for (let row of rowsToCheck) {
    for (let cellIndex of cellIndicesToCheck) {
      if (row === board[cell.rowIndex] && cellIndex === cell.index) continue // don't check input cell
      if (row[cellIndex].hasMine) mines += 1
    }
  }

  return mines
}

export default isAdjacentToMine
export { getNumberOfMines }