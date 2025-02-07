import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import ItemCard from './ItemCard';
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store/store.ts';
import useCartStore from '../zustand/store/cart.ts';

function Header() {
    const cartCount = useCartStore((state) => state.items.length)
    return (
        <>
            <div className='headerContainer bg-stone-400 flex items-center justify-between px-4 h-25'>
                <h1 className='text-4xl font-bold text-white'>E-Kart</h1>
                <div className='relative'>
                    <NavLink to="/cart">
                        <MdShoppingCart className='text-2xl text-white' />
                    </NavLink>
                    <span className='absolute -top-2 -right-2 bg-slate-500 text-white text-sm w-5 h-4 flex items-center justify-center rounded-full'>
                        {cartCount}
                    </span>
                </div>
            </div>
            <ItemCard />
        </>
    )
}

export default Header
