import React from 'react';
import Cell from './Cell.jsx';

const renderCell = (index) => {
  return <Cell index={index} />
}

const Row = props => {
  return (
    <div class="row" >
      { renderCell(0) }
      { renderCell(1) }
      { renderCell(2) }
      { renderCell(3) }
      { renderCell(4) }
      { renderCell(5) }
      { renderCell(6) }
      { renderCell(7) }
      { renderCell(8) }
      { renderCell(9) }
    </div>
  );
}

export default Row;