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
        <div id="score-header">
          <h1>Scoreboard</h1>
          <div id="score-board">
            {this.props.scoreBoard.map(score => {
              console.log(score)
              return (
                <div className="score-entry">
                  <p>{score.scores} - {score.difficulty}</p>
                </div>
              )
            })}
          </div>
          
        </div>
      )
    } else return <div id="score-board"></div>
  }
}

export default ScoreBoard