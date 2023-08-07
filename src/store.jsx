import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/users/userSlice"

export default configureStore({
    reducer: {
        loggeduser : userReducer
    },
  })