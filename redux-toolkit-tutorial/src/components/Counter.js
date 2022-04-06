import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slices/CounterSlice'
import store from '../store/store'
import classes from './Counter.module.css'

const Counter = (props) => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handleIncre = ({ payload = null }) => {
    dispatch(increment(payload))
  }
  const handldeDecre = () => {
    dispatch(decrement())
  }

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={handleIncre}>INCRE</button>
        <button onClick={handldeDecre}>DECRE</button>
        <button onClick={handleIncre.bind(null, { payload: 5 })}>
          INCRE 5
        </button>
      </div>
    </>
  )
}
export default Counter
