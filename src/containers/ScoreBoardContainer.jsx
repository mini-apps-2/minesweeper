import { connect } from 'react-redux'
import ScoreBoard from '../components/ScoreBoard.jsx'
import getScore from '../actions/getScore.js'

export default connect(
  state => ({ scoreBoard: state.scoreBoard }),
  dispatch => ({ getScore: () => dispatch(getScore()) })
)(ScoreBoard)