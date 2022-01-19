import React, { Component } from 'react'
import './App.css'

class App extends Component {
  // state = {
  //   counter: 0,
  // }

  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  shouldComponentUpdate(props, state) {
    console.log(props)
    console.log(state)
    return false
  }

  handleClick = () => {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  render() {
    return (
      <div id="main">
        {this.state.counter}
        <button onClick={this.handleClick}>Clcik</button>
      </div>
    )
  }
}

export default App
