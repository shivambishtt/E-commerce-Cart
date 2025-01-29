import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice.ts"
import wishlistReducer from "../slice/wishListSlice.ts"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;