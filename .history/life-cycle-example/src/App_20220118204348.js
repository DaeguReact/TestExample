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
    this.setState((state) => {
      return { counter: state.counter + 1 }
    })
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.handleClick}>Clcik</button>
      </div>
    )
  }
}
export default App
