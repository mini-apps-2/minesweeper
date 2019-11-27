import React from 'react';
import Row from './Row.jsx'

const renderRow = (index) => {
  return <Row index={index} />;
}

const Board = props => {
  return (
    <div>
      <ul>
        { renderRow(0) }
        { renderRow(1) }
        { renderRow(2) }
        { renderRow(3) }
        { renderRow(4) }
        { renderRow(5) }
        { renderRow(6) }
        { renderRow(7) }
        { renderRow(8) }
        { renderRow(9) }
      </ul>
    </div>
  );
}

export default Board;