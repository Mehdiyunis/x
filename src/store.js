import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/loginState'
import createAccounReducer from './features/createAccounState'

export const store = configureStore({
  reducer: {
    loginState: loginReducer,
    createAccountState: createAccounReducer
  },
})