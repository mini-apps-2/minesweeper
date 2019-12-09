import React, { Component } from 'react'

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: null,
      startDuration: null
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      if (this.props.gameOver === true) clearInterval(intervalId)
      // set 'count' if it hasn't already been set due to asynchronicity
      if (this.state.count === null && this.props.duration !== null) 
        this.setState({
          count: this.props.duration,
          startDuration: this.props.duration 
        })
      // if board is resized, reset timer
      else if (this.props.duration !== this.state.startDuration && this.state.startDuration !== null) {
        this.setState({ 
          count: this.props.duration,
          startDuration: this.props.duration 
        })
      } else if (this.state.count !== null) {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            this.props.showBombs() // dispatch action to end game
            this.props.submitScore()
            clearInterval(intervalId)
          }
        })
      }
    }, 1000)
  }

  render() {
    if (this.props.duration !== null) {
      return <h2 className="timer">Time remaining: {this.state.count} seconds</h2>
    } else return <h2 className="timer">Error: endTime is null</h2>
  }
}

export default CountDown