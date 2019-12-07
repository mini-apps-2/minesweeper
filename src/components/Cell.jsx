import React, { Component } from 'react'
import isAdjacentToMine, { getNumberOfMines } from '../components/helpers.js'

class Cell extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.checkNearby = this.checkNearby.bind(this)
  }

  checkNearby(cell) {
    const updatedBoard = this.props.board.slice('')

    const innerFunc = (cell) => {
      // if cell contains a mine...
      if (cell.hasMine) {
        console.log('BOOM')
        updatedBoard[cell.rowIndex][cell.index].content = '*BOOM*'
        // add action/reducer and call it
        return
      }

      // if cell is adjacent to a mine...
      if (isAdjacentToMine(cell, updatedBoard)) {
        const numOfMines = getNumberOfMines(cell, updatedBoard)
        this.props.updateNearby(numOfMines, cell.index, cell.rowIndex)
      }

      // if cell is not adjacent to a mine...
      if (!isAdjacentToMine(cell, updatedBoard)) {
        //console.log('NOT ADJACENT')
        const rowsToCheck = [
          updatedBoard[cell.rowIndex], 
          updatedBoard[cell.rowIndex - 1], 
          updatedBoard[cell.rowIndex + 1]
        ].filter(row => row !== undefined) // filter out rows in case of cell being at first or last row

        // check the cells to the left and right of input cell
        const cellIndicesToCheck = [
          cell.index - 1,
          cell.index,
          cell.index + 1
        ].filter(index => updatedBoard[cell.rowIndex][index] !== undefined) // filter out cells in case of cell being at far left or right of row
        
        // for each surrounding cell, recursively check adjacent cells
        for (let row of rowsToCheck) {
          for (let cellIndex of cellIndicesToCheck) {
            // skip input cell
            if (row === updatedBoard[cell.rowIndex] && cellIndex === cell.index) continue 
            // skip cells which have already been checked
            if (row[cellIndex].content !== '') continue 
            // skip blank cells which have already been checked
            if (row[cellIndex].hasBeenChecked !== false) continue
            
            updatedBoard[updatedBoard.indexOf(row)][cellIndex].hasBeenChecked = true
            innerFunc(row[cellIndex])
          }
        }
      }
    }

    innerFunc(cell)
  }

  handleClick(e) {
    this.checkNearby(this.props.board[this.props.rowIndex][this.props.index])
  }

  render() {
    return <div className="cell" onClick={this.handleClick}>{this.props.content}</div>
  }
}

export default Cell;