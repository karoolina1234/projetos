import { configureStore } from '@reduxjs/toolkit'
import { slice } from './cart'

export const store =  configureStore({
  reducer:{
    cart: slice.reducer,
  }
})
