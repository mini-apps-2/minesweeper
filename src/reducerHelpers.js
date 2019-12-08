const placeMine = (numOfRows) => {
  const randRowInd = Math.floor(Math.random() * numOfRows)
  const randColInd = Math.floor(Math.random() * numOfRows)

  return [randRowInd, randColInd]
}

const renderRow = (board, size) => {
  for (let i = 0; i < size; i++) {
    const row = []
    for (let a = 0; a < size; a++) row.push({content: '', hasMine: false, index: a, rowIndex: i, hasBeenChecked: false, class: 'cell'})
    board.push(row)
  }
}

export { placeMine, renderRow }