import React from 'react';
import CellContainer from '../containers/CellContainer.jsx';

const renderCell = (index) => {
  return <CellContainer index={index} />
}

const Row = props => {
  return (
    <div className="row" >
      {props.cells.map((cell, index) => {
        return <CellContainer index={index} rowIndex={props.index}/>
      })}
    </div>
  );
}

export default Row;