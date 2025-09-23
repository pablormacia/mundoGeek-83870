import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/shopSlice'
import cartReducer from './slices/cartSlice'
import { shopApi } from './services/shopApi'
import { setupListeners } from "@reduxjs/toolkit/query";


export const mundoGeekStore = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: getDefaultMiddleware=>(getDefaultMiddleware().concat(shopApi.middleware))
})

setupListeners(mundoGeekStore.dispatch) //opcional

