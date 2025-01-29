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
            const existingItem = state.items.find((item) => {
                return item.id === action.payload.id
            })
            if (existingItem) {
                existingItem.quantity += 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((cartItem) => {
                return cartItem.id !== action.payload
            })
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => {
                return item.id === action.payload
            })
            if (item) {
                item.quantity += 1
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => {
                return item.id === action.payload
            })
            if (item && item.quantity > 1) {
                item.quantity -= 1
            }
        },
    }
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions