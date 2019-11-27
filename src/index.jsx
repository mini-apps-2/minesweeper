import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board.jsx';

const App = props => {
  return (
    <div className="app">
      <Board />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'))