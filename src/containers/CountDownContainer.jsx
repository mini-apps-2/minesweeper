import { connect } from 'react-redux'
import showBombs from '../actions/showBombs.js'
import CountDown from '../components/CountDown.jsx'

export default connect(
  state => { endTime: state.endTime },
  dispatch => { showBombs: dispatch(showBombs()) }
)(CountDown)