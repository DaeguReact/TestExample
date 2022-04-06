import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: 50,
  reducers: {
    increment(state, action) {
      return state + (action.payload ?? 1)
    },
    decrement(state, action) {
      return state - (action.payload ?? 1)
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
