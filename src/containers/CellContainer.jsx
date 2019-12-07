import { connect } from 'react-redux'
import updateNearby from '../actions/updateNearby.js'
import showBombs from '../actions/showBombs.js'
import Cell from '../components/Cell.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.board,
    content: state.board[ownProps.rowIndex][ownProps.index].content,
    gameOver: state.gameOver
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNearby: (numOfMines, index, rowIndex) => dispatch(updateNearby(numOfMines, index, rowIndex)),
    showBombs: () => dispatch(showBombs())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)