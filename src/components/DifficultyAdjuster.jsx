import React, { Component } from 'react'
import SizeController from './sizeController.jsx'
import NumOfMinesController from './numOfMinesController.jsx'

class DifficultyAdjuster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 10,
      difficulty: 10
    }

    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleMineCountChange = this.handleMineCountChange.bind(this)
  }

  handleSizeChange(e) {
    this.setState({ size: e.target.value }, () => this.props.renderBoard(this.state.size, this.state.difficulty))
  }

  handleMineCountChange(e) {
    this.setState({ difficulty: e.target.value }, () => this.props.renderBoard(this.state.size, this.state.difficulty))
  }

  render() {
    <div id="difficulty-adjuster">
      <SizeController handleClick={this.handleClick} />
      <NumOfMinesController handleClick={this.handleClick} />
    </div>
  }
}

export default DifficultyAdjuster