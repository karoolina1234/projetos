import { createSlice } from '@reduxjs/toolkit'

export const sliceItems = createSlice({
    name: 'items',
    initialState:[],
    reducers: {
      addItems(state, action):any {
        return [action.payload]
      },
    
    }
    
  })
  
  export const { addItems} = sliceItems.actions
  

  
  export default sliceItems.reducer