import axios from 'axios'

const submitScore = () => {
  // return { type: 'SUBMIT_SCORE' }
  return (dispatch, getState) => {
    axios.post('/scores', { score: getState().score, difficulty: getState().difficulty })
      .then(() => axios.get('/scores').then(data => dispatch({ type: 'SUBMIT_SCORE', scores: data.data })))
  }
}

export default submitScore