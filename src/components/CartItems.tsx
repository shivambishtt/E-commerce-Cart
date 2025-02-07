import React from 'react'
import { MdCancel } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux'
// import { RootState } from '../store/store.ts'
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../slice/cartSlice.ts';
import useCartStore from '../zustand/store/cart.ts';

function CartItems() {
    const items= useCartStore((state)=>state.items)
    // const items = useSelector((state: RootState) => state.cart.items)
    const dispatch = useDispatch()
    return (
        <div>
            {items.length === 0 ? "" :
                items.map((item) => {
                    return <div className='flex items-center justify-between px-10 my-5 text-black bg-stone-400' key={item.id}>
                        <img className='h-30' src={item.imageUrl} alt="" />
                        <p className='font-semibold text-xl'>{item.name}</p>
                        <span>
                            <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                                <FaMinus color='white' />
                            </button>
                            <span className='align-text px-2 font-semibold text-xl'>{item.quantity}</span>
                            <button onClick={() => dispatch(increaseQuantity(item.id))} >
                                <FaPlus color='white' />
                            </button>
                        </span>
                        <p className='font-semibold text-xl'>{item.price * item.quantity} rs</p>
                        <button onClick={() => (dispatch(removeFromCart(item.id)))} className='text-2xl'><MdCancel /></button>
                    </div>
                })
            }

        </div>
    )
}

export default CartItems
