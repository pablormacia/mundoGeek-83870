import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/shopSlice'
import cartReducer from './slices/cartSlice'


export const mundoGeekStore = configureStore({
  reducer: {
    shopReducer,
    cartReducer
  },
})

