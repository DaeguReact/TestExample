import React, { useEffect, useState } from 'react'

const Main = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    console.log('effect ' + text)
    return () => {
      console.log('cleanup ' + text)
    }
  }, [])

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return <input type="text" onChange={handleChange} value={text} />
}

export default Main
