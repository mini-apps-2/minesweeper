import { connect } from 'react-redux'
import updateNearby from '../actions/updateNearby.js'
import showBombs from '../actions/showBombs.js'
import Cell from '../components/Cell.jsx'
import toggleClass from '../actions/toggleClass.js'

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.board,
    content: state.board[ownProps.rowIndex][ownProps.index].content,
    gameOver: state.gameOver,
    class: state.board[ownProps.rowIndex][ownProps.index].class
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNearby: (numOfMines, index, rowIndex) => dispatch(updateNearby(numOfMines, index, rowIndex)),
    showBombs: () => dispatch(showBombs()),
    toggleClass: (cellIndex, rowIndex) => dispatch(toggleClass(cellIndex, rowIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)