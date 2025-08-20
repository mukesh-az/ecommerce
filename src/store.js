import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import CartSlice from './reducer/cartSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartSlice
  }
})