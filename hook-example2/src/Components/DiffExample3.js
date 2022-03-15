import React, { useCallback, useEffect, useMemo, useState } from 'react'

const DiffExample3 = (props) => {
  const [counter, setCounter] = useState(0)

  const memo = useMemo((arg) => {
    return () => {
      setCounter((prevState) => {
        return prevState + 1
      })
      return 'inset JSX here ' + arg
    }
  }, [])

  const callback = useCallback((arg) => {
    setCounter((prevState) => {
      return prevState + 1
    })
    return 'inset JSX here ' + arg
  }, [])

  useEffect(() => {
    console.log(memo('hello'))
    console.log(callback('hello'))
  }, [])

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={memo}>Increse - Memo</button>
        <button onClick={callback}>Increse - CallBack</button>
      </div>
    </>
  )
}
export default DiffExample3
