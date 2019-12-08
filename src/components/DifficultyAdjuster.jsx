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
    this.setState({ size: e.target.value }, () => this.props.renderBoard(this.state.size, this.state.difficulty))
  }

  handleMineCountChange(e) {
    this.setState({ difficulty: e.target.value }, () => this.props.renderBoard(this.state.size, this.state.difficulty))
  }

  render() {
    return (
      <div id="difficulty-adjuster">
        <input class="size" type="number" onChange={this.handleSizeChange} value={this.state.size} />
        <input class="mines" type="number" onChange={this.handleMineCountChange} value={this.state.difficulty} />
      </div>
    )
  }
}

export default DifficultyAdjuster