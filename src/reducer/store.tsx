import { configureStore } from '@reduxjs/toolkit'
import { sliceAlert } from './alert.'
import { slice } from './cart'

export const store =  configureStore({
  reducer:{
    cart: slice.reducer,
    alert: sliceAlert.reducer
    
  }
})
