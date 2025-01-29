import React from 'react'
import { MdCancel } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store.ts'
import { removeFromCart } from '../slice/cartSlice.ts';

function CartItems() {
    const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    const count = 0

    return (
        <div>
            {items.length === 0 ? "" :
                items.map((item) => {
                    return <div className=' flex items-center justify-between px-10 my-5 text-black bg-gray-300' key={item.id}>
                        <img className='h-30' src={item.imageUrl} alt="" />
                        <p className='font-semibold text-xl'>{item.name}</p>
                        <span>
                            <button><FaMinus color='white' /></button>
                            <span className='align-text px-2 font-semibold text-xl'>{count}</span>
                            <button><FaPlus color='white' /></button>
                        </span>
                        <p className='font-semibold text-xl'>{item.price} rs</p>
                        <button onClick={() => (dispatch(removeFromCart(item.id)))} className='text-2xl'><MdCancel /></button>
                    </div>
                })
            }

        </div>
    )
}

export default CartItems
