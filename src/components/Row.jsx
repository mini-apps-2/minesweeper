import React from 'react';
import CellContainer from '../containers/CellContainer.jsx';

const renderCell = (index) => {
  return <CellContainer index={index} />
}

const Row = props => {
  return (
    <div class="row" >
      {props.cells.map((cell, index) => {
        return <CellContainer index={index} rowIndex={props.index} content={cell.content} hasMine={cell.hasMine}/>
      })}
    </div>
  );
}

export default Row;