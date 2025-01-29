import React from 'react'
import { NavLink } from 'react-router-dom'

function OrderSummary() {
    return (
        <div className=' h-50 w-70'>
            <h1 className='font-semibold text-xl'>Order Summary</h1>
            <h2>Subtotal :</h2> <hr />
            <h2>Discount price :</h2> <hr />
            <h2>Shipping Charges: </h2> <hr />
            <h1>Total :</h1>
            <NavLink to="/checkout">
                <button className='bg-black text-gray-300 text-xs rounded my-4 p-2 '>PROCEED TO CHECKOUT</button>

            </NavLink>
        </div>
    )
}

export default OrderSummary
