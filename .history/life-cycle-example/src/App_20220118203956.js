import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  getSnapshotBeforeUpdate(props, state) {
    return true
  }

  render() {
    return <div>{this.props.counter}</div>
  }
}
export default App
