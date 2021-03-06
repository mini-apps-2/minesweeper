import { connect } from 'react-redux'
import Board from '../components/Board.jsx'
import renderBoard from '../actions/renderBoard.js'

const mapStateToProps = state => {
  return {
    board: state.board  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    renderBoard: (size, numOfMines) => dispatch(renderBoard(size, numOfMines))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board)