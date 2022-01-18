import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const { counter } = this.state
    this.setState({ counter: counter + 1 })
  }

  render() {
    return <div id="main">Hello World</div>
  }
}

export default App
