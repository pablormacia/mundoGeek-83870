import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/shopSlice'
import cartReducer from './slices/cartSlice'
import userReducer from './slices/userSlice'
import { shopApi } from './services/shopApi'
import { authApi } from './services/authApi'
import { setupListeners } from "@reduxjs/toolkit/query";


export const mundoGeekStore = configureStore({
  reducer: {
    shopReducer,
    cartReducer,
    userReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => (
    getDefaultMiddleware()
      .concat(shopApi.middleware)
      .concat(authApi.middleware)
  )
})

setupListeners(mundoGeekStore.dispatch) //opcional

