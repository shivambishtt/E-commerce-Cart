import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoHomeSharp } from "react-icons/io5";
import CartItems from '../components/CartItems.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store.ts';
import OrderSummary from '../components/OrderSummary.tsx';

function Cart() {
    const cartLength = useSelector((state: RootState) => state.cart.items.length)
    return (
        <div >
            <div className='flex items-center justify-between px-10 my-5'>
                <h1 className='text-4xl font-bold'>Shopping cart</h1>
                <NavLink to="/">
                    <button className='text-xl'><IoHomeSharp color='black' /></button>
                </NavLink>
            </div>
            <CartItems />


            {cartLength !== 0 ? <div className='flex items-center justify-between px-10 '>
                <NavLink to="/" >
                    <p className='text-2xl font-semibold'>Back to shop</p>
                </NavLink>
                <OrderSummary />
            </div> : ""}


        </div >




    )
}

export default Cart
