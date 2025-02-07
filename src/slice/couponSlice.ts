import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CouponState } from "../vite-env";

const initialState: CouponState = {
    code: "",
    discount: 0,
    isValid: false
}

const validCoupons: Record<string, number> = {
    "SAVE10": 10,
    "SAVE20": 20,
    "NEW25": 25
}

const couponSlice = createSlice({
    name: "coupon",
    initialState,
    reducers: {
        applyCoupon: (state, action: PayloadAction<string>) => {
            const couponCode = action.payload.toUpperCase()
            if (validCoupons[couponCode]) {
                state.code = couponCode;
                state.discount = validCoupons[couponCode];
                state.isValid = true
            }
            else {
                state.code = "";
                state.discount = 0;
                state.isValid = false
            }
        },
        removeCoupon: (state) => {
            state.code = "";
            state.discount = 0;
            state.isValid = false
        }
    }
})
export default couponSlice.reducer
export const { applyCoupon, removeCoupon } = couponSlice.actions