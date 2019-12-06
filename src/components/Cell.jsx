import React, { Component } from 'react'

class Cell extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.checkNearby = this.checkNearby.bind(this)
  }

  checkNearby(cell) {
    const rowsToCheck = [
      this.props.board[cell.rowIndex + 1], // row above
      this.props.board[cell.rowIndex], // same row
      this.props.board[cell.rowIndex - 1] // row below
    ]

    let mines = 0

    for (let row of rowsToCheck) {
      const secondCell = row[cell.index]
      const thirdCell = row[cell.index + 1]
      const firstCell = row[cell.index - 1]

      if (secondCell.hasMine) {
        mines++
      } 

      if (thirdCell.hasMine) {
        mines++
      }

      if (firstCell.hasMine) {
        mines++
      }

    }

    return mines
  }

  handleClick(e) {
    console.log(this.props.index, this.props.rowIndex)
    const numOfMines = this.checkNearby(this.props.board[this.props.rowIndex][this.props.index])
    console.log('MINES: ', numOfMines)
    if (numOfMines) {
      this.props.updateNearby(numOfMines, this.props.index, this.props.rowIndex)
    }
  }

  render() {
    return <div className="cell" onClick={this.handleClick}>{this.props.content}</div>
  }
}

export default Cell;