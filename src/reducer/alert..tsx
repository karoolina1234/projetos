import { createSlice } from '@reduxjs/toolkit'

export const sliceAlert = createSlice({
    name: 'alert',
    initialState:[],
    reducers: {
      exibeAlert(state):any {
        return true;
      },
    
      removeAlert(state):any{
        return false;
      }
   
    }
    
  })
  
  export const { exibeAlert ,removeAlert} = sliceAlert.actions
  

  
  export default sliceAlert.reducer