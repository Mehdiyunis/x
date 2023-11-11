import { configureStore } from '@reduxjs/toolkit'
import singInPopUpReducer from './feature/singInPopUp'
import createPopUpReducer from './feature/createPopUp'

export const store = configureStore({
  reducer: {
    singInPopUp: singInPopUpReducer,
    createPopup: createPopUpReducer,
  },
})