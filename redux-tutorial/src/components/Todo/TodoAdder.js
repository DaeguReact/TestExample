import React, { useState } from 'react'
import TodoStore from '../../store/Store'
import Modal from '../Modal'
import classes from './TodoAdder.module.css'

const TodoAdder = (props) => {
  const todoStore = TodoStore
  const [isError, setError] = useState(false)

  const todoSubmitHandler = (e) => {
    e.preventDefault()
    let newTodo = e.target['todo'].value
    if (!todoStore.getState().find((value) => value === newTodo)) {
      todoStore.dispatch({ type: 'ADD', payload: e.target['todo'].value })
    } else {
      setError(true)
    }
    e.target['todo'].value = ''
  }

  const hanlderModalClose = () => {
    setError(false)
  }

  return (
    <form onSubmit={todoSubmitHandler} className={classes.form}>
      <label htmlFor="todoText">Input Todo</label>
      <input type="text" id="todoText" name="todo" />
      {isError && <Modal onModalClose={hanlderModalClose} />}
    </form>
  )
}
export default TodoAdder
