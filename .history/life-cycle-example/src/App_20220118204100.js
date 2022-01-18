import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  shouldComponentUpdate(props, state) {
    return true
  }

  render() {
    return (
      <div>
        {this.props.counter}
        <button>Clcik</button>
      </div>
    )
  }
}
export default App
