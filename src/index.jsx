import React from 'react';
import ReactDOM from 'react-dom';
import BoardContainer from './containers/BoardContainer.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

const App = props => {
  return (
    <div className="app">
      <BoardContainer />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app'))