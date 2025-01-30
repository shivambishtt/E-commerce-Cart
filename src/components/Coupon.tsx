import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { applyCoupon, removeCoupon } from '../slice/couponSlice.ts'

function Coupon() {
    const [coupon, setCoupon] = useState("")
    const { code, discount, isValid } = useSelector((state: RootState) => state.coupon)
    const dispatch = useDispatch()

    const handleApply = () => {
        dispatch(applyCoupon(coupon))
    }
    const handleRemove = () => {
        dispatch(removeCoupon())
        setCoupon("")
    }
    return (
        <div className="bg-slate-300 p-4 border rounded shadow">
            <h3 className="font-semibold">Apply Coupon</h3>
            <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="border p-2 w-full mt-2"
            />
            <div className='flex justify-center items-center gap-2'>
                <button
                    disabled
                    onClick={handleApply}
                    className="bg-black text-white rounded p-1.5 mt-2 w-1/3"
                >
                    Apply
                </button>

                <button
                    onClick={handleRemove}
                    className="bg-black text-white  rounded p-1.5 mt-2 w-1/3"
                >
                    Remove
                </button>
            </div>

            {code && isValid && < p className='text-sm'>Coupon applied : {code}  (-{discount}%)</p>}
        </div >
    );

}

export default Coupon
