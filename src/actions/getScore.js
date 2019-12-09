import axios from 'axios'

//const getScore = () => ({ type: 'GET_SCORE' })
const getScore = () => {
  return dispatch => {
    axios.get('/scores').then(data => dispatch({ type: 'GET_SCORE', scores: data.data }))
  }
}

export default getScore