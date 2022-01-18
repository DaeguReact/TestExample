import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  shouldComponentUpdate(props, state) {
    return true
  }

  handleClick() {
    this.state.counter += 1
  }

  render() {
    return (
      <div>
        {this.props.counter}
        <button onClick={this.handleClick}>Clcik</button>
      </div>
    )
  }
}
export default App
