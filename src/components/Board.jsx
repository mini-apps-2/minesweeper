import React from 'react'
import Row from './Row.jsx'

const renderRow = (index) => {
  return <Row index={index} />;
}

const Board = props => {
  return (
    <ul class="board">
      {props.board.map((row, index) => {
        return <Row index={index} class="row" cells={row}/>
      })}
    </ul>
  );
}

export default Board;