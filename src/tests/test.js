import BoardContainer from '../containers/BoardContainer.jsx'
import React from 'react'
import store from '../store.js'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import CellContainer from '../containers/CellContainer.jsx'
import Row from '../components/Row.jsx'
import Cell from '../components/Cell.jsx'
import { Provider } from 'react-redux'

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

describe('cell should render correctly', () => {
  let store, container

  beforeEach(() => {
    store = mockStore(initialState)
    container = shallow(<CellContainer store={store} />)
  })

  it ('should render container correctly', () => {
    expect(container.length).toEqual(1)
  })

  it ('should render Cell component with container', () => {
    expect(container.find('Cell')).toBeTruthy()
  })

  it ('should render container with store matching initial state', () => {
    expect(container.find('Cell').prop('board')).toEqual(initialState.board)
  })
})

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