import { connect } from 'react-redux'
import showBombs from '../actions/showBombs.js'
import CountDown from '../components/CountDown.jsx'

export default connect(
  state => ({ 
    duration: state.duration,
    gameOver: state.gameOver
  }),
  dispatch => ({ showBombs: () => dispatch(showBombs()) })
)(CountDown)