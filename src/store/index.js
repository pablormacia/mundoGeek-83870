import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/shopSlice'


export const mundoGeekStore = configureStore({
  reducer: {
    shopReducer
  },
})

