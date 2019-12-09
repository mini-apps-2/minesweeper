import React, { Component } from 'react'

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

  componentDidMount() {
    this.props.renderBoard(10, 10)
  }

  handleSizeChange(e) {
    if (e.target.value * e.target.value >= this.state.difficulty) {
      this.setState({ size: e.target.value }, () => this.props.renderBoard(this.state.size, this.state.difficulty))
    }
  }

  handleMineCountChange(e) {
    //console.log('MINES: ', e.target.value, 'SIZE: ', this.state.size)
    if (e.target.value <= this.state.size * this.state.size - 1) {
      this.setState({ difficulty: e.target.value }, () => this.props.renderBoard(this.state.size, this.state.difficulty))
    }
  }

  render() {
    return (
      <div id="difficulty-adjuster">
        <div>
          <label for="size">Size: </label>
          <input id="size" type="number" name="size" onChange={this.handleSizeChange} value={this.state.size} />
        </div>
        <div>
          <label for="mines">Mines: </label>
          <input id="mines" type="number" name="mines" onChange={this.handleMineCountChange} value={this.state.difficulty} />
        </div>
      </div>
    )
  }
}

export default DifficultyAdjuster