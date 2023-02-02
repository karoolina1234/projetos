import { configureStore } from '@reduxjs/toolkit'
import { sliceAlert } from './alert.'
import { slice } from './cart'
import { sliceItems } from './items'

export const store =  configureStore({
  reducer:{
    cart: slice.reducer,
    alert: sliceAlert.reducer,
    item: sliceItems.reducer
    
  }
})
