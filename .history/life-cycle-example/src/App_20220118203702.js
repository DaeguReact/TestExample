import React, { Component } from 'react'

class App extends Component {
  getSnapshotBeforeUpdate(props, state) {
    return false
  }

  render() {
    return <div></div>
  }
}
export default App
