import React, { useState } from 'react'

const HardLoading = (props) => {
  const [counter, setCounter] = useState(0)
  for (let index = 0; index < 100000000000000; index++) {}
  return <div>{counter}</div>
}
export default HardLoading
