import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
      addCart(state, action):any {
        return [action.payload,2]
      },
    
      removeCartAll(state, action):any{
        return [action.payload,1]
      },
      removeOne(state,action):any{
        return [action.payload,0]
      },
     
   
    }
    
  })
  
  export const { addCart ,removeCartAll,removeOne} = slice.actions
  

  
  export default slice.reducer