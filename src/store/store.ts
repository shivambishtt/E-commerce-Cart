import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice.ts"
import wishlistReducer from "../slice/wishListSlice.ts"
import couponReducer from "../slice/couponSlice.ts"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        coupon: couponReducer

    }
})
export type RootState = ReturnType<typeof store.getState>;