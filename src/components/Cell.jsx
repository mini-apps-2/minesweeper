import React from 'react'

// class Cell extends React.Component {
//   constructor(props) {
//     super(props)

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(e) {
//     // const rowAbove = this.props.board[this.props.rowIndex - 1]
//     // const rowBelow = this.props.board[this.props.rowIndex + 1]

//     // console.log(this.props.board[this.props.rowIndex + 1])
//     // console.log(rowBelow)
//     console.log(this.props.board)
//   }

//   render() {
//     return <div class="cell" onClick={this.handleClick}>{this.props.content}</div>
//   }
// }

const Cell = props => {
  return <div className="cell" onClick={e => console.log('BOARD: ', props.board)}></div>
}

export default Cell;