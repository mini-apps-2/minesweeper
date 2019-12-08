import React from 'react'
import ReactDOM from 'react-dom'
import BoardContainer from './containers/BoardContainer.jsx'
import store from './store.js'
import { Provider } from 'react-redux'
import DifficultyAdjuster from './components/DifficultyAdjuster.jsx'
import DifficultyAdjusterContainer from './containers/DifficultyAdjusterContainer.jsx'

const App = props => {
  return (
    <div className="app">
      <DifficultyAdjusterContainer />
      <BoardContainer />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('#app'))