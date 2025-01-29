import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../vite-env";

interface WishlistState {
    items: ProductData[]
}

const initialState: WishlistState = {
    items: []
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<ProductData>) => {
            const wishlistItem = state.items.find((item) => {
                return item.id === action.payload.id
            })
            if (!wishlistItem) state.items.push(action.payload)
        },
        removeFromWishlist: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => {
                return item.id !== action.payload
            })
        }
    }
})
export default wishlistSlice.reducer
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions