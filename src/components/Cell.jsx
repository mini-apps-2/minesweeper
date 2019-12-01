import React from 'react'

class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  checkNearby() {
    const rowsToCheck = [
      this.props.board[this.props.rowIndex + 1], // row above
      this.props.board[this.props.rowIndex], // same row
      this.props.board[this.props.rowIndex - 1] // row below
    ]

    let mines = 0

    for (let row of rowsToCheck) {
      if (row[this.props.index].hasMine) mines++
      if (row[this.props.index + 1].hasMine) mines++
      if (row[this.props.index - 1].hasMine) mines++
    }

    return mines
  }

  handleClick(e) {
    const numOfMines = this.checkNearby()
    if (numOfMines) {
      this.props.updateNearby(numOfMines)
    }
  }

  render() {
    return <div className="cell" onClick={this.handleClick}>{this.props.content}</div>
  }
}

export default Cell;