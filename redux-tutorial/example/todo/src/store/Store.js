import { applyMiddleware, createStore } from 'redux'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      if (state.find((value) => action.payload === value)) {
        return state
      } else {
        return [...state, action.payload]
      }
    case 'DONE':
      break
    case 'REMOVE':
      return state.filter((value) => value !== action.payload)
    default:
      return state
  }
}

const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log('will dispatch', action)

    let returnValue = next(action)

    console.log('state after dispatch', getState())
    console.log(returnValue)
    return []
  }
}

const TodoStore = createStore(
  todoReducer,
  ['make todo app using redux'],
  applyMiddleware(logger),
)

export default TodoStore
