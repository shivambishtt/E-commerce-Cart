import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../store/store.ts'
import Coupon from './Coupon.tsx'

function OrderSummary() {
    const items = useSelector((state: RootState) => state.cart.items)
    const coupons = useSelector((state: RootState) => state.coupon)
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discountPrice = subtotal * 0.10 + coupons.discount
    const couponDiscount = coupons.discount
    const shippingCharges = subtotal < 5000 ? 150 : 0
    const totalAmount = subtotal - discountPrice + shippingCharges

    // Format price to INR currency
    const formatPrice = (price: number) => price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

    return (
        <div className='w-72 p-4 border rounded-lg shadow-lg bg-gray-100'>
            <h1 className='font-bold text-xl mb-4 border-b pb-2'>Order Summary</h1>

            <div className="flex justify-between my-2">
                <span className='font-semibold'>Subtotal:</span>
                <span>{formatPrice(subtotal)}</span>
            </div>

            <div className="flex justify-between my-2">
                <span className='font-semibold'>Discount:</span>
                <span>-{formatPrice(discountPrice)}</span>
            </div>
            {coupons.isValid && <div className="flex justify-between my-2">
                <span className='font-semibold'>Coupon:
                    <span className='text-sm font-medium mx-1'>{coupons.code}</span>
                </span>
                <span>-{formatPrice(couponDiscount)}</span>
            </div>}


            <div className="flex justify-between my-2">
                <span className='font-semibold'>Shipping:</span>
                <span>{formatPrice(shippingCharges)}</span>
            </div>

            <hr className='my-2' />

            <div className="flex justify-between my-2 text-lg font-bold">
                <span>Total:</span>
                <span>{formatPrice(totalAmount)}</span>
            </div>

            <NavLink to="/checkout">
                <button className='w-full bg-black text-white rounded my-4 py-2'>
                    PROCEED TO CHECKOUT
                </button>
            </NavLink>
            <Coupon />
        </div>
    )
}

export default OrderSummary
