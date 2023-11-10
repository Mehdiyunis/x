import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const loginState = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = true
    },
    decrement: (state) => {
      state.value = false
    },
  },
})

export const { increment, decrement } = loginState.actions

export default loginState.reducer