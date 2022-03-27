import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'
import TodoStore from '../../store/Store'
import classes from './TodoItem.module.css'

const TodoItem = ({ value }) => {
  const store = TodoStore
  const handleDeleteTodo = () => {
    store.dispatch({ type: 'REMOVE', payload: value })
  }
  return (
    <>
      <div className={classes['todo-item']}>
        <div className={classes.todo}>{value}</div>{' '}
        <div className={classes.functions}>
          <IoRemoveCircleOutline onClick={handleDeleteTodo} />
        </div>
      </div>
    </>
  )
}
export default TodoItem
