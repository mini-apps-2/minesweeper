import { connect } from 'react-redux'
import updateNearby from '../actions/updateNearby.js'
import Cell from '../components/Cell.jsx'

const mapStateToProps = state => {
  return {
    board: state.board
  }
}

const mapDispatchToProps = { updateNearby }

export default connect(mapStateToProps, mapDispatchToProps)(Cell)