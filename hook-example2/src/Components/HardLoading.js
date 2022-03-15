import React, { useState } from 'react'

const HardLoading = (props) => {
  const [counter, setCounter] = useState(0)

  for (let index = 0; index < 100; index++) {}

  const addHanlder = () => {
    setCounter((prev) => {
      return prev + 1
    })
  }
  return (
    <div>
      {counter}
      <button onClick={addHanlder}>+1</button>
    </div>
  )
}
export default HardLoading
