import React, { Component } from 'react'

class ScoreBoard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getScore()
  }

  render() {
    if (this.props.scoreBoard !== null) {
      return (
        <div id="score-board">
          {this.props.scoreBoard.map(score => {
            console.log(score)
            return (
              <div>
                <h2>Score: {score.scores}</h2>
                <h2>Difficulty: {score.difficulty}</h2>
              </div>
            )
          })}
        </div>
      )
    } else return <div id="score-board"></div>
  }
}

export default ScoreBoard