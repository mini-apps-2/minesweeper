import BoardContainer from '../containers/BoardContainer.jsx'
import renderer from 'react-test-renderer'
import React from 'react'
import store from '../store.js'
import { Provider } from 'react-redux'

const hasTenMines = (model) => {
  let numOfMines = 0
  for (let row of model) {
    for (let cell of row) {
      if (cell.hasMine) numOfMines++;
    }
  }
  
  return numOfMines === 10
}

test('should place 10 mines at random cells on the board', () => {
  const model = store.getState().board
  expect(hasTenMines(model)).toBe(true)
})