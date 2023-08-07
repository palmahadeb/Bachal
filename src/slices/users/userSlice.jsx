import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'user',
    initialState: {
      loginUser: localStorage.getItem("bchal")?JSON.parse(localStorage.getItem("bchal")):null,
    },
    reducers: {
      userData: (state,action) => {
        state.loginUser = action.payload
      },
     
    },
  })
  
  export const { userData } = counterSlice.actions
  
  export default counterSlice.reducer