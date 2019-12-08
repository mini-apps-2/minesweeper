import { connect } from 'react-redux'
import DifficultyAdjuster from '../components/DifficultyAdjuster.jsx'
import renderBoard from '../actions/renderBoard.js'

const mapDispatchToProps = dispatch => {
  return {
    renderBoard: (size, numOfMines) => dispatch(renderBoard(size, numOfMines))
  }
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(DifficultyAdjuster)