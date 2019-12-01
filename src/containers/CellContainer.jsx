import { connect } from 'react-redux'
import updateNearby from '../actions/updateNearby.js'
import Cell from '../components/Cell.jsx'

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.board,
    content: state.board[ownProps.rowIndex][ownProps.index].content
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateNearby: (numOfMines) => dispatch(updateNearby(numOfMines, ownProps.index, ownProps.rowIndex))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)