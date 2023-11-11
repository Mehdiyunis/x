import { createSlice } from '@reduxjs/toolkit'

const initialState  = {
  value: false,
}

export const singInPopUp = createSlice({
  name: 'singInPopUp',
  initialState,
  reducers: {
    singInPopClose: (state) => {
      state.value = false
    },
    singInPopOpen: (state) => {
      state.value = true
    },
  },
})

export const { singInPopClose, singInPopOpen } = singInPopUp.actions

export default singInPopUp.reducer