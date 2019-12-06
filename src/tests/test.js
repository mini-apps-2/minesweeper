import React from 'react'
import store from '../store.js'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import isAdjacentToMine from '../components/helpers.js'
import { getNumberOfMines } from '../components/helpers.js'

// React components
import BoardContainer from '../containers/BoardContainer.jsx'
import CellContainer from '../containers/CellContainer.jsx'
import Row from '../components/Row.jsx'
import Cell from '../components/Cell.jsx'
import Board from '../components/Board.jsx'

// Action creators/reducers
import updateNearby from '../actions/updateNearby.js'
import boardReducer from '../reducer.js'

describe('store correctly generates a board', () => {
  // check if a given model in store has ten randomly placed mines
  const hasTenMines = (model) => {
    let numOfMines = 0
    for (let row of model) {
      for (let cell of row) {
        if (cell.hasMine) numOfMines++
      }
    }
    
    return numOfMines === 10
  }
  
  // check the actual store as part of data flow
  const model = store.getState().board
  
  test('should place 10 mines at random cells on the board', () => {
    expect(hasTenMines(model)).toBeTruthy()
  })

  test('should generate 10 rows', () => {
    expect(model.length).toEqual(10)
  })

  test('should generate 10 cells for each row', () => {
    const hasTenCells = true
    for (let row of model) if (row.length !== 10) hasTenCells = false
    expect(hasTenCells).toBeTruthy()
  })
})

// get state for following tests
const getInitialState = () => {
  const placeMine = () => {
    const randRowInd = Math.floor(Math.random() * 10)
    const randColInd = Math.floor(Math.random() * 10)
    return [randRowInd, randColInd]
  }

  const renderRow = board => {
    for (let i = 0; i < 10; i++) {
      const row = []
      for (let i = 0; i < 10; i++) row.push({ content: '', hasMine: false })
      board.push(row)
    }
  };
  const board = []
  renderRow(board)

  for (let i = 0; i < 10; i++) {
    const mineCoords = placeMine()
    if (board[mineCoords[0]][mineCoords[1]].hasMine === true) i--
    board[mineCoords[0]][mineCoords[1]].hasMine = true
  }

  return board
}

// generate initial state via the above function
const initialState = { board: getInitialState(), gameOver: false }
const mockStore = configureStore()

describe('board should render correctly', () => {
  let store, container
  
  beforeEach(() => {
    // generate a mock store and pass it as props to BoardContainer
    store = mockStore(initialState)
    container = shallow(<BoardContainer store={store} />)
  })

  it ('should render connected(BOARD) component', () => {
    expect(container.length).toEqual(1)
  })

  it('should render Board component with container', () => {
    expect(container.find('Board')).toBeTruthy()
  })

  it ('should render board container with store matching initial state', () => {
    expect(container.find('Board').prop('board')).toEqual(initialState.board)
  })
})

// describe('cell should render correctly', () => {
//   let store, container

//   beforeEach(() => {
//     store = mockStore(initialState)
//     container = shallow(<CellContainer store={store} />)
//   })

//   it ('should render container correctly', () => {
//     expect(container.length).toEqual(1)
//   })

//   it ('should render Cell component with container', () => {
//     expect(container.find('Cell')).toBeTruthy()
//   })

//   it ('should render container with store matching initial state', () => {
//     expect(container.find('Cell').prop('board')).toEqual(initialState.board)
//   })
// })

describe('row should render correctly', () => {
  let store, wrapper, board

  beforeEach(() => {
    store = mockStore(initialState)
    board = store.getState().board
    wrapper = mount(
      <Provider store={store}>
        <Row index={0} cells={board[0]} />
      </Provider>
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it ('should render Row component', () => {
    expect(wrapper.find('Provider').contains(<Row index={0} cells={board[0]} />)).toBeTruthy()
  })

  it ('should render Row component with class \'row\'', () => {
    expect(wrapper.find('Row').childAt(0).hasClass('row')).toBeTruthy()
  })

  it ('should render Row component with index prop', () => {
    expect(wrapper.find('Row').prop('index')).toEqual(0)
  })

  it ('should render Row component with cells prop', () => {
    expect(wrapper.find('Row').prop('cells')).toEqual(board[0])
  })
})

describe('cell component should render correctly', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Cell />)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it ('should render Cell component with class \'cell\'', () => {
    expect(wrapper.childAt(0).hasClass('cell')).toBeTruthy()
  })

  it ('should render Cell component with onClick property', () => {
    expect(wrapper.childAt(0).prop('onClick')).toBeTruthy()
  })
})

describe('board component should render correctly', () => {
  let wrapper, store, board

  beforeEach(() => {
    store = mockStore(initialState)
    board = store.getState().board
    wrapper = mount(
      <Provider store={store}>
        <Board board={board} />
      </Provider>
    )
  })

  it ('should render Board component with class \'board\'', () => {
    expect(wrapper.find('Board').childAt(0).hasClass('board'))
  })
})

describe('action creators should dispatch actions correctly', () => {
  it ('should dispatch correct action for updateNearby', () => {
    expect(updateNearby(3, 5, 5)).toEqual({ type: 'UPDATE_NEARBY', numOfMines: 3, cellIndex: 5, rowIndex: 5 })
  })
})

describe('reducers should modify state correctly', () => {
  let firstStore, secondStore

  beforeEach(() => {
    firstStore = mockStore(initialState)
    secondStore = firstStore.getState()
    secondStore.board[5][5].content = 5
    firstStore = firstStore.getState()
  })

  it ('UPDATE_NEARBY: should update specified cell content with number of nearby mines', () => {
    firstStore = boardReducer(firstStore, { type: 'UPDATE_NEARBY', cellIndex: 5, rowIndex: 5 })
    expect(firstStore).toEqual(secondStore)
  })
})

describe('helper function \'isAdjacentToMine\' should work as expected', () => {
  let board, cell

  beforeEach(() => {
    board = [
      [{content: "", hasMine: false, index: 0, rowIndex: 0}, {content: "", hasMine: false, index: 1, rowIndex: 0}, {content: "", hasMine: false, index: 2, rowIndex: 0}],
      [{content: "", hasMine: false, index: 0, rowIndex: 1}, {content: "", hasMine: false, index: 1, rowIndex: 1}, {content: "", hasMine: false, index: 2, rowIndex: 1}],
      [{content: "", hasMine: false, index: 0, rowIndex: 2}, {content: "", hasMine: false, index: 1, rowIndex: 2}, {content: "", hasMine: false, index: 2, rowIndex: 2}],
    ]
    cell = board[1][1]
  })

  it ('should return true for a cell adjacent to a mine placed above at the same index', () => {
    board[0][1].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return true for a cell adjacent to a mine placed below at the same index', () => {
    board[2][1].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return true for a cell adjacent to a mine placed above and to the left', () => {
    board[0][0].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return true for a cell adjacent to a mine placed above and to the right', () => {
    board[0][2].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return true for a cell adjacent to a mine placed below and to the left', () => {
    board[2][0].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return true for a cell adjacent to a mine placed below and to the right', () => {
    board[2][2].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return true for a cell adjaced to a mine placed to the left', () => {
    board[1][0].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return true for a cell adjaced to a mine placed to the right', () => {
    board[1][2].hasMine = true
    expect(isAdjacentToMine(cell, board)).toBeTruthy()
  })
  it ('should return false for a cell not adjacent to a mine', () => {
    expect(isAdjacentToMine(cell, board)).toEqual(false)
  })
  it ('should not check above row for a cell in top row', () => {
    cell = board[0][1]
    expect(isAdjacentToMine(cell, board)).toEqual(false)
  })
  it ('should not check below row for a cell in bottom row', () => {
    cell = board[2][1]
    expect(isAdjacentToMine(cell, board)).toEqual(false)
  })
  it ('should not check a cell to the left of input cell at far left of row', () => {
    cell = board[1][0]
    expect(isAdjacentToMine(cell, board)).toEqual(false)
  })
  it ('should not check a cell to the right of input cell at far right of row', () => {
    cell = board[1][2]
    expect(isAdjacentToMine(cell, board)).toEqual(false)
  })
})

describe('helper function getNumberOfMines should work as expected', () => {
  let board, cell

  beforeEach(() => {
    board = [
      [{content: "", hasMine: true, index: 0, rowIndex: 0}, {content: "", hasMine: false, index: 1, rowIndex: 0}, {content: "", hasMine: false, index: 2, rowIndex: 0}],
      [{content: "", hasMine: false, index: 0, rowIndex: 1}, {content: "", hasMine: false, index: 1, rowIndex: 1}, {content: "", hasMine: true, index: 2, rowIndex: 1}],
      [{content: "", hasMine: false, index: 0, rowIndex: 2}, {content: "", hasMine: true, index: 1, rowIndex: 2}, {content: "", hasMine: false, index: 2, rowIndex: 2}],
    ]
    cell = board[1][1]
  })

  it ('should return correct number of mines for cell in middle of board', () => {
    expect(getNumberOfMines(cell, board)).toEqual(3)
  })
})