import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  getSnapshotBeforeUpdate(props, state) {
    return false
  }

  render() {
    return <div></div>
  }
}
export default App
