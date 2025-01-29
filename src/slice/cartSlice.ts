import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductData } from "../vite-env";

export interface CartState {
    items: ProductData[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductData>) => {
            state.items.push(action.payload)

        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((cartItem) => {
                return cartItem.id !== action.payload
            })
        }
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart } = cartSlice.actions