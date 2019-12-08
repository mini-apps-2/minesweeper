import React from 'react'
import Row from './Row.jsx'

const Board = props => {
  if (props.board) {
    return (
      <ul className="board">
        {props.board.map((row, index) => {
          return <Row index={index} class="row" cells={row}/>
        })}
      </ul>
    );
  } else return <div></div>

}

export default Board