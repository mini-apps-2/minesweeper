import React from 'react'

class Cell extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    // const rowAbove = this.props.board[this.props.rowIndex - 1]
    // const rowBelow = this.props.board[this.props.rowIndex + 1]

    console.log(e.target.board[e.target.rowIndex + 1])
    // console.log(rowBelow)
  }

  render() {
    return <div class="cell" onClick={this.handleClick}>{this.props.content}</div>
  }
}

export default Cell;