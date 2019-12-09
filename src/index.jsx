import React from 'react'
import ReactDOM from 'react-dom'
import BoardContainer from './containers/BoardContainer.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import DifficultyAdjusterContainer from './containers/DifficultyAdjusterContainer.jsx'
import CountDownContainer from './containers/CountDownContainer.jsx'
import ScoreBoardContainer from './containers/ScoreBoardContainer.jsx'

const App = props => {
  return (
    <div className="app">
      <DifficultyAdjusterContainer />
      <CountDownContainer />
      <BoardContainer />
      <ScoreBoardContainer />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app'))