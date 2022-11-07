import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSliceReducer'
//import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    
  },
})