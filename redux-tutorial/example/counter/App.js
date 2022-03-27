import logo from './logo.svg'
import './App.css'
import ReduxStore from './store/ReduxStore'
import { useSelector } from 'react-redux'

function App() {
  const store = ReduxStore
  const dispatch = store.dispatch
  const counter = useSelector((state) => state)

  const incre = () => {
    dispatch({ type: 'INCREMENT' })
  }
  const decre = () => {
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <>
      <div>{counter}</div>
      <div>
        <button onClick={incre}>INCREMENT</button>
        <button onClick={decre}>DECREMENT</button>
      </div>
    </>
  )
}

export default App
