import { connect } from 'react-redux';
import Board from '../components/Board.jsx';

const mapStateToProps = state => {
  return {
    board: state.board  
  }
}

export default connect(
  mapStateToProps,
  () => ({}),
)(Board);