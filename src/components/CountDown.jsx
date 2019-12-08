import React, { Component } from 'react'
import moment from 'moment'

class CountDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: null
    }
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      // set 'count' if it hasn't already been set due to asynchronicity
      if (this.state.count === null && this.props.endTime !== null) 
        this.setState({ count: moment.duration(this.props.endTime - new Date().getTime() * 1000) })
      else if (this.state.count !== null) {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            // dispatch action here
         
            clearInterval(intervalId) // stop the timer
          }
        })
      }
    }, 1000)
  }

  render() {
    if (this.props.endTime !== null) {
      return <h2 className="timer">Time remaining: {moment.duration(this.props.endTime - this.state.currentTime, 'seconds')}</h2>
    } else return <h2 className="timer">Error: endTime is null</h2>
  }
}

export default CountDown