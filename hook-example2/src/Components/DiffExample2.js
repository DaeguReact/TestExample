import React, { useCallback, useEffect, useMemo } from 'react'

const DiffExample2 = (props) => {
  const memo = useMemo((arg) => {
    return () => {
      return 'inset JSX here ' + arg
    }
  }, [])

  const callback = useCallback((arg) => {
    return 'inset JSX here ' + arg
  })

  useEffect(() => {
    console.log(memo('hello'))
    console.log(callback('hello'))
  }, [])

  return <div>Hello</div>
}
export default DiffExample2
