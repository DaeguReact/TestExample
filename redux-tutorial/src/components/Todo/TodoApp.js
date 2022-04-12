import React from 'react'
import { useSelector } from 'react-redux'
import TodoAdder from './TodoAdder'
import classes from './TodoApp.module.css'
import TodoItem from './TodoItem'

const TodoApp = () => {
  const todos = useSelector((state) => state)
  return (
    <main>
      <div className={classes['todo-list-wrap']}>
        {todos.map((todo, index) => (
          <TodoItem key={index} value={todo} />
        ))}
      </div>
      <TodoAdder />
    </main>
  )
}
export default TodoApp
